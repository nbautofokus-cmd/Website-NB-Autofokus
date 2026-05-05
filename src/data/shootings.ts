export interface Shooting {
  slug: string;
  titel: string;
  fahrzeug: string;
  gruppe: 'Autoshootings' | 'Events';
  kategorie: 'Static Shots' | 'Rolling Shots' | 'Oldtimer' | 'Verkaufsfotos' | 'Events & Treffen';
  datum: string;
  cover: string;
  bilder: string[];
  beschreibung: string;
}

export const shootings: Shooting[] = [
  {
    slug: 'autoshooting-1',
    titel: 'Autoshooting 1',
    fahrzeug: 'Fahrzeug eintragen',
    gruppe: 'Autoshootings',
    kategorie: 'Static Shots',
    datum: '2024',
    cover: '/images/shootings/autoshooting-1/cover.jpg',
    bilder: [
      '/images/shootings/autoshooting-1/bild_1.jpg',
      '/images/shootings/autoshooting-1/bild_2.jpg',
      '/images/shootings/autoshooting-1/bild_3.jpg',
    ],
    beschreibung: 'Beschreibung eintragen.',
  },
  {
    slug: 'autoshooting-2',
    titel: 'Autoshooting 2',
    fahrzeug: 'Fahrzeug eintragen',
    gruppe: 'Autoshootings',
    kategorie: 'Rolling Shots',
    datum: '2024',
    cover: '/images/shootings/autoshooting-2/cover.jpg',
    bilder: [
      '/images/shootings/autoshooting-2/bild_1.jpg',
      '/images/shootings/autoshooting-2/bild_2.jpg',
      '/images/shootings/autoshooting-2/bild_3.jpg',
    ],
    beschreibung: 'Beschreibung eintragen.',
  },
  {
    slug: 'autoshooting-3',
    titel: 'Autoshooting 3',
    fahrzeug: 'Fahrzeug eintragen',
    gruppe: 'Autoshootings',
    kategorie: 'Oldtimer',
    datum: '2024',
    cover: '/images/shootings/autoshooting-3/cover.jpg',
    bilder: [
      '/images/shootings/autoshooting-3/bild_1.jpg',
      '/images/shootings/autoshooting-3/bild_2.jpg',
      '/images/shootings/autoshooting-3/bild_3.jpg',
    ],
    beschreibung: 'Beschreibung eintragen.',
  },
  {
    slug: 'autoshooting-4',
    titel: 'Autoshooting 4',
    fahrzeug: 'Fahrzeug eintragen',
    gruppe: 'Autoshootings',
    kategorie: 'Verkaufsfotos',
    datum: '2024',
    cover: '/images/shootings/autoshooting-4/cover.jpg',
    bilder: [
      '/images/shootings/autoshooting-4/bild_1.jpg',
      '/images/shootings/autoshooting-4/bild_2.jpg',
      '/images/shootings/autoshooting-4/bild_3.jpg',
    ],
    beschreibung: 'Beschreibung eintragen.',
  },
  {
    slug: 'event-1',
    titel: 'Event 1',
    fahrzeug: 'Event eintragen',
    gruppe: 'Events',
    kategorie: 'Events & Treffen',
    datum: '2024',
    cover: '/images/shootings/event-1/cover.jpg',
    bilder: [
      '/images/shootings/event-1/bild_1.jpg',
      '/images/shootings/event-1/bild_2.jpg',
      '/images/shootings/event-1/bild_3.jpg',
    ],
    beschreibung: 'Beschreibung eintragen.',
  },
  {
    slug: 'event-2',
    titel: 'Event 2',
    fahrzeug: 'Event eintragen',
    gruppe: 'Events',
    kategorie: 'Events & Treffen',
    datum: '2024',
    cover: '/images/shootings/event-2/cover.jpg',
    bilder: [
      '/images/shootings/event-2/bild_1.jpg',
      '/images/shootings/event-2/bild_2.jpg',
      '/images/shootings/event-2/bild_3.jpg',
    ],
    beschreibung: 'Beschreibung eintragen.',
  },
  {
    slug: 'event-3',
    titel: 'Event 3',
    fahrzeug: 'Event eintragen',
    gruppe: 'Events',
    kategorie: 'Events & Treffen',
    datum: '2024',
    cover: '/images/shootings/event-3/cover.jpg',
    bilder: [
      '/images/shootings/event-3/bild_1.jpg',
      '/images/shootings/event-3/bild_2.jpg',
      '/images/shootings/event-3/bild_3.jpg',
    ],
    beschreibung: 'Beschreibung eintragen.',
  },
  {
    slug: 'event-4',
    titel: 'Event 4',
    fahrzeug: 'Event eintragen',
    gruppe: 'Events',
    kategorie: 'Events & Treffen',
    datum: '2024',
    cover: '/images/shootings/event-4/cover.jpg',
    bilder: [
      '/images/shootings/event-4/bild_1.jpg',
      '/images/shootings/event-4/bild_2.jpg',
      '/images/shootings/event-4/bild_3.jpg',
    ],
    beschreibung: 'Beschreibung eintragen.',
  },
];
