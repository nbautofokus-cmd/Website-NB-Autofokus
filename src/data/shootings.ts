import type { ImageMetadata } from 'astro';

export interface Shooting {
  slug: string;
  titel: string;
  fahrzeug: string;
  gruppe: 'Autoshootings' | 'Events';
  kategorie: 'Autofotografie' | 'Oldtimer' | 'Verkaufsfotos' | 'Eventfotografie';
  datum: string;
  cover: ImageMetadata;
  hero?: ImageMetadata;
  bilder: ImageMetadata[];
  beschreibung: string;
}

// Alle Shooting-Bilder aus src/assets – Astro optimiert sie beim Build (WebP, passende Größen)
const dateien = import.meta.glob<ImageMetadata>('../assets/shootings/*/*.jpg', {
  eager: true,
  import: 'default',
});

function bild(ordner: string, name: string): ImageMetadata {
  const datei = dateien[`../assets/shootings/${ordner}/${name}.jpg`];
  if (!datei) throw new Error(`Bild fehlt: src/assets/shootings/${ordner}/${name}.jpg`);
  return datei;
}

/** Bild-1 … Bild-n; fehlende Nummern werden übersprungen. */
function bilder(ordner: string, anzahl = 20): ImageMetadata[] {
  return Array.from({ length: anzahl }, (_, i) => dateien[`../assets/shootings/${ordner}/Bild-${i + 1}.jpg`])
    .filter((b): b is ImageMetadata => b !== undefined);
}

export const shootings: Shooting[] = [
  {
    slug: 'autoshooting-1',
    titel: 'Porsche 911S',
    fahrzeug: 'Porsche 911S',
    gruppe: 'Autoshootings',
    kategorie: 'Autofotografie',
    datum: '2026',
    cover: bild('autoshooting-1', 'cover'),
    bilder: bilder('autoshooting-1'),
    beschreibung: 'Der Porsche 911S — ein Klassiker, der für sich selbst spricht.',
  },
  {
    slug: 'autoshooting-2',
    titel: 'Audi A3',
    fahrzeug: 'Audi A3',
    gruppe: 'Autoshootings',
    kategorie: 'Autofotografie',
    datum: '2026',
    cover: bild('autoshooting-2', 'cover'),
    bilder: bilder('autoshooting-2'),
    beschreibung: 'Der Audi A3 — sportlich, elegant und immer einen Blick wert.',
  },
  {
    slug: 'autoshooting-3',
    titel: 'Porsche Cayman R',
    fahrzeug: 'Porsche Cayman R',
    gruppe: 'Autoshootings',
    kategorie: 'Autofotografie',
    datum: '2025',
    cover: bild('autoshooting-3', 'cover'),
    bilder: bilder('autoshooting-3'),
    beschreibung: 'Der Porsche Cayman R — puristische Sportlichkeit in seiner reinsten Form.',
  },
  {
    slug: 'autoshooting-4',
    titel: 'Dodge Lancer',
    fahrzeug: 'Dodge Lancer',
    gruppe: 'Autoshootings',
    kategorie: 'Autofotografie',
    datum: '2025',
    cover: bild('autoshooting-4', 'cover'),
    bilder: bilder('autoshooting-4'),
    beschreibung: 'Der Dodge Lancer — amerikanisches Muscle-Feeling trifft auf zeitloses Design.',
  },
  {
    slug: 'event-1',
    titel: 'Limitless Society',
    fahrzeug: 'Limitless Society',
    gruppe: 'Events',
    kategorie: 'Eventfotografie',
    datum: '2024',
    cover: bild('event-1', 'cover'),
    bilder: bilder('event-1'),
    beschreibung: '',
  },
  {
    slug: 'event-2',
    titel: 'WBN Cars Autotreffen',
    fahrzeug: 'WBN Cars Autotreffen',
    gruppe: 'Events',
    kategorie: 'Eventfotografie',
    datum: '2024',
    cover: bild('event-2', 'cover'),
    bilder: bilder('event-2'),
    beschreibung: '',
  },
  {
    slug: 'event-3',
    titel: 'Witnessed Culture Season Opening',
    fahrzeug: 'Witnessed Culture Season Opening',
    gruppe: 'Events',
    kategorie: 'Eventfotografie',
    datum: '2025',
    cover: bild('event-3', 'cover'),
    bilder: bilder('event-3'),
    beschreibung: '',
  },
  {
    slug: 'event-4',
    titel: 'Witnessed Culture Season Ending',
    fahrzeug: 'Automotive Event',
    gruppe: 'Events',
    kategorie: 'Eventfotografie',
    datum: '2025',
    cover: bild('event-4', 'cover'),
    bilder: bilder('event-4'),
    beschreibung: '',
  },
];
