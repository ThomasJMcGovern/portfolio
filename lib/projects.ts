export type Project = {
  slug: string;
  name: string;
  category: string;
  role: string;
  summary: string;
  url?: string;
  linkLabel?: string;
  sections: [string, string][];
};

export const projects: Project[] = [
  {
    "slug": "gist-geo",
    "name": "Gist GEO",
    "category": "Professional work",
    "role": "Primary frontend engineer",
    "summary": "From a landing page to a shipped, paid SaaS. Building the customer-facing product with our designer and engineering team.",
    "sections": [
      [
        "The product",
        "I built the multi-step onboarding flow, custom Clerk sign-in and sign-up with organization creation, dashboard overview and first-time experience, Reports and charts, Brands and query management, billing and plan changes, team settings, notifications, and navigation."
      ],
      [
        "A system that holds together",
        "I migrated the app to semantic design tokens, brought dark mode across the product, and added a lint rule to enforce the standard. A component audit removed roughly 1,100 unused lines. Working through 16 design tickets and more than 100 QA tickets helped close the gap between Figma and the browser."
      ],
      [
        "Opportunities, end to end",
        "I shipped tabs, detail and properties panels, PDF and Markdown exports, and citations CSV exports. I also worked on backend carry-forward and digest fixes to make the experience more dependable."
      ],
      [
        "Research into product",
        "The Brewlune experiment informed GEO Lab features including discovery sweeps, crawl-fetch tooling, and a bot-activity panel. I also contributed to opportunity scoring, the ChatGPT fan-out demo, and Review Station UX."
      ],
      [
        "Working with people",
        "I partnered closely with design and engineering and mentored interns, passing on what I learned as an intern. Their curiosity pushed me deeper into GEO research. Across the period summarized here, I merged 439 PRs—about 12% of repository PRs—and shipped every month since November."
      ]
    ]
  },
  {
    "slug": "gist-widget-builder",
    "name": "Gist Widget Builder",
    "category": "Professional work",
    "role": "Frontend & widget tooling",
    "summary": "A configuration console and embeddable AI widgets, built to bring a consistent experience into different websites.",
    "sections": [
      [
        "Configure, preview, embed",
        "The console brings widget appearance and behavior into one workflow: configure a widget, preview the result, and access installation instructions. Controls cover color, placement, branding, and suggested questions."
      ],
      [
        "The engineering",
        "A Next.js frontend works with Clerk authentication and Convex-backed configuration. Widget variants and shared configuration make it possible to adapt the experience to different host sites."
      ]
    ]
  },
  {
    "slug": "graffiti-turf-war",
    "name": "Graffiti Turf War",
    "category": "Games & experiments",
    "role": "Game development",
    "summary": "A multiplayer city where crews paint walls, claim turf, and fight to keep it.",
    "url": "https://graffiti-turf-war-production.up.railway.app/",
    "linkLabel": "Play the game",
    "sections": [
      [
        "Leave your mark",
        "Explore a side-view city, climb buildings, and zoom into walls to paint. Crews, rival players, and bots turn the city into a shared canvas."
      ],
      [
        "A shared world",
        "The game combines a Phaser client with an authoritative Bun WebSocket server and SQLite persistence. Shared paint rules keep the client and server working from the same model; touch controls bring the game to mobile."
      ]
    ]
  },
  {
    "slug": "valleypaa",
    "name": "ValleyPAA",
    "category": "Websites & communities",
    "role": "Website & admin development",
    "summary": "A community website that makes events, newsletters, and ways to get involved easy to find.",
    "url": "https://valleypaa.org/",
    "linkLabel": "Visit ValleyPAA",
    "sections": [
      [
        "Built around showing up",
        "The public site brings together upcoming events, newsletters, meeting resources, and information about getting involved with Valley Young People in Alcoholics Anonymous in the San Fernando Valley."
      ],
      [
        "Behind the website",
        "A separate admin portal supports content management. The project pairs the public-facing experience with the tools needed to keep it current."
      ]
    ]
  },
  {
    "slug": "brewlune",
    "name": "Brewlune",
    "category": "Websites & research",
    "role": "Brand, website & GEO experiment",
    "summary": "A mushroom-coffee brand built from scratch to explore how a new brand becomes visible in AI search.",
    "url": "https://brewlune.com/",
    "linkLabel": "Visit Brewlune",
    "sections": [
      [
        "Start from zero",
        "I started the experiment on August 10, 2026 with pre-registered predictions and DEADPOINT as a control brand. The website gave the brand a concrete identity and a body of product information to test against."
      ],
      [
        "What I observed",
        "Within 17 days, checks across ChatGPT, Perplexity, and Google AI Overviews went from no recognition to correct descriptions on 11 of 12 checks. By August 31, the experiment had recorded 374 unprompted citations and appearances in ChatGPT answers to “best mushroom coffee.” These are results from that specific observation period, not a claim of guaranteed lift."
      ],
      [
        "What came back into the product",
        "The work informed GEO Lab discovery sweeps, crawl-fetch tooling, a bot-activity panel, and a leadership brief. It connected hands-on brand building with product research."
      ]
    ]
  },
  {
    "slug": "deadpoint",
    "name": "DEADPOINT",
    "category": "Websites & research",
    "role": "Brand website & experiment control",
    "summary": "A distinct visual identity for a pre- and post-workout brand, and the control brand in the Brewlune GEO experiment.",
    "url": "https://drinkdeadpoint.com/",
    "linkLabel": "Visit DEADPOINT",
    "sections": [
      [
        "A brand with its own language",
        "Product pages for SEND and BELAY sit alongside editorial Field Notes. A restrained palette, technical typography, and contour artwork give the site a consistent visual identity."
      ],
      [
        "Part of the experiment",
        "DEADPOINT served as the control brand for the Brewlune research. The site is presented here as brand and frontend work; it is not a claim of a completed commerce backend."
      ]
    ]
  }
];
