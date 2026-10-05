import React from 'react';

const CEILING = 2900; // mm — typical Ahmedabad apartment false ceiling
const PERSON = 1750;

/**
 * Draws the fixture to scale next to a 1.75 m person, using the catalog
 * dimensions (D/W/L = width, FH = fixture body height, H = overall height/drop).
 */
export default function ScaleFigure({ type, dims }) {
  const width = Math.max(dims.D || 0, dims.W || 0, dims.L || 0) || 300;
  const overall = dims.H || dims.FH || width;
  const body = dims.FH || (overall > 1200 && /Pendant|Chandelier/.test(type) ? Math.min(overall, Math.max(width * 0.8, 250)) : overall);

  let top; // y (mm above floor) of the fixture body's top edge
  let cord = 0;
  const hanging = /Pendant|Chandelier/.test(type);
  if (hanging) {
    // Catalog H is the maximum drop; installers shorten it, so hang the fixture
    // with its bottom ~2 m above the floor (or tucked under the ceiling if it's tall).
    const bottom = Math.min(CEILING - 150 - body, Math.max(CEILING - Math.max(overall, body), 2000));
    top = Math.max(bottom, 0) + body;
    cord = CEILING - top;
  } else if (/Wall/.test(type)) {
    top = Math.max(1800 + body / 2, body + 200);
  } else if (/Table/.test(type)) {
    top = 750 + body;
  } else {
    top = body;
  }

  const padX = 260;
  const personX = padX;
  const fixtureX = personX + 900;
  const viewW = Math.max(fixtureX + width + padX, 2400);
  const viewH = CEILING + 260;
  const y = (mm) => CEILING + 80 - mm; // flip: SVG y grows downward

  const label = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n % 1000 ? 2 : 0)} m` : `${n} mm`);

  return (
    <figure className="scale-figure">
      <svg viewBox={`0 0 ${viewW} ${viewH}`} role="img" aria-label={`Approximately ${label(width)} wide and ${label(body)} tall, shown next to a ${PERSON / 1000} metre person`}>
        {/* ceiling + floor */}
        <line x1="0" x2={viewW} y1={y(CEILING)} y2={y(CEILING)} className="sf-ceiling" />
        <line x1="0" x2={viewW} y1={y(0)} y2={y(0)} className="sf-floor" />
        {/table/i.test(type) && (
          <rect x={fixtureX - 250} y={y(750)} width={width + 500} height="40" rx="12" className="sf-furniture" />
        )}
        {/Wall/.test(type) && <line x1={fixtureX - 120} x2={fixtureX - 120} y1={y(0)} y2={y(CEILING)} className="sf-wall" />}

        {/* person */}
        <g className="sf-person" transform={`translate(${personX}, ${y(PERSON)})`}>
          <circle cx="160" cy="120" r="110" />
          <path d="M40 300 Q160 230 280 300 L300 900 L250 900 L240 1750 L175 1750 L160 1050 L145 1750 L80 1750 L70 900 L20 900 Z" />
        </g>
        <text x={personX + 160} y={y(PERSON) - 40} className="sf-label" textAnchor="middle">1.75 m</text>

        {/* fixture */}
        {cord > 0 && <line x1={fixtureX + width / 2} x2={fixtureX + width / 2} y1={y(CEILING)} y2={y(top)} className="sf-cord" />}
        <rect x={fixtureX} y={y(top)} width={width} height={body} rx={Math.min(width, body) * 0.12} className="sf-fixture" />
        <ellipse cx={fixtureX + width / 2} cy={y(top - body) + 30} rx={width * 0.9} ry="70" className="sf-pool" />

        {/* dimension labels */}
        <line x1={fixtureX} x2={fixtureX + width} y1={y(top - body) + 120} y2={y(top - body) + 120} className="sf-dim" />
        <text x={fixtureX + width / 2} y={y(top - body) + 210} className="sf-label" textAnchor="middle">{label(width)}</text>
        <line x1={fixtureX + width + 70} x2={fixtureX + width + 70} y1={y(top)} y2={y(top - body)} className="sf-dim" />
        <text x={fixtureX + width + 110} y={y(top - body / 2) + 30} className="sf-label">{label(body)}</text>
      </svg>
      <figcaption>Drawn to scale against a 1.75 m person{hanging ? ' under a 2.9 m ceiling' : ''}. Sizes are approximate.</figcaption>
    </figure>
  );
}
