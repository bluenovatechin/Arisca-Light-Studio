/**
 * Arisca Light Studio - Complete Extracted Data Model
 * Extracted from: https://www.ariscalightstudio.com/?shem=aimgspe
 * Generated: 2026-10-03T06:18:22.201Z
 * 
 * Contains:
 * - siteInfo: Business details, contact info, branding, socials, store config
 * - navigation: Header & footer navigation structures
 * - pages: 8 main pages with full block & element hierarchies
 * - products: 14 LOFY downlight products with images & specifications
 * - globalSections: Header, Footer, and Announcement Sticky Bar
 * - forms: Contact form fields, schema, and validation
 * - mediaAssets: 127 verified media URLs
 * - audit: Validation report, link checks, and anomalies
 */

export const ariscaData = {
  "siteInfo": {
    "id": "site_arisca_light_studio",
    "name": "Arisca Light Studio",
    "tagline": "Premium Lighting Solutions for Every Space",
    "description": "Explore Arisca Light Studio, your ultimate destination for Premium Lighting, wall sconces, chandeliers, and home lighting. Enjoy expert design consultation, precise site measurement, and professional installation to beautifully illuminate your home.",
    "domain": "www.ariscalightstudio.com",
    "canonicalUrl": "https://www.ariscalightstudio.com/",
    "businessType": "Lighting Studio & Design Consultancy",
    "branding": {
      "logo": "/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png",
      "logoFilename": "arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png",
      "favicon": "/assets/branding/arisca-1-mxB29pjQy0T31J2j.png",
      "faviconFilename": "arisca-1-mxB29pjQy0T31J2j.png"
    },
    "contact": {
      "phone": "+91 98980 86656",
      "phoneRaw": "9898086656",
      "phoneHref": "tel:+919898086656",
      "whatsapp": "+91 98980 86656",
      "whatsappNumber": "919898086656",
      "whatsappHref": "https://wa.me/919898086656",
      "email": "info@ariscalightstudio.com",
      "emailHref": "mailto:info@ariscalightstudio.com",
      "address": {
        "line1": "B - 103, Money Plant High Street",
        "line2": "Jagatpur Road",
        "city": "Ahmedabad",
        "state": "Gujarat",
        "country": "India",
        "fullAddress": "B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad, Gujarat, India"
      },
      "openingHours": {
        "days": "Monday - Saturday",
        "hours": "10:00 am - 8:30 pm",
        "sunday": "Closed",
        "formatted": "Monday - Saturday: 10:00 am - 8:30 pm | Sunday: Closed"
      },
      "map": {
        "embedSrc": "https://maps.google.com/maps?q=Arisca%20light%20studio,%20B%20-%20103,%20Money%20Plant%20High%20Street,%20Ahmedabad&t=m&z=13&ie=UTF8&output=embed",
        "query": "Arisca light studio, B - 103, Money Plant High Street, Ahmedabad"
      }
    },
    "socialLinks": [
      {
        "id": "social_facebook",
        "platform": "facebook",
        "name": "Facebook",
        "url": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
      },
      {
        "id": "social_instagram",
        "platform": "instagram",
        "name": "Instagram",
        "url": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
      }
    ],
    "announcementBar": {
      "id": "announcement_sticky_bar",
      "text": "Exclusive discounts on premium lighting today!",
      "enabled": true
    },
    "catalogDownloads": [
      {
        "id": "cat_drive_1",
        "title": "Lighting Collection Catalog 1",
        "url": "https://drive.google.com/file/d/1_6m3SxrJ5HtJOSqBFm5vfeeDhBGf1BRb/view?usp=sharing"
      },
      {
        "id": "cat_drive_2",
        "title": "Lighting Collection Catalog 2",
        "url": "https://drive.google.com/file/d/16RrSSABjnOBf9cOJSl8SJyaLduxy0VaS/view?usp=sharing"
      },
      {
        "id": "cat_drive_3",
        "title": "Lighting Collection Catalog 3",
        "url": "https://drive.google.com/file/d/1_ytCjPJ-raO6pbfISceldoeeRRfsswto/view?usp=sharing"
      },
      {
        "id": "cat_drive_4",
        "title": "Lighting Collection Catalog 4",
        "url": "https://drive.google.com/file/d/1PFlyUv4jgtnlr_7dqnJGMB4tmqM22YIv/view?usp=sharing"
      },
      {
        "id": "cat_drive_5",
        "title": "Lighting Collection Catalog 5",
        "url": "https://drive.google.com/file/d/1jKVC9Ah9xPfuSeDzLWHXWdFhhQJF29lv/view?usp=sharing"
      }
    ],
    "storeConfig": {
      "storeId": "store_01K4CC74T700A8GWH9HBE6104T",
      "demoStoreId": "demo_01G0E9P2R0CFTNBWEEFCEV8EG5",
      "currency": "INR",
      "currencySymbol": "₹",
      "priceDisplayMode": "inquiry",
      "inquiryNotice": "Prices available upon consultation & site measurement"
    }
  },
  "navigation": {
    "headerNav": [
      {
        "id": "nav_home",
        "label": "Home",
        "slug": "",
        "path": "/",
        "isHidden": false
      },
      {
        "id": "nav_about",
        "label": "About",
        "slug": "about",
        "path": "/about",
        "isHidden": false
      },
      {
        "id": "nav_client_diaries",
        "label": "Client Diaries",
        "slug": "client-diaries",
        "path": "/client-diaries",
        "isHidden": false
      },
      {
        "id": "nav_home_consultancy",
        "label": "Home Consultancy",
        "slug": "home-consultancy",
        "path": "/home-consultancy",
        "isHidden": false
      },
      {
        "id": "nav_contact",
        "label": "Contact",
        "slug": "contact",
        "path": "/contact",
        "isHidden": false
      },
      {
        "id": "nav_shop",
        "label": "Shop",
        "slug": "shop",
        "path": "/shop",
        "isHidden": true,
        "note": "Published page hidden in original menu"
      },
      {
        "id": "nav_about_2",
        "label": "About 2",
        "slug": "about-2",
        "path": "/about-2",
        "isHidden": true,
        "note": "Alternate draft about page"
      },
      {
        "id": "nav_interior_designers",
        "label": "Interior Designers",
        "slug": "interior-designers",
        "path": "/interior-designers",
        "isHidden": true,
        "note": "Empty page skeleton"
      }
    ],
    "footerNav": {
      "consultation": [
        {
          "id": "foot_home_consult",
          "label": "Home Consultancy",
          "path": "/home-consultancy"
        },
        {
          "id": "foot_book_consult",
          "label": "Book Consultation",
          "path": "/contact"
        }
      ],
      "categories": [
        {
          "id": "cat_chandeliers",
          "label": "CHANDELIERS",
          "path": "/shop#chandeliers"
        },
        {
          "id": "cat_floor_lamps",
          "label": "FLOOR LAMPS",
          "path": "/shop#floor-lamps"
        },
        {
          "id": "cat_outdoor_lights",
          "label": "OUTDOOR LIGHTS",
          "path": "/shop#outdoor-lights"
        },
        {
          "id": "cat_pendant_lights",
          "label": "PENDANT LIGHTS",
          "path": "/shop#pendant-lights"
        },
        {
          "id": "cat_table_lamps",
          "label": "TABLE LAMPS",
          "path": "/shop#table-lamps"
        },
        {
          "id": "cat_wall_lights",
          "label": "WALL LIGHTS",
          "path": "/shop#wall-lights"
        }
      ],
      "help": [
        {
          "id": "help_shipping",
          "label": "Shipping and Returns",
          "path": "/contact"
        },
        {
          "id": "help_privacy",
          "label": "Privacy Policy",
          "path": "/contact"
        },
        {
          "id": "help_terms",
          "label": "Terms & Conditions",
          "path": "/contact"
        }
      ]
    }
  },
  "pages": {
    "interior-designers": {
      "id": "z490Zw",
      "name": "Interior Designers",
      "slug": "interior-designers",
      "path": "/interior-designers",
      "type": "default",
      "isProductPage": false,
      "status": "empty",
      "meta": {
        "title": "Interior Designers | Arisca Light Studio",
        "description": "",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/interior-designers"
      },
      "blockIds": [],
      "sections": []
    },
    "client-diaries": {
      "id": "z7PWTU",
      "name": "Client Diaries",
      "slug": "client-diaries",
      "path": "/client-diaries",
      "type": "default",
      "isProductPage": false,
      "status": "published",
      "meta": {
        "title": "Client Diaries | Arisca Light Studio",
        "description": "",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/client-diaries"
      },
      "blockIds": [
        "zPU7py",
        "zu-mfo",
        "zmc8l4"
      ],
      "sections": [
        {
          "id": "zPU7py",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zgK6G0",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 54,
                  "left": 0,
                  "width": 328,
                  "height": 208
                },
                "content": "<h1 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 48px;\"><span style=\"text-transform: none; letter-spacing: normal; font-weight: 700;\"><strong>Recent project images shared by our happy clients.</strong></span></h1>",
                "desktop": {
                  "top": 24,
                  "left": 0,
                  "width": 1224,
                  "height": 125
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h1 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 48px;\"><span style=\"text-transform: none; letter-spacing: normal; font-weight: 700;\"><strong>Recent project images shared by our happy clients.</strong></span></h1>",
              "text": "Recent project images shared by our happy clients."
            }
          ],
          "headings": [
            {
              "level": "h1",
              "text": "Recent project images shared by our happy clients."
            }
          ],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zu-mfo",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zBWvD2",
              "type": "GridGallery",
              "raw": {
                "type": "GridGallery",
                "images": [
                  {
                    "alt": "",
                    "path": "whatsapp-image-2026-05-27-at-10.18.27-am-1-qWcgpdgYamhxZqxZ.jpeg",
                    "origin": "assets"
                  },
                  {
                    "alt": "",
                    "path": "whatsapp-image-2026-05-27-at-10.18.32-am-lIzHuxrb3LqksB9L.jpeg",
                    "origin": "assets"
                  },
                  {
                    "alt": "",
                    "path": "whatsapp-image-2026-05-27-at-10.18.31-am-2-EFtKulW0TTZG7uAD.jpeg",
                    "origin": "assets"
                  },
                  {
                    "alt": "",
                    "path": "whatsapp-image-2026-05-27-at-10.18.31-am-NHS8o9Jd0kZuNLJe.jpeg",
                    "origin": "assets"
                  },
                  {
                    "alt": "",
                    "path": "whatsapp-image-2026-05-27-at-10.18.30-am-2-pcsUc6zcy0BHUCeV.jpeg",
                    "origin": "assets"
                  },
                  {
                    "alt": "",
                    "path": "whatsapp-image-2026-05-27-at-10.18.28-am-2-dnDFUuitlx3xkO4V.jpeg",
                    "origin": "assets"
                  },
                  {
                    "alt": "",
                    "path": "whatsapp-image-2026-05-27-at-10.18.28-am-tTDPC8D86XUhy4w7.jpeg",
                    "origin": "assets"
                  },
                  {
                    "alt": "",
                    "path": "whatsapp-image-2026-05-27-at-10.18.31-am-1-Plf4CMTeuAcSi5lt.jpeg",
                    "origin": "assets"
                  }
                ],
                "mobile": {
                  "top": 80,
                  "left": 0,
                  "width": 328,
                  "height": 656,
                  "columnGap": 0,
                  "columnCount": 2
                },
                "desktop": {
                  "top": 64,
                  "left": 168,
                  "width": 888,
                  "height": 1776,
                  "columnGap": 0,
                  "columnCount": 2
                },
                "settings": {
                  "layout": "grid",
                  "styles": {
                    "m-element-margin": "0 0 16px 0"
                  },
                  "imageClickAction": "lightbox"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zMxs6m"
              },
              "images": [
                {
                  "id": "zBWvD2_img_0",
                  "path": "whatsapp-image-2026-05-27-at-10.18.27-am-1-qWcgpdgYamhxZqxZ.jpeg",
                  "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.27-am-1-qWcgpdgYamhxZqxZ.jpeg",
                  "alt": ""
                },
                {
                  "id": "zBWvD2_img_1",
                  "path": "whatsapp-image-2026-05-27-at-10.18.32-am-lIzHuxrb3LqksB9L.jpeg",
                  "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.32-am-lIzHuxrb3LqksB9L.jpeg",
                  "alt": ""
                },
                {
                  "id": "zBWvD2_img_2",
                  "path": "whatsapp-image-2026-05-27-at-10.18.31-am-2-EFtKulW0TTZG7uAD.jpeg",
                  "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-2-EFtKulW0TTZG7uAD.jpeg",
                  "alt": ""
                },
                {
                  "id": "zBWvD2_img_3",
                  "path": "whatsapp-image-2026-05-27-at-10.18.31-am-NHS8o9Jd0kZuNLJe.jpeg",
                  "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-NHS8o9Jd0kZuNLJe.jpeg",
                  "alt": ""
                },
                {
                  "id": "zBWvD2_img_4",
                  "path": "whatsapp-image-2026-05-27-at-10.18.30-am-2-pcsUc6zcy0BHUCeV.jpeg",
                  "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.30-am-2-pcsUc6zcy0BHUCeV.jpeg",
                  "alt": ""
                },
                {
                  "id": "zBWvD2_img_5",
                  "path": "whatsapp-image-2026-05-27-at-10.18.28-am-2-dnDFUuitlx3xkO4V.jpeg",
                  "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.28-am-2-dnDFUuitlx3xkO4V.jpeg",
                  "alt": ""
                },
                {
                  "id": "zBWvD2_img_6",
                  "path": "whatsapp-image-2026-05-27-at-10.18.28-am-tTDPC8D86XUhy4w7.jpeg",
                  "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.28-am-tTDPC8D86XUhy4w7.jpeg",
                  "alt": ""
                },
                {
                  "id": "zBWvD2_img_7",
                  "path": "whatsapp-image-2026-05-27-at-10.18.31-am-1-Plf4CMTeuAcSi5lt.jpeg",
                  "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-1-Plf4CMTeuAcSi5lt.jpeg",
                  "alt": ""
                }
              ]
            }
          ],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": [],
          "gallery": [
            {
              "id": "zBWvD2_img_0",
              "path": "whatsapp-image-2026-05-27-at-10.18.27-am-1-qWcgpdgYamhxZqxZ.jpeg",
              "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.27-am-1-qWcgpdgYamhxZqxZ.jpeg",
              "alt": ""
            },
            {
              "id": "zBWvD2_img_1",
              "path": "whatsapp-image-2026-05-27-at-10.18.32-am-lIzHuxrb3LqksB9L.jpeg",
              "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.32-am-lIzHuxrb3LqksB9L.jpeg",
              "alt": ""
            },
            {
              "id": "zBWvD2_img_2",
              "path": "whatsapp-image-2026-05-27-at-10.18.31-am-2-EFtKulW0TTZG7uAD.jpeg",
              "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-2-EFtKulW0TTZG7uAD.jpeg",
              "alt": ""
            },
            {
              "id": "zBWvD2_img_3",
              "path": "whatsapp-image-2026-05-27-at-10.18.31-am-NHS8o9Jd0kZuNLJe.jpeg",
              "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-NHS8o9Jd0kZuNLJe.jpeg",
              "alt": ""
            },
            {
              "id": "zBWvD2_img_4",
              "path": "whatsapp-image-2026-05-27-at-10.18.30-am-2-pcsUc6zcy0BHUCeV.jpeg",
              "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.30-am-2-pcsUc6zcy0BHUCeV.jpeg",
              "alt": ""
            },
            {
              "id": "zBWvD2_img_5",
              "path": "whatsapp-image-2026-05-27-at-10.18.28-am-2-dnDFUuitlx3xkO4V.jpeg",
              "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.28-am-2-dnDFUuitlx3xkO4V.jpeg",
              "alt": ""
            },
            {
              "id": "zBWvD2_img_6",
              "path": "whatsapp-image-2026-05-27-at-10.18.28-am-tTDPC8D86XUhy4w7.jpeg",
              "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.28-am-tTDPC8D86XUhy4w7.jpeg",
              "alt": ""
            },
            {
              "id": "zBWvD2_img_7",
              "path": "whatsapp-image-2026-05-27-at-10.18.31-am-1-Plf4CMTeuAcSi5lt.jpeg",
              "url": "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-1-Plf4CMTeuAcSi5lt.jpeg",
              "alt": ""
            }
          ]
        },
        {
          "id": "zmc8l4",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zHSDkx",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 80,
                  "left": 0,
                  "width": 400,
                  "height": 451
                },
                "settings": {
                  "alt": "",
                  "path": "whatsapp-image-2026-05-27-at-10.18.29-am-1-kkNDF4UFiKH95guX.jpeg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zOQ2Gp",
                "fullResolutionWidth": 853,
                "fullResolutionHeight": 1280
              },
              "url": "",
              "alt": "",
              "width": 853,
              "height": 1280
            },
            {
              "id": "z-x5g6",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 320,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 80,
                  "left": 412,
                  "width": 400,
                  "height": 440,
                  "borderRadius": "0px"
                },
                "settings": {
                  "alt": "",
                  "path": "whatsapp-image-2026-05-27-at-10.18.34-am-2-9uXlqmXMc79Mmhmn.jpeg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "overlayOpacity": 0,
                "initialElementId": "zDNCBE",
                "fullResolutionWidth": 853,
                "fullResolutionHeight": 1280
              },
              "url": "",
              "alt": "",
              "width": 853,
              "height": 1280
            },
            {
              "id": "zWKyxF",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 600,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 80,
                  "left": 824,
                  "width": 400,
                  "height": 440
                },
                "settings": {
                  "alt": "",
                  "path": "whatsapp-image-2026-05-27-at-10.18.29-am-2-xDW4wuB8eE9R10c9.jpeg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z3GPDH",
                "fullResolutionWidth": 853,
                "fullResolutionHeight": 1280
              },
              "url": "",
              "alt": "",
              "width": 853,
              "height": 1280
            }
          ],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [
            {
              "id": "zHSDkx",
              "url": "",
              "alt": "",
              "width": 853,
              "height": 1280
            },
            {
              "id": "z-x5g6",
              "url": "",
              "alt": "",
              "width": 853,
              "height": 1280
            },
            {
              "id": "zWKyxF",
              "url": "",
              "alt": "",
              "width": 853,
              "height": 1280
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "home-consultancy": {
      "id": "zAKT0z",
      "name": "Home Consultancy",
      "slug": "home-consultancy",
      "path": "/home-consultancy",
      "type": "default",
      "isProductPage": false,
      "status": "published",
      "meta": {
        "title": "Home Consultancy | Arisca Light Studio",
        "description": "",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/home-consultancy"
      },
      "blockIds": [
        "zpmEnu",
        "zfwhpI",
        "zsJSdy",
        "zc830_",
        "zszB5b"
      ],
      "sections": [
        {
          "id": "zpmEnu",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zEyvNe",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 60,
                  "left": 0,
                  "width": 328,
                  "height": 166
                },
                "content": "<h1 style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 32px; --fontSizeDesktop: 48px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>Free Home Lighting Consultation – Arisca Light Studio</strong></span></h1>",
                "desktop": {
                  "top": 50,
                  "left": 91,
                  "width": 1042,
                  "height": 125
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zGYVlE"
              },
              "html": "<h1 style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 32px; --fontSizeDesktop: 48px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>Free Home Lighting Consultation – Arisca Light Studio</strong></span></h1>",
              "text": "Free Home Lighting Consultation – Arisca Light Studio"
            }
          ],
          "headings": [
            {
              "level": "h1",
              "text": "Free Home Lighting Consultation – Arisca Light Studio"
            }
          ],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zfwhpI",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zCjKvT",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 70,
                  "left": 0,
                  "width": 328,
                  "height": 156
                },
                "content": "<h2 style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 30px\" dir=\"auto\">Bring Perfect Lighting Into Your Home – With Free Consultation</h2>",
                "desktop": {
                  "top": 174,
                  "left": 60,
                  "width": 1104,
                  "height": 146
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zGYVlE"
              },
              "html": "<h2 style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --fontSizeMobile: 30px\" dir=\"auto\">Bring Perfect Lighting Into Your Home – With Free Consultation</h2>",
              "text": "Bring Perfect Lighting Into Your Home – With Free Consultation"
            },
            {
              "id": "zlncmr",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 282,
                  "left": 0,
                  "width": 328,
                  "height": 216
                },
                "content": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body-large\">Are you looking to transform the ambiance and functionality of your home with the right lighting? Our <strong>Free In-Home Lighting Consultation</strong> service is designed to help you achieve a beautifully lit home tailored to your needs and style.</p>",
                "desktop": {
                  "top": 374,
                  "left": 160,
                  "width": 904,
                  "height": 81
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zkSEFr"
              },
              "html": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body-large\">Are you looking to transform the ambiance and functionality of your home with the right lighting? Our <strong>Free In-Home Lighting Consultation</strong> service is designed to help you achieve a beautifully lit home tailored to your needs and style.</p>",
              "text": "Are you looking to transform the ambiance and functionality of your home with the right lighting? Our Free In-Home Lighting Consultation service is designed to help you achieve a beautifully lit home tailored to your needs and style."
            },
            {
              "id": "zNFxQW",
              "type": "GridButton",
              "raw": {
                "rel": "",
                "href": "tel:+919898086656",
                "type": "GridButton",
                "mobile": {
                  "top": 530,
                  "left": 0,
                  "width": 328,
                  "height": 56
                },
                "target": "_self",
                "content": "Book Your Free Consultation Button",
                "desktop": {
                  "top": 544,
                  "left": 422,
                  "width": 380,
                  "height": 56,
                  "fontSize": 16
                },
                "linkType": "phone",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "rgb(13, 20, 26)",
                "fontFamily": "Inter",
                "fontWeight": 500,
                "borderColor": "rgb(255, 255, 255)",
                "borderWidth": 2,
                "borderRadius": 9,
                "linkedPageId": "",
                "fontColorHover": "rgb(13, 20, 26)",
                "backgroundColor": "rgb(255, 255, 255)",
                "borderColorHover": "rgb(0, 0, 0)",
                "initialElementId": "zZF7go",
                "backgroundColorHover": "rgba(255, 255, 255, 0.41)"
              },
              "content": "Book Your Free Consultation Button",
              "href": "tel:+919898086656",
              "target": "_self",
              "linkType": "phone"
            }
          ],
          "headings": [
            {
              "level": "h2",
              "text": "Bring Perfect Lighting Into Your Home – With Free Consultation"
            }
          ],
          "paragraphs": [
            "Are you looking to transform the ambiance and functionality of your home with the right lighting? Our Free In-Home Lighting Consultation service is designed to help you achieve a beautifully lit home tailored to your needs and style."
          ],
          "buttons": [
            {
              "id": "zNFxQW",
              "label": "Book Your Free Consultation Button",
              "href": "tel:+919898086656",
              "target": "_self",
              "linkType": "phone"
            }
          ],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zsJSdy",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "z_NmhL",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 64,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h4 style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 32px; --fontSizeDesktop: 40px\" dir=\"auto\">How It Works</h4>",
                "desktop": {
                  "top": 120,
                  "left": 618,
                  "width": 606,
                  "height": 52
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zhDLS1"
              },
              "html": "<h4 style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 32px; --fontSizeDesktop: 40px\" dir=\"auto\">How It Works</h4>",
              "text": "How It Works"
            },
            {
              "id": "z66GCX",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 131,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"color: rgb(0, 0, 0); --lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\" dir=\"auto\">Book Your Consultation</h6>",
                "desktop": {
                  "top": 264,
                  "left": 618,
                  "width": 606,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z25ear"
              },
              "html": "<h6 style=\"color: rgb(0, 0, 0); --lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\" dir=\"auto\">Book Your Consultation</h6>",
              "text": "Book Your Consultation"
            },
            {
              "id": "zFg3RW",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 171,
                  "left": 0,
                  "width": 328,
                  "height": 120
                },
                "content": "<p class=\"body\" style=\"color: rgb(0, 0, 0)\" dir=\"auto\">Fill out the form below to book your free lighting consultation. Once you submit your details, our team will contact you within 24 hours to schedule a convenient time for your home visit.</p>",
                "desktop": {
                  "top": 304,
                  "left": 618,
                  "width": 503,
                  "height": 96
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zfZR5E"
              },
              "html": "<p class=\"body\" style=\"color: rgb(0, 0, 0)\" dir=\"auto\">Fill out the form below to book your free lighting consultation. Once you submit your details, our team will contact you within 24 hours to schedule a convenient time for your home visit.</p>",
              "text": "Fill out the form below to book your free lighting consultation. Once you submit your details, our team will contact you within 24 hours to schedule a convenient time for your home visit."
            },
            {
              "id": "zF7eIb",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 336,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "desktop": {
                  "top": 80,
                  "left": 0,
                  "width": 503,
                  "height": 424,
                  "borderRadius": "20px"
                },
                "settings": {
                  "alt": "",
                  "path": "untitled-design-24-m5K8gNb2zwSZ989V.png",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zEDMH9",
                "fullResolutionWidth": 3840,
                "fullResolutionHeight": 2150
              },
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2150
            }
          ],
          "headings": [
            {
              "level": "h4",
              "text": "How It Works"
            },
            {
              "level": "h6",
              "text": "Book Your Consultation"
            }
          ],
          "paragraphs": [
            "Fill out the form below to book your free lighting consultation. Once you submit your details, our team will contact you within 24 hours to schedule a convenient time for your home visit."
          ],
          "buttons": [],
          "images": [
            {
              "id": "zF7eIb",
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2150
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zc830_",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zx0zBt",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 440,
                  "left": 12,
                  "width": 316,
                  "height": 135
                },
                "content": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body-large\">After the in-home consultation, we invite you to visit our store, where we’ll guide you in selecting the perfect lighting products to match your décor and budget.</p>",
                "desktop": {
                  "top": 367,
                  "left": 727,
                  "width": 394,
                  "height": 108
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zNW5iv"
              },
              "html": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body-large\">After the in-home consultation, we invite you to visit our store, where we’ll guide you in selecting the perfect lighting products to match your décor and budget.</p>",
              "text": "After the in-home consultation, we invite you to visit our store, where we’ll guide you in selecting the perfect lighting products to match your décor and budget."
            },
            {
              "id": "zmZFSQ",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 121,
                  "left": 12,
                  "width": 316,
                  "height": 31
                },
                "content": "<h6 style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 20px\" dir=\"auto\">We Visit Your Home</h6>",
                "desktop": {
                  "top": 116,
                  "left": 726,
                  "width": 498,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z25ear"
              },
              "html": "<h6 style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 20px\" dir=\"auto\">We Visit Your Home</h6>",
              "text": "We Visit Your Home"
            },
            {
              "id": "z6TxGs",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 400,
                  "left": 10,
                  "width": 316,
                  "height": 31
                },
                "content": "<h6 style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 20px\" dir=\"auto\">Visit Our Store</h6>",
                "desktop": {
                  "top": 325,
                  "left": 721,
                  "width": 167,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z25ear"
              },
              "html": "<h6 style=\"color: rgb(255, 255, 255); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 20px\" dir=\"auto\">Visit Our Store</h6>",
              "text": "Visit Our Store"
            },
            {
              "id": "zJW4wB",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 161,
                  "left": 10,
                  "width": 318,
                  "height": 144
                },
                "content": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body\">Our professional lighting consultant will analyze your space, understand your preferences, and provide personalized lighting recommendations that suit your unique style.</p>",
                "desktop": {
                  "top": 156,
                  "left": 726,
                  "width": 400,
                  "height": 96
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zfZR5E"
              },
              "html": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body\">Our professional lighting consultant will analyze your space, understand your preferences, and provide personalized lighting recommendations that suit your unique style.</p>",
              "text": "Our professional lighting consultant will analyze your space, understand your preferences, and provide personalized lighting recommendations that suit your unique style."
            },
            {
              "id": "zT53_Q",
              "type": "GridShape",
              "raw": {
                "svg": "<svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\" height=\"80\" width=\"80\">\n\t<path preserveAspectRatio=\"none\" stroke=\"none\" d=\"M0 0H80V80H0V0Z\"></path>\n</svg>",
                "type": "GridShape",
                "color": "rgba(47, 47, 48, 0.45)",
                "shape": "rectangle",
                "mobile": {
                  "top": 105,
                  "left": 0,
                  "width": 328,
                  "height": 200
                },
                "desktop": {
                  "top": 104,
                  "left": 712,
                  "width": 466,
                  "height": 160
                },
                "settings": {
                  "styles": {}
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              }
            },
            {
              "id": "zNFVTt",
              "type": "GridShape",
              "raw": {
                "svg": "<svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\" height=\"80\" width=\"80\">\n\t<path preserveAspectRatio=\"none\" stroke=\"none\" d=\"M0 0H80V80H0V0Z\"></path>\n</svg>",
                "type": "GridShape",
                "color": "rgba(47, 47, 48, 0.45)",
                "shape": "rectangle",
                "mobile": {
                  "top": 384,
                  "left": 0,
                  "width": 328,
                  "height": 200
                },
                "desktop": {
                  "top": 320,
                  "left": 712,
                  "width": 466,
                  "height": 160
                },
                "settings": {
                  "styles": {}
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              }
            }
          ],
          "headings": [
            {
              "level": "h6",
              "text": "We Visit Your Home"
            },
            {
              "level": "h6",
              "text": "Visit Our Store"
            }
          ],
          "paragraphs": [
            "After the in-home consultation, we invite you to visit our store, where we’ll guide you in selecting the perfect lighting products to match your décor and budget.",
            "Our professional lighting consultant will analyze your space, understand your preferences, and provide personalized lighting recommendations that suit your unique style."
          ],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zszB5b",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zcC93Y",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 64,
                  "left": 0,
                  "width": 328,
                  "height": 140
                },
                "content": "<h2 style=\"color: rgb(13, 155, 151)\" dir=\"auto\">Why Choose Arisca Light Studio?</h2>",
                "desktop": {
                  "top": 87,
                  "left": 41,
                  "width": 1143,
                  "height": 73
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zGYVlE"
              },
              "html": "<h2 style=\"color: rgb(13, 155, 151)\" dir=\"auto\">Why Choose Arisca Light Studio?</h2>",
              "text": "Why Choose Arisca Light Studio?"
            },
            {
              "id": "zeRM10",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 240,
                  "left": 12,
                  "width": 304,
                  "height": 377
                },
                "content": "<ul dir=\"auto\"><li><p class=\"body\" style=\"--lineHeightMobile: 2.07; --lineHeightDesktop: 3; --fontSizeDesktop: 21px\" dir=\"auto\"><strong>Hundreds of Happy Clients</strong> – With glowing reviews and repeat customers.</p></li><li><p class=\"body\" style=\"--lineHeightMobile: 2.07; --lineHeightDesktop: 3; --fontSizeDesktop: 21px\" dir=\"auto\"><strong>Wide Range of Lighting Styles</strong> – From modern pendants to timeless chandeliers.</p></li><li><p class=\"body\" style=\"--lineHeightMobile: 2.07; --lineHeightDesktop: 3; --fontSizeDesktop: 21px\" dir=\"auto\"><strong>Affordable Prices</strong> – Premium lighting that fits every budget.</p></li><li><p class=\"body-large\" style=\"--lineHeightMobile: 2.07; --lineHeightDesktop: 3; --fontSizeDesktop: 21px\" dir=\"auto\"><strong>Peace of Mind</strong> – Warranty-backed, high-quality lighting fixtures.</p></li></ul>",
                "desktop": {
                  "top": 212,
                  "left": 155,
                  "width": 915,
                  "height": 252
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zkSEFr"
              },
              "html": "<ul dir=\"auto\"><li><p class=\"body\" style=\"--lineHeightMobile: 2.07; --lineHeightDesktop: 3; --fontSizeDesktop: 21px\" dir=\"auto\"><strong>Hundreds of Happy Clients</strong> – With glowing reviews and repeat customers.</p></li><li><p class=\"body\" style=\"--lineHeightMobile: 2.07; --lineHeightDesktop: 3; --fontSizeDesktop: 21px\" dir=\"auto\"><strong>Wide Range of Lighting Styles</strong> – From modern pendants to timeless chandeliers.</p></li><li><p class=\"body\" style=\"--lineHeightMobile: 2.07; --lineHeightDesktop: 3; --fontSizeDesktop: 21px\" dir=\"auto\"><strong>Affordable Prices</strong> – Premium lighting that fits every budget.</p></li><li><p class=\"body-large\" style=\"--lineHeightMobile: 2.07; --lineHeightDesktop: 3; --fontSizeDesktop: 21px\" dir=\"auto\"><strong>Peace of Mind</strong> – Warranty-backed, high-quality lighting fixtures.</p></li></ul>",
              "text": "Hundreds of Happy Clients – With glowing reviews and repeat customers.\nWide Range of Lighting Styles – From modern pendants to timeless chandeliers.\nAffordable Prices – Premium lighting that fits every budget.\nPeace of Mind – Warranty-backed, high-quality lighting fixtures."
            },
            {
              "id": "zzZ4tJ",
              "type": "GridButton",
              "raw": {
                "rel": "",
                "href": "tel:+919898086656",
                "type": "GridButton",
                "mobile": {
                  "top": 648,
                  "left": 0,
                  "width": 328,
                  "height": 56
                },
                "target": "_self",
                "content": "Book Your Free Consultation Button",
                "desktop": {
                  "top": 520,
                  "left": 412,
                  "width": 380,
                  "height": 56,
                  "fontSize": 19
                },
                "linkType": "phone",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "rgb(255, 255, 255)",
                "fontFamily": "Inter",
                "fontWeight": 500,
                "borderColor": "rgb(255, 255, 255)",
                "borderWidth": 2,
                "borderRadius": 9,
                "linkedPageId": "",
                "fontColorHover": "rgb(13, 20, 26)",
                "backgroundColor": "rgb(13, 155, 151)",
                "borderColorHover": "rgb(0, 0, 0)",
                "initialElementId": "zZF7go",
                "backgroundColorHover": "rgba(255, 255, 255, 0.41)"
              },
              "content": "Book Your Free Consultation Button",
              "href": "tel:+919898086656",
              "target": "_self",
              "linkType": "phone"
            }
          ],
          "headings": [
            {
              "level": "h2",
              "text": "Why Choose Arisca Light Studio?"
            }
          ],
          "paragraphs": [
            "Hundreds of Happy Clients – With glowing reviews and repeat customers.\nWide Range of Lighting Styles – From modern pendants to timeless chandeliers.\nAffordable Prices – Premium lighting that fits every budget.\nPeace of Mind – Warranty-backed, high-quality lighting fixtures."
          ],
          "buttons": [
            {
              "id": "zzZ4tJ",
              "label": "Book Your Free Consultation Button",
              "href": "tel:+919898086656",
              "target": "_self",
              "linkType": "phone"
            }
          ],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "contact": {
      "id": "zzmq2z",
      "name": "Contact",
      "slug": "contact",
      "path": "/contact",
      "type": "default",
      "isProductPage": false,
      "status": "published",
      "meta": {
        "title": "Contact | Arisca Light Studio",
        "description": "",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/contact"
      },
      "blockIds": [
        "zBrL1G",
        "zR3NLu",
        "zFULHi",
        "z0y9D7",
        "z2uTVt",
        "z3qCZX"
      ],
      "sections": [
        {
          "id": "zBrL1G",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zc1nVp",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 51,
                  "left": 0,
                  "width": 328,
                  "height": 333
                },
                "content": "<h1 style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --fontSizeMobile: 32px; margin-bottom: 8px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>Let’s Connect — Your Lighting</strong></span></h1><h1 style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --fontSizeMobile: 32px; margin-bottom: 24px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong> Journey Starts Here</strong></span></h1><p class=\"body-large\" style=\"color: rgb(10, 16, 21)\" dir=\"auto\">Our team is ready to guide you in finding the perfect chandeliers, ceiling, wall, and outdoor lights. Reach out today and let us brighten your space.</p>",
                "desktop": {
                  "top": 64,
                  "left": 103,
                  "width": 1018,
                  "height": 252
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "ziFwDF"
              },
              "html": "<h1 style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --fontSizeMobile: 32px; margin-bottom: 8px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>Let’s Connect — Your Lighting</strong></span></h1><h1 style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --fontSizeMobile: 32px; margin-bottom: 24px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong> Journey Starts Here</strong></span></h1><p class=\"body-large\" style=\"color: rgb(10, 16, 21)\" dir=\"auto\">Our team is ready to guide you in finding the perfect chandeliers, ceiling, wall, and outdoor lights. Reach out today and let us brighten your space.</p>",
              "text": "Let’s Connect — Your Lighting Journey Starts HereOur team is ready to guide you in finding the perfect chandeliers, ceiling, wall, and outdoor lights. Reach out today and let us brighten your space."
            }
          ],
          "headings": [
            {
              "level": "h1",
              "text": "Let’s Connect — Your Lighting"
            }
          ],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zR3NLu",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zvOb2d",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 80,
                  "left": 0,
                  "width": 328,
                  "height": 95
                },
                "content": "<h6 style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 16px\" dir=\"auto\">Contacts</h6><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px\" dir=\"auto\"><a href=\"mailto:info@ariscalightstudio.com\">info@ariscalightstudio.com</a></p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px\" dir=\"auto\">+91 98980 86656</p>",
                "desktop": {
                  "top": 49,
                  "left": 0,
                  "width": 400,
                  "height": 94
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zSqs30"
              },
              "html": "<h6 style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 16px\" dir=\"auto\">Contacts</h6><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px\" dir=\"auto\"><a href=\"mailto:info@ariscalightstudio.com\">info@ariscalightstudio.com</a></p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px\" dir=\"auto\">+91 98980 86656</p>",
              "text": "Contactsinfo@ariscalightstudio.com\n+91 98980 86656"
            },
            {
              "id": "zdbnNf",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 249,
                  "left": 0,
                  "width": 328,
                  "height": 95
                },
                "content": "<h6 style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 16px\" dir=\"auto\">Address</h6><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px\" dir=\"auto\">B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</p>",
                "desktop": {
                  "top": 49,
                  "left": 422,
                  "width": 380,
                  "height": 94
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zlxzHS"
              },
              "html": "<h6 style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 16px\" dir=\"auto\">Address</h6><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px\" dir=\"auto\">B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</p>",
              "text": "AddressB - 103, Money Plant High Street, Jagatpur Road, Ahmedabad"
            },
            {
              "id": "zIu-u8",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 416,
                  "left": 0,
                  "width": 328,
                  "height": 135
                },
                "content": "<h6 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 16px;\">Opening hours</h6><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px;\">Monday - Saturday</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px;\"> 10:00 am - 8:30 pm</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px;\">Sunday: Closed</p>",
                "desktop": {
                  "top": 49,
                  "left": 817,
                  "width": 400,
                  "height": 134
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zHgfhs"
              },
              "html": "<h6 dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 16px;\">Opening hours</h6><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px;\">Monday - Saturday</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px;\"> 10:00 am - 8:30 pm</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px; margin-bottom: 8px;\">Sunday: Closed</p>",
              "text": "Opening hoursMonday - Saturday\n 10:00 am - 8:30 pm\nSunday: Closed"
            },
            {
              "id": "zsj3h9",
              "type": "GridShape",
              "raw": {
                "svg": "<svg preserveAspectRatio=\"none\" viewBox=\"0 0 80 80\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0H80V80H0V0Z\"></path></svg>",
                "type": "GridShape",
                "color": "rgba(242, 242, 242, 0.32)",
                "shape": "rectangle",
                "mobile": {
                  "top": 64,
                  "left": 0,
                  "width": 328,
                  "height": 136
                },
                "desktop": {
                  "top": 40,
                  "left": 15,
                  "width": 385,
                  "height": 144
                },
                "settings": {
                  "styles": {}
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              }
            },
            {
              "id": "z5LvJO",
              "type": "GridShape",
              "raw": {
                "svg": "<svg preserveAspectRatio=\"none\" viewBox=\"0 0 80 80\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0H80V80H0V0Z\"></path></svg>",
                "type": "GridShape",
                "color": "rgba(242, 242, 242, 0.32)",
                "shape": "rectangle",
                "mobile": {
                  "top": 224,
                  "left": 0,
                  "width": 328,
                  "height": 144
                },
                "desktop": {
                  "top": 40,
                  "left": 419,
                  "width": 385,
                  "height": 143
                },
                "settings": {
                  "styles": {}
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              }
            },
            {
              "id": "zyw_pr",
              "type": "GridShape",
              "raw": {
                "svg": "<svg preserveAspectRatio=\"none\" viewBox=\"0 0 80 80\" fill=\"none\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0H80V80H0V0Z\"></path></svg>",
                "type": "GridShape",
                "color": "rgba(242, 242, 242, 0.32)",
                "shape": "rectangle",
                "mobile": {
                  "top": 400,
                  "left": 0,
                  "width": 328,
                  "height": 160
                },
                "desktop": {
                  "top": 40,
                  "left": 824,
                  "width": 385,
                  "height": 143
                },
                "settings": {
                  "styles": {}
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              }
            }
          ],
          "headings": [
            {
              "level": "h6",
              "text": "Contacts"
            },
            {
              "level": "h6",
              "text": "Address"
            },
            {
              "level": "h6",
              "text": "Opening hours"
            }
          ],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zFULHi",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "z1Gb13",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 17,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 24px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>Follow us</strong></span></h6>",
                "desktop": {
                  "top": 40,
                  "left": 309,
                  "width": 606,
                  "height": 31
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zA3vfo"
              },
              "html": "<h6 style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 24px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>Follow us</strong></span></h6>",
              "text": "Follow us"
            },
            {
              "id": "zbTFSW",
              "type": "GridSocialIcons",
              "raw": {
                "type": "GridSocialIcons",
                "links": [
                  {
                    "svg": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z\" fill=\"currentColor\"></path>\n</svg>\n",
                    "icon": "facebook",
                    "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
                  },
                  {
                    "svg": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277ZM21.3564 19.0728C20.9388 20.1223 20.1303 20.9307 19.0755 21.3537C17.496 21.9802 13.7481 21.8356 12.0027 21.8356C10.2572 21.8356 6.50396 21.9748 4.92984 21.3537C3.88042 20.9361 3.07195 20.1276 2.64897 19.0728C2.02253 17.4934 2.16709 13.7455 2.16709 12C2.16709 10.2546 2.02789 6.50129 2.64897 4.92717C3.06659 3.87776 3.87507 3.06928 4.92984 2.6463C6.50931 2.01986 10.2572 2.16443 12.0027 2.16443C13.7481 2.16443 17.5014 2.02522 19.0755 2.6463C20.1249 3.06392 20.9334 3.8724 21.3564 4.92717C21.9828 6.50665 21.8383 10.2546 21.8383 12C21.8383 13.7455 21.9828 17.4987 21.3564 19.0728Z\" fill=\"currentColor\"></path>\n</svg>\n",
                    "icon": "instagram",
                    "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
                  }
                ],
                "mobile": {
                  "top": 64,
                  "left": 85,
                  "width": 157,
                  "height": 27
                },
                "desktop": {
                  "top": 104,
                  "left": 478,
                  "width": 267,
                  "height": 27
                },
                "settings": {
                  "styles": {
                    "icon-size": "27px",
                    "icon-color": "rgb(10, 16, 21)",
                    "icon-spacing": "space-around",
                    "icon-direction": "row",
                    "icon-color-hover": "rgb(10, 16, 21)",
                    "space-between-icons": "32px"
                  },
                  "useBrandColors": false
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5__sJ"
              },
              "items": [
                {
                  "icon": "facebook",
                  "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
                },
                {
                  "icon": "instagram",
                  "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
                }
              ]
            }
          ],
          "headings": [
            {
              "level": "h6",
              "text": "Follow us"
            }
          ],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": [
            {
              "icon": "facebook",
              "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
            },
            {
              "icon": "instagram",
              "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
            }
          ]
        },
        {
          "id": "z0y9D7",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zHev5O",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 348,
                  "left": 0,
                  "width": 328,
                  "height": 299
                },
                "desktop": {
                  "top": 40,
                  "crop": {
                    "top": 0,
                    "left": 63.98031842547404,
                    "scale": 1.1875
                  },
                  "left": 618,
                  "width": 606,
                  "height": 424
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09797-eFXwnHjzLH4fV6lE.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zgl89k",
                "fullResolutionWidth": 3840,
                "fullResolutionHeight": 2158
              },
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zXEvZM",
              "type": "GridMap",
              "raw": {
                "type": "GridMap",
                "mobile": {
                  "top": 21,
                  "left": 0,
                  "width": 328,
                  "height": 299
                },
                "desktop": {
                  "top": 40,
                  "left": 0,
                  "width": 606,
                  "height": 424
                },
                "settings": {
                  "src": "https://maps.google.com/maps?q=Arisca%20light%20studio,%20B%20-%20103,%20Money%20Plant%20High%20Street,%20Ahmedabad&t=m&z=13&ie=UTF8&output=embed",
                  "styles": {
                    "align": "center",
                    "justify": "center"
                  },
                  "m-element-margin": "0 0 16px 0"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zTPe3z"
              },
              "src": "https://maps.google.com/maps?q=Arisca%20light%20studio,%20B%20-%20103,%20Money%20Plant%20High%20Street,%20Ahmedabad&t=m&z=13&ie=UTF8&output=embed"
            }
          ],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [
            {
              "id": "zHev5O",
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [
            {
              "id": "zXEvZM",
              "src": "https://maps.google.com/maps?q=Arisca%20light%20studio,%20B%20-%20103,%20Money%20Plant%20High%20Street,%20Ahmedabad&t=m&z=13&ie=UTF8&output=embed"
            }
          ],
          "socialIcons": []
        },
        {
          "id": "z2uTVt",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "znCIL4",
              "type": "GridForm",
              "raw": {
                "type": "GridForm",
                "formId": "Contact form",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 558
                },
                "desktop": {
                  "top": 40,
                  "left": 309,
                  "width": 606,
                  "height": 562,
                  "labelTextSize": 15
                },
                "settings": {
                  "theme": "light",
                  "schema": [
                    {
                      "id": "C_IwTAaKUCU5OvwPGt4yg",
                      "svg": "align-left-short",
                      "tag": "input",
                      "name": "firstName",
                      "type": "GridInput",
                      "fieldType": "short-answer",
                      "inputLabel": "Name",
                      "validation": [
                        [
                          "required"
                        ]
                      ],
                      "placeholder": "Your name",
                      "validation-messages": {
                        "required": "This field is required"
                      }
                    },
                    {
                      "id": "pyVi5JSEGroWDwK5arAcz",
                      "svg": "align-left-short",
                      "tag": "input",
                      "name": "lastName",
                      "type": "GridInput",
                      "fieldType": "short-answer",
                      "inputLabel": "Last name",
                      "validation": [
                        [
                          "optional"
                        ]
                      ],
                      "placeholder": "Your last name",
                      "validation-messages": {
                        "required": "This field is required"
                      }
                    },
                    {
                      "id": "ORebTHcNsPkKannMZ-oxA",
                      "svg": "align-left-short",
                      "tag": "input",
                      "name": "email",
                      "type": "GridInput",
                      "fieldType": "short-answer",
                      "inputLabel": "Your email",
                      "validation": [
                        [
                          "bail"
                        ],
                        [
                          "email"
                        ],
                        [
                          "required"
                        ]
                      ],
                      "placeholder": "Your email address",
                      "validationType": "email",
                      "validation-messages": {
                        "email": "Please enter a valid email address",
                        "required": "This field is required"
                      }
                    },
                    {
                      "id": "iW-HIR-8EwXsFUW8q5LZK",
                      "svg": "align-left",
                      "tag": "textarea",
                      "name": "content",
                      "type": "GridInput",
                      "inputLabel": "Message",
                      "validation": [
                        [
                          "required"
                        ]
                      ],
                      "placeholder": "Enter your message",
                      "validation-messages": {
                        "required": "This field is required"
                      }
                    }
                  ],
                  "styles": {
                    "justify": "center",
                    "formSpacing": "22px 10px",
                    "m-element-margin": "0 0 40px 0"
                  },
                  "successMessage": "Thank You!"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "formPadding": 40,
                "formFontFamily": "Montserrat",
                "formFontWeight": 700,
                "inputFillColor": "rgb(241, 241, 241)",
                "inputTextColor": "rgb(136, 136, 136)",
                "labelTextColor": "rgb(26, 26, 26)",
                "formBorderColor": "#1d1e20",
                "formBorderWidth": 0,
                "innerBackground": {
                  "color": "rgba(242, 242, 242, 0.84)",
                  "image": "",
                  "current": ""
                },
                "formBorderRadius": 49,
                "initialElementId": "zaBPol",
                "inputBorderColor": "rgb(0, 0, 0)",
                "inputBorderWidth": 0,
                "submitButtonData": {
                  "type": "GridButton",
                  "content": "Submit",
                  "settings": {
                    "type": "primary",
                    "styles": {
                      "align": "center",
                      "justify": "center",
                      "position": "8/8/9/10"
                    },
                    "isFormButton": true
                  }
                },
                "inputBorderRadius": 0,
                "formBackgroundColor": "rgba(242, 242, 242, 0.84)",
                "inputFillColorHover": "rgb(241, 241, 241)",
                "submitButtonFontColor": "rgb(255, 255, 255)",
                "submitButtonBorderColor": "rgb(50, 50, 50)",
                "submitButtonBorderWidth": 0,
                "submitButtonFontColorHover": "rgb(255, 255, 255)",
                "submitButtonBackgroundColor": "rgb(0, 0, 0)",
                "submitButtonBorderColorHover": "rgb(50, 50, 50)",
                "submitButtonBorderWidthHover": 0,
                "submitButtonBackgroundColorHover": "rgb(29, 30, 32)"
              },
              "formId": "Contact form",
              "schema": [
                {
                  "id": "C_IwTAaKUCU5OvwPGt4yg",
                  "svg": "align-left-short",
                  "tag": "input",
                  "name": "firstName",
                  "type": "GridInput",
                  "fieldType": "short-answer",
                  "inputLabel": "Name",
                  "validation": [
                    [
                      "required"
                    ]
                  ],
                  "placeholder": "Your name",
                  "validation-messages": {
                    "required": "This field is required"
                  }
                },
                {
                  "id": "pyVi5JSEGroWDwK5arAcz",
                  "svg": "align-left-short",
                  "tag": "input",
                  "name": "lastName",
                  "type": "GridInput",
                  "fieldType": "short-answer",
                  "inputLabel": "Last name",
                  "validation": [
                    [
                      "optional"
                    ]
                  ],
                  "placeholder": "Your last name",
                  "validation-messages": {
                    "required": "This field is required"
                  }
                },
                {
                  "id": "ORebTHcNsPkKannMZ-oxA",
                  "svg": "align-left-short",
                  "tag": "input",
                  "name": "email",
                  "type": "GridInput",
                  "fieldType": "short-answer",
                  "inputLabel": "Your email",
                  "validation": [
                    [
                      "bail"
                    ],
                    [
                      "email"
                    ],
                    [
                      "required"
                    ]
                  ],
                  "placeholder": "Your email address",
                  "validationType": "email",
                  "validation-messages": {
                    "email": "Please enter a valid email address",
                    "required": "This field is required"
                  }
                },
                {
                  "id": "iW-HIR-8EwXsFUW8q5LZK",
                  "svg": "align-left",
                  "tag": "textarea",
                  "name": "content",
                  "type": "GridInput",
                  "inputLabel": "Message",
                  "validation": [
                    [
                      "required"
                    ]
                  ],
                  "placeholder": "Enter your message",
                  "validation-messages": {
                    "required": "This field is required"
                  }
                }
              ],
              "successMessage": "Thank You!"
            }
          ],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [
            {
              "id": "znCIL4",
              "formId": "Contact form",
              "schema": [
                {
                  "id": "C_IwTAaKUCU5OvwPGt4yg",
                  "svg": "align-left-short",
                  "tag": "input",
                  "name": "firstName",
                  "type": "GridInput",
                  "fieldType": "short-answer",
                  "inputLabel": "Name",
                  "validation": [
                    [
                      "required"
                    ]
                  ],
                  "placeholder": "Your name",
                  "validation-messages": {
                    "required": "This field is required"
                  }
                },
                {
                  "id": "pyVi5JSEGroWDwK5arAcz",
                  "svg": "align-left-short",
                  "tag": "input",
                  "name": "lastName",
                  "type": "GridInput",
                  "fieldType": "short-answer",
                  "inputLabel": "Last name",
                  "validation": [
                    [
                      "optional"
                    ]
                  ],
                  "placeholder": "Your last name",
                  "validation-messages": {
                    "required": "This field is required"
                  }
                },
                {
                  "id": "ORebTHcNsPkKannMZ-oxA",
                  "svg": "align-left-short",
                  "tag": "input",
                  "name": "email",
                  "type": "GridInput",
                  "fieldType": "short-answer",
                  "inputLabel": "Your email",
                  "validation": [
                    [
                      "bail"
                    ],
                    [
                      "email"
                    ],
                    [
                      "required"
                    ]
                  ],
                  "placeholder": "Your email address",
                  "validationType": "email",
                  "validation-messages": {
                    "email": "Please enter a valid email address",
                    "required": "This field is required"
                  }
                },
                {
                  "id": "iW-HIR-8EwXsFUW8q5LZK",
                  "svg": "align-left",
                  "tag": "textarea",
                  "name": "content",
                  "type": "GridInput",
                  "inputLabel": "Message",
                  "validation": [
                    [
                      "required"
                    ]
                  ],
                  "placeholder": "Enter your message",
                  "validation-messages": {
                    "required": "This field is required"
                  }
                }
              ],
              "successMessage": "Thank You!",
              "submitButton": {
                "type": "GridButton",
                "content": "Submit",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "position": "8/8/9/10"
                  },
                  "isFormButton": true
                }
              }
            }
          ],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "z3qCZX",
          "type": "BlockLayout",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "about": {
      "id": "ai-8vE85",
      "name": "About",
      "slug": "about",
      "path": "/about",
      "type": "default",
      "isProductPage": false,
      "status": "published",
      "meta": {
        "title": "Premium Lighting Solutions for Every Space",
        "description": "Discover Arisca Light Studio's exquisite range of chandeliers, sconces, and outdoor lighting. We offer design consultations, site measurements, and professional installation to illuminate your home beautifully.",
        "keywords": "premium lighting, chandeliers, professional installation",
        "canonical": "https://www.ariscalightstudio.com/about"
      },
      "blockIds": [
        "zI04dE",
        "ztrc7l",
        "zroBQO",
        "zbvldc"
      ],
      "sections": [
        {
          "id": "zI04dE",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zUJTQt",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 296,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 197,
                  "crop": {
                    "top": 68.37606837606837,
                    "left": 53.09529375097397,
                    "scale": 1.1875
                  },
                  "left": 0,
                  "width": 606,
                  "height": 624
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09789-J7iiw8AGyVipWjQ3.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zckToI",
                "fullResolutionWidth": 3840,
                "fullResolutionHeight": 2158
              },
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zB-Z1n",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 584,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 197,
                  "crop": {
                    "top": 100,
                    "left": 70.03968253968253,
                    "scale": 1
                  },
                  "left": 618,
                  "width": 606,
                  "height": 624
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09771-596hCQ2VBIvkgxHR.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "znyucT",
                "fullResolutionWidth": 3840,
                "fullResolutionHeight": 2158
              },
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zT_6rF",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 24,
                  "left": 0,
                  "width": 328,
                  "height": 52
                },
                "content": "<h1 style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 55px\" dir=\"auto\"><strong>Visit Our Store</strong></h1>",
                "desktop": {
                  "top": 37,
                  "left": 290,
                  "width": 644,
                  "height": 72
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h1 style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 55px\" dir=\"auto\"><strong>Visit Our Store</strong></h1>",
              "text": "Visit Our Store"
            },
            {
              "id": "z7PGMh",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 88,
                  "left": 0,
                  "width": 328,
                  "height": 192
                },
                "content": "<p dir=\"auto\" style=\"color: rgb(86, 88, 94)\" class=\"body\">For customers in <strong>Ahmedabad</strong>, visit our showroom to see and feel our chandeliers, ceiling &amp; pendant lights, wall and mirror lights, outdoor and architectural lighting. Our lighting consultants help you choose the right wattage, color temperature and fixtures for every room.</p>",
                "desktop": {
                  "top": 120,
                  "left": 68,
                  "width": 1109,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p dir=\"auto\" style=\"color: rgb(86, 88, 94)\" class=\"body\">For customers in <strong>Ahmedabad</strong>, visit our showroom to see and feel our chandeliers, ceiling &amp; pendant lights, wall and mirror lights, outdoor and architectural lighting. Our lighting consultants help you choose the right wattage, color temperature and fixtures for every room.</p>",
              "text": "For customers in Ahmedabad, visit our showroom to see and feel our chandeliers, ceiling & pendant lights, wall and mirror lights, outdoor and architectural lighting. Our lighting consultants help you choose the right wattage, color temperature and fixtures for every room."
            }
          ],
          "headings": [
            {
              "level": "h1",
              "text": "Visit Our Store"
            }
          ],
          "paragraphs": [
            "For customers in Ahmedabad, visit our showroom to see and feel our chandeliers, ceiling & pendant lights, wall and mirror lights, outdoor and architectural lighting. Our lighting consultants help you choose the right wattage, color temperature and fixtures for every room."
          ],
          "buttons": [],
          "images": [
            {
              "id": "zUJTQt",
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zB-Z1n",
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "ztrc7l",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zMWTgs",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 16,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151);\"><span style=\"font-weight: 700;\"><strong>About the store</strong></span></h3>",
                "desktop": {
                  "top": 40,
                  "left": 0,
                  "width": 400,
                  "height": 62
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151);\"><span style=\"font-weight: 700;\"><strong>About the store</strong></span></h3>",
              "text": "About the store"
            },
            {
              "id": "zic-65",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 132,
                  "left": 0,
                  "width": 328,
                  "height": 162
                },
                "content": "<p class=\"body-large\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Our store spans multiple floors with complete lighting solutions—from statement jhoomers to smart dimmers—so you can experience real lighting scenarios before you buy.</p>",
                "desktop": {
                  "top": 172,
                  "left": 0,
                  "width": 503,
                  "height": 108
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p class=\"body-large\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Our store spans multiple floors with complete lighting solutions—from statement jhoomers to smart dimmers—so you can experience real lighting scenarios before you buy.</p>",
              "text": "Our store spans multiple floors with complete lighting solutions—from statement jhoomers to smart dimmers—so you can experience real lighting scenarios before you buy."
            },
            {
              "id": "zWP4Rl",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 310,
                  "left": 0,
                  "width": 328,
                  "height": 178
                },
                "content": "<p dir=\"auto\" class=\"body-large\" style=\"--lineHeightDesktop: 2.04; margin-bottom: 8px;\"><span style=\"color: rgb(13, 20, 26);\"><strong>Address &amp; contact: </strong></span><span style=\"color: rgb(13, 155, 151); font-weight: 400;\">Arisca Light Studio,</span><span style=\"text-transform: none; letter-spacing: normal; font-family: Arial, sans-serif; font-weight: 400;\">B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</span><br><strong>Mobile:</strong> +91 9898086656</p><p dir=\"auto\" class=\"body-large\" style=\"--lineHeightDesktop: 2.04; margin-bottom: 8px;\"><strong>Email:</strong> <a href=\"mailto:info@ariscalightstudio.com\">info@ariscalightstudio.com</a><br>( 10:00 AM – 8:30 PM)</p>",
                "desktop": {
                  "top": 80,
                  "left": 612,
                  "width": 612,
                  "height": 200
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p dir=\"auto\" class=\"body-large\" style=\"--lineHeightDesktop: 2.04; margin-bottom: 8px;\"><span style=\"color: rgb(13, 20, 26);\"><strong>Address &amp; contact: </strong></span><span style=\"color: rgb(13, 155, 151); font-weight: 400;\">Arisca Light Studio,</span><span style=\"text-transform: none; letter-spacing: normal; font-family: Arial, sans-serif; font-weight: 400;\">B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</span><br><strong>Mobile:</strong> +91 9898086656</p><p dir=\"auto\" class=\"body-large\" style=\"--lineHeightDesktop: 2.04; margin-bottom: 8px;\"><strong>Email:</strong> <a href=\"mailto:info@ariscalightstudio.com\">info@ariscalightstudio.com</a><br>( 10:00 AM – 8:30 PM)</p>",
              "text": "Address & contact: Arisca Light Studio,B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad\nMobile: +91 9898086656\nEmail: info@ariscalightstudio.com\n( 10:00 AM – 8:30 PM)"
            }
          ],
          "headings": [
            {
              "level": "h3",
              "text": "About the store"
            }
          ],
          "paragraphs": [
            "Our store spans multiple floors with complete lighting solutions—from statement jhoomers to smart dimmers—so you can experience real lighting scenarios before you buy.",
            "Address & contact: Arisca Light Studio,B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad\nMobile: +91 9898086656\nEmail: info@ariscalightstudio.com\n( 10:00 AM – 8:30 PM)"
          ],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zroBQO",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zREsJs",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 16,
                  "crop": {
                    "top": 50,
                    "left": 50,
                    "scale": 1
                  },
                  "left": 0,
                  "width": 606,
                  "height": 496
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09743-qZwb0UB5B2OImJ70.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zJQ3hz",
                "fullResolutionWidth": 3840,
                "fullResolutionHeight": 2158
              },
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zo5zBJ",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 320,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 16,
                  "left": 618,
                  "width": 606,
                  "height": 368
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09720-ERb1AhbWx0SSgoSB.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zYCWu5",
                "fullResolutionWidth": 3840,
                "fullResolutionHeight": 2158
              },
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zgauDQ",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 600,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 528,
                  "crop": {
                    "top": 0,
                    "left": 3.8461538461538463,
                    "scale": 1
                  },
                  "left": 0,
                  "width": 606,
                  "height": 560
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09737-oPXnMNhlDvQBehoN.jpg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zIAM-t",
                "fullResolutionWidth": 3840,
                "fullResolutionHeight": 2158
              },
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zRuWPO",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 880,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "target": "_self",
                "desktop": {
                  "top": 400,
                  "crop": {
                    "top": 50,
                    "left": 50,
                    "scale": 1
                  },
                  "left": 618,
                  "width": 606,
                  "height": 688
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09738-Zu3m7g53jinktiDJ.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zPy-5a",
                "fullResolutionWidth": 3840,
                "fullResolutionHeight": 2158
              },
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            }
          ],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [
            {
              "id": "zREsJs",
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zo5zBJ",
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zgauDQ",
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "zRuWPO",
              "url": "",
              "alt": "",
              "width": 3840,
              "height": 2158
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zbvldc",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zRtEGG",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 169,
                  "left": 0,
                  "width": 328,
                  "height": 91
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 14px;\">Driven by passion and guided by excellence, our founders and leadership team are committed to building Arisca Light Studio into a brand known for quality, innovation, and customer trust.</p>",
                "desktop": {
                  "top": 152,
                  "left": 270,
                  "width": 683,
                  "height": 72
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zT4UJf"
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"--lineHeightMobile: 1.3; --fontSizeMobile: 14px;\">Driven by passion and guided by excellence, our founders and leadership team are committed to building Arisca Light Studio into a brand known for quality, innovation, and customer trust.</p>",
              "text": "Driven by passion and guided by excellence, our founders and leadership team are committed to building Arisca Light Studio into a brand known for quality, innovation, and customer trust."
            },
            {
              "id": "zbOkUy",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 702,
                  "left": 0,
                  "width": 328,
                  "height": 360
                },
                "desktop": {
                  "top": 309,
                  "crop": {
                    "top": 7.317073170731717,
                    "left": 62.068965517241374,
                    "scale": 1
                  },
                  "left": 309,
                  "width": 265,
                  "height": 315,
                  "borderRadius": "20px"
                },
                "settings": {
                  "alt": "",
                  "path": "img-20260415-wa0028-1-.jpg-CdLPkCzPIZelYNPO.jpeg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zG2xsD",
                "fullResolutionWidth": 1610,
                "fullResolutionHeight": 2160
              },
              "url": "",
              "alt": "",
              "width": 1610,
              "height": 2160
            },
            {
              "id": "zx0gtD",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 640,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Adarsh Patel</strong></span></h3>",
                "desktop": {
                  "top": 643,
                  "left": 33,
                  "width": 222,
                  "height": 42
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "m-text": "center",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Adarsh Patel</strong></span></h3>",
              "text": "Adarsh Patel"
            },
            {
              "id": "zT-4ug",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 282,
                  "left": 0,
                  "width": 328,
                  "height": 358
                },
                "desktop": {
                  "top": 304,
                  "crop": {
                    "top": 66.39227475127127,
                    "left": 18.095238095238095,
                    "scale": 1.4275
                  },
                  "left": 21,
                  "width": 246,
                  "height": 320,
                  "borderRadius": "20px"
                },
                "settings": {
                  "alt": "",
                  "path": "1000496835.jpg-XyfBu2qSvPZmNJS9.jpeg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zG2xsD",
                "fullResolutionWidth": 1440,
                "fullResolutionHeight": 2160
              },
              "url": "",
              "alt": "",
              "width": 1440,
              "height": 2160
            },
            {
              "id": "zRvjdz",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 1544,
                  "left": 0,
                  "width": 328,
                  "height": 358
                },
                "desktop": {
                  "top": 304,
                  "crop": {
                    "top": 61.72248803827752,
                    "left": 45.97701149425287,
                    "scale": 1.25
                  },
                  "left": 938,
                  "width": 265,
                  "height": 320,
                  "borderRadius": "20px"
                },
                "settings": {
                  "alt": "",
                  "path": "1000496834.jpg-sR1cwSs271Wbkxuc.jpeg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zG2xsD",
                "fullResolutionWidth": 1440,
                "fullResolutionHeight": 2160
              },
              "url": "",
              "alt": "",
              "width": 1440,
              "height": 2160
            },
            {
              "id": "zqU7aw",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 1122,
                  "left": 0,
                  "width": 328,
                  "height": 358
                },
                "desktop": {
                  "top": 309,
                  "crop": {
                    "top": 46.3620031439479,
                    "left": 0,
                    "scale": 1.16
                  },
                  "left": 618,
                  "width": 265,
                  "height": 315,
                  "borderRadius": "20px"
                },
                "settings": {
                  "alt": "",
                  "path": "1000494963.jpg-3mww9d94EbngMhqM.jpeg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zG2xsD",
                "fullResolutionWidth": 1440,
                "fullResolutionHeight": 2160
              },
              "url": "",
              "alt": "",
              "width": 1440,
              "height": 2160
            },
            {
              "id": "zcS-4V",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 1904,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Dhyan Patel</strong></span></h3>",
                "desktop": {
                  "top": 643,
                  "left": 960,
                  "width": 222,
                  "height": 42
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "m-text": "center",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Dhyan Patel</strong></span></h3>",
              "text": "Dhyan Patel"
            },
            {
              "id": "z4o9ut",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 1480,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Manthan Patel</strong></span></h3>",
                "desktop": {
                  "top": 643,
                  "left": 624,
                  "width": 253,
                  "height": 42
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "m-text": "center",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Manthan Patel</strong></span></h3>",
              "text": "Manthan Patel"
            },
            {
              "id": "zfvJRQ",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 1062,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Dev Patel</strong></span></h3>",
                "desktop": {
                  "top": 643,
                  "left": 331,
                  "width": 222,
                  "height": 42
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "m-text": "center",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 32px;\"><span style=\"font-weight: 700;\"><strong>Dev Patel</strong></span></h3>",
              "text": "Dev Patel"
            },
            {
              "id": "z8j9qH",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 61,
                  "left": 0,
                  "width": 328,
                  "height": 83
                },
                "content": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151);\"><span style=\"font-weight: 700;\"><strong>Meet Our Leadership Team</strong></span></h3>",
                "desktop": {
                  "top": 58,
                  "left": 248,
                  "width": 728,
                  "height": 62
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "m-text": "center",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h3 dir=\"auto\" style=\"color: rgb(13, 155, 151);\"><span style=\"font-weight: 700;\"><strong>Meet Our Leadership Team</strong></span></h3>",
              "text": "Meet Our Leadership Team"
            }
          ],
          "headings": [
            {
              "level": "h3",
              "text": "Adarsh Patel"
            },
            {
              "level": "h3",
              "text": "Dhyan Patel"
            },
            {
              "level": "h3",
              "text": "Manthan Patel"
            },
            {
              "level": "h3",
              "text": "Dev Patel"
            },
            {
              "level": "h3",
              "text": "Meet Our Leadership Team"
            }
          ],
          "paragraphs": [
            "Driven by passion and guided by excellence, our founders and leadership team are committed to building Arisca Light Studio into a brand known for quality, innovation, and customer trust."
          ],
          "buttons": [],
          "images": [
            {
              "id": "zbOkUy",
              "url": "",
              "alt": "",
              "width": 1610,
              "height": 2160
            },
            {
              "id": "zT-4ug",
              "url": "",
              "alt": "",
              "width": 1440,
              "height": 2160
            },
            {
              "id": "zRvjdz",
              "url": "",
              "alt": "",
              "width": 1440,
              "height": 2160
            },
            {
              "id": "zqU7aw",
              "url": "",
              "alt": "",
              "width": 1440,
              "height": 2160
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "about-2": {
      "id": "ai-G4OOk",
      "name": "About 2",
      "slug": "about-2",
      "path": "/about-2",
      "type": "default",
      "isProductPage": false,
      "status": "published",
      "meta": {
        "title": "Premium Lighting Solutions by Arisca Light Studio",
        "description": "At Arisca Light Studio, we specialize in premium lighting solutions, offering a wide range of chandeliers, sconces, and outdoor lights. Our expert design consultations and professional installation ensure your spaces shine beautifully.",
        "keywords": "premium lighting, chandeliers, design consultation",
        "canonical": "https://www.ariscalightstudio.com/about-2"
      },
      "blockIds": [
        "ai-2RqkfA",
        "ai-tSkpGi",
        "ai-zDpTk1"
      ],
      "sections": [
        {
          "id": "ai-2RqkfA",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "ai-5lBwFa",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"\">About Arisca</h3>",
                "desktop": {
                  "top": 184,
                  "left": 0,
                  "width": 366,
                  "height": 62
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z0EDJm"
              },
              "html": "<h3 dir=\"auto\" style=\"\">About Arisca</h3>",
              "text": "About Arisca"
            },
            {
              "id": "ai-1Gf8zP",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 88,
                  "left": 0,
                  "width": 328,
                  "height": 96
                },
                "content": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Premium lighting solutions for every space.</p>",
                "desktop": {
                  "top": 267,
                  "left": 0,
                  "width": 366,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zuqPoF"
              },
              "html": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Premium lighting solutions for every space.</p>",
              "text": "Premium lighting solutions for every space."
            },
            {
              "id": "ai-OnmSBp",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 556,
                  "left": 0,
                  "width": 328,
                  "height": 224
                },
                "desktop": {
                  "top": 80,
                  "left": 824,
                  "width": 400,
                  "height": 464,
                  "borderRadius": "20px"
                },
                "settings": {
                  "alt": "A showroom displaying several luxury cars, with a prominent black sedan featuring red interior seating in the foreground. The car is positioned on a polished brown tile floor under bright overhead lighting. Other vehicles, including a white sedan and a gray SUV, are aligned in the background in front of large windows that allow natural light to flood the room.",
                  "path": "photo-1682008186494-4b5a087e07ab",
                  "origin": "unsplash",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zP4CLw"
              },
              "url": "",
              "alt": ""
            },
            {
              "id": "ai-RkVeJx",
              "type": "GridButton",
              "raw": {
                "rel": "nofollow",
                "type": "GridButton",
                "mobile": {
                  "top": 212,
                  "left": 0,
                  "width": 164,
                  "height": 56
                },
                "target": "_blank",
                "content": "Explore Now",
                "desktop": {
                  "top": 384,
                  "left": 0,
                  "width": 194,
                  "height": 56,
                  "fontSize": 16
                },
                "linkType": "external",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "#0d141a",
                "fontWeight": 500,
                "borderColor": "#0d141a",
                "borderWidth": 1,
                "borderRadius": 28,
                "fontColorHover": "#0d141a",
                "backgroundColor": "rgba(255, 255, 255, 0)",
                "borderColorHover": "#0d141a",
                "initialElementId": "zZU-uW",
                "backgroundColorHover": "rgba(255, 255, 255, 0)"
              },
              "content": "Explore Now",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "ai-ndvOoq",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 316,
                  "left": 0,
                  "width": 328,
                  "height": 224
                },
                "desktop": {
                  "top": 80,
                  "left": 412,
                  "width": 400,
                  "height": 464,
                  "borderRadius": "20px"
                },
                "settings": {
                  "alt": "A modern showroom with large windows allowing natural light to illuminate the space. The interior features a geometric sculpture with reflective surfaces, set on a polished wooden floor. Greenery adorns the walls, adding a touch of nature. Flat-screen monitors display images of a car, and there's seating made of dark gray fabric. The atmosphere is sleek and futuristic.",
                  "path": "photo-1547662906-5b04e1f97e8e",
                  "origin": "unsplash",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zKG4D9"
              },
              "url": "",
              "alt": ""
            }
          ],
          "headings": [
            {
              "level": "h3",
              "text": "About Arisca"
            }
          ],
          "paragraphs": [
            "Premium lighting solutions for every space."
          ],
          "buttons": [
            {
              "id": "ai-RkVeJx",
              "label": "Explore Now",
              "target": "_blank",
              "linkType": "external"
            }
          ],
          "images": [
            {
              "id": "ai-OnmSBp",
              "url": "",
              "alt": ""
            },
            {
              "id": "ai-ndvOoq",
              "url": "",
              "alt": ""
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "ai-tSkpGi",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "ai-QysAJn",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"\">Location</h3>",
                "desktop": {
                  "top": 40,
                  "left": 0,
                  "width": 483,
                  "height": 62
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zYzDXj"
              },
              "html": "<h3 dir=\"auto\" style=\"\">Location</h3>",
              "text": "Location"
            },
            {
              "id": "ai-2BIYoG",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 95,
                  "left": 0,
                  "width": 328,
                  "height": 120
                },
                "content": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Visit Arisca Light Studio for premium lighting solutions and expert design consultations.</p>",
                "desktop": {
                  "top": 120,
                  "left": 0,
                  "width": 503,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z0TFXQ"
              },
              "html": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">Visit Arisca Light Studio for premium lighting solutions and expert design consultations.</p>",
              "text": "Visit Arisca Light Studio for premium lighting solutions and expert design consultations."
            },
            {
              "id": "ai-qddWGG",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 255,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\"><strong>Address</strong></h6>",
                "desktop": {
                  "top": 224,
                  "left": 0,
                  "width": 333,
                  "height": 21
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z7hWpe"
              },
              "html": "<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\"><strong>Address</strong></h6>",
              "text": "Address"
            },
            {
              "id": "ai-7rCJOH",
              "type": "GridMap",
              "raw": {
                "type": "GridMap",
                "mobile": {
                  "top": 384,
                  "left": 0,
                  "width": 328,
                  "height": 268
                },
                "desktop": {
                  "top": 414,
                  "left": 0,
                  "width": 588,
                  "height": 306
                },
                "settings": {
                  "src": "https://maps.google.com/maps?q=697%20Hilltop%20Street,%20Springfield,%20MA,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed",
                  "styles": {
                    "align": "center",
                    "justify": "center"
                  },
                  "m-element-margin": "0 0 16px 0"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zasU4U"
              },
              "src": "https://maps.google.com/maps?q=697%20Hilltop%20Street,%20Springfield,%20MA,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            },
            {
              "id": "ai-iW3IlO",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 280,
                  "left": 0,
                  "width": 328,
                  "height": 24
                },
                "content": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">123 Lighting Ave, City</p>",
                "desktop": {
                  "top": 257,
                  "left": 0,
                  "width": 333,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z_799n"
              },
              "html": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">123 Lighting Ave, City</p>",
              "text": "123 Lighting Ave, City"
            },
            {
              "id": "ai-Wds9z4",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 321,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\"><strong>Hours</strong></h6>",
                "desktop": {
                  "top": 309,
                  "left": 0,
                  "width": 333,
                  "height": 21
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zpjoNV"
              },
              "html": "<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\"><strong>Hours</strong></h6>",
              "text": "Hours"
            },
            {
              "id": "ai-1A0OZl",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 824,
                  "left": 0,
                  "width": 328,
                  "height": 24
                },
                "content": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">9 AM - 6 PM</p>",
                "desktop": {
                  "top": 344,
                  "left": 0,
                  "width": 333,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zkCFoK"
              },
              "html": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">9 AM - 6 PM</p>",
              "text": "9 AM - 6 PM"
            },
            {
              "id": "ai-UzVJ_A",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 737,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\"><strong>Address</strong></h6>",
                "desktop": {
                  "top": 224,
                  "left": 636,
                  "width": 333,
                  "height": 21
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zjfUnd"
              },
              "html": "<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\"><strong>Address</strong></h6>",
              "text": "Address"
            },
            {
              "id": "ai-warIw7",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 760,
                  "left": 0,
                  "width": 328,
                  "height": 24
                },
                "content": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">456 Bright St, Town</p>",
                "desktop": {
                  "top": 257,
                  "left": 636,
                  "width": 333,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zQ7uJg"
              },
              "html": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">456 Bright St, Town</p>",
              "text": "456 Bright St, Town"
            },
            {
              "id": "ai-VF7W7R",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 801,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\"><strong>Hours</strong></h6>",
                "desktop": {
                  "top": 309,
                  "left": 636,
                  "width": 333,
                  "height": 21
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zq5mL5"
              },
              "html": "<h6 style=\"color: #0d141a; --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px\" dir=\"auto\"><strong>Hours</strong></h6>",
              "text": "Hours"
            },
            {
              "id": "ai-P_c2Np",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 344,
                  "left": 0,
                  "width": 328,
                  "height": 24
                },
                "content": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">10 AM - 5 PM</p>",
                "desktop": {
                  "top": 344,
                  "left": 636,
                  "width": 333,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zTS4tr"
              },
              "html": "<p class=\"body\" style=\"color: rgb(86, 88, 94)\" dir=\"auto\">10 AM - 5 PM</p>",
              "text": "10 AM - 5 PM"
            },
            {
              "id": "ai-XfzOdu",
              "type": "GridMap",
              "raw": {
                "type": "GridMap",
                "mobile": {
                  "top": 864,
                  "left": 0,
                  "width": 328,
                  "height": 264
                },
                "desktop": {
                  "top": 414,
                  "left": 636,
                  "width": 588,
                  "height": 306
                },
                "settings": {
                  "src": "https://maps.google.com/maps?q=697%20Hilltop%20Street,%20Springfield,%20MA,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed",
                  "styles": {
                    "align": "center",
                    "justify": "center"
                  },
                  "m-element-margin": "0 0 16px 0"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zasU4U"
              },
              "src": "https://maps.google.com/maps?q=697%20Hilltop%20Street,%20Springfield,%20MA,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            }
          ],
          "headings": [
            {
              "level": "h3",
              "text": "Location"
            },
            {
              "level": "h6",
              "text": "Address"
            },
            {
              "level": "h6",
              "text": "Hours"
            },
            {
              "level": "h6",
              "text": "Address"
            },
            {
              "level": "h6",
              "text": "Hours"
            }
          ],
          "paragraphs": [
            "Visit Arisca Light Studio for premium lighting solutions and expert design consultations.",
            "123 Lighting Ave, City",
            "9 AM - 6 PM",
            "456 Bright St, Town",
            "10 AM - 5 PM"
          ],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [
            {
              "id": "ai-7rCJOH",
              "src": "https://maps.google.com/maps?q=697%20Hilltop%20Street,%20Springfield,%20MA,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            },
            {
              "id": "ai-XfzOdu",
              "src": "https://maps.google.com/maps?q=697%20Hilltop%20Street,%20Springfield,%20MA,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            }
          ],
          "socialIcons": []
        },
        {
          "id": "ai-zDpTk1",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "ai-ZHKtvN",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 80,
                  "left": 0,
                  "width": 328,
                  "height": 83
                },
                "content": "<h3 dir=\"auto\" style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 48px\"><span style=\"color: rgb(0, 0, 0)\">Frequently Asked Questions</span></h3>",
                "desktop": {
                  "top": 120,
                  "left": 0,
                  "width": 1224,
                  "height": 62
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "center",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zfVrXQ"
              },
              "html": "<h3 dir=\"auto\" style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 48px\"><span style=\"color: rgb(0, 0, 0)\">Frequently Asked Questions</span></h3>",
              "text": "Frequently Asked Questions"
            },
            {
              "id": "ai-w8v-4G",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 224,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 dir=\"auto\" style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\"><span style=\"font-weight: 700\"><strong>What products do you offer?</strong></span></h6>",
                "desktop": {
                  "top": 260,
                  "left": 66,
                  "width": 504,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<h6 dir=\"auto\" style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\"><span style=\"font-weight: 700\"><strong>What products do you offer?</strong></span></h6>",
              "text": "What products do you offer?"
            },
            {
              "id": "ai-DGlV91",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 264,
                  "left": 0,
                  "width": 328,
                  "height": 72
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">We offer chandeliers, pendant lights, wall sconces, LED panels, and outdoor lighting solutions.</span></p>",
                "desktop": {
                  "top": 302,
                  "left": 67,
                  "width": 503,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">We offer chandeliers, pendant lights, wall sconces, LED panels, and outdoor lighting solutions.</span></p>",
              "text": "We offer chandeliers, pendant lights, wall sconces, LED panels, and outdoor lighting solutions."
            },
            {
              "id": "ai-WKEJlP",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 377,
                  "left": 0,
                  "width": 328,
                  "height": 47
                },
                "content": "<h6 dir=\"auto\" style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\"><span style=\"font-weight: 700\"><strong>Do you provide installation services?</strong></span></h6>",
                "desktop": {
                  "top": 260,
                  "left": 659,
                  "width": 505,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<h6 dir=\"auto\" style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\"><span style=\"font-weight: 700\"><strong>Do you provide installation services?</strong></span></h6>",
              "text": "Do you provide installation services?"
            },
            {
              "id": "ai-Sdhotf",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 448,
                  "left": 0,
                  "width": 328,
                  "height": 120
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">Yes, we offer professional installation services for all our lighting products to ensure perfect setup.</span></p>",
                "desktop": {
                  "top": 302,
                  "left": 660,
                  "width": 503,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">Yes, we offer professional installation services for all our lighting products to ensure perfect setup.</span></p>",
              "text": "Yes, we offer professional installation services for all our lighting products to ensure perfect setup."
            },
            {
              "id": "ai-VJdfMu",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 608,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>Can I get design consultation?</strong></span></h6>",
                "desktop": {
                  "top": 443,
                  "left": 66,
                  "width": 503,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<h6 style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>Can I get design consultation?</strong></span></h6>",
              "text": "Can I get design consultation?"
            },
            {
              "id": "ai-8nLyWr",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 648,
                  "left": 0,
                  "width": 328,
                  "height": 120
                },
                "content": "<p class=\"body\" dir=\"auto\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">Absolutely! We provide design consultation to help you choose the best lighting for your space.</span></p>",
                "desktop": {
                  "top": 485,
                  "left": 66,
                  "width": 503,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<p class=\"body\" dir=\"auto\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">Absolutely! We provide design consultation to help you choose the best lighting for your space.</span></p>",
              "text": "Absolutely! We provide design consultation to help you choose the best lighting for your space."
            },
            {
              "id": "ai-_c2FUI",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 808,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>What is site measurement?</strong></span></h6>",
                "desktop": {
                  "top": 443,
                  "left": 660,
                  "width": 503,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<h6 style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>What is site measurement?</strong></span></h6>",
              "text": "What is site measurement?"
            },
            {
              "id": "ai-u5KcFY",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 848,
                  "left": 0,
                  "width": 328,
                  "height": 96
                },
                "content": "<p class=\"body\" dir=\"auto\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">Site measurement is a service where we assess your space to recommend suitable lighting solutions.</span></p>",
                "desktop": {
                  "top": 485,
                  "left": 660,
                  "width": 503,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<p class=\"body\" dir=\"auto\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">Site measurement is a service where we assess your space to recommend suitable lighting solutions.</span></p>",
              "text": "Site measurement is a service where we assess your space to recommend suitable lighting solutions."
            },
            {
              "id": "ai-PuRU_Q",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 985,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>How can I contact you?</strong></span></h6>",
                "desktop": {
                  "top": 625,
                  "left": 67,
                  "width": 503,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<h6 style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\" dir=\"auto\"><span style=\"font-weight: 700\"><strong>How can I contact you?</strong></span></h6>",
              "text": "How can I contact you?"
            },
            {
              "id": "ai-d_h_wV",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 1032,
                  "left": 0,
                  "width": 328,
                  "height": 72
                },
                "content": "<p class=\"body\" dir=\"auto\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">You can contact us through our website's contact form or by phone for inquiries.</span></p>",
                "desktop": {
                  "top": 667,
                  "left": 67,
                  "width": 502,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<p class=\"body\" dir=\"auto\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">You can contact us through our website's contact form or by phone for inquiries.</span></p>",
              "text": "You can contact us through our website's contact form or by phone for inquiries."
            },
            {
              "id": "ai-RNzjHc",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 1145,
                  "left": 0,
                  "width": 328,
                  "height": 23
                },
                "content": "<h6 dir=\"auto\" style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\"><span style=\"font-weight: 700\"><strong>Do you ship internationally?</strong></span></h6>",
                "desktop": {
                  "top": 625,
                  "left": 661,
                  "width": 503,
                  "height": 26
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<h6 dir=\"auto\" style=\"--lineHeightDesktop: 1.3; --fontSizeDesktop: 20px\"><span style=\"font-weight: 700\"><strong>Do you ship internationally?</strong></span></h6>",
              "text": "Do you ship internationally?"
            },
            {
              "id": "ai-LJ4_26",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 1192,
                  "left": 0,
                  "width": 328,
                  "height": 96
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">Currently, we only ship within the country. Please check back for future international shipping options.</span></p>",
                "desktop": {
                  "top": 667,
                  "left": 661,
                  "width": 503,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 40px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z5RWE3"
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"\"><span style=\"color: rgb(31, 31, 31); text-transform: none; letter-spacing: normal\">Currently, we only ship within the country. Please check back for future international shipping options.</span></p>",
              "text": "Currently, we only ship within the country. Please check back for future international shipping options."
            }
          ],
          "headings": [
            {
              "level": "h3",
              "text": "Frequently Asked Questions"
            },
            {
              "level": "h6",
              "text": "What products do you offer?"
            },
            {
              "level": "h6",
              "text": "Do you provide installation services?"
            },
            {
              "level": "h6",
              "text": "Can I get design consultation?"
            },
            {
              "level": "h6",
              "text": "What is site measurement?"
            },
            {
              "level": "h6",
              "text": "How can I contact you?"
            },
            {
              "level": "h6",
              "text": "Do you ship internationally?"
            }
          ],
          "paragraphs": [
            "We offer chandeliers, pendant lights, wall sconces, LED panels, and outdoor lighting solutions.",
            "Yes, we offer professional installation services for all our lighting products to ensure perfect setup.",
            "Absolutely! We provide design consultation to help you choose the best lighting for your space.",
            "Site measurement is a service where we assess your space to recommend suitable lighting solutions.",
            "You can contact us through our website's contact form or by phone for inquiries.",
            "Currently, we only ship within the country. Please check back for future international shipping options."
          ],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "shop": {
      "id": "ai-jCi_9",
      "name": "Shop",
      "slug": "shop",
      "path": "/shop",
      "type": "default",
      "isProductPage": false,
      "status": "published",
      "meta": {
        "title": "Premium Lighting Solutions for Every Space",
        "description": "Discover Arisca Light Studio's exquisite range of chandeliers, pendant lights, and outdoor lighting. Enjoy design consultations, site measurements, and professional installation to illuminate your home beautifully.",
        "keywords": "premium lighting, chandeliers, professional installation",
        "canonical": "https://www.ariscalightstudio.com/shop"
      },
      "blockIds": [
        "zZ10Yl",
        "ai-FNe8is",
        "zh8jjV",
        "zWxpaS",
        "ai-gIazsR"
      ],
      "sections": [
        {
          "id": "zZ10Yl",
          "type": "BlockEcommerceProductList",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "ai-FNe8is",
          "type": "BlockEcommerceProductList",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zh8jjV",
          "type": "BlockEcommerceProductList",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zWxpaS",
          "type": "BlockEcommerceProductList",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "ai-gIazsR",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "ai-_xr09z",
              "type": "GridShape",
              "raw": {
                "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"none\" fill=\"none\" viewBox=\"0 0 80 80\" preserveAspectRatio=\"none\"><path d=\"M0 0H80V80H0V0Z\"></path></svg>",
                "type": "GridShape",
                "color": "rgb(13, 155, 151)",
                "shape": "rectangle",
                "mobile": {
                  "top": 360,
                  "left": 0,
                  "width": 328,
                  "height": 424
                },
                "desktop": {
                  "top": 80,
                  "left": 612,
                  "width": 612,
                  "height": 384
                },
                "settings": {
                  "styles": []
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zH79CE"
              }
            },
            {
              "id": "ai-EDJ0pm",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 440,
                  "left": 19,
                  "width": 291,
                  "height": 135
                },
                "content": "<p dir=\"auto\" class=\"body-large\" style=\"color: rgb(255, 255, 255);\">The <span style=\"font-weight: 400;\">Hanging Lamps</span><strong> </strong>from Arisca Light Studio transformed my office beautifully. Highly recommend their services!</p>",
                "desktop": {
                  "top": 221,
                  "left": 718,
                  "width": 400,
                  "height": 81
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zM8nSK"
              },
              "html": "<p dir=\"auto\" class=\"body-large\" style=\"color: rgb(255, 255, 255);\">The <span style=\"font-weight: 400;\">Hanging Lamps</span><strong> </strong>from Arisca Light Studio transformed my office beautifully. Highly recommend their services!</p>",
              "text": "The Hanging Lamps from Arisca Light Studio transformed my office beautifully. Highly recommend their services!"
            },
            {
              "id": "ai-qNtMTH",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 664,
                  "left": 31,
                  "width": 266,
                  "height": 24
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Vaidik Patel</p>",
                "desktop": {
                  "top": 424,
                  "left": 718,
                  "width": 400,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zzULcg"
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Vaidik Patel</p>",
              "text": "Vaidik Patel"
            },
            {
              "id": "ai-Eq7RTb",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 600,
                  "left": 141,
                  "width": 47,
                  "height": 46
                },
                "desktop": {
                  "top": 360,
                  "left": 894,
                  "width": 48,
                  "height": 48,
                  "borderRadius": "50%"
                },
                "settings": {
                  "alt": "",
                  "path": "whatsapp-image-2026-01-01-at-9.17.07-am-IpHe2Zbrt71Xxuda.jpeg",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zxBEYj",
                "fullResolutionWidth": 1280,
                "fullResolutionHeight": 960
              },
              "url": "",
              "alt": "",
              "width": 1280,
              "height": 960
            },
            {
              "id": "ai-aaFL7M",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 320
                },
                "desktop": {
                  "top": 80,
                  "left": 0,
                  "width": 612,
                  "height": 384
                },
                "settings": {
                  "alt": "a ping pong table in a large room",
                  "path": "photo-1716703435691-1e5205044c8e",
                  "origin": "unsplash",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zSsBAT"
              },
              "url": "",
              "alt": ""
            },
            {
              "id": "ai-hFvfBV",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 400,
                  "left": 10,
                  "width": 308,
                  "height": 27
                },
                "content": "<p class=\"body-large\" style=\"color: #ffffff; --lineHeightDesktop: 1.3; --fontSizeDesktop: 22px\" dir=\"auto\">★★★★★</p>",
                "desktop": {
                  "top": 171,
                  "left": 821,
                  "width": 194,
                  "height": 29
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z4X5pQ"
              },
              "html": "<p class=\"body-large\" style=\"color: #ffffff; --lineHeightDesktop: 1.3; --fontSizeDesktop: 22px\" dir=\"auto\">★★★★★</p>",
              "text": "★★★★★"
            }
          ],
          "headings": [],
          "paragraphs": [
            "The Hanging Lamps from Arisca Light Studio transformed my office beautifully. Highly recommend their services!",
            "Vaidik Patel",
            "★★★★★"
          ],
          "buttons": [],
          "images": [
            {
              "id": "ai-Eq7RTb",
              "url": "",
              "alt": "",
              "width": 1280,
              "height": 960
            },
            {
              "id": "ai-aaFL7M",
              "url": "",
              "alt": ""
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "home": {
      "id": "ai-ujzAo",
      "name": "Home",
      "slug": "home",
      "path": "/",
      "type": "default",
      "isProductPage": false,
      "status": "published",
      "meta": {
        "title": "Discover Arisca Light Studio - Premium Lighting",
        "description": "Explore Arisca Light Studio, your ultimate destination for Premium Lighting, wall sconces, and home lighting. Enjoy expert design consultation, precise site measurement, and professional installation to beautifully illuminate your home.",
        "keywords": "Premium Lighting",
        "canonical": "https://www.ariscalightstudio.com/"
      },
      "blockIds": [
        "ai-NCYeTr",
        "zN7MST",
        "zPWt-n",
        "zVF43B",
        "z4c64D",
        "ai-Ahl8LM",
        "z1u6Wd"
      ],
      "sections": [
        {
          "id": "ai-NCYeTr",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "ai-5czQQn",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 173
                },
                "content": "<h1 dir=\"auto\" style=\"color: rgb(255, 255, 255); margin-bottom: 17px;\"><strong><em>Light That Reshapes</em></strong></h1><h1 dir=\"auto\" style=\"color: rgb(255, 255, 255);\"><strong><em> Your World</em></strong></h1>",
                "desktop": {
                  "top": 80,
                  "left": 0,
                  "width": 1224,
                  "height": 183
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zYsdII"
              },
              "html": "<h1 dir=\"auto\" style=\"color: rgb(255, 255, 255); margin-bottom: 17px;\"><strong><em>Light That Reshapes</em></strong></h1><h1 dir=\"auto\" style=\"color: rgb(255, 255, 255);\"><strong><em> Your World</em></strong></h1>",
              "text": "Light That Reshapes Your World"
            },
            {
              "id": "ai-75-Yr4",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 249,
                  "left": 0,
                  "width": 328,
                  "height": 108
                },
                "content": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body-large\">Chandeliers, ceiling, wall, bathroom &amp; outdoor lights — curated with expert design guidance and professional installation.</p>",
                "desktop": {
                  "top": 306,
                  "left": 266,
                  "width": 692,
                  "height": 54
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zaATgY"
              },
              "html": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body-large\">Chandeliers, ceiling, wall, bathroom &amp; outdoor lights — curated with expert design guidance and professional installation.</p>",
              "text": "Chandeliers, ceiling, wall, bathroom & outdoor lights — curated with expert design guidance and professional installation."
            },
            {
              "id": "ai-mpte4h",
              "type": "GridButton",
              "raw": {
                "rel": "",
                "href": "/shop",
                "type": "GridButton",
                "mobile": {
                  "top": 497,
                  "left": 70,
                  "width": 188,
                  "height": 56
                },
                "target": "_self",
                "content": "Shop Now",
                "desktop": {
                  "top": 424,
                  "left": 618,
                  "width": 194,
                  "height": 56,
                  "fontSize": 16
                },
                "linkType": "page",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "#ffffff",
                "fontWeight": 500,
                "borderColor": "#ffffff",
                "borderWidth": 1,
                "borderRadius": 28,
                "linkedPageId": "ai-jCi_9",
                "fontColorHover": "#ffffff",
                "backgroundColor": "rgba(255, 255, 255, 0)",
                "borderColorHover": "#ffffff",
                "initialElementId": "zMJ93Y",
                "backgroundColorHover": "rgba(255, 255, 255, 0)"
              },
              "content": "Shop Now",
              "href": "/shop",
              "target": "_self",
              "linkType": "page"
            },
            {
              "id": "ai-opimQj",
              "type": "GridButton",
              "raw": {
                "rel": "",
                "href": "tel:+919898086656",
                "type": "GridButton",
                "mobile": {
                  "top": 409,
                  "left": 68,
                  "width": 192,
                  "height": 56
                },
                "target": "_self",
                "content": "Get Consultation",
                "desktop": {
                  "top": 424,
                  "left": 412,
                  "width": 194,
                  "height": 56,
                  "fontSize": 16
                },
                "linkType": "phone",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "#0d141a",
                "fontWeight": 500,
                "borderColor": "#ffffff",
                "borderWidth": 0,
                "borderRadius": 28,
                "linkedPageId": "",
                "fontColorHover": "#0d141a",
                "backgroundColor": "rgba(255, 255, 255, 0.51)",
                "borderColorHover": "#ffffff",
                "initialElementId": "zsFKQA",
                "backgroundColorHover": "#ffffff"
              },
              "content": "Get Consultation",
              "href": "tel:+919898086656",
              "target": "_self",
              "linkType": "phone"
            }
          ],
          "headings": [
            {
              "level": "h1",
              "text": "Light That Reshapes"
            }
          ],
          "paragraphs": [
            "Chandeliers, ceiling, wall, bathroom & outdoor lights — curated with expert design guidance and professional installation."
          ],
          "buttons": [
            {
              "id": "ai-mpte4h",
              "label": "Shop Now",
              "href": "/shop",
              "target": "_self",
              "linkType": "page"
            },
            {
              "id": "ai-opimQj",
              "label": "Get Consultation",
              "href": "tel:+919898086656",
              "target": "_self",
              "linkType": "phone"
            }
          ],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zN7MST",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zAK1Sa",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 16,
                  "left": 0,
                  "width": 328,
                  "height": 140
                },
                "content": "<h2 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 40px;\"><strong>Award-Winning Lighting Products</strong></h2>",
                "desktop": {
                  "top": 24,
                  "left": 200,
                  "width": 823,
                  "height": 52
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<h2 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 40px;\"><strong>Award-Winning Lighting Products</strong></h2>",
              "text": "Award-Winning Lighting Products"
            },
            {
              "id": "zN3Kog",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 172,
                  "left": 0,
                  "width": 328,
                  "height": 28
                },
                "content": "<p dir=\"auto\" class=\"body-large\" style=\"color: rgb(13, 20, 26); --lineHeightDesktop: 1.3; --fontSizeDesktop: 24px;\"><span style=\"text-transform: none; letter-spacing: normal; font-family: Lora, serif; font-weight: 400;\">Browse our collection</span></p>",
                "desktop": {
                  "top": 90,
                  "left": 206,
                  "width": 823,
                  "height": 31
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p dir=\"auto\" class=\"body-large\" style=\"color: rgb(13, 20, 26); --lineHeightDesktop: 1.3; --fontSizeDesktop: 24px;\"><span style=\"text-transform: none; letter-spacing: normal; font-family: Lora, serif; font-weight: 400;\">Browse our collection</span></p>",
              "text": "Browse our collection"
            }
          ],
          "headings": [
            {
              "level": "h2",
              "text": "Award-Winning Lighting Products"
            }
          ],
          "paragraphs": [
            "Browse our collection"
          ],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zPWt-n",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "zq2twm",
              "type": "GridImage",
              "raw": {
                "rel": "",
                "href": "/about",
                "type": "GridImage",
                "mobile": {
                  "top": 24,
                  "left": 0,
                  "width": 164,
                  "height": 132
                },
                "target": "_self",
                "desktop": {
                  "top": 24,
                  "left": 0,
                  "width": 249,
                  "height": 249,
                  "borderRadius": "125px"
                },
                "linkType": "page",
                "settings": {
                  "alt": "",
                  "path": "1-JZ6LBZjPB8PJgjOV.png",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "none"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "linkedPageId": "ai-8vE85",
                "overlayOpacity": 0,
                "initialElementId": "zqxoXU",
                "fullResolutionWidth": 1563,
                "fullResolutionHeight": 1563
              },
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "zE68eY",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 280,
                  "left": 0,
                  "width": 158,
                  "height": 127
                },
                "target": "_self",
                "desktop": {
                  "top": 31,
                  "crop": {
                    "top": 50,
                    "left": 50,
                    "scale": 1
                  },
                  "left": 734,
                  "width": 249,
                  "height": 249,
                  "borderRadius": "125px"
                },
                "settings": {
                  "alt": "",
                  "path": "3-yucO3Plh5ef9H21F.png",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zqxoXU",
                "fullResolutionWidth": 1563,
                "fullResolutionHeight": 1563
              },
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "zRIaf4",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 24,
                  "left": 164,
                  "width": 158,
                  "height": 127
                },
                "target": "_self",
                "desktop": {
                  "top": 31,
                  "left": 487,
                  "width": 249,
                  "height": 249,
                  "borderRadius": "125px"
                },
                "settings": {
                  "alt": "",
                  "path": "4-Ezt9MEyA9SL6EGP2.png",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zqxoXU",
                "fullResolutionWidth": 1563,
                "fullResolutionHeight": 1563
              },
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "zpGwDL",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 559,
                  "left": 85,
                  "width": 158,
                  "height": 127
                },
                "target": "_self",
                "desktop": {
                  "top": 24,
                  "left": 975,
                  "width": 249,
                  "height": 249,
                  "borderRadius": "125px"
                },
                "settings": {
                  "alt": "",
                  "path": "5-light-category-1-n7aEPyuys0PrG9t3.png",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zqxoXU",
                "fullResolutionWidth": 1563,
                "fullResolutionHeight": 1563
              },
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "zdly7j",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 215,
                  "left": 0,
                  "width": 158,
                  "height": 24
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><span style=\"font-family: &quot;Open Sans&quot;; font-weight: 400;\"><strong>Hanging Lamps</strong></span></p>",
                "desktop": {
                  "top": 292,
                  "left": 23,
                  "width": 203,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><span style=\"font-family: &quot;Open Sans&quot;; font-weight: 400;\"><strong>Hanging Lamps</strong></span></p>",
              "text": "Hanging Lamps"
            },
            {
              "id": "zV_wPC",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 473,
                  "left": 0,
                  "width": 158,
                  "height": 48
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><span style=\"font-family: &quot;Open Sans&quot;; font-weight: 400;\"><strong>Wall lamp &amp; Mirror lamps</strong></span></p>",
                "desktop": {
                  "top": 292,
                  "left": 742,
                  "width": 233,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><span style=\"font-family: &quot;Open Sans&quot;; font-weight: 400;\"><strong>Wall lamp &amp; Mirror lamps</strong></span></p>",
              "text": "Wall lamp & Mirror lamps"
            },
            {
              "id": "zvUvl1",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 471,
                  "left": 170,
                  "width": 158,
                  "height": 48
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><span style=\"font-family: &quot;Open Sans&quot;; font-weight: 700;\"><strong>Hanging &amp; celling  light</strong></span></p>",
                "desktop": {
                  "top": 292,
                  "left": 262,
                  "width": 211,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px;\"><span style=\"font-family: &quot;Open Sans&quot;; font-weight: 700;\"><strong>Hanging &amp; celling  light</strong></span></p>",
              "text": "Hanging & celling  light"
            },
            {
              "id": "zv6PRg",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 695,
                  "left": 0,
                  "width": 328,
                  "height": 24
                },
                "content": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px\" class=\"body\"><span style=\"font-family: Open\\ Sans; font-weight: 400\"><strong>Floor &amp; Table Lamps</strong></span></p>",
                "desktop": {
                  "top": 292,
                  "left": 998,
                  "width": 203,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px\" class=\"body\"><span style=\"font-family: Open\\ Sans; font-weight: 400\"><strong>Floor &amp; Table Lamps</strong></span></p>",
              "text": "Floor & Table Lamps"
            },
            {
              "id": "zeJQI-",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 217,
                  "left": 164,
                  "width": 164,
                  "height": 24
                },
                "content": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px\" class=\"body\"><span style=\"font-family: Open\\ Sans; font-weight: 400\"><strong>Wall Lamps</strong></span></p>",
                "desktop": {
                  "top": 292,
                  "left": 510,
                  "width": 203,
                  "height": 24
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                }
              },
              "html": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.3; --fontSizeDesktop: 18px\" class=\"body\"><span style=\"font-family: Open\\ Sans; font-weight: 400\"><strong>Wall Lamps</strong></span></p>",
              "text": "Wall Lamps"
            },
            {
              "id": "ze58ZX",
              "type": "GridImage",
              "raw": {
                "type": "GridImage",
                "mobile": {
                  "top": 280,
                  "left": 167,
                  "width": 158,
                  "height": 127
                },
                "target": "_self",
                "desktop": {
                  "top": 24,
                  "crop": {
                    "top": 50,
                    "left": 50,
                    "scale": 1
                  },
                  "left": 243,
                  "width": 249,
                  "height": 249,
                  "borderRadius": "125px"
                },
                "settings": {
                  "alt": "",
                  "path": "5-light-category-CuAoS47gsK9SUC7Y.png",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zqxoXU",
                "fullResolutionWidth": 1563,
                "fullResolutionHeight": 1563
              },
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "zJiyn_",
              "type": "GridButton",
              "raw": {
                "rel": "nofollow",
                "href": "https://drive.google.com/file/d/1_6m3SxrJ5HtJOSqBFm5vfeeDhBGf1BRb/view?usp=sharing",
                "type": "GridButton",
                "mobile": {
                  "top": 168,
                  "left": 17,
                  "width": 130,
                  "height": 32
                },
                "target": "_blank",
                "content": "Catalog PDF",
                "desktop": {
                  "top": 344,
                  "left": 44,
                  "width": 162,
                  "height": 40
                },
                "linkType": "external",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "rgb(255, 255, 255)",
                "borderColor": "rgb(0, 0, 0)",
                "linkedPageId": "",
                "fontColorHover": "rgb(255, 255, 255)",
                "backgroundColor": "rgb(13, 155, 151)",
                "borderColorHover": "rgb(0, 0, 0)",
                "backgroundColorHover": "rgb(3, 56, 47)"
              },
              "content": "Catalog PDF",
              "href": "https://drive.google.com/file/d/1_6m3SxrJ5HtJOSqBFm5vfeeDhBGf1BRb/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "zZ1fEs",
              "type": "GridButton",
              "raw": {
                "rel": "nofollow",
                "href": "https://drive.google.com/file/d/16RrSSABjnOBf9cOJSl8SJyaLduxy0VaS/view?usp=sharing",
                "type": "GridButton",
                "mobile": {
                  "top": 420,
                  "left": 14,
                  "width": 130,
                  "height": 32
                },
                "target": "_blank",
                "content": "Catalog PDF",
                "desktop": {
                  "top": 344,
                  "left": 778,
                  "width": 162,
                  "height": 40
                },
                "linkType": "external",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "rgb(255, 255, 255)",
                "borderColor": "rgb(0, 0, 0)",
                "linkedPageId": "",
                "fontColorHover": "rgb(255, 255, 255)",
                "backgroundColor": "rgb(13, 155, 151)",
                "borderColorHover": "rgb(0, 0, 0)",
                "backgroundColorHover": "rgb(3, 56, 47)"
              },
              "content": "Catalog PDF",
              "href": "https://drive.google.com/file/d/16RrSSABjnOBf9cOJSl8SJyaLduxy0VaS/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "zPB510",
              "type": "GridButton",
              "raw": {
                "rel": "nofollow",
                "href": "https://drive.google.com/file/d/1_ytCjPJ-raO6pbfISceldoeeRRfsswto/view?usp=sharing",
                "type": "GridButton",
                "mobile": {
                  "top": 420,
                  "left": 184,
                  "width": 130,
                  "height": 32
                },
                "target": "_blank",
                "content": "Catalog PDF",
                "desktop": {
                  "top": 344,
                  "left": 287,
                  "width": 162,
                  "height": 40
                },
                "linkType": "external",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "rgb(255, 255, 255)",
                "borderColor": "rgb(0, 0, 0)",
                "linkedPageId": "",
                "fontColorHover": "rgb(255, 255, 255)",
                "backgroundColor": "rgb(13, 155, 151)",
                "borderColorHover": "rgb(0, 0, 0)",
                "backgroundColorHover": "rgb(3, 56, 47)"
              },
              "content": "Catalog PDF",
              "href": "https://drive.google.com/file/d/1_ytCjPJ-raO6pbfISceldoeeRRfsswto/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "zjjvje",
              "type": "GridButton",
              "raw": {
                "rel": "nofollow",
                "href": "https://drive.google.com/file/d/1PFlyUv4jgtnlr_7dqnJGMB4tmqM22YIv/view?usp=sharing",
                "type": "GridButton",
                "mobile": {
                  "top": 170,
                  "left": 178,
                  "width": 130,
                  "height": 32
                },
                "target": "_blank",
                "content": "Catalog PDF",
                "desktop": {
                  "top": 344,
                  "left": 531,
                  "width": 162,
                  "height": 40
                },
                "linkType": "external",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "rgb(255, 255, 255)",
                "borderColor": "rgb(0, 0, 0)",
                "linkedPageId": "",
                "fontColorHover": "rgb(255, 255, 255)",
                "backgroundColor": "rgb(13, 155, 151)",
                "borderColorHover": "rgb(0, 0, 0)",
                "backgroundColorHover": "rgb(3, 56, 47)"
              },
              "content": "Catalog PDF",
              "href": "https://drive.google.com/file/d/1PFlyUv4jgtnlr_7dqnJGMB4tmqM22YIv/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "zhoFCY",
              "type": "GridButton",
              "raw": {
                "rel": "nofollow",
                "href": "https://drive.google.com/file/d/1jKVC9Ah9xPfuSeDzLWHXWdFhhQJF29lv/view?usp=sharing",
                "type": "GridButton",
                "mobile": {
                  "top": 728,
                  "left": 99,
                  "width": 130,
                  "height": 32
                },
                "target": "_blank",
                "content": "Catalog PDF",
                "desktop": {
                  "top": 344,
                  "left": 1019,
                  "width": 162,
                  "height": 40
                },
                "linkType": "external",
                "settings": {
                  "type": "primary",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "fontColor": "rgb(255, 255, 255)",
                "borderColor": "rgb(0, 0, 0)",
                "linkedPageId": "",
                "fontColorHover": "rgb(255, 255, 255)",
                "backgroundColor": "rgb(13, 155, 151)",
                "borderColorHover": "rgb(0, 0, 0)",
                "backgroundColorHover": "rgb(3, 56, 47)"
              },
              "content": "Catalog PDF",
              "href": "https://drive.google.com/file/d/1jKVC9Ah9xPfuSeDzLWHXWdFhhQJF29lv/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            }
          ],
          "headings": [],
          "paragraphs": [
            "Hanging Lamps",
            "Wall lamp & Mirror lamps",
            "Hanging & celling  light",
            "Floor & Table Lamps",
            "Wall Lamps"
          ],
          "buttons": [
            {
              "id": "zJiyn_",
              "label": "Catalog PDF",
              "href": "https://drive.google.com/file/d/1_6m3SxrJ5HtJOSqBFm5vfeeDhBGf1BRb/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "zZ1fEs",
              "label": "Catalog PDF",
              "href": "https://drive.google.com/file/d/16RrSSABjnOBf9cOJSl8SJyaLduxy0VaS/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "zPB510",
              "label": "Catalog PDF",
              "href": "https://drive.google.com/file/d/1_ytCjPJ-raO6pbfISceldoeeRRfsswto/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "zjjvje",
              "label": "Catalog PDF",
              "href": "https://drive.google.com/file/d/1PFlyUv4jgtnlr_7dqnJGMB4tmqM22YIv/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            },
            {
              "id": "zhoFCY",
              "label": "Catalog PDF",
              "href": "https://drive.google.com/file/d/1jKVC9Ah9xPfuSeDzLWHXWdFhhQJF29lv/view?usp=sharing",
              "target": "_blank",
              "linkType": "external"
            }
          ],
          "images": [
            {
              "id": "zq2twm",
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "zE68eY",
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "zRIaf4",
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "zpGwDL",
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            },
            {
              "id": "ze58ZX",
              "url": "",
              "alt": "",
              "width": 1563,
              "height": 1563
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "zVF43B",
          "type": "BlockEcommerceProductList",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "z4c64D",
          "type": "BlockImageSlideshow",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [
            {
              "id": "z4c64D_slide_0",
              "url": "/assets/projects/dsc09758-a01hkH3Y9uhcKEc0.JPG",
              "path": "dsc09758-a01hkH3Y9uhcKEc0.JPG",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "z4c64D_slide_1",
              "url": "/assets/projects/dsc09738-Zu3m7g53jinktiDJ.JPG",
              "path": "dsc09738-Zu3m7g53jinktiDJ.JPG",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "z4c64D_slide_2",
              "url": "/assets/projects/dsc09743-qZwb0UB5B2OImJ70.JPG",
              "path": "dsc09743-qZwb0UB5B2OImJ70.JPG",
              "alt": "",
              "width": 3840,
              "height": 2158
            },
            {
              "id": "z4c64D_slide_3",
              "url": "/assets/projects/dsc09723-K64jfJ3jr2C5Q2Gj.jpg",
              "path": "dsc09723-K64jfJ3jr2C5Q2Gj.jpg",
              "alt": "",
              "width": 3840,
              "height": 2158
            }
          ],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "ai-Ahl8LM",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "ai-vxqfel",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"color: rgb(0, 0, 0);\">Lighting Gallery</h3>",
                "desktop": {
                  "top": 80,
                  "left": 0,
                  "width": 1224,
                  "height": 62
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zpbdPY"
              },
              "html": "<h3 dir=\"auto\" style=\"color: rgb(0, 0, 0);\">Lighting Gallery</h3>",
              "text": "Lighting Gallery"
            },
            {
              "id": "ai-L4u9oP",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 96,
                  "left": 0,
                  "width": 328,
                  "height": 48
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(86, 88, 94);\">Explore our stunning collection of premium lighting designs.</p>",
                "desktop": {
                  "top": 160,
                  "left": 374,
                  "width": 477,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "center",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z2NrqX"
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(86, 88, 94);\">Explore our stunning collection of premium lighting designs.</p>",
              "text": "Explore our stunning collection of premium lighting designs."
            },
            {
              "id": "ai-cYIKrX",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 184,
                  "left": 0,
                  "width": 158,
                  "height": 200
                },
                "desktop": {
                  "top": 264,
                  "crop": {
                    "top": 67.45688142098243,
                    "left": 100,
                    "scale": 1.375
                  },
                  "left": 0,
                  "width": 297,
                  "height": 480,
                  "borderRadius": "15px"
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09751-FRzTRDBv14IZqnoz.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "lightbox"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zDXW0N",
                "fullResolutionWidth": 1213,
                "fullResolutionHeight": 2160
              },
              "url": "",
              "alt": "",
              "width": 1213,
              "height": 2160
            },
            {
              "id": "ai-iPFGsw",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 400,
                  "left": 0,
                  "width": 158,
                  "height": 200
                },
                "desktop": {
                  "top": 264,
                  "crop": {
                    "top": 50.413223140495866,
                    "left": 50,
                    "scale": 1.36
                  },
                  "left": 618,
                  "width": 295,
                  "height": 480,
                  "borderRadius": "15px"
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09767-V513Uh9xA6mYsxk8.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "lightbox"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zanweH",
                "fullResolutionWidth": 1213,
                "fullResolutionHeight": 2160
              },
              "url": "",
              "alt": "",
              "width": 1213,
              "height": 2160
            },
            {
              "id": "ai--3pje_",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 185,
                  "left": 170,
                  "width": 158,
                  "height": 199
                },
                "desktop": {
                  "top": 264,
                  "crop": {
                    "top": 100,
                    "left": 100,
                    "scale": 1
                  },
                  "left": 309,
                  "width": 297,
                  "height": 480,
                  "borderRadius": "15px"
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09755-sR1zA2RiOZZti9kP.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "lightbox"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zsUsGi",
                "fullResolutionWidth": 1213,
                "fullResolutionHeight": 2160
              },
              "url": "",
              "alt": "",
              "width": 1213,
              "height": 2160
            },
            {
              "id": "ai-PnBnbc",
              "type": "GridImage",
              "raw": {
                "rel": "nofollow",
                "type": "GridImage",
                "mobile": {
                  "top": 400,
                  "left": 170,
                  "width": 158,
                  "height": 200
                },
                "desktop": {
                  "top": 264,
                  "crop": {
                    "top": 37.449392712550605,
                    "left": 48.1981981981982,
                    "scale": 1.375
                  },
                  "left": 927,
                  "width": 297,
                  "height": 480,
                  "borderRadius": "15px"
                },
                "settings": {
                  "alt": "",
                  "path": "dsc09759-UQyF2voWDS9Ohb5T.JPG",
                  "origin": "assets",
                  "styles": {
                    "align": "center",
                    "justify": "center",
                    "m-element-margin": "0 0 16px 0"
                  },
                  "clickAction": "lightbox"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zEyR8-",
                "fullResolutionWidth": 1213,
                "fullResolutionHeight": 2160
              },
              "url": "",
              "alt": "",
              "width": 1213,
              "height": 2160
            }
          ],
          "headings": [
            {
              "level": "h3",
              "text": "Lighting Gallery"
            }
          ],
          "paragraphs": [
            "Explore our stunning collection of premium lighting designs."
          ],
          "buttons": [],
          "images": [
            {
              "id": "ai-cYIKrX",
              "url": "",
              "alt": "",
              "width": 1213,
              "height": 2160
            },
            {
              "id": "ai-iPFGsw",
              "url": "",
              "alt": "",
              "width": 1213,
              "height": 2160
            },
            {
              "id": "ai--3pje_",
              "url": "",
              "alt": "",
              "width": 1213,
              "height": 2160
            },
            {
              "id": "ai-PnBnbc",
              "url": "",
              "alt": "",
              "width": 1213,
              "height": 2160
            }
          ],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        },
        {
          "id": "z1u6Wd",
          "type": "BlockLayout",
          "elements": [
            {
              "id": "z8_yiQ",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 40,
                  "left": 0,
                  "width": 328,
                  "height": 42
                },
                "content": "<h3 dir=\"auto\" style=\"color: rgb(255, 255, 255);\"><span style=\"font-weight: 700;\"><strong>About the store</strong></span></h3>",
                "desktop": {
                  "top": 144,
                  "left": 0,
                  "width": 503,
                  "height": 62
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "m-text": "center",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zTaTmK"
              },
              "html": "<h3 dir=\"auto\" style=\"color: rgb(255, 255, 255);\"><span style=\"font-weight: 700;\"><strong>About the store</strong></span></h3>",
              "text": "About the store"
            },
            {
              "id": "zMzTm5",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 95,
                  "left": 0,
                  "width": 328,
                  "height": 48
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Inform visitors about your business location and working hours.</p>",
                "desktop": {
                  "top": 216,
                  "left": 0,
                  "width": 503,
                  "height": 48
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "z2F9HQ"
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">Inform visitors about your business location and working hours.</p>",
              "text": "Inform visitors about your business location and working hours."
            },
            {
              "id": "z5oK7T",
              "type": "GridTextBox",
              "raw": {
                "type": "GridTextBox",
                "mobile": {
                  "top": 160,
                  "left": 0,
                  "width": 328,
                  "height": 176
                },
                "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); margin-bottom: 8px;\"><strong>Address</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px; margin-bottom: 24px;\">B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px; margin-bottom: 24px;\"><strong>Hours</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px;\">10am - 8pm</p>",
                "desktop": {
                  "top": 280,
                  "left": 0,
                  "width": 333,
                  "height": 163
                },
                "settings": {
                  "styles": {
                    "text": "left",
                    "align": "flex-start",
                    "justify": "flex-start",
                    "m-element-margin": "0 0 16px 0"
                  }
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zHd_5c"
              },
              "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); margin-bottom: 8px;\"><strong>Address</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px; margin-bottom: 24px;\">B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px; margin-bottom: 24px;\"><strong>Hours</strong></p><p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 16px;\">10am - 8pm</p>",
              "text": "Address\nB - 103, Money Plant High Street, Jagatpur Road, Ahmedabad\nHours\n10am - 8pm"
            },
            {
              "id": "z1nKbM",
              "type": "GridMap",
              "raw": {
                "type": "GridMap",
                "mobile": {
                  "top": 360,
                  "left": 0,
                  "width": 328,
                  "height": 240
                },
                "desktop": {
                  "top": 80,
                  "left": 618,
                  "width": 606,
                  "height": 384
                },
                "settings": {
                  "src": "https://maps.google.com/maps?q=Arisca%20light%20studio,B%20-%20103,%20Money%20Plant%20High%20Street,%20Jagatpur%20Road,%20Ahmedabad&t=m&z=13&ie=UTF8&output=embed",
                  "styles": {
                    "align": "center",
                    "justify": "center"
                  },
                  "m-element-margin": "0 0 16px 0"
                },
                "animation": {
                  "name": "slide",
                  "type": "global"
                },
                "initialElementId": "zzAx3Y"
              },
              "src": "https://maps.google.com/maps?q=Arisca%20light%20studio,B%20-%20103,%20Money%20Plant%20High%20Street,%20Jagatpur%20Road,%20Ahmedabad&t=m&z=13&ie=UTF8&output=embed"
            }
          ],
          "headings": [
            {
              "level": "h3",
              "text": "About the store"
            }
          ],
          "paragraphs": [
            "Inform visitors about your business location and working hours.",
            "Address\nB - 103, Money Plant High Street, Jagatpur Road, Ahmedabad\nHours\n10am - 8pm"
          ],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [
            {
              "id": "z1nKbM",
              "src": "https://maps.google.com/maps?q=Arisca%20light%20studio,B%20-%20103,%20Money%20Plant%20High%20Street,%20Jagatpur%20Road,%20Ahmedabad&t=m&z=13&ie=UTF8&output=embed"
            }
          ],
          "socialIcons": []
        }
      ]
    },
    "lofy-18w-grace-cob-bkrg": {
      "id": "prod_01KK95T2JR5MFXKWS0CR411JSJ",
      "name": "Lofy 18W-Grace-Cob BK+RG",
      "slug": "lofy-18w-grace-cob-bkrg",
      "path": "/lofy-18w-grace-cob-bkrg",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 18W-Grace-Cob BK+RG",
        "description": "Enhance your interiors with LOFY LED Downlights, offering focused and energy-efficient lighting. Designed for easy installation, these premium downlights feature a sleek round shape and advanced LED technology for long-lasting brightness and minimal energy consumption. Ideal for homes, offices, a...",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-18w-grace-cob-bkrg"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-18w-grace-cob-bkbk": {
      "id": "prod_01KK95RBE4R7F2MQ59NQA9BM0W",
      "name": "Lofy 18W-Grace Cob BK+BK",
      "slug": "lofy-18w-grace-cob-bkbk",
      "path": "/lofy-18w-grace-cob-bkbk",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 18W-Grace Cob BK+BK",
        "description": "Brighten your interiors with this stylish pair of LOFY LED downlights. Featuring a sleek black design and high-efficiency LED technology, these lights are ideal for modern homes and offices. Easy to install and built to last, they provide excellent illumination while saving energy.",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-18w-grace-cob-bkbk"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-18-futron-flava-cob-black": {
      "id": "prod_01KK95M8PSXVPX9CSXC3F8J13N",
      "name": "Lofy 18 Flava Cob Black",
      "slug": "lofy-18-futron-flava-cob-black",
      "path": "/lofy-18-futron-flava-cob-black",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 18 Flava Cob Black",
        "description": "Brighten up your space with Lofy LED Downlights, designed for exceptional energy efficiency and powerful illumination. With a sleek black finish and robust build, these lights seamlessly integrate into any modern home or office decor. Perfect for highlighting key areas, they offer long-lasting pe...",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-18-futron-flava-cob-black"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-15w-ssk-round-p": {
      "id": "prod_01KJZ6TPTQ52SJGW5TVN9KHVJQ",
      "name": "Lofy 15W SSK-Round P",
      "slug": "lofy-15w-ssk-round-p",
      "path": "/lofy-15w-ssk-round-p",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 15W SSK-Round P",
        "description": "Upgrade your home or office lighting with the LED Round Panel Light from Lofy Lights. Featuring a sleek, modern design and easy installation, this fixture provides bright, even illumination while consuming minimal power. Ideal for living rooms, kitchens, and workspaces, it offers long-lasting per...",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-15w-ssk-round-p"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-15w-ssk-square-p": {
      "id": "prod_01KJZ6KV0B5NPWAQMBS5W9R8ND",
      "name": "Lofy 15W SSK Square P",
      "slug": "lofy-15w-ssk-square-p",
      "path": "/lofy-15w-ssk-square-p",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 15W SSK Square P",
        "description": "Brighten your space with the Lofy Lights Square LED Panel Light. Designed for modern homes and offices, this sleek fixture delivers energy-efficient illumination while blending seamlessly with every decor. Easy installation and long-lasting durability make it a perfect choice for any room.",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-15w-ssk-square-p"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-12w-flc-334-white-metal-deep-p": {
      "id": "prod_01KJZ6BGBRKM1WEK3VC1F41KFA",
      "name": "Lofy 12W-FLC-334 White Metal Deep P",
      "slug": "lofy-12w-flc-334-white-metal-deep-p",
      "path": "/lofy-12w-flc-334-white-metal-deep-p",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 12W-FLC-334 White Metal Deep P",
        "description": "Brighten up your space with the Lofy LED Round Downlight. Designed for high efficiency and easy installation, this sleek fixture offers premium lighting with low power consumption. Its modern look fits seamlessly into ceilings, making it ideal for homes, offices, and commercial spaces. Experience...",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-12w-flc-334-white-metal-deep-p"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-12w-grace-cob-bkrg": {
      "id": "prod_01KK95827FS72J3MDVEJ6GZBQT",
      "name": "Lofy 12W-Grace Cob BK+RG",
      "slug": "lofy-12w-grace-cob-bkrg",
      "path": "/lofy-12w-grace-cob-bkrg",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 12W-Grace Cob BK+RG",
        "description": "Upgrade your space with Lofy LED Downlights, designed for modern interiors. Offering powerful illumination, energy efficiency, and a sleek finish, these lights are perfect for homes, offices, and retail settings. Enjoy superior brightness and long-lasting durability with easy installation.",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-12w-grace-cob-bkrg"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-12w-grace-cob-bkbk": {
      "id": "prod_01KK955GDMRH54NPJ5ZXXT45EB",
      "name": "Lofy 12W-Grace Cob BK+BK",
      "slug": "lofy-12w-grace-cob-bkbk",
      "path": "/lofy-12w-grace-cob-bkbk",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 12W-Grace Cob BK+BK",
        "description": "Elevate your interiors with these premium recessed COB LED downlights from Lofy Lights. Featuring high luminous efficiency and a sleek black finish, these lights are perfect for modern homes, offices, or showrooms. Enjoy energy savings and a long lifespan, all while ensuring bright, focused illum...",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-12w-grace-cob-bkbk"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-12w-futron-beat-cylinder-bkbk": {
      "id": "prod_01KK9528KAFSGN020KMVV59EHG",
      "name": "Lofy 12W Beat Cylinder BK+BK",
      "slug": "lofy-12w-futron-beat-cylinder-bkbk",
      "path": "/lofy-12w-futron-beat-cylinder-bkbk",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 12W Beat Cylinder BK+BK",
        "description": "Enhance your home or office with stylish Lofy Black Cylinder Wall Lights. Featuring a sleek, minimal design, these lights offer elegant illumination and blend perfectly with contemporary spaces. Ideal for living rooms, bedrooms, or hallways, they provide both functionality and aesthetic appeal.",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-12w-futron-beat-cylinder-bkbk"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-8w-ssk-round-p": {
      "id": "prod_01KJZ670KS1D664Q1Z9XH9EDVJ",
      "name": "Lofy 8W SSK Round P",
      "slug": "lofy-8w-ssk-round-p",
      "path": "/lofy-8w-ssk-round-p",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 8W SSK Round P",
        "description": "Brighten up your space with the Lofy LED Downlight. Designed for modern interiors, this compact ceiling fixture offers superior energy efficiency and a sleek aesthetic. Perfect for homes, offices, and retail spaces, it provides clear, balanced illumination while reducing power consumption. Easy t...",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-8w-ssk-round-p"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-7w-grace-cob-bkrg": {
      "id": "prod_01KK94JDJMP187JEF89S9C21SC",
      "name": "Lofy 7W-Grace-Cob-BK+RG",
      "slug": "lofy-7w-grace-cob-bkrg",
      "path": "/lofy-7w-grace-cob-bkrg",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 7W-Grace-Cob-BK+RG",
        "description": "Upgrade your space with Lofy COB Downlights—designed with an elegant copper finish to add a touch of luxury to any room. These high-efficiency LED spotlights provide bright, focused illumination that is energy-saving and long-lasting, perfect for home or commercial use. Easy to install and engine...",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-7w-grace-cob-bkrg"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-7w-grace-cob-bkbk": {
      "id": "prod_01KK94FAK2BVYFHH7397H0HPEW",
      "name": "Lofy 7W-Grace Cob BK+BK",
      "slug": "lofy-7w-grace-cob-bkbk",
      "path": "/lofy-7w-grace-cob-bkbk",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 7W-Grace Cob BK+BK",
        "description": "Brighten your space with Lofy LED Downlights, perfect for homes, offices, and showrooms. Energy-efficient, stylish, and easy to install, these lights provide excellent illumination and a contemporary look. Durable construction ensures long-lasting performance.",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-7w-grace-cob-bkbk"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-7w-futron-flava-cob-white": {
      "id": "prod_01KJYT5NFHFM8N1CPKK3SR6SZY",
      "name": "Lofy 7W Flava Cob White",
      "slug": "lofy-7w-futron-flava-cob-white",
      "path": "/lofy-7w-futron-flava-cob-white",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 7W Flava Cob White",
        "description": "Brighten up your home or office with the Lofy LED Recessed Downlights. This set of two modern, energy-saving downlights delivers focused illumination, perfect for living rooms, kitchens, or workspaces. Easy to install and designed for durability, they add a sleek, contemporary touch to any space....",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-7w-futron-flava-cob-white"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    },
    "lofy-7w-futron-flava-cob-black": {
      "id": "prod_01KJYSX2RZEDCZ04SZFQ8H9K0Y",
      "name": "Lofy 7W Flava Cob Black",
      "slug": "lofy-7w-futron-flava-cob-black",
      "path": "/lofy-7w-futron-flava-cob-black",
      "type": "ecommerce-dynamic-product",
      "isProductPage": true,
      "status": "published",
      "meta": {
        "title": "Lofy 7W Flava Cob Black",
        "description": "Enhance your interiors with Lofy Downlight LED Spotlights. This set of two energy-efficient, stylish black recessed lights is designed to provide superior brightness and a modern look to any space. Perfect for living rooms, offices, or display areas, they offer easy installation and long-lasting ...",
        "keywords": "",
        "canonical": "https://www.ariscalightstudio.com/lofy-7w-futron-flava-cob-black"
      },
      "blockIds": [
        "zXf23n"
      ],
      "sections": [
        {
          "id": "zXf23n",
          "type": "BlockEcommerceProduct",
          "elements": [],
          "headings": [],
          "paragraphs": [],
          "buttons": [],
          "images": [],
          "slides": [],
          "forms": [],
          "maps": [],
          "socialIcons": []
        }
      ]
    }
  },
  "products": [
    {
      "id": "prod_01KK95T2JR5MFXKWS0CR411JSJ",
      "title": "Lofy 18W-Grace-Cob BK+RG",
      "subtitle": "Modern Round Recessed Lighting",
      "ribbon": "New",
      "slug": "lofy-18w-grace-cob-bkrg",
      "urlHandle": "lofy-18w-grace-cob-bkrg",
      "path": "/lofy-18w-grace-cob-bkrg",
      "descriptionHtml": "<p>Enhance your interiors with LOFY LED Downlights, offering focused and energy-efficient lighting. Designed for easy installation, these premium downlights feature a sleek round shape and advanced LED technology for long-lasting brightness and minimal energy consumption. Ideal for homes, offices, and commercial spaces, they deliver superior illumination with a stylish finish.</p>",
      "descriptionText": "Enhance your interiors with LOFY LED Downlights, offering focused and energy-efficient lighting. Designed for easy installation, these premium downlights feature a sleek round shape and advanced LED technology for long-lasting brightness and minimal energy consumption. Ideal for homes, offices, and commercial spaces, they deliver superior illumination with a stylish finish.",
      "thumbnail": "/assets/products/31b92c6c-63fa-4e1e-a22f-d8aad2e48e80.jpg",
      "images": [
        {
          "id": "prod_01KK95T2JR5MFXKWS0CR411JSJ_img_0",
          "url": "/assets/products/31b92c6c-63fa-4e1e-a22f-d8aad2e48e80.jpg",
          "order": 0
        },
        {
          "id": "prod_01KK95T2JR5MFXKWS0CR411JSJ_img_1",
          "url": "/assets/products/136c65b8-b2c3-42bf-88e2-178f60da0cbe.jpg",
          "order": 1
        },
        {
          "id": "prod_01KK95T2JR5MFXKWS0CR411JSJ_img_2",
          "url": "/assets/products/0120fae3-6e86-4bd2-8c87-db1f88571789.jpg",
          "order": 2
        },
        {
          "id": "prod_01KK95T2JR5MFXKWS0CR411JSJ_img_3",
          "url": "/assets/products/876e2bc9-7450-4563-813a-f5a0c245a411.jpg",
          "order": 3
        }
      ],
      "order": -15,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KK95RBE4R7F2MQ59NQA9BM0W",
      "title": "Lofy 18W-Grace Cob BK+BK",
      "subtitle": "Energy-efficient black recessed lights",
      "ribbon": "New",
      "slug": "lofy-18w-grace-cob-bkbk",
      "urlHandle": "lofy-18w-grace-cob-bkbk",
      "path": "/lofy-18w-grace-cob-bkbk",
      "descriptionHtml": "<p>Brighten your interiors with this stylish pair of LOFY LED downlights. Featuring a sleek black design and high-efficiency LED technology, these lights are ideal for modern homes and offices. Easy to install and built to last, they provide excellent illumination while saving energy.</p>",
      "descriptionText": "Brighten your interiors with this stylish pair of LOFY LED downlights. Featuring a sleek black design and high-efficiency LED technology, these lights are ideal for modern homes and offices. Easy to install and built to last, they provide excellent illumination while saving energy.",
      "thumbnail": "/assets/products/716b700b-e80b-4710-a8d0-c53b9f366fb8.jpg",
      "images": [
        {
          "id": "prod_01KK95RBE4R7F2MQ59NQA9BM0W_img_0",
          "url": "/assets/products/716b700b-e80b-4710-a8d0-c53b9f366fb8.jpg",
          "order": 0
        },
        {
          "id": "prod_01KK95RBE4R7F2MQ59NQA9BM0W_img_1",
          "url": "/assets/products/09a9c521-0897-49d0-b5f3-598d9e2cd589.jpg",
          "order": 1
        },
        {
          "id": "prod_01KK95RBE4R7F2MQ59NQA9BM0W_img_2",
          "url": "/assets/products/094ac6c9-4174-40f0-b002-5e20477e0605.jpg",
          "order": 2
        },
        {
          "id": "prod_01KK95RBE4R7F2MQ59NQA9BM0W_img_3",
          "url": "/assets/products/d65f2d63-b037-417c-9422-a2870bfe4c42.jpg",
          "order": 3
        }
      ],
      "order": -14,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KK95M8PSXVPX9CSXC3F8J13N",
      "title": "Lofy 18 Flava Cob Black",
      "subtitle": "High-efficiency recessed lighting solution",
      "ribbon": "Bestseller",
      "slug": "lofy-18-futron-flava-cob-black",
      "urlHandle": "lofy-18-futron-flava-cob-black",
      "path": "/lofy-18-futron-flava-cob-black",
      "descriptionHtml": "<p>Brighten up your space with Lofy LED Downlights, designed for exceptional energy efficiency and powerful illumination. With a sleek black finish and robust build, these lights seamlessly integrate into any modern home or office decor. Perfect for highlighting key areas, they offer long-lasting performance and lower power consumption, making them an ideal choice for cost-effective and stylish lighting.</p>",
      "descriptionText": "Brighten up your space with Lofy LED Downlights, designed for exceptional energy efficiency and powerful illumination. With a sleek black finish and robust build, these lights seamlessly integrate into any modern home or office decor. Perfect for highlighting key areas, they offer long-lasting performance and lower power consumption, making them an ideal choice for cost-effective and stylish lighting.",
      "thumbnail": "/assets/products/e3ff6eab-39c7-4079-bbc9-1f1a33bc95ea.jpg",
      "images": [
        {
          "id": "prod_01KK95M8PSXVPX9CSXC3F8J13N_img_0",
          "url": "/assets/products/e3ff6eab-39c7-4079-bbc9-1f1a33bc95ea.jpg",
          "order": 0
        },
        {
          "id": "prod_01KK95M8PSXVPX9CSXC3F8J13N_img_1",
          "url": "/assets/products/c669d9d5-b027-465c-a879-614188f72f5e.jpg",
          "order": 1
        },
        {
          "id": "prod_01KK95M8PSXVPX9CSXC3F8J13N_img_2",
          "url": "/assets/products/e9711355-5715-468d-af15-347f8f210675.jpg",
          "order": 2
        },
        {
          "id": "prod_01KK95M8PSXVPX9CSXC3F8J13N_img_3",
          "url": "/assets/products/35248f72-2f5a-40df-b03e-82215ce96325.jpg",
          "order": 3
        }
      ],
      "order": -13,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KJZ6TPTQ52SJGW5TVN9KHVJQ",
      "title": "Lofy 15W SSK-Round P",
      "subtitle": "Energy-efficient ceiling fixture",
      "ribbon": "New",
      "slug": "lofy-15w-ssk-round-p",
      "urlHandle": "lofy-15w-ssk-round-p",
      "path": "/lofy-15w-ssk-round-p",
      "descriptionHtml": "<p>Upgrade your home or office lighting with the LED Round Panel Light from Lofy Lights. Featuring a sleek, modern design and easy installation, this fixture provides bright, even illumination while consuming minimal power. Ideal for living rooms, kitchens, and workspaces, it offers long-lasting performance you can rely on.</p>",
      "descriptionText": "Upgrade your home or office lighting with the LED Round Panel Light from Lofy Lights. Featuring a sleek, modern design and easy installation, this fixture provides bright, even illumination while consuming minimal power. Ideal for living rooms, kitchens, and workspaces, it offers long-lasting performance you can rely on.",
      "thumbnail": "/assets/products/4e3be4e4-1203-4ede-beac-6f4d3c1d7832.jpg",
      "images": [
        {
          "id": "prod_01KJZ6TPTQ52SJGW5TVN9KHVJQ_img_0",
          "url": "/assets/products/4e3be4e4-1203-4ede-beac-6f4d3c1d7832.jpg",
          "order": 0
        },
        {
          "id": "prod_01KJZ6TPTQ52SJGW5TVN9KHVJQ_img_1",
          "url": "/assets/products/cf9730f7-acd7-4bff-afa5-49f4382fcb98.jpg",
          "order": 1
        },
        {
          "id": "prod_01KJZ6TPTQ52SJGW5TVN9KHVJQ_img_2",
          "url": "/assets/products/0fe27cc3-7ea7-44f8-9fcc-bc87c3f0984a.jpg",
          "order": 2
        },
        {
          "id": "prod_01KJZ6TPTQ52SJGW5TVN9KHVJQ_img_3",
          "url": "/assets/products/45073bda-794b-4a8a-94fc-365b5b0a1ce2.jpg",
          "order": 3
        }
      ],
      "order": -12.5,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KJZ6KV0B5NPWAQMBS5W9R8ND",
      "title": "Lofy 15W SSK Square P",
      "subtitle": "Slim, Energy-efficient Ceiling Light",
      "ribbon": null,
      "slug": "lofy-15w-ssk-square-p",
      "urlHandle": "lofy-15w-ssk-square-p",
      "path": "/lofy-15w-ssk-square-p",
      "descriptionHtml": "<p>Brighten your space with the Lofy Lights Square LED Panel Light. Designed for modern homes and offices, this sleek fixture delivers energy-efficient illumination while blending seamlessly with every decor. Easy installation and long-lasting durability make it a perfect choice for any room.</p>",
      "descriptionText": "Brighten your space with the Lofy Lights Square LED Panel Light. Designed for modern homes and offices, this sleek fixture delivers energy-efficient illumination while blending seamlessly with every decor. Easy installation and long-lasting durability make it a perfect choice for any room.",
      "thumbnail": "/assets/products/871f7455-12a9-4a39-b9f8-6a5f140977ff.jpg",
      "images": [
        {
          "id": "prod_01KJZ6KV0B5NPWAQMBS5W9R8ND_img_0",
          "url": "/assets/products/871f7455-12a9-4a39-b9f8-6a5f140977ff.jpg",
          "order": 0
        },
        {
          "id": "prod_01KJZ6KV0B5NPWAQMBS5W9R8ND_img_1",
          "url": "/assets/products/5639c759-185f-47db-9616-297bd08612cf.jpg",
          "order": 1
        },
        {
          "id": "prod_01KJZ6KV0B5NPWAQMBS5W9R8ND_img_2",
          "url": "/assets/products/84f2aaf7-0da5-4935-9368-7d330b234b13.jpg",
          "order": 2
        },
        {
          "id": "prod_01KJZ6KV0B5NPWAQMBS5W9R8ND_img_3",
          "url": "/assets/products/fab84ef2-2c90-4b3b-b693-34441df2d940.jpg",
          "order": 3
        }
      ],
      "order": -12.25,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KJZ6BGBRKM1WEK3VC1F41KFA",
      "title": "Lofy 12W-FLC-334 White Metal Deep P",
      "subtitle": "Ultra-efficient recessed light",
      "ribbon": null,
      "slug": "lofy-12w-flc-334-white-metal-deep-p",
      "urlHandle": "lofy-12w-flc-334-white-metal-deep-p",
      "path": "/lofy-12w-flc-334-white-metal-deep-p",
      "descriptionHtml": "<p>Brighten up your space with the Lofy LED Round Downlight. Designed for high efficiency and easy installation, this sleek fixture offers premium lighting with low power consumption. Its modern look fits seamlessly into ceilings, making it ideal for homes, offices, and commercial spaces. Experience long-lasting performance and energy savings in every corner. Upgrade your lighting today!</p>",
      "descriptionText": "Brighten up your space with the Lofy LED Round Downlight. Designed for high efficiency and easy installation, this sleek fixture offers premium lighting with low power consumption. Its modern look fits seamlessly into ceilings, making it ideal for homes, offices, and commercial spaces. Experience long-lasting performance and energy savings in every corner. Upgrade your lighting today!",
      "thumbnail": "/assets/products/acf8e618-35a8-4128-a0a8-025afddf7f3b.jpg",
      "images": [
        {
          "id": "prod_01KJZ6BGBRKM1WEK3VC1F41KFA_img_0",
          "url": "/assets/products/acf8e618-35a8-4128-a0a8-025afddf7f3b.jpg",
          "order": 0
        },
        {
          "id": "prod_01KJZ6BGBRKM1WEK3VC1F41KFA_img_1",
          "url": "/assets/products/423e2931-a4c2-4980-9a33-051f0f7ceb3c.jpg",
          "order": 1
        },
        {
          "id": "prod_01KJZ6BGBRKM1WEK3VC1F41KFA_img_2",
          "url": "/assets/products/a7e271b6-0eb7-44f3-8261-7a1c633762ed.jpg",
          "order": 2
        },
        {
          "id": "prod_01KJZ6BGBRKM1WEK3VC1F41KFA_img_3",
          "url": "/assets/products/a2353ff6-dcfc-491f-bccc-3deb7c6d7df1.jpg",
          "order": 3
        }
      ],
      "order": -12.125,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KK95827FS72J3MDVEJ6GZBQT",
      "title": "Lofy 12W-Grace Cob BK+RG",
      "subtitle": "High-performance recessed lighting",
      "ribbon": null,
      "slug": "lofy-12w-grace-cob-bkrg",
      "urlHandle": "lofy-12w-grace-cob-bkrg",
      "path": "/lofy-12w-grace-cob-bkrg",
      "descriptionHtml": "<p>Upgrade your space with Lofy LED Downlights, designed for modern interiors. Offering powerful illumination, energy efficiency, and a sleek finish, these lights are perfect for homes, offices, and retail settings. Enjoy superior brightness and long-lasting durability with easy installation.</p>",
      "descriptionText": "Upgrade your space with Lofy LED Downlights, designed for modern interiors. Offering powerful illumination, energy efficiency, and a sleek finish, these lights are perfect for homes, offices, and retail settings. Enjoy superior brightness and long-lasting durability with easy installation.",
      "thumbnail": "/assets/products/d9d904dc-be4d-4dfe-8afd-e797801c5669.jpg",
      "images": [
        {
          "id": "prod_01KK95827FS72J3MDVEJ6GZBQT_img_0",
          "url": "/assets/products/d9d904dc-be4d-4dfe-8afd-e797801c5669.jpg",
          "order": 0
        },
        {
          "id": "prod_01KK95827FS72J3MDVEJ6GZBQT_img_1",
          "url": "/assets/products/7081ee92-247c-4430-8543-151fba534952.jpg",
          "order": 1
        },
        {
          "id": "prod_01KK95827FS72J3MDVEJ6GZBQT_img_2",
          "url": "/assets/products/7431e6b9-5a5a-46d1-8796-fe5233709329.jpg",
          "order": 2
        },
        {
          "id": "prod_01KK95827FS72J3MDVEJ6GZBQT_img_3",
          "url": "/assets/products/8f2a4379-ed6a-456a-821f-64c2b2c140b8.jpg",
          "order": 3
        },
        {
          "id": "prod_01KK95827FS72J3MDVEJ6GZBQT_img_4",
          "url": "/assets/products/11747c1b-a386-45ab-9a1c-90a8888ff06f.jpg",
          "order": 4
        }
      ],
      "order": -12,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KK955GDMRH54NPJ5ZXXT45EB",
      "title": "Lofy 12W-Grace Cob BK+BK",
      "subtitle": "High-efficiency indoor lighting solution",
      "ribbon": null,
      "slug": "lofy-12w-grace-cob-bkbk",
      "urlHandle": "lofy-12w-grace-cob-bkbk",
      "path": "/lofy-12w-grace-cob-bkbk",
      "descriptionHtml": "<p>Elevate your interiors with these premium recessed COB LED downlights from Lofy Lights. Featuring high luminous efficiency and a sleek black finish, these lights are perfect for modern homes, offices, or showrooms. Enjoy energy savings and a long lifespan, all while ensuring bright, focused illumination. Easy to install and built to last!</p>",
      "descriptionText": "Elevate your interiors with these premium recessed COB LED downlights from Lofy Lights. Featuring high luminous efficiency and a sleek black finish, these lights are perfect for modern homes, offices, or showrooms. Enjoy energy savings and a long lifespan, all while ensuring bright, focused illumination. Easy to install and built to last!",
      "thumbnail": "/assets/products/aebd00ef-06f7-4bc6-a67d-55d67f364538.jpg",
      "images": [
        {
          "id": "prod_01KK955GDMRH54NPJ5ZXXT45EB_img_0",
          "url": "/assets/products/aebd00ef-06f7-4bc6-a67d-55d67f364538.jpg",
          "order": 0
        },
        {
          "id": "prod_01KK955GDMRH54NPJ5ZXXT45EB_img_1",
          "url": "/assets/products/92c930ed-311e-4ebb-9382-bfe0ef7f200e.jpg",
          "order": 1
        },
        {
          "id": "prod_01KK955GDMRH54NPJ5ZXXT45EB_img_2",
          "url": "/assets/products/968181bd-0b00-467b-b5c6-d29c297349cf.jpg",
          "order": 2
        },
        {
          "id": "prod_01KK955GDMRH54NPJ5ZXXT45EB_img_3",
          "url": "/assets/products/37eb9ccb-fbf9-4f92-b089-235aadab7489.jpg",
          "order": 3
        },
        {
          "id": "prod_01KK955GDMRH54NPJ5ZXXT45EB_img_4",
          "url": "/assets/products/670a1c44-7b65-422d-badf-e058546a7f26.jpg",
          "order": 4
        }
      ],
      "order": -11,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KK9528KAFSGN020KMVV59EHG",
      "title": "Lofy 12W Beat Cylinder BK+BK",
      "subtitle": "Modern decorative lighting for interiors",
      "ribbon": "New",
      "slug": "lofy-12w-futron-beat-cylinder-bkbk",
      "urlHandle": "lofy-12w-futron-beat-cylinder-bkbk",
      "path": "/lofy-12w-futron-beat-cylinder-bkbk",
      "descriptionHtml": "<p>Enhance your home or office with stylish Lofy Black Cylinder Wall Lights. Featuring a sleek, minimal design, these lights offer elegant illumination and blend perfectly with contemporary spaces. Ideal for living rooms, bedrooms, or hallways, they provide both functionality and aesthetic appeal.</p>",
      "descriptionText": "Enhance your home or office with stylish Lofy Black Cylinder Wall Lights. Featuring a sleek, minimal design, these lights offer elegant illumination and blend perfectly with contemporary spaces. Ideal for living rooms, bedrooms, or hallways, they provide both functionality and aesthetic appeal.",
      "thumbnail": "/assets/products/f6b8b1ab-acfb-4d5b-9968-dafb9d120435.jpg",
      "images": [
        {
          "id": "prod_01KK9528KAFSGN020KMVV59EHG_img_0",
          "url": "/assets/products/f6b8b1ab-acfb-4d5b-9968-dafb9d120435.jpg",
          "order": 0
        },
        {
          "id": "prod_01KK9528KAFSGN020KMVV59EHG_img_1",
          "url": "/assets/products/4d69bdf8-9970-4fd4-8d65-c0fb1b3fb334.jpg",
          "order": 1
        },
        {
          "id": "prod_01KK9528KAFSGN020KMVV59EHG_img_2",
          "url": "/assets/products/e83940ac-28d6-4aa3-9c13-bc848d57c429.jpg",
          "order": 2
        },
        {
          "id": "prod_01KK9528KAFSGN020KMVV59EHG_img_3",
          "url": "/assets/products/3f1ddb12-e389-49e8-94ae-a2fdcbfe7319.jpg",
          "order": 3
        }
      ],
      "order": -10,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KJZ670KS1D664Q1Z9XH9EDVJ",
      "title": "Lofy 8W SSK Round P",
      "subtitle": "Energy-efficient ceiling light",
      "ribbon": "New",
      "slug": "lofy-8w-ssk-round-p",
      "urlHandle": "lofy-8w-ssk-round-p",
      "path": "/lofy-8w-ssk-round-p",
      "descriptionHtml": "<p>Brighten up your space with the Lofy LED Downlight. Designed for modern interiors, this compact ceiling fixture offers superior energy efficiency and a sleek aesthetic. Perfect for homes, offices, and retail spaces, it provides clear, balanced illumination while reducing power consumption. Easy to install and long-lasting, it's the ideal choice for stylish, sustainable lighting.</p>",
      "descriptionText": "Brighten up your space with the Lofy LED Downlight. Designed for modern interiors, this compact ceiling fixture offers superior energy efficiency and a sleek aesthetic. Perfect for homes, offices, and retail spaces, it provides clear, balanced illumination while reducing power consumption. Easy to install and long-lasting, it's the ideal choice for stylish, sustainable lighting.",
      "thumbnail": "/assets/products/760aa0fc-82ff-49c6-964c-1e193b0cbe50.jpg",
      "images": [
        {
          "id": "prod_01KJZ670KS1D664Q1Z9XH9EDVJ_img_0",
          "url": "/assets/products/760aa0fc-82ff-49c6-964c-1e193b0cbe50.jpg",
          "order": 0
        },
        {
          "id": "prod_01KJZ670KS1D664Q1Z9XH9EDVJ_img_1",
          "url": "/assets/products/aac7933e-3fc2-46d2-ade4-2cdabe77b84d.jpg",
          "order": 1
        },
        {
          "id": "prod_01KJZ670KS1D664Q1Z9XH9EDVJ_img_2",
          "url": "/assets/products/70db7c02-2655-4573-a0d4-7686f0c58656.jpg",
          "order": 2
        }
      ],
      "order": -9.5,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KK94JDJMP187JEF89S9C21SC",
      "title": "Lofy 7W-Grace-Cob-BK+RG",
      "subtitle": "Sleek copper finish LED spotlights",
      "ribbon": "New",
      "slug": "lofy-7w-grace-cob-bkrg",
      "urlHandle": "lofy-7w-grace-cob-bkrg",
      "path": "/lofy-7w-grace-cob-bkrg",
      "descriptionHtml": "<p>Upgrade your space with Lofy COB Downlights—designed with an elegant copper finish to add a touch of luxury to any room. These high-efficiency LED spotlights provide bright, focused illumination that is energy-saving and long-lasting, perfect for home or commercial use. Easy to install and engineered for modern aesthetics.</p>",
      "descriptionText": "Upgrade your space with Lofy COB Downlights—designed with an elegant copper finish to add a touch of luxury to any room. These high-efficiency LED spotlights provide bright, focused illumination that is energy-saving and long-lasting, perfect for home or commercial use. Easy to install and engineered for modern aesthetics.",
      "thumbnail": "/assets/products/2c025b32-0c06-4891-af5b-7bec0e493f89.jpg",
      "images": [
        {
          "id": "prod_01KK94JDJMP187JEF89S9C21SC_img_0",
          "url": "/assets/products/2c025b32-0c06-4891-af5b-7bec0e493f89.jpg",
          "order": 0
        },
        {
          "id": "prod_01KK94JDJMP187JEF89S9C21SC_img_1",
          "url": "/assets/products/e2ed5bf2-402d-45af-8788-5c277da1d445.jpg",
          "order": 1
        },
        {
          "id": "prod_01KK94JDJMP187JEF89S9C21SC_img_2",
          "url": "/assets/products/87058546-ab2d-40c6-80f5-e499d56ec9b9.jpg",
          "order": 2
        },
        {
          "id": "prod_01KK94JDJMP187JEF89S9C21SC_img_3",
          "url": "/assets/products/9a2f7952-17cd-44fd-b2cf-eaccf2b908a1.jpg",
          "order": 3
        }
      ],
      "order": -9,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KK94FAK2BVYFHH7397H0HPEW",
      "title": "Lofy 7W-Grace Cob BK+BK",
      "subtitle": "Modern recessed lighting fixture",
      "ribbon": "New",
      "slug": "lofy-7w-grace-cob-bkbk",
      "urlHandle": "lofy-7w-grace-cob-bkbk",
      "path": "/lofy-7w-grace-cob-bkbk",
      "descriptionHtml": "<p>Brighten your space with Lofy LED Downlights, perfect for homes, offices, and showrooms. Energy-efficient, stylish, and easy to install, these lights provide excellent illumination and a contemporary look. Durable construction ensures long-lasting performance.</p>",
      "descriptionText": "Brighten your space with Lofy LED Downlights, perfect for homes, offices, and showrooms. Energy-efficient, stylish, and easy to install, these lights provide excellent illumination and a contemporary look. Durable construction ensures long-lasting performance.",
      "thumbnail": "/assets/products/b35c25c1-af43-4ba9-a2c5-60e0c2bd57df.jpg",
      "images": [
        {
          "id": "prod_01KK94FAK2BVYFHH7397H0HPEW_img_0",
          "url": "/assets/products/b35c25c1-af43-4ba9-a2c5-60e0c2bd57df.jpg",
          "order": 0
        },
        {
          "id": "prod_01KK94FAK2BVYFHH7397H0HPEW_img_1",
          "url": "/assets/products/45a125d2-82a9-49b6-88c5-b546963c44a4.jpg",
          "order": 1
        },
        {
          "id": "prod_01KK94FAK2BVYFHH7397H0HPEW_img_2",
          "url": "/assets/products/9400cf81-d872-457c-a319-a8b2e17ac8b9.jpg",
          "order": 2
        }
      ],
      "order": -8,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KJYT5NFHFM8N1CPKK3SR6SZY",
      "title": "Lofy 7W Flava Cob White",
      "subtitle": "Energy-efficient ceiling lighting duo",
      "ribbon": "Best Seller",
      "slug": "lofy-7w-futron-flava-cob-white",
      "urlHandle": "lofy-7w-futron-flava-cob-white",
      "path": "/lofy-7w-futron-flava-cob-white",
      "descriptionHtml": "<p>Brighten up your home or office with the Lofy LED Recessed Downlights. This set of two modern, energy-saving downlights delivers focused illumination, perfect for living rooms, kitchens, or workspaces. Easy to install and designed for durability, they add a sleek, contemporary touch to any space. Experience reliable performance and long-lasting LED efficiency for a stylish lighting upgrade.</p>",
      "descriptionText": "Brighten up your home or office with the Lofy LED Recessed Downlights. This set of two modern, energy-saving downlights delivers focused illumination, perfect for living rooms, kitchens, or workspaces. Easy to install and designed for durability, they add a sleek, contemporary touch to any space. Experience reliable performance and long-lasting LED efficiency for a stylish lighting upgrade.",
      "thumbnail": "/assets/products/071cba8e-97a1-4318-9d06-2b206c23a64c.jpg",
      "images": [
        {
          "id": "prod_01KJYT5NFHFM8N1CPKK3SR6SZY_img_0",
          "url": "/assets/products/071cba8e-97a1-4318-9d06-2b206c23a64c.jpg",
          "order": 0
        },
        {
          "id": "prod_01KJYT5NFHFM8N1CPKK3SR6SZY_img_1",
          "url": "/assets/products/ff545ca6-5417-4052-adab-098e73142ddd.jpg",
          "order": 1
        },
        {
          "id": "prod_01KJYT5NFHFM8N1CPKK3SR6SZY_img_2",
          "url": "/assets/products/89c82942-46bb-4bcc-bc44-cb47c6dcbf49.jpg",
          "order": 2
        }
      ],
      "order": -3,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    },
    {
      "id": "prod_01KJYSX2RZEDCZ04SZFQ8H9K0Y",
      "title": "Lofy 7W Flava Cob Black",
      "subtitle": "Modern recessed lighting for home or office",
      "ribbon": null,
      "slug": "lofy-7w-futron-flava-cob-black",
      "urlHandle": "lofy-7w-futron-flava-cob-black",
      "path": "/lofy-7w-futron-flava-cob-black",
      "descriptionHtml": "<p>Enhance your interiors with Lofy Downlight LED Spotlights. This set of two energy-efficient, stylish black recessed lights is designed to provide superior brightness and a modern look to any space. Perfect for living rooms, offices, or display areas, they offer easy installation and long-lasting performance.</p>",
      "descriptionText": "Enhance your interiors with Lofy Downlight LED Spotlights. This set of two energy-efficient, stylish black recessed lights is designed to provide superior brightness and a modern look to any space. Perfect for living rooms, offices, or display areas, they offer easy installation and long-lasting performance.",
      "thumbnail": "/assets/products/6933f422-f04f-42f5-985e-97f753b3ecd5.jpg",
      "images": [
        {
          "id": "prod_01KJYSX2RZEDCZ04SZFQ8H9K0Y_img_0",
          "url": "/assets/products/6933f422-f04f-42f5-985e-97f753b3ecd5.jpg",
          "order": 0
        },
        {
          "id": "prod_01KJYSX2RZEDCZ04SZFQ8H9K0Y_img_1",
          "url": "/assets/products/1206b565-332a-40f3-8085-d3aba975c5e7.jpg",
          "order": 1
        },
        {
          "id": "prod_01KJYSX2RZEDCZ04SZFQ8H9K0Y_img_2",
          "url": "/assets/products/fe91bc42-b7c2-425a-83b1-5533ff82a814.jpg",
          "order": 2
        }
      ],
      "order": -2,
      "brand": "LOFY",
      "pricing": {
        "type": "inquiry_based",
        "formattedPrice": "Price on Request",
        "currency": "INR"
      },
      "inStock": true
    }
  ],
  "globalSections": {
    "header": {
      "id": "header",
      "type": "BlockNavigation",
      "elements": [
        {
          "id": "zFB8Nx",
          "type": "GridSocialIcons",
          "raw": {
            "type": "GridSocialIcons",
            "links": [
              {
                "svg": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z\" fill=\"currentColor\"></path>\n</svg>\n",
                "icon": "facebook",
                "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
              },
              {
                "svg": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277ZM21.3564 19.0728C20.9388 20.1223 20.1303 20.9307 19.0755 21.3537C17.496 21.9802 13.7481 21.8356 12.0027 21.8356C10.2572 21.8356 6.50396 21.9748 4.92984 21.3537C3.88042 20.9361 3.07195 20.1276 2.64897 19.0728C2.02253 17.4934 2.16709 13.7455 2.16709 12C2.16709 10.2546 2.02789 6.50129 2.64897 4.92717C3.06659 3.87776 3.87507 3.06928 4.92984 2.6463C6.50931 2.01986 10.2572 2.16443 12.0027 2.16443C13.7481 2.16443 17.5014 2.02522 19.0755 2.6463C20.1249 3.06392 20.9334 3.8724 21.3564 4.92717C21.9828 6.50665 21.8383 10.2546 21.8383 12C21.8383 13.7455 21.9828 17.4987 21.3564 19.0728Z\" fill=\"currentColor\"></path>\n</svg>\n",
                "icon": "instagram",
                "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
              }
            ],
            "mobile": {
              "top": 0,
              "left": 0,
              "width": 0,
              "height": 0
            },
            "desktop": {
              "top": 0,
              "left": 0,
              "width": 0,
              "height": 0
            },
            "settings": {
              "styles": {
                "align": "",
                "justify": "center",
                "icon-size": "20px",
                "icon-color": "rgb(13, 155, 151)",
                "icon-spacing": "space-around",
                "icon-direction": "row",
                "icon-color-hover": "rgb(58, 58, 58)",
                "m-element-margin": "0 0 16px 0",
                "space-between-icons": "20px"
              },
              "useBrandColors": false
            },
            "animation": {
              "name": "slide",
              "type": "global"
            }
          },
          "items": [
            {
              "icon": "facebook",
              "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
            },
            {
              "icon": "instagram",
              "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
            }
          ]
        }
      ],
      "headings": [],
      "paragraphs": [],
      "buttons": [],
      "images": [],
      "slides": [],
      "forms": [],
      "maps": [],
      "socialIcons": [
        {
          "icon": "facebook",
          "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
        },
        {
          "icon": "instagram",
          "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
        }
      ]
    },
    "footer": {
      "id": "zSiG-O",
      "type": "BlockLayout",
      "elements": [
        {
          "id": "ai-PyehsM",
          "type": "GridSocialIcons",
          "raw": {
            "type": "GridSocialIcons",
            "links": [
              {
                "svg": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z\" fill=\"currentColor\"></path>\n</svg>\n",
                "icon": "facebook",
                "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
              },
              {
                "svg": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277ZM21.3564 19.0728C20.9388 20.1223 20.1303 20.9307 19.0755 21.3537C17.496 21.9802 13.7481 21.8356 12.0027 21.8356C10.2572 21.8356 6.50396 21.9748 4.92984 21.3537C3.88042 20.9361 3.07195 20.1276 2.64897 19.0728C2.02253 17.4934 2.16709 13.7455 2.16709 12C2.16709 10.2546 2.02789 6.50129 2.64897 4.92717C3.06659 3.87776 3.87507 3.06928 4.92984 2.6463C6.50931 2.01986 10.2572 2.16443 12.0027 2.16443C13.7481 2.16443 17.5014 2.02522 19.0755 2.6463C20.1249 3.06392 20.9334 3.8724 21.3564 4.92717C21.9828 6.50665 21.8383 10.2546 21.8383 12C21.8383 13.7455 21.9828 17.4987 21.3564 19.0728Z\" fill=\"currentColor\"></path>\n</svg>\n",
                "icon": "instagram",
                "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
              }
            ],
            "mobile": {
              "top": 690,
              "left": 0,
              "width": 79,
              "height": 30
            },
            "desktop": {
              "top": 241,
              "left": 47,
              "width": 84,
              "height": 30
            },
            "settings": {
              "styles": {
                "icon-size": "30px",
                "icon-color": "rgb(13, 155, 151)",
                "icon-spacing": "space-between",
                "icon-direction": "row",
                "icon-color-hover": "#ffffff",
                "m-element-margin": "0 0 32px 0",
                "space-between-icons": "32px"
              },
              "useBrandColors": false
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "Jxpyzjxuzy"
          },
          "items": [
            {
              "icon": "facebook",
              "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
            },
            {
              "icon": "instagram",
              "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
            }
          ]
        },
        {
          "id": "ai-n1fZJK",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 79,
              "left": 0,
              "width": 328,
              "height": 120
            },
            "content": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 14px\" class=\"body\">Arisca Light Studio brings you a wide range of chandeliers, ceiling, wall, bathroom, outdoor and architectural lights. We focus on quality, design, and professional installation.</p>",
            "desktop": {
              "top": 109,
              "left": 0,
              "width": 297,
              "height": 91
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<p dir=\"auto\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 14px\" class=\"body\">Arisca Light Studio brings you a wide range of chandeliers, ceiling, wall, bathroom, outdoor and architectural lights. We focus on quality, design, and professional installation.</p>",
          "text": "Arisca Light Studio brings you a wide range of chandeliers, ceiling, wall, bathroom, outdoor and architectural lights. We focus on quality, design, and professional installation."
        },
        {
          "id": "ai-IW26ZB",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 504,
              "left": 0,
              "width": 328,
              "height": 31
            },
            "content": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 24px\" class=\"body-small\"><span style=\"font-family: Montserrat; font-weight: 700\"><strong>Consultation</strong></span></p>",
            "desktop": {
              "top": 40,
              "left": 558,
              "width": 215,
              "height": 31
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 24px\" class=\"body-small\"><span style=\"font-family: Montserrat; font-weight: 700\"><strong>Consultation</strong></span></p>",
          "text": "Consultation"
        },
        {
          "id": "ai-NleoSF",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 576,
              "left": 0,
              "width": 328,
              "height": 24
            },
            "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 155, 151);\"><a href=\"mailto:info@ariscalightstudio.com\">info@ariscalightstudio.com</a></p>",
            "desktop": {
              "top": 123,
              "left": 562,
              "width": 232,
              "height": 24
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(13, 155, 151);\"><a href=\"mailto:info@ariscalightstudio.com\">info@ariscalightstudio.com</a></p>",
          "text": "info@ariscalightstudio.com"
        },
        {
          "id": "ai-h-JVe1",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 544,
              "left": 0,
              "width": 328,
              "height": 24
            },
            "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">+91 98980 86656</p>",
            "desktop": {
              "top": 94,
              "left": 557,
              "width": 194,
              "height": 24
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\">+91 98980 86656</p>",
          "text": "+91 98980 86656"
        },
        {
          "id": "ai-V6RVbP",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 936,
              "left": 0,
              "width": 328,
              "height": 24
            },
            "content": "<p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 14px\" dir=\"auto\"><span style=\"font-weight: 400\">© 2025 Arisca Light Studio.</span></p>",
            "desktop": {
              "top": 287,
              "left": 0,
              "width": 503,
              "height": 18
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightDesktop: 1.3; --fontSizeDesktop: 14px\" dir=\"auto\"><span style=\"font-weight: 400\">© 2025 Arisca Light Studio.</span></p>",
          "text": "© 2025 Arisca Light Studio."
        },
        {
          "id": "zeK-uD",
          "type": "GridImage",
          "raw": {
            "rel": "nofollow",
            "type": "GridImage",
            "mobile": {
              "top": 12,
              "left": 0,
              "width": 183,
              "height": 52
            },
            "desktop": {
              "top": 25,
              "left": 13,
              "width": 194,
              "height": 66
            },
            "settings": {
              "alt": "",
              "path": "arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png",
              "origin": "assets",
              "styles": {
                "align": "center",
                "justify": "center",
                "m-element-margin": "0 0 16px 0"
              },
              "clickAction": "none"
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "fullResolutionWidth": 202,
            "fullResolutionHeight": 100
          },
          "url": "",
          "alt": "",
          "width": 202,
          "height": 100
        },
        {
          "id": "zIlcHI",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 264,
              "left": 0,
              "width": 328,
              "height": 189
            },
            "content": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 8px\" class=\"body\">CHANDELIERS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 8px\" class=\"body\">FLOOR LAMPS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 13px\" class=\"body\">OUTDOOR LIGHTS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 8px\" class=\"body\">PENDANT LIGHTS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 8px\" class=\"body\">TABLE LAMPS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25\" class=\"body\">WALL LIGHTS</p>",
            "desktop": {
              "top": 92,
              "left": 309,
              "width": 167,
              "height": 165
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "flex-start",
                "m-element-margin": "0 0 16px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            }
          },
          "html": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 8px\" class=\"body\">CHANDELIERS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 8px\" class=\"body\">FLOOR LAMPS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 13px\" class=\"body\">OUTDOOR LIGHTS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 8px\" class=\"body\">PENDANT LIGHTS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; margin-bottom: 8px\" class=\"body\">TABLE LAMPS</p><p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25\" class=\"body\">WALL LIGHTS</p>",
          "text": "CHANDELIERS\nFLOOR LAMPS\nOUTDOOR LIGHTS\nPENDANT LIGHTS\nTABLE LAMPS\nWALL LIGHTS"
        },
        {
          "id": "zBPAHI",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 616,
              "left": 0,
              "width": 328,
              "height": 48
            },
            "content": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\"><span style=\"text-transform: none; letter-spacing: normal; font-family: Arial, sans-serif; font-weight: 400;\">B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</span></p>",
            "desktop": {
              "top": 163,
              "left": 561,
              "width": 251,
              "height": 48
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<p dir=\"auto\" class=\"body\" style=\"color: rgb(255, 255, 255);\"><span style=\"text-transform: none; letter-spacing: normal; font-family: Arial, sans-serif; font-weight: 400;\">B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad</span></p>",
          "text": "B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad"
        },
        {
          "id": "zD6cJr",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 817,
              "left": 0,
              "width": 328,
              "height": 105
            },
            "content": "<p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16; margin-bottom: 8px\" dir=\"auto\"></p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16; margin-bottom: 18px\" dir=\"auto\">Shipping and Returns</p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16; margin-bottom: 18px\" dir=\"auto\">Privacy Policy</p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16; margin-bottom: 8px\" dir=\"auto\">Terms &amp; Conditions</p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16\" dir=\"auto\"></p>",
            "desktop": {
              "top": 92,
              "left": 918,
              "width": 215,
              "height": 145
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16; margin-bottom: 8px\" dir=\"auto\"></p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16; margin-bottom: 18px\" dir=\"auto\">Shipping and Returns</p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16; margin-bottom: 18px\" dir=\"auto\">Privacy Policy</p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16; margin-bottom: 8px\" dir=\"auto\">Terms &amp; Conditions</p><p class=\"body\" style=\"color: rgb(255, 255, 255); --lineHeightMobile: 0.5; --lineHeightDesktop: 1.16\" dir=\"auto\"></p>",
          "text": "Shipping and Returns\nPrivacy Policy\nTerms & Conditions"
        },
        {
          "id": "z2ISBI",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 784,
              "left": 0,
              "width": 328,
              "height": 31
            },
            "content": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 24px\" class=\"body-small\"><span style=\"font-family: Montserrat; font-weight: 700\"><strong>help</strong></span></p>",
            "desktop": {
              "top": 42,
              "left": 918,
              "width": 215,
              "height": 31
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<p dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightMobile: 1.3; --lineHeightDesktop: 1.3; --fontSizeMobile: 24px; --fontSizeDesktop: 24px\" class=\"body-small\"><span style=\"font-family: Montserrat; font-weight: 700\"><strong>help</strong></span></p>",
          "text": "help"
        },
        {
          "id": "zfwSNN",
          "type": "GridTextBox",
          "raw": {
            "type": "GridTextBox",
            "mobile": {
              "top": 224,
              "left": 0,
              "width": 328,
              "height": 31
            },
            "content": "<h4 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; --fontSizeDesktop: 24px; margin-bottom: 0px\"><span style=\"font-weight: 700\"><strong>QUICK SHOP</strong></span></h4>",
            "desktop": {
              "top": 43,
              "left": 309,
              "width": 215,
              "height": 30
            },
            "settings": {
              "styles": {
                "text": "left",
                "align": "flex-start",
                "justify": "center",
                "m-element-margin": "0 0 24px 0"
              }
            },
            "animation": {
              "name": "slide",
              "type": "global"
            },
            "initialElementId": "fRoA6n-q74"
          },
          "html": "<h4 dir=\"auto\" style=\"color: rgb(13, 155, 151); --lineHeightDesktop: 1.25; --fontSizeDesktop: 24px; margin-bottom: 0px\"><span style=\"font-weight: 700\"><strong>QUICK SHOP</strong></span></h4>",
          "text": "QUICK SHOP"
        }
      ],
      "headings": [
        {
          "level": "h4",
          "text": "QUICK SHOP"
        }
      ],
      "paragraphs": [
        "Arisca Light Studio brings you a wide range of chandeliers, ceiling, wall, bathroom, outdoor and architectural lights. We focus on quality, design, and professional installation.",
        "Consultation",
        "info@ariscalightstudio.com",
        "+91 98980 86656",
        "© 2025 Arisca Light Studio.",
        "CHANDELIERS\nFLOOR LAMPS\nOUTDOOR LIGHTS\nPENDANT LIGHTS\nTABLE LAMPS\nWALL LIGHTS",
        "B - 103, Money Plant High Street, Jagatpur Road, Ahmedabad",
        "Shipping and Returns\nPrivacy Policy\nTerms & Conditions",
        "help"
      ],
      "buttons": [],
      "images": [
        {
          "id": "zeK-uD",
          "url": "",
          "alt": "",
          "width": 202,
          "height": 100
        }
      ],
      "slides": [],
      "forms": [],
      "maps": [],
      "socialIcons": [
        {
          "icon": "facebook",
          "link": "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr"
        },
        {
          "icon": "instagram",
          "link": "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&utm_source=qr"
        }
      ]
    },
    "stickyBar": {
      "id": "stickyBar",
      "type": "BlockStickyBar",
      "elements": [],
      "headings": [],
      "paragraphs": [],
      "buttons": [],
      "images": [],
      "slides": [],
      "forms": [],
      "maps": [],
      "socialIcons": []
    }
  },
  "forms": {
    "contactForm": {
      "id": "form_contact",
      "name": "Contact form",
      "token": "mjE4D8gykLhKB29lJQk9A0Vn9ERYO283",
      "endpoint": "https://api.zyrosite.com/v1/sites/form-submissions",
      "fields": [
        {
          "id": "firstName",
          "name": "firstName",
          "label": "Name",
          "type": "text",
          "placeholder": "Your name",
          "required": true
        },
        {
          "id": "lastName",
          "name": "lastName",
          "label": "Last name",
          "type": "text",
          "placeholder": "Your last name",
          "required": false
        },
        {
          "id": "email",
          "name": "email",
          "label": "Your email",
          "type": "email",
          "placeholder": "Your email address",
          "required": true
        },
        {
          "id": "content",
          "name": "content",
          "label": "Message",
          "type": "textarea",
          "placeholder": "Enter your message",
          "required": true
        }
      ],
      "successMessage": "Thank You! We have received your message and will get back to you shortly."
    }
  },
  "mediaAssets": {
    "totalCount": 127,
    "list": [
      "/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png",
      "/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png",
      "/assets/branding/arisca-300-x-150-px-Awv8y3X42eTqlgJQ.png",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.27-am-1-qWcgpdgYamhxZqxZ.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.32-am-lIzHuxrb3LqksB9L.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-2-EFtKulW0TTZG7uAD.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-NHS8o9Jd0kZuNLJe.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.30-am-2-pcsUc6zcy0BHUCeV.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.28-am-2-dnDFUuitlx3xkO4V.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.28-am-tTDPC8D86XUhy4w7.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.31-am-1-Plf4CMTeuAcSi5lt.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.29-am-1-kkNDF4UFiKH95guX.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.29-am-1-kkNDF4UFiKH95guX.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.34-am-2-9uXlqmXMc79Mmhmn.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.34-am-2-9uXlqmXMc79Mmhmn.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.29-am-2-xDW4wuB8eE9R10c9.jpeg",
      "/assets/projects/whatsapp-image-2026-05-27-at-10.18.29-am-2-xDW4wuB8eE9R10c9.jpeg",
      "/assets/general/photo-1753770960073-ff5c58fd9cfb.jpg",
      "/assets/general/untitled-design-24-m5K8gNb2zwSZ989V.png",
      "/assets/general/untitled-design-24-m5K8gNb2zwSZ989V.png",
      "/assets/projects/dsc09797-eFXwnHjzLH4fV6lE.JPG",
      "/assets/projects/dsc09797-eFXwnHjzLH4fV6lE.JPG",
      "/assets/projects/dsc09727-vjAZda18PSGBzwCf.JPG",
      "/assets/projects/dsc09789-J7iiw8AGyVipWjQ3.JPG",
      "/assets/projects/dsc09789-J7iiw8AGyVipWjQ3.JPG",
      "/assets/projects/dsc09771-596hCQ2VBIvkgxHR.JPG",
      "/assets/projects/dsc09771-596hCQ2VBIvkgxHR.JPG",
      "/assets/projects/dsc09743-qZwb0UB5B2OImJ70.JPG",
      "/assets/projects/dsc09743-qZwb0UB5B2OImJ70.JPG",
      "/assets/projects/dsc09720-ERb1AhbWx0SSgoSB.JPG",
      "/assets/projects/dsc09720-ERb1AhbWx0SSgoSB.JPG",
      "/assets/projects/dsc09737-oPXnMNhlDvQBehoN.jpg",
      "/assets/projects/dsc09737-oPXnMNhlDvQBehoN.jpg",
      "/assets/projects/dsc09738-Zu3m7g53jinktiDJ.JPG",
      "/assets/projects/dsc09738-Zu3m7g53jinktiDJ.JPG",
      "/assets/team/img-20260415-wa0028-1-.jpg-CdLPkCzPIZelYNPO.jpeg",
      "/assets/team/img-20260415-wa0028-1-.jpg-CdLPkCzPIZelYNPO.jpeg",
      "/assets/team/1000496835.jpg-XyfBu2qSvPZmNJS9.jpeg",
      "/assets/team/1000496835.jpg-XyfBu2qSvPZmNJS9.jpeg",
      "/assets/team/1000496834.jpg-sR1cwSs271Wbkxuc.jpeg",
      "/assets/team/1000496834.jpg-sR1cwSs271Wbkxuc.jpeg",
      "/assets/team/1000494963.jpg-3mww9d94EbngMhqM.jpeg",
      "/assets/team/1000494963.jpg-3mww9d94EbngMhqM.jpeg",
      "/assets/general/photo-1682008186494-4b5a087e07ab.jpg",
      "/assets/general/photo-1682008186494-4b5a087e07ab.jpg",
      "/assets/general/photo-1547662906-5b04e1f97e8e.jpg",
      "/assets/general/photo-1547662906-5b04e1f97e8e.jpg",
      "/assets/general/whatsapp-image-2026-01-01-at-9.17.07-am-IpHe2Zbrt71Xxuda.jpeg",
      "/assets/general/whatsapp-image-2026-01-01-at-9.17.07-am-IpHe2Zbrt71Xxuda.jpeg",
      "/assets/general/photo-1716703435691-1e5205044c8e.jpg",
      "/assets/general/photo-1716703435691-1e5205044c8e.jpg",
      "/assets/general/1-JZ6LBZjPB8PJgjOV.png",
      "/assets/general/1-JZ6LBZjPB8PJgjOV.png",
      "/assets/general/3-yucO3Plh5ef9H21F.png",
      "/assets/general/3-yucO3Plh5ef9H21F.png",
      "/assets/general/4-Ezt9MEyA9SL6EGP2.png",
      "/assets/general/4-Ezt9MEyA9SL6EGP2.png",
      "/assets/showcase/5-light-category-1-n7aEPyuys0PrG9t3.png",
      "/assets/showcase/5-light-category-1-n7aEPyuys0PrG9t3.png",
      "/assets/showcase/5-light-category-CuAoS47gsK9SUC7Y.png",
      "/assets/showcase/5-light-category-CuAoS47gsK9SUC7Y.png",
      "/assets/projects/dsc09758-a01hkH3Y9uhcKEc0.JPG",
      "/assets/projects/dsc09738-Zu3m7g53jinktiDJ.JPG",
      "/assets/projects/dsc09743-qZwb0UB5B2OImJ70.JPG",
      "/assets/projects/dsc09723-K64jfJ3jr2C5Q2Gj.jpg",
      "/assets/projects/dsc09751-FRzTRDBv14IZqnoz.JPG",
      "/assets/projects/dsc09751-FRzTRDBv14IZqnoz.JPG",
      "/assets/projects/dsc09767-V513Uh9xA6mYsxk8.JPG",
      "/assets/projects/dsc09767-V513Uh9xA6mYsxk8.JPG",
      "/assets/projects/dsc09755-sR1zA2RiOZZti9kP.JPG",
      "/assets/projects/dsc09755-sR1zA2RiOZZti9kP.JPG",
      "/assets/projects/dsc09759-UQyF2voWDS9Ohb5T.JPG",
      "/assets/projects/dsc09759-UQyF2voWDS9Ohb5T.JPG",
      "/assets/products/071cba8e-97a1-4318-9d06-2b206c23a64c.jpg",
      "/assets/products/ff545ca6-5417-4052-adab-098e73142ddd.jpg",
      "/assets/products/89c82942-46bb-4bcc-bc44-cb47c6dcbf49.jpg",
      "/assets/products/e3ff6eab-39c7-4079-bbc9-1f1a33bc95ea.jpg",
      "/assets/products/c669d9d5-b027-465c-a879-614188f72f5e.jpg",
      "/assets/products/e9711355-5715-468d-af15-347f8f210675.jpg",
      "/assets/products/35248f72-2f5a-40df-b03e-82215ce96325.jpg",
      "/assets/products/b35c25c1-af43-4ba9-a2c5-60e0c2bd57df.jpg",
      "/assets/products/45a125d2-82a9-49b6-88c5-b546963c44a4.jpg",
      "/assets/products/9400cf81-d872-457c-a319-a8b2e17ac8b9.jpg",
      "/assets/products/2c025b32-0c06-4891-af5b-7bec0e493f89.jpg",
      "/assets/products/e2ed5bf2-402d-45af-8788-5c277da1d445.jpg",
      "/assets/products/87058546-ab2d-40c6-80f5-e499d56ec9b9.jpg",
      "/assets/products/9a2f7952-17cd-44fd-b2cf-eaccf2b908a1.jpg",
      "/assets/products/760aa0fc-82ff-49c6-964c-1e193b0cbe50.jpg",
      "/assets/products/aac7933e-3fc2-46d2-ade4-2cdabe77b84d.jpg",
      "/assets/products/70db7c02-2655-4573-a0d4-7686f0c58656.jpg",
      "/assets/products/aebd00ef-06f7-4bc6-a67d-55d67f364538.jpg",
      "/assets/products/92c930ed-311e-4ebb-9382-bfe0ef7f200e.jpg",
      "/assets/products/968181bd-0b00-467b-b5c6-d29c297349cf.jpg",
      "/assets/products/37eb9ccb-fbf9-4f92-b089-235aadab7489.jpg",
      "/assets/products/670a1c44-7b65-422d-badf-e058546a7f26.jpg",
      "/assets/products/716b700b-e80b-4710-a8d0-c53b9f366fb8.jpg",
      "/assets/products/09a9c521-0897-49d0-b5f3-598d9e2cd589.jpg",
      "/assets/products/094ac6c9-4174-40f0-b002-5e20477e0605.jpg",
      "/assets/products/d65f2d63-b037-417c-9422-a2870bfe4c42.jpg",
      "/assets/products/d9d904dc-be4d-4dfe-8afd-e797801c5669.jpg",
      "/assets/products/7081ee92-247c-4430-8543-151fba534952.jpg",
      "/assets/products/7431e6b9-5a5a-46d1-8796-fe5233709329.jpg",
      "/assets/products/8f2a4379-ed6a-456a-821f-64c2b2c140b8.jpg",
      "/assets/products/11747c1b-a386-45ab-9a1c-90a8888ff06f.jpg",
      "/assets/products/acf8e618-35a8-4128-a0a8-025afddf7f3b.jpg",
      "/assets/products/423e2931-a4c2-4980-9a33-051f0f7ceb3c.jpg",
      "/assets/products/a7e271b6-0eb7-44f3-8261-7a1c633762ed.jpg",
      "/assets/products/a2353ff6-dcfc-491f-bccc-3deb7c6d7df1.jpg",
      "/assets/products/4e3be4e4-1203-4ede-beac-6f4d3c1d7832.jpg",
      "/assets/products/cf9730f7-acd7-4bff-afa5-49f4382fcb98.jpg",
      "/assets/products/0fe27cc3-7ea7-44f8-9fcc-bc87c3f0984a.jpg",
      "/assets/products/45073bda-794b-4a8a-94fc-365b5b0a1ce2.jpg",
      "/assets/products/871f7455-12a9-4a39-b9f8-6a5f140977ff.jpg",
      "/assets/products/5639c759-185f-47db-9616-297bd08612cf.jpg",
      "/assets/products/84f2aaf7-0da5-4935-9368-7d330b234b13.jpg",
      "/assets/products/fab84ef2-2c90-4b3b-b693-34441df2d940.jpg",
      "/assets/products/31b92c6c-63fa-4e1e-a22f-d8aad2e48e80.jpg",
      "/assets/products/136c65b8-b2c3-42bf-88e2-178f60da0cbe.jpg",
      "/assets/products/0120fae3-6e86-4bd2-8c87-db1f88571789.jpg",
      "/assets/products/876e2bc9-7450-4563-813a-f5a0c245a411.jpg",
      "/assets/products/6933f422-f04f-42f5-985e-97f753b3ecd5.jpg",
      "/assets/products/1206b565-332a-40f3-8085-d3aba975c5e7.jpg",
      "/assets/products/fe91bc42-b7c2-425a-83b1-5533ff82a814.jpg",
      "/assets/products/f6b8b1ab-acfb-4d5b-9968-dafb9d120435.jpg",
      "/assets/products/4d69bdf8-9970-4fd4-8d65-c0fb1b3fb334.jpg",
      "/assets/products/e83940ac-28d6-4aa3-9c13-bc848d57c429.jpg",
      "/assets/products/3f1ddb12-e389-49e8-94ae-a2fdcbfe7319.jpg"
    ]
  },
  "audit": {
    "crawledAt": "2026-10-03T06:12:07.200Z",
    "totalPagesCrawled": 22,
    "totalBlocksExtracted": 37,
    "totalElementsExtracted": 135,
    "totalProductsExtracted": 14,
    "externalLinks": [
      "https://www.facebook.com/share/1MSMcUSAbj/?mibextid=wwXIfr",
      "https://www.instagram.com/arisca_light_studio?igsh=Mjk1aHgwZ3ptMm1h&amp;utm_source=qr",
      "https://drive.google.com/file/d/1_6m3SxrJ5HtJOSqBFm5vfeeDhBGf1BRb/view?usp=sharing",
      "https://drive.google.com/file/d/16RrSSABjnOBf9cOJSl8SJyaLduxy0VaS/view?usp=sharing",
      "https://drive.google.com/file/d/1_ytCjPJ-raO6pbfISceldoeeRRfsswto/view?usp=sharing",
      "https://drive.google.com/file/d/1PFlyUv4jgtnlr_7dqnJGMB4tmqM22YIv/view?usp=sharing",
      "https://drive.google.com/file/d/1jKVC9Ah9xPfuSeDzLWHXWdFhhQJF29lv/view?usp=sharing"
    ],
    "internalLinks": [
      "/",
      "/about",
      "/client-diaries",
      "/home-consultancy",
      "/contact",
      "/shop"
    ],
    "anomalies": [
      {
        "page": "interior-designers",
        "issue": "Empty Page Skeleton",
        "detail": "The page exists in sitemap and builder schema with blocks: [], containing no content other than the shared header and footer."
      },
      {
        "page": "about-2",
        "issue": "Unlinked Duplicate / Draft Page",
        "detail": "The page exists in sitemap and has content blocks, but is flagged isHidden: true in main navigation."
      },
      {
        "page": "shop",
        "issue": "Unlinked Shop Page",
        "detail": "The shop page exists in sitemap and has 5 product showcase blocks, but is marked isHidden: true in the main navigation."
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.ariscaData = ariscaData;
}

export default ariscaData;
