export interface Article {
  id: string;
  title: string;
  deck: string;
  author: string;
  authorRole?: string;
  authorInitials?: string;
  readTime: string;
  date: string;
  section: string;
  kicker?: string;
  image?: string;
  imageCaption?: string;
  commentCount?: number;
  body: string[];
  pullQuote?: string;
  pullQuoteAuthor?: string;
  relatedIds?: string[];
  isFree?: boolean;
}

export interface LiveUpdateItem {
  id: string;
  timestamp: string;
  tag: 'Wins for Putin' | 'Escalating Assaults' | 'Russian Oil Deal' | 'Diplomacy';
  headline: string;
  content: string;
  reporter: string;
}

export interface PollCandidate {
  name: string;
  party: 'D' | 'R' | 'I';
  percentage: number;
  change: string;
  color: string;
}

export interface PollData {
  race: string;
  lastUpdated: string;
  marginOfError: string;
  candidates: PollCandidate[];
  history: { date: string; dem: number; rep: number }[];
  keyCounties: { county: string; talarico: number; paxton: number; status: string }[];
}

export type ActiveScreen = 'home' | 'article' | 'polls' | 'live-war' | 'games';

export type GameKey = 'wordle' | 'connections' | 'spelling-bee' | 'mini';
