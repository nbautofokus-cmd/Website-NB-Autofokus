export interface Shooting {
  slug: string;
  titel: string;
  fahrzeug: string;
  gruppe: 'Autoshootings' | 'Events' | 'Blaulicht';
  kategorie: 'Static Shots' | 'Rolling Shots' | 'Oldtimer' | 'Verkaufsfotos' | 'Events & Treffen' | 'Pressefotografie';
  datum: string;
  cover: string;
  hero?: string;
  bilder: string[];
  beschreibung: string;
}

function bilder(ordner: string, anzahl = 20): string[] {
  return Array.from({ length: anzahl }, (_, i) => `/images/shootings/${ordner}/Bild-${i + 1}.jpg`);
}

export const shootings: Shooting[] = [
  {
    slug: 'autoshooting-1',
    titel: 'Porsche 911S',
    fahrzeug: 'Porsche 911S',
    gruppe: 'Autoshootings',
    kategorie: 'Static Shots',
    datum: '2026',
    cover: '/images/shootings/autoshooting-1/cover.jpg',
    bilder: bilder('autoshooting-1'),
    beschreibung: 'Der Porsche 911S — ein Klassiker, der für sich selbst spricht.',
  },
  {
    slug: 'autoshooting-2',
    titel: 'Audi A3',
    fahrzeug: 'Audi A3',
    gruppe: 'Autoshootings',
    kategorie: 'Static Shots',
    datum: '2026',
    cover: '/images/shootings/autoshooting-2/cover.jpg',
    bilder: bilder('autoshooting-2'),
    beschreibung: 'Der Audi A3 — sportlich, elegant und immer einen Blick wert.',
  },
  {
    slug: 'autoshooting-3',
    titel: 'Porsche Cayman R',
    fahrzeug: 'Porsche Cayman R',
    gruppe: 'Autoshootings',
    kategorie: 'Static Shots',
    datum: '2025',
    cover: '/images/shootings/autoshooting-3/cover.jpg',
    bilder: bilder('autoshooting-3'),
    beschreibung: 'Der Porsche Cayman R — puristische Sportlichkeit in seiner reinsten Form.',
  },
  {
    slug: 'autoshooting-4',
    titel: 'Dodge Lancer',
    fahrzeug: 'Dodge Lancer',
    gruppe: 'Autoshootings',
    kategorie: 'Static Shots',
    datum: '2025',
    cover: '/images/shootings/autoshooting-4/cover.jpg',
    bilder: bilder('autoshooting-4'),
    beschreibung: 'Der Dodge Lancer — amerikanisches Muscle-Feeling trifft auf zeitloses Design.',
  },
  {
    slug: 'event-1',
    titel: 'Limitless Society',
    fahrzeug: 'Limitless Society',
    gruppe: 'Events',
    kategorie: 'Events & Treffen',
    datum: '2024',
    cover: '/images/shootings/event-1/cover.jpg',
    bilder: bilder('event-1'),
    beschreibung: '',
  },
  {
    slug: 'event-2',
    titel: 'WBN Cars Autotreffen',
    fahrzeug: 'WBN Cars Autotreffen',
    gruppe: 'Events',
    kategorie: 'Events & Treffen',
    datum: '2024',
    cover: '/images/shootings/event-2/cover.jpg',
    bilder: bilder('event-2'),
    beschreibung: '',
  },
  {
    slug: 'event-3',
    titel: 'Witnessed Culture Season Opening',
    fahrzeug: 'Witnessed Culture Season Opening',
    gruppe: 'Events',
    kategorie: 'Events & Treffen',
    datum: '2026',
    cover: '/images/shootings/event-3/cover.jpg',
    bilder: bilder('event-3'),
    beschreibung: '',
  },
  {
    slug: 'event-4',
    titel: 'Witnessed Culture Season Ending',
    fahrzeug: 'Witnessed Culture Season Ending',
    gruppe: 'Events',
    kategorie: 'Events & Treffen',
    datum: '2025',
    cover: '/images/shootings/event-4/cover.jpg',
    bilder: bilder('event-4'),
    beschreibung: '',
  },
  {
    slug: 'blaulicht-1',
    titel: 'Im Blaulichtbereich',
    fahrzeug: 'Im Blaulichtbereich',
    gruppe: 'Blaulicht',
    kategorie: 'Pressefotografie',
    datum: '2025',
    cover: '/images/shootings/blaulicht-1/cover.jpg',
    hero: '/images/shootings/blaulicht-1/hero.jpg',
    bilder: bilder('blaulicht-1'),
    beschreibung: '',
  },
];
