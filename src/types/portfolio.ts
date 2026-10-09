export type NavItem = {id: string;label: string;primary: boolean;};

export type FocusArea = {index: string;title: string;items: string[];};

export type Capability = {index: string;title: string;evidence: string;sources: string[];};

export type Ownership = 'built' | 'assisted' | 'integrated';

export type DiagramNode = {name: string;detail?: string;ownership?: Ownership;};

export type DiagramLayer = {label: string;nodes: DiagramNode[];};

export type ProjectDiagram = {
  caption: string;
  layers: DiagramLayer[];
  flowLabel?: string;
  flow?: string[];
};

export type ProjectLink = {
  kind: 'live' | 'github' | 'video';
  label?: string;
  description?: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  slug: string;
  monogram: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  contributionNote?: string;
  implemented: string[];
  stack: string[];
  featured: boolean;
  diagram: ProjectDiagram;
  links: ProjectLink[];
  logo?: string;
  images?: (string | ProjectImage)[];
};

export type ExpertiseGroup = {category: string;items: string[];};

export type Achievement = {year: string;title: string;detail: string;};