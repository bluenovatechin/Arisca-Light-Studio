// WebMCP: lets AI agents (in browsers that support navigator.modelContext)
// call the site's main actions as structured tools instead of guessing at
// the UI. Does nothing in browsers without WebMCP.

const PAGES = {
  home: '/',
  collection: '/collection',
  downlights: '/shop',
  projects: '/client-diaries',
  catalogs: '/catalogs',
  consultancy: '/home-consultancy',
  trade: '/interior-designers',
  about: '/about',
  contact: '/contact',
  saved: '/wishlist'
};
const CATEGORIES = ['chandeliers', 'pendants', 'wall', 'wall-mirror', 'floor-table'];

const text = (t) => ({ content: [{ type: 'text', text: t }] });

export function registerWebMcpTools({ navigate, openBooking }) {
  const mc = (typeof navigator !== 'undefined' && navigator.modelContext) || (typeof document !== 'undefined' && document.modelContext);
  if (!mc) return () => {};

  const tools = [
    {
      name: 'search_lights',
      description: 'Search Arisca Light Studio\'s collection and architectural downlights by words such as a type, finish, material, wattage or item number. Opens the search results page.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'What to look for, e.g. "brass chandelier", "12w black", "7967".' },
          type: { type: 'string', enum: ['all', 'collection', 'downlights'], description: 'Limit results to one kind (default all).' }
        },
        required: ['query']
      },
      execute: async ({ query, type = 'all' }) => {
        const qs = new URLSearchParams({ q: query });
        if (type !== 'all') qs.set('tab', type);
        navigate(`/search?${qs}`);
        return text(`Showing search results for "${query}".`);
      }
    },
    {
      name: 'browse_collection',
      description: 'Open the decorative lighting collection, optionally filtered to one category.',
      inputSchema: {
        type: 'object',
        properties: { category: { type: 'string', enum: CATEGORIES, description: 'Category to show.' } }
      },
      execute: async ({ category } = {}) => {
        navigate(category ? `/collection?cat=${category}` : '/collection');
        return text(category ? `Showing the ${category} category.` : 'Showing the full collection.');
      }
    },
    {
      name: 'open_page',
      description: 'Navigate to one of the main pages of the Arisca Light Studio website.',
      inputSchema: {
        type: 'object',
        properties: { page: { type: 'string', enum: Object.keys(PAGES) } },
        required: ['page']
      },
      execute: async ({ page }) => {
        navigate(PAGES[page] || '/');
        return text(`Opened the ${page} page.`);
      }
    },
    {
      name: 'start_booking',
      description: 'Open the booking form for a free studio visit, site visit or video consultation. The visitor reviews it and sends it to the studio on WhatsApp.',
      inputSchema: { type: 'object', properties: {} },
      execute: async () => {
        openBooking();
        return text('The booking form is open. Pricing is shared by the studio after the consultation.');
      }
    }
  ];

  try {
    if (typeof mc.registerTool === 'function') {
      const handles = tools.map((t) => mc.registerTool(t));
      return () => handles.forEach((h) => h?.unregister?.());
    }
    if (typeof mc.provideContext === 'function') {
      mc.provideContext({ tools });
      return () => mc.clearContext?.();
    }
  } catch {
    // an agent-only feature should never break the page
  }
  return () => {};
}
