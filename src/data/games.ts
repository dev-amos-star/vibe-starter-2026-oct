export interface WordleState {
  targetWord: string;
  guesses: string[];
  currentGuess: string;
  gameStatus: 'playing' | 'won' | 'lost';
}

export interface ConnectionsGroup {
  category: string;
  words: string[];
  color: string;
  solved: boolean;
}

export interface MiniPuzzle {
  gridSize: number;
  solution: string[][];
  acrossClues: { number: number; clue: string; row: number; col: number; length: number }[];
  downClues: { number: number; clue: string; row: number; col: number; length: number }[];
}

export const WORDLE_SOLUTION = 'TIMES';

export const CONNECTIONS_GROUPS: ConnectionsGroup[] = [
  {
    category: 'NEWSPAPER SECTIONS',
    words: ['OPINION', 'METRO', 'CULTURE', 'SPORTS'],
    color: '#f9df6d', // Yellow
    solved: false
  },
  {
    category: 'WORDS BEFORE "LINE"',
    words: ['DEAD', 'BY', 'HEAD', 'GUIDE'],
    color: '#a0c35a', // Green
    solved: false
  },
  {
    category: 'TYPES OF SOUND',
    words: ['CHIME', 'ECHO', 'TICK', 'WHISPER'],
    color: '#b0c4de', // Blue
    solved: false
  },
  {
    category: 'SPEED UP',
    words: ['DASH', 'BOLT', 'SPRINT', 'HURRY'],
    color: '#ba81c5', // Purple
    solved: false
  }
];

export const SPELLING_BEE_DATA = {
  centerLetter: 'A',
  outerLetters: ['C', 'E', 'L', 'N', 'R', 'T'],
  validWords: [
    'CENTRAL', 'ALTER', 'ALERT', 'LATER', 'TRACE', 'CRANE', 'CLEAR', 'CLEAN',
    'CANAL', 'REACT', 'LANCE', 'LEARN', 'TALE', 'LATE', 'RATE', 'CARE',
    'RACE', 'LANE', 'EARN', 'NEAT', 'LEAN', 'REAL', 'TEAR', 'CATE'
  ],
  pangrams: ['CENTRAL']
};

export const MINI_CROSSWORD: MiniPuzzle = {
  gridSize: 5,
  solution: [
    ['P', 'R', 'E', 'S', 'S'],
    ['A', 'U', 'D', 'I', 'T'],
    ['P', 'L', 'I', 'E', 'D'],
    ['E', 'E', 'T', 'R', 'O'],
    ['R', 'S', 'S', 'A', 'P']
  ],
  acrossClues: [
    { number: 1, clue: 'Journalistic profession or printing machine', row: 0, col: 0, length: 5 },
    { number: 6, clue: 'Official tax inspection', row: 1, col: 0, length: 5 },
    { number: 7, clue: 'Worked steadily at a trade', row: 2, col: 0, length: 5 },
    { number: 8, clue: 'Urban railway (var.)', row: 3, col: 0, length: 5 },
    { number: 9, clue: 'Tree fluid source', row: 4, col: 0, length: 5 }
  ],
  downClues: [
    { number: 1, clue: 'Material for physical broadsheets', row: 0, col: 0, length: 5 },
    { number: 2, clue: 'Governing guideline', row: 0, col: 1, length: 5 },
    { number: 3, clue: 'Prepare text for publication', row: 0, col: 2, length: 5 },
    { number: 4, clue: 'Mountain crest line', row: 0, col: 3, length: 5 },
    { number: 5, clue: 'Exhaust or stop', row: 0, col: 4, length: 5 }
  ]
};
