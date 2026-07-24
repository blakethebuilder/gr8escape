// Shared room data — single source of truth for all pages.
// Eventually this will be fetched from PocketBase API at build time.

export interface RoomData {
  name: string;
  slug: string;
  difficulty: number | string;
  icon: string;
  color: string;
  players: string;
  duration: string;
  price: string;
  story: string;
  tag?: string;
}

export const rooms: RoomData[] = [
  {
    name: 'Asylum Escape', slug: 'asylum-escape', difficulty: 7, icon: '🧪', color: '#E53935',
    players: '2–8', duration: '60 min', price: 'R320',
    story: "Dr. Mulasy Tretour's office holds evidence of his vicious crimes — but one of his experiments is closer than you think. Gather the proof and get out before they get hold of you.",
    tag: 'Most Popular',
  },
  {
    name: 'Trapped', slug: 'trapped', difficulty: 8, icon: '🔥', color: '#A3E635',
    players: '2–8', duration: '60 min', price: 'R320',
    story: "The Butler welcomes you to Mr. Charles A Clarence's estate. Then the smoke starts pouring in. A fire is tearing through the mansion — find another way out before you're burned alive.",
  },
  {
    name: 'The Hunted', slug: 'the-hunted', difficulty: 8.5, icon: '🌲', color: '#4CAF50',
    players: '2–8', duration: '60 min', price: 'R320',
    story: "Your uncle went quiet after months of letters from Eldertree. At his abandoned cabin the door slams shut. Movement in the woods. Can you escape the creature that's taken the town?",
  },
  {
    name: 'Nightmare', slug: 'nightmare', difficulty: 9, icon: '🌙', color: '#9C27B0',
    players: '2–8', duration: '60 min', price: 'R320',
    story: "The Dead Moon rises once a year. Tonight the Sandman walks among us. You have 60 minutes to break his curse — or join his collection of night terrors forever.",
  },
  {
    name: 'The Basement', slug: 'the-basement', difficulty: 10, icon: '⛓️', color: '#FF9800',
    players: '2–8', duration: '60 min', price: 'R320',
    story: "You wake up in darkness. Chains dragging on metal. You're pawns in a psychopath's game — 60 minutes to escape his chamber for good. Our hardest room.",
    tag: 'Hardest',
  },
  {
    name: "The Witch's Curse", slug: 'the-witchs-curse', difficulty: 'Outdoor', icon: '🧙‍♀️', color: '#7C4DFF',
    players: '2–4', duration: '45 min', price: 'R320',
    story: "Hidden within a container at The Golf Place — Fore-Ways lies a curse waiting to be broken. Solve magical puzzles in just 45 minutes. Our outdoor experience.",
    tag: 'Outdoor',
  },
];

export const BOOKING_URL = 'https://gr8bookings.smartintegrate.co.za/book';
export const CALENDAR_URL = 'https://gr8bookings.smartintegrate.co.za/availability';
