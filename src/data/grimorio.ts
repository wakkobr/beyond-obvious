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
  icon: string;
  badgeClass: string;
}

export interface GrimorioItem {
  title: string;
  url: string;
  category: CategoryId;
  description: string;
  badge?: string;
  isFeatured?: boolean;
}

export const CATEGORIES: Record<CategoryId, CategoryInfo> = {
  ttrpg: { id: 'ttrpg', label: 'TTRPG & WORLDBUILDING', icon: '🎲', badgeClass: 'cat-ttrpg' },
  gaming: { id: 'gaming', label: 'GAMES & ESTRATÉGIA', icon: '🎮', badgeClass: 'cat-gaming' },
  boardgames: { id: 'boardgames', label: 'JOGOS DE TABULEIRO', icon: '♟️', badgeClass: 'cat-boardgames' },
  tech: { id: 'tech', label: 'DEV & DIGITAL ARCANUM', icon: '⚙️', badgeClass: 'cat-tech' },
  stream: { id: 'stream', label: 'VTUBERS & TRANSMISSÃO', icon: '📡', badgeClass: 'cat-stream' },
  cinema: { id: 'cinema', label: 'CINEMA, ANIME & SÉRIES', icon: '🎬', badgeClass: 'cat-cinema' },
  books: { id: 'books', label: 'LEITURA & NARRATIVA', icon: '📜', badgeClass: 'cat-books' },
};

export const GRIMORIO_ITEMS: GrimorioItem[] = [
  {
    title: 'World Anvil',
    url: 'https://www.worldanvil.com',
    category: 'ttrpg',
    badge: 'Worldbuilding',
    description: 'Plataforma para compêndios de campanha, mapas interativos, cronologias e bíblias de cenário.',
    isFeatured: true
  },
  {
    title: 'Owlbear Rodeo',
    url: 'https://www.owlbear.rodeo',
    category: 'ttrpg',
    badge: 'VTT',
    description: 'Mesa virtual ágil e minimalista direto no navegador, sem atrito para grid tático.'
  },
  {
    title: 'Marvel Snap Zone',
    url: 'https://marvelsnapzone.com',
    category: 'gaming',
    badge: 'Snap Meta',
    description: 'Banco de dados analítico de cartas, decks competitivos e relatórios de meta atualizados.'
  },
  {
    title: 'BoardGameGeek (BGG)',
    url: 'https://boardgamegeek.com',
    category: 'boardgames',
    badge: 'Enciclopédia',
    description: 'O maior arquivo e comunidade global de mecânicas de jogos de tabuleiro modernos.'
  },
  {
    title: 'Obsidian.md',
    url: 'https://obsidian.md',
    category: 'tech',
    badge: 'Segunda Mente',
    description: 'Ambiente local de gestão de conhecimento em Markdown com conexões neurais e plugins poderosos.',
    isFeatured: true
  },
  {
    title: 'Astro Docs',
    url: 'https://docs.astro.build',
    category: 'tech',
    badge: 'Framework',
    description: 'Documentação oficial do framework web voltado para alta performance e arquitetura de ilhas.'
  },
  {
    title: 'VTube Studio',
    url: 'https://denchisoft.com',
    category: 'stream',
    badge: 'Live2D',
    description: 'Software de rastreamento facial e controle de operadores virtuais para transmissões.'
  }
];