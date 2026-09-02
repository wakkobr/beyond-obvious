// src/data/categories.ts

export type CategoryId =
  | 'ttrpg'
  | 'gaming'
  | 'boardgames'
  | 'tech'
  | 'stream'
  | 'cinema'
  | 'books';

export interface CategoryInfo {
  id: CategoryId;
  label: string;
  labelEn: string;
  icon: string;
  badgeClass: string;
}

export const CATEGORIES: Record<CategoryId, CategoryInfo> = {
  ttrpg: {
    id: 'ttrpg',
    label: 'TTRPG & WORLDBUILDING',
    labelEn: 'TTRPG & WORLDBUILDING',
    icon: '🎲',
    badgeClass: 'cat-ttrpg'
  },
  gaming: {
    id: 'gaming',
    label: 'GAMES & ESTRATÉGIA',
    labelEn: 'GAMES & STRATEGY',
    icon: '🎮',
    badgeClass: 'cat-gaming'
  },
  boardgames: {
    id: 'boardgames',
    label: 'JOGOS DE TABULEIRO',
    labelEn: 'BOARD GAMES',
    icon: '♟️',
    badgeClass: 'cat-boardgames'
  },
  tech: {
    id: 'tech',
    label: 'DEV & DIGITAL ARCANUM',
    labelEn: 'DEV & DIGITAL ARCANUM',
    icon: '⚙️',
    badgeClass: 'cat-tech'
  },
  stream: {
    id: 'stream',
    label: 'VTUBERS & TRANSMISSÃO',
    labelEn: 'VTUBERS & BROADCAST',
    icon: '📡',
    badgeClass: 'cat-stream'
  },
  cinema: {
    id: 'cinema',
    label: 'CINEMA, ANIME & SÉRIES',
    labelEn: 'CINEMA, ANIME & SERIES',
    icon: '🎬',
    badgeClass: 'cat-cinema'
  },
  books: {
    id: 'books',
    label: 'LEITURA & NARRATIVA',
    labelEn: 'READING & NARRATIVE',
    icon: '📜',
    badgeClass: 'cat-books'
  },
};

export const CATEGORY_IDS = Object.keys(CATEGORIES) as [CategoryId, ...CategoryId[]];