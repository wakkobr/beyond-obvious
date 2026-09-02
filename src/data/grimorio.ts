// src/data/grimorio.ts

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
  // ─── TTRPG & WORLDBUILDING (22 LINKS) ──────────────────────────────
  {
    title: 'Watabou Procgen Arcana',
    url: 'https://watabou.github.io/',
    category: 'ttrpg',
    badge: 'Gerador',
    description: 'Geradores procedurais de masmorras, vilas e cidades medievais.',
    isFeatured: true
  },
  {
    title: 'Azgaar Fantasy Map Generator',
    url: 'https://azgaar.github.io/Fantasy-Map-Generator/',
    category: 'ttrpg',
    badge: 'Mapas',
    description: 'Gerador completo de mapas mundiais com fronteiras políticas e relevo.',
    isFeatured: true
  },
  {
    title: 'Owlbear Rodeo',
    url: 'https://www.owlbear.rodeo/',
    category: 'ttrpg',
    badge: 'VTT',
    description: 'Mesa virtual minimalista direta no navegador sem necessidade de instalação.',
    isFeatured: true
  },
  {
    title: 'World Anvil',
    url: 'https://www.worldanvil.com/',
    category: 'ttrpg',
    badge: 'Worldbuilding',
    description: 'Plataforma de criação de mundos, cronologias e bíblias de campanha.',
    isFeatured: true
  },
  {
    title: 'Kanka.io',
    url: 'https://kanka.io/',
    category: 'ttrpg',
    badge: 'Gestão',
    description: 'Gerenciador de campanhas, diários de sessão, NPCs e linhagens.',
    isFeatured: true
  },
  {
    title: '5e.tools',
    url: 'https://5e.tools/',
    category: 'ttrpg',
    badge: 'Compêndio 5e',
    description: 'Base de dados e ferramentas de consulta rápida para mestres de D&D 5e.'
  },
  {
    title: 'Lost Atlas',
    url: 'https://lostatlas.co/',
    category: 'ttrpg',
    badge: 'Battlemaps',
    description: 'Buscador indexado com milhares de mapas táticos para mesas virtuais.'
  },
  {
    title: 'Adventure Lookup',
    url: 'https://adventurelookup.com/adventures',
    category: 'ttrpg',
    badge: 'Catálogo',
    description: 'Motor de busca de aventuras oficiais e third-party por nível e monstros.',
    isFeatured: true
  },
  {
    title: 'Donjon RPG Tools',
    url: 'https://donjon.bin.sh/',
    category: 'ttrpg',
    badge: 'Utilitários',
    description: 'Geradores clássicos de masmorras, tesouros, nomes e encontros aleatórios.'
  },
  {
    title: 'Dyson Logos Maps',
    url: 'https://dysonlogos.blog/maps/',
    category: 'ttrpg',
    badge: 'Mapas Hand-Drawn',
    description: 'Arquivo com centenas de masmorras e mapas desenhados à mão com licença livre.'
  },
  {
    title: 'Sly Flourish (Lazy DM)',
    url: 'https://slyflourish.com/',
    category: 'ttrpg',
    badge: 'Mestrado Ágil',
    description: 'Artigos e métodos consagrados para preparação ágil e minimalista de sessões.'
  },
  {
    title: 'Atlas of Mystara',
    url: 'https://mystara.thorfmaps.com/',
    category: 'ttrpg',
    badge: 'Cartografia',
    description: 'Mapeamento cartográfico detalhado do clássico cenário Mystara de D&D.'
  },
  {
    title: 'AdamW Dice Roller',
    url: 'https://dice.adamw.uk/',
    category: 'ttrpg',
    badge: 'Rolador de Dados',
    description: 'Rolador sonoro e responsivo de dados com suporte a fontes personalizadas.'
  },
  {
    title: 'Red Blob Games MapGen',
    url: 'https://www.redblobgames.com/maps/mapgen2/',
    category: 'ttrpg',
    badge: 'Algoritmos',
    description: 'Gerador de terrenos e biomas baseado em diagramas de polígonos Voronoi.'
  },
  {
    title: 'RPGBOT',
    url: 'https://rpgbot.net/',
    category: 'ttrpg',
    badge: 'Otimização 5e',
    description: 'Análises aprofundadas de classes, magias, talentos e fichas de D&D.'
  },
  {
    title: 'Mausritter',
    url: 'https://losing-games.itch.io/mausritter',
    category: 'ttrpg',
    badge: 'Sistema',
    description: 'Regras oficiais e gratuitas do clássico RPG minimalista de espadas e bigodes.'
  },
  {
    title: 'Goblinist Encounter Gen',
    url: 'https://tools.goblinist.com/5enc',
    category: 'ttrpg',
    badge: 'Encontros 5e',
    description: 'Calculadora e balanceador de encontros por ND e dificuldade de grupo.'
  },
  {
    title: 'Tetra-Cube D&D Gen',
    url: 'https://tetra-cube.com/dnd/dnd-char-gen.html',
    category: 'ttrpg',
    badge: 'NPC Generator',
    description: 'Gerador de statblocks, cartões de monstros e NPCs no formato oficial 5e.'
  },
  {
    title: 'Who The Fuck Is My Character',
    url: 'https://whothefuckismydndcharacter.com/',
    category: 'ttrpg',
    badge: 'Ideias de PJ',
    description: 'Gerador satírico e direto de conceitos rápidos e atípicos de personagens.'
  },
  {
    title: 'Deepnight RPG Map',
    url: 'https://deepnight.net/tools/rpg-map/',
    category: 'ttrpg',
    badge: 'Editor Web',
    description: 'Editor leve no navegador para desenhar masmorras em estilo pixel e blueprint.'
  },
  {
    title: 'Old Dragon (Covil)',
    url: 'https://olddragon.com.br/',
    category: 'ttrpg',
    badge: 'Old School BR',
    description: 'Portal oficial do clássico RPG nacional de regras tradicionais e aventuras.'
  },
  {
    title: 'D&D Beyond',
    url: 'https://www.dndbeyond.com/',
    category: 'ttrpg',
    badge: 'Compêndio Oficial',
    description: 'Plataforma digital oficial para criação de fichas e consulta de regras de D&D.'
  },

  // ─── GAMES & ESTRATÉGIA (20 LINKS) ───────────────────────────────────
  {
    title: 'Skyblivion',
    url: 'https://skyblivion.com/',
    category: 'gaming',
    badge: 'Total Conversion',
    description: 'Projeto comunitário que recria TES IV: Oblivion na engine do Skyrim.',
    isFeatured: true
  },
  {
    title: 'Snap.fan',
    url: 'https://snap.fan/',
    category: 'gaming',
    badge: 'Marvel Snap',
    description: 'Rastreamento de variantes, estatísticas de vitórias e base de dados.',
    isFeatured: true
  },
  {
    title: 'Marvel Snap Zone',
    url: 'https://marvelsnapzone.com/',
    category: 'gaming',
    badge: 'Snap Meta',
    description: 'Tier lists semanais, estratégias competitivas e atualizações de balanceamento.',
    isFeatured: true
  },
  {
    title: 'Untapped.gg Snap',
    url: 'https://snap.untapped.gg/',
    category: 'gaming',
    badge: 'Estatísticas Snap',
    description: 'Rastreador de taxas de cubo e desempenho em tempo real do meta de Snap.'
  },
  {
    title: 'MTG Top 8',
    url: 'https://www.mtgtop8.com/',
    category: 'gaming',
    badge: 'Magic Competitive',
    description: 'Arquivo de listas vencedoras e relatórios de torneios mundiais de Magic.',
    isFeatured: true
  },
  {
    title: 'MTG Goldfish',
    url: 'https://www.mtggoldfish.com/',
    category: 'gaming',
    badge: 'Preços & Decks',
    description: 'Análise de preços de cartas, formatos competitivos e tendências de metagame.'
  },
  {
    title: 'TappedOut',
    url: 'https://tappedout.net/',
    category: 'gaming',
    badge: 'Deckbuilder',
    description: 'Comunidade clássica para criação, teste e playtest de baralhos de MTG.'
  },
  {
    title: 'Nexus Mods',
    url: 'https://www.nexusmods.com/',
    category: 'gaming',
    badge: 'Modding',
    description: 'A maior biblioteca global de mods para RPGs como Baldur\'s Gate 3 e Skyrim.',
    isFeatured: true
  },
  {
    title: 'Modrinth',
    url: 'https://modrinth.com/',
    category: 'gaming',
    badge: 'Minecraft Mods',
    description: 'Plataforma veloz e open-source para download de mods, shaders e modpacks.'
  },
  {
    title: 'CurseForge',
    url: 'https://www.curseforge.com/',
    category: 'gaming',
    badge: 'Modding Hub',
    description: 'Repositório essencial de modificações, add-ons e ferramentas para jogos de PC.'
  },
  {
    title: 'Vanilla Tweaks',
    url: 'https://vanillatweaks.net/',
    category: 'gaming',
    badge: 'Minecraft Vanilla',
    description: 'Customizador modular de texturas e datapacks para refinamento visual.'
  },
  {
    title: 'MultiMC',
    url: 'https://multimc.org/',
    category: 'gaming',
    badge: 'Launcher',
    description: 'Gerenciador leve e open-source de múltiplas instâncias modded de Minecraft.'
  },
  {
    title: 'MC Seeder',
    url: 'https://mcseeder.com/',
    category: 'gaming',
    badge: 'Seed Finder',
    description: 'Visualizador de sementes, coordenadas de estruturas e mapa de biomas online.'
  },
  {
    title: 'Planet Minecraft',
    url: 'https://www.planetminecraft.com/',
    category: 'gaming',
    badge: 'Comunidade MC',
    description: 'Acervo de mapas para download, projetos arquitetônicos e pacotes de textura.'
  },
  {
    title: 'WorldPainter',
    url: 'https://www.worldpainter.net/',
    category: 'gaming',
    badge: 'Gerador de Terreno',
    description: 'Pintor interativo de mapas para esculpir relevos e biomas customizados no Minecraft.'
  },
  {
    title: 'Game8 Honkai Star Rail',
    url: 'https://game8.co/games/Honkai-Star-Rail',
    category: 'gaming',
    badge: 'Star Rail Tier',
    description: 'Guias práticos de builds, relíquias, cones de luz e tier lists de personagens.'
  },
  {
    title: 'Game8 Wuthering Waves',
    url: 'https://game8.co/games/Wuthering-Waves',
    category: 'gaming',
    badge: 'WuWa Guide',
    description: 'Mapas interativos de inimigos especiais, itens e builds de personagens.'
  },
  {
    title: 'Fextralife Wikis',
    url: 'https://fextralife.com/',
    category: 'gaming',
    badge: 'RPG Wikis',
    description: 'Guias aprofundados e bases de dados para Baldur\'s Gate 3, Elden Ring e RPGs.'
  },
  {
    title: 'Old Games Download',
    url: 'https://oldgamesdownload.com/',
    category: 'gaming',
    badge: 'Abandonware',
    description: 'Arquivo histórico e preservação de clássicos retrô e jogos abandonware.'
  },
  {
    title: 'Hermitcraft Official',
    url: 'https://hermitcraft.com/',
    category: 'gaming',
    badge: 'Minecraft SMP',
    description: 'Portal e novidades do mais influente servidor técnico e criativo de Minecraft.'
  },

  // ─── JOGOS DE TABULEIRO (12 LINKS) ──────────────────────────────────
  {
    title: 'BoardGameGeek (BGG)',
    url: 'https://boardgamegeek.com/',
    category: 'boardgames',
    badge: 'Enciclopédia',
    description: 'A maior autoridade mundial em catálogo, rankings, regras e fóruns de board games.',
    isFeatured: true
  },
  {
    title: 'Ludopedia',
    url: 'https://ludopedia.com.br/',
    category: 'boardgames',
    badge: 'Comunidade BR',
    description: 'Principal portal brasileiro para compra, venda, cadastro e discussões de jogos de tabuleiro.',
    isFeatured: true
  },
  {
    title: 'Board Game Arena (BGA)',
    url: 'https://boardgamearena.com/',
    category: 'boardgames',
    badge: 'Plataforma Online',
    description: 'A maior plataforma de partidas online por turnos ou tempo real direto no navegador.',
    isFeatured: true
  },
  {
    title: 'Tabletop Simulator',
    url: 'https://store.steampowered.com/app/286160/Tabletop_Simulator/',
    category: 'boardgames',
    badge: 'Simulador Sandbox',
    description: 'Mesa virtual com física realista para prototipagem e jogos de tabuleiro.'
  },
  {
    title: 'MeepleBR',
    url: 'https://meeplebr.com/',
    category: 'boardgames',
    badge: 'Editora Nacional',
    description: 'Catálogo de jogos de tabuleiro modernos e produções autorais brasileiras.'
  },
  {
    title: 'Galápagos Jogos',
    url: 'https://www.mundogalapagos.com.br/',
    category: 'boardgames',
    badge: 'Editora',
    description: 'Linhas de jogos consagrados, manuais em português e lançamentos no Brasil.'
  },
  {
    title: 'Compara Jogos',
    url: 'https://www.comparajogos.com.br/',
    category: 'boardgames',
    badge: 'Comparador BR',
    description: 'Monitor de preços e disponibilidade de jogos de tabuleiro nas lojas nacionais.'
  },
  {
    title: 'Sleeve Your Games',
    url: 'https://www.sleeveyourgames.com/',
    category: 'boardgames',
    badge: 'Guia de Sleeves',
    description: 'Base de consulta para descobrir tamanho exato e quantidade de sleeves por jogo.'
  },
  {
    title: 'Chits & Bits',
    url: 'https://chitsandbits.com/',
    category: 'boardgames',
    badge: 'Organização',
    description: 'Ferramenta para cálculo de dimensões de caixas e inserts personalizados.'
  },
  {
    title: 'Shut Up & Sit Down',
    url: 'https://www.shutupandsitdown.com/',
    category: 'boardgames',
    badge: 'Crítica & Ensaios',
    description: 'Resenhas aprofundadas, bem-humoradas e ensaios críticos sobre jogos analógicos.'
  },
  {
    title: 'The Dice Tower',
    url: 'https://www.dicetower.com/',
    category: 'boardgames',
    badge: 'Notícias & Reviews',
    description: 'Pioneira rede de análises, vídeos e prévias de lançamentos internacionais de jogos.'
  },
  {
    title: 'DrivethruCards',
    url: 'https://www.drivethrucards.com/',
    category: 'boardgames',
    badge: 'Print on Demand',
    description: 'Impressão sob demanda de card games autorais e expansões de jogos de cartas.'
  },

  // ─── DEV & DIGITAL ARCANUM (15 LINKS) ───────────────────────────────
  {
    title: 'Astro Docs',
    url: 'https://docs.astro.build/',
    category: 'tech',
    badge: 'Framework Web',
    description: 'Documentação oficial do Astro focada em ilhas e zero-JavaScript por padrão.',
    isFeatured: true
  },
  {
    title: 'Obsidian.md',
    url: 'https://obsidian.md/',
    category: 'tech',
    badge: 'Segunda Mente',
    description: 'Ambiente de anotações em Markdown local com grafo de conexões bidirecionais.',
    isFeatured: true
  },
  {
    title: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    category: 'tech',
    badge: 'CSS Framework',
    description: 'Framework de classes utilitárias para estilização responsiva e ágil.',
    isFeatured: true
  },
  {
    title: 'GitHub',
    url: 'https://github.com/',
    category: 'tech',
    badge: 'Git & CI/CD',
    description: 'Repositório em nuvem de controle de versão, automações e deploy contínuo.',
    isFeatured: true
  },
  {
    title: 'Vercel',
    url: 'https://vercel.com/',
    category: 'tech',
    badge: 'Cloud Deploy',
    description: 'Plataforma de deploy global com suporte nativo de alta performance para Astro.',
    isFeatured: true
  },
  {
    title: 'Decap CMS',
    url: 'https://decapcms.org/',
    category: 'tech',
    badge: 'Git-Based CMS',
    description: 'CMS baseado em Git e arquivos Markdown para sites estáticos modernos.'
  },
  {
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/',
    category: 'tech',
    badge: 'Referência Web',
    description: 'A documentação definitiva e autoritativa de HTML, CSS e JavaScript da web.'
  },
  {
    title: 'TypeScript Docs',
    url: 'https://www.typescriptlang.org/',
    category: 'tech',
    badge: 'Linguagem',
    description: 'Documentação e playground oficial da linguagem com tipagem estática.'
  },
  {
    title: 'Node.js',
    url: 'https://nodejs.org/',
    category: 'tech',
    badge: 'Runtime',
    description: 'Ambiente de execução JavaScript no servidor utilizado para automações de build.'
  },
  {
    title: 'Dataview (Obsidian)',
    url: 'https://blacksmithgu.github.io/obsidian-dataview/',
    category: 'tech',
    badge: 'PKM Plugin',
    description: 'Mecanismo de consultas estilo SQL para transformar notas do Obsidian em banco de dados.'
  },
  {
    title: 'DevDocs',
    url: 'https://devdocs.io/',
    category: 'tech',
    badge: 'Docs Offline',
    description: 'Visualizador rápido e unificado de documentações técnicas em uma só interface.'
  },
  {
    title: 'Ray.so',
    url: 'https://ray.so/',
    category: 'tech',
    badge: 'Code Snippets',
    description: 'Gerador minimalista de imagens elegantes com destaque de sintaxe de código.'
  },
  {
    title: 'Can I Use',
    url: 'https://caniuse.com/',
    category: 'tech',
    badge: 'Compatibilidade',
    description: 'Tabelas de suporte atualizadas para recursos de HTML, CSS e JavaScript nos navegadores.'
  },
  {
    title: 'Bundlephobia',
    url: 'https://bundlephobia.com/',
    category: 'tech',
    badge: 'Performance Web',
    description: 'Calculadora de custo de pacotes e impacto de bibliotecas npm no bundle final.'
  },
  {
    title: 'Fontsource',
    url: 'https://fontsource.org/',
    category: 'tech',
    badge: 'Tipografia Web',
    description: 'Biblioteca open-source para self-hosting simples de fontes sem chamadas externas.'
  },

  // ─── VTUBERS & TRANSMISSÃO (12 LINKS) ───────────────────────────────
  {
    title: 'VTube Studio',
    url: 'https://denchisoft.com/',
    category: 'stream',
    badge: 'Live2D Control',
    description: 'Ferramenta padrão de rastreamento facial e controle de avatares Live2D.',
    isFeatured: true
  },
  {
    title: 'OBS Studio',
    url: 'https://obsproject.com/',
    category: 'stream',
    badge: 'Captura & Live',
    description: 'Software open-source indispensável para captura e codificação de transmissões.',
    isFeatured: true
  },
  {
    title: 'StreamElements',
    url: 'https://streamelements.com/',
    category: 'stream',
    badge: 'Overlays & Bot',
    description: 'Central em nuvem de moderação automática, alertas e widgets para canais.',
    isFeatured: true
  },
  {
    title: 'Streamlabs',
    url: 'https://streamlabs.com/',
    category: 'stream',
    badge: 'Alertas & Widgets',
    description: 'Plataforma de ferramentas, alertas sonoros e layouts para criadores de conteúdo.'
  },
  {
    title: 'Twitch Dashboard',
    url: 'https://dashboard.twitch.tv/',
    category: 'stream',
    badge: 'Transmissão',
    description: 'Painel de controle do criador para gerenciar lives, métricas e recompensas.'
  },
  {
    title: 'VB-Audio VoiceMeeter',
    url: 'https://vb-audio.com/Voicemeeter/',
    category: 'stream',
    badge: 'Mixer de Áudio',
    description: 'Mesa virtual de áudio para gerenciar múltiplas faixas e roteamento no PC.'
  },
  {
    title: 'VDO.Ninja',
    url: 'https://vdo.ninja/',
    category: 'stream',
    badge: 'Vídeo P2P',
    description: 'Envio de áudio e vídeo de câmeras e convidados direto para o OBS com latência zero.'
  },
  {
    title: 'Booth.pm',
    url: 'https://booth.pm/',
    category: 'stream',
    badge: 'Assets VTuber',
    description: 'Marketplace internacional de modelos 3D, roupas, Live2D e cenários para live.'
  },
  {
    title: 'Inochi2D',
    url: 'https://inochi2d.com/',
    category: 'stream',
    badge: 'Open-Source 2D',
    description: 'Suíte aberta e independente para rigging e animação de operadores virtuais.'
  },
  {
    title: 'MixItUp',
    url: 'https://mixitupapp.com/',
    category: 'stream',
    badge: 'Bot Avançado',
    description: 'Bot de chat com suporte a automações locais complexas e integrações de canais.'
  },
  {
    title: 'NVIDIA Broadcast',
    url: 'https://www.nvidia.com/pt-br/geforce/broadcasting/broadcast-app/',
    category: 'stream',
    badge: 'IA de Áudio/Vídeo',
    description: 'Remoção de ruídos de microfone por inteligência artificial e enquadramento de câmera.'
  },
  {
    title: 'VTuber Wiki',
    url: 'https://virtualyoutuber.fandom.com/',
    category: 'stream',
    badge: 'Enciclopédia',
    description: 'Arquivo comunitário sobre a história, tecnologia e cultura de criadores virtuais.'
  },

  // ─── CINEMA, ANIME & SÉRIES (12 LINKS) ──────────────────────────────
  {
    title: 'Letterboxd',
    url: 'https://letterboxd.com/',
    category: 'cinema',
    badge: 'Diário de Cinema',
    description: 'Rede social para catalogação de filmes assistidos, resenhas e listas temáticas.',
    isFeatured: true
  },
  {
    title: 'AniList',
    url: 'https://anilist.co/',
    category: 'cinema',
    badge: 'Anime & Mangá',
    description: 'Rastreador de animes e mangás com notas da comunidade e interface limpa.',
    isFeatured: true
  },
  {
    title: 'MyAnimeList (MAL)',
    url: 'https://myanimelist.net/',
    category: 'cinema',
    badge: 'Base Histórica',
    description: 'A mais tradicional base de dados global de sinopses, rankings e discussões de anime.',
    isFeatured: true
  },
  {
    title: 'JustWatch',
    url: 'https://www.justwatch.com/br',
    category: 'cinema',
    badge: 'Guia Streaming',
    description: 'Mecanismo de busca para localizar em quais serviços de streaming filmes estão disponíveis.'
  },
  {
    title: 'IMDb',
    url: 'https://www.imdb.com/',
    category: 'cinema',
    badge: 'Cinema Global',
    description: 'A maior base de dados de ficha técnica, créditos de elenco e avaliações de cinema.'
  },
  {
    title: 'The Movie Database (TMDB)',
    url: 'https://www.themoviedb.org/',
    category: 'cinema',
    badge: 'Metadados Abertos',
    description: 'Base comunitária de metadados e pôsteres utilizada por tocadores e apps de mídia.'
  },
  {
    title: 'TV Time',
    url: 'https://www.tvtime.com/',
    category: 'cinema',
    badge: 'Séries & TV',
    description: 'Aplicativo de rastreamento de episódios de séries, temporadas e reações.'
  },
  {
    title: 'Sakugabooru',
    url: 'https://www.sakugabooru.com/',
    category: 'cinema',
    badge: 'Animação Clássica',
    description: 'Arquivo de estudos visuais com clipes dedicados à excelência de animação sakuga.'
  },
  {
    title: 'MangaUpdates',
    url: 'https://www.mangaupdates.com/',
    category: 'cinema',
    badge: 'Mangás & scans',
    description: 'Informações de capítulos lançados, autores e status de publicação de mangás.'
  },
  {
    title: 'Anime-Planet',
    url: 'https://www.anime-planet.com/',
    category: 'cinema',
    badge: 'Recomendações',
    description: 'Catálogo com recomendações personalizadas com base no gosto pessoal de animes.'
  },
  {
    title: 'Behind The Voice Actors',
    url: 'https://www.behindthevoiceactors.com/',
    category: 'cinema',
    badge: 'Dublagem',
    description: 'Arquivo dedicado a dubladores originais e localizados de animações e games.'
  },
  {
    title: 'Film Affinity',
    url: 'https://www.filmaffinity.com/',
    category: 'cinema',
    badge: 'Crítica',
    description: 'Recomendações cinematográficas com algoritmos de compatibilidade entre cinéfilos.'
  },

  // ─── LEITURA & NARRATIVA (12 LINKS) ─────────────────────────────────
  {
    title: 'Goodreads',
    url: 'https://www.goodreads.com/',
    category: 'books',
    badge: 'Comunidade Global',
    description: 'Catálogo de livros, metas de leitura e resenhas críticas da comunidade mundial.',
    isFeatured: true
  },
  {
    title: 'Skoob',
    url: 'https://www.skoob.com.br/',
    category: 'books',
    badge: 'Estante Virtual BR',
    description: 'A principal rede social de leitores no Brasil para metas, sorteios e resenhas.',
    isFeatured: true
  },
  {
    title: 'The StoryGraph',
    url: 'https://www.thestorygraph.com/',
    category: 'books',
    badge: 'Métricas Leitoras',
    description: 'Alternativa focada em gráficos comportamentais, ritmo e estilo de escrita de livros.',
    isFeatured: true
  },
  {
    title: 'TV Tropes',
    url: 'https://tvtropes.org/',
    category: 'books',
    badge: 'Dispositivos Narrativos',
    description: 'Enciclopédia de clichês, arquétipos e recursos de narrativa literária e cinematográfica.',
    isFeatured: true
  },
  {
    title: 'Project Gutenberg',
    url: 'https://www.gutenberg.org/',
    category: 'books',
    badge: 'Domínio Público',
    description: 'Arquivo com mais de 70.000 livros clássicos em domínio público para download gratuito.'
  },
  {
    title: 'Open Library',
    url: 'https://openlibrary.org/',
    category: 'books',
    badge: 'Biblioteca Digital',
    description: 'Iniciativa do Internet Archive para catalogar e disponibilizar cópias de cada livro publicado.'
  },
  {
    title: 'LitCharts',
    url: 'https://www.litcharts.com/',
    category: 'books',
    badge: 'Análise Literária',
    description: 'Guias explicativos de temas, metáforas, citações e contexto de obras clássicas.'
  },
  {
    title: 'Scrivener',
    url: 'https://www.literatureandlatte.com/scrivener/overview',
    category: 'books',
    badge: 'Escrita de Livros',
    description: 'Software focado em estruturação de manuscritos, fichas de personagens e romances.'
  },
  {
    title: 'Archive of Our Own (AO3)',
    url: 'https://archiveofourown.org/',
    category: 'books',
    badge: 'Ficção Autoral',
    description: 'Arquivo sem fins lucrativos gerido por autores para publicação e preservação de histórias.'
  },
  {
    title: 'Standard Ebooks',
    url: 'https://standardebooks.org/',
    category: 'books',
    badge: 'E-books Formatados',
    description: 'Edições tipográficas de obras em domínio público desenhadas com alto padrão editorial.'
  },
  {
    title: 'LibriVox',
    url: 'https://librivox.org/',
    category: 'books',
    badge: 'Audiolivros Livres',
    description: 'Gravações voluntárias de audiolivros de clássicos mundiais de domínio público.'
  },
  {
    title: 'Poetry Foundation',
    url: 'https://www.poetryfoundation.org/',
    category: 'books',
    badge: 'Poesia & Formas',
    description: 'O mais extenso acervo de poemas, ensaios e técnicas poéticas da língua inglesa.'
  }
];