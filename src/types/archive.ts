/**
 * Type definitions for the lakshhnaa personal website & vintage ticket archive.
 */

export type FolderId = 
  | 'builds'
  | 'leetcode'
  | 'learning'
  | 'books'
  | 'blogs'
  | 'toolbox'
  | 'achievements';

export interface SchemaField {
  key: string;
  label: string;
  type: 'string' | 'number' | 'string[]' | 'date' | 'link' | 'code';
  description: string;
  example: string;
}

export interface TicketConfig {
  paperColor: string; // Background paper / perforated frame color
  bodyColor: string; // Inner saturated ticket color
  textColor: string;
  accentDetailColor: string;
  ticketNum: string;
  priceTag: string;
  subLabel: string;
  yearStamp: string;
  rotation: number;
  offsetY: number;
}

export interface FolderMeta {
  id: FolderId;
  path: string; // e.g., "/builds"
  name: string; // e.g., "builds"
  indexNum: string; // e.g., "01"
  badgeCode: string;
  titleDisplay: string;
  headline: string;
  accentColor: string; // Hex for primary highlight (NO GREEN)
  accentLight: string;
  bgFolder: string;
  borderFolder: string;
  tabPosition: 'left' | 'mid-left' | 'center' | 'mid-right' | 'right';
  summary: string;
  description: string;
  techKeywords: string[];
  schemaFields: SchemaField[];
  archivalCategory: string;
  intakeNote: string;
  ticketConfig: TicketConfig;
}

// Schemas for future data intake (typed models only, no mock records)
export interface BuildEntry {
  id: string;
  title: string;
  category: 'hardware' | 'embedded' | 'systems' | 'software';
  stack: string[];
  date: string;
  description: string;
  githubUrl?: string;
  schematicUrl?: string;
  liveDemo?: string;
}

export interface LeetCodeEntry {
  id: string;
  problemNumber: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string[];
  language: 'C++' | 'Python' | 'Rust' | 'TypeScript';
  dateSolved: string;
  timeComplexity: string;
  spaceComplexity: string;
  notes: string;
}

export interface LearningEntry {
  id: string;
  topic: string;
  domain: 'electronics' | 'systems' | 'architecture' | 'algorithms';
  dateStarted: string;
  status: 'active' | 'completed' | 'ongoing';
  keyTakeaways: string[];
  referenceLinks?: string[];
}

export interface BookEntry {
  id: string;
  title: string;
  author: string;
  genre: 'technical' | 'systems' | 'philosophy' | 'science' | 'fiction';
  dateFinished?: string;
  status: 'reading' | 'read' | 'queued';
  rating?: number;
  highlightQuote?: string;
}

export interface BlogEntry {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  synopsis: string;
  tags: string[];
  contentMarkdown?: string;
}

export interface ToolEntry {
  id: string;
  name: string;
  category: 'hardware-lab' | 'software-dev' | 'eda-simulation' | 'os-terminal';
  usage: string;
  favoriteFeature?: string;
  link?: string;
}

export interface AchievementEntry {
  id: string;
  title: string;
  issuerOrEvent: string;
  date: string;
  field: 'hackathon' | 'academic' | 'engineering' | 'fellowship';
  recognition: string;
  verificationLink?: string;
}
