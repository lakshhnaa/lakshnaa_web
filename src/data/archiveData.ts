import { FolderMeta } from '../types/archive';

export interface IdentityProfile {
  brand: 'lakshhnaa';
  fullName: 'Lakshnaa B J';
  education: {
    degree: 'B.Tech in Electronics & Computer Science Engineering';
    university: 'VIT Chennai';
    department: 'School of Electronics Engineering (SENSE) / SCSE';
    coordinates: '12.8406° N, 80.1534° E';
  };
  tagline: 'electronics × systems × experiments';
  summary: 'Personal digital archive containing things I build, learn, read and collect. An intentional corner of the internet built from circuits, systems, and code.';
  status: 'READY FOR REAL RECORDS';
  contact: {
    github: 'https://github.com/lakshhnaa';
    email: 'lakshnaa.22@gmail.com';
    linkedin: 'https://linkedin.com/in/lakshnaabj';
    leetcode: 'https://leetcode.com/lakshhnaa';
  };
}

export const PROFILE: IdentityProfile = {
  brand: 'lakshhnaa',
  fullName: 'Lakshnaa B J',
  education: {
    degree: 'B.Tech in Electronics & Computer Science Engineering',
    university: 'VIT Chennai',
    department: 'School of Electronics Engineering (SENSE) / SCSE',
    coordinates: '12.8406° N, 80.1534° E',
  },
  tagline: 'electronics × systems × experiments',
  summary: 'Personal digital archive containing things I build, learn, read and collect. An intentional corner of the internet built from circuits, systems, and code.',
  status: 'READY FOR REAL RECORDS',
  contact: {
    github: 'https://github.com/lakshhnaa',
    email: 'lakshnaa.22@gmail.com',
    linkedin: 'https://linkedin.com/in/lakshnaabj',
    leetcode: 'https://leetcode.com/lakshhnaa',
  },
};

export const ARCHIVE_FOLDERS: FolderMeta[] = [
  {
    id: 'builds',
    path: '/builds',
    name: 'builds',
    indexNum: '01',
    badgeCode: 'BLD-74',
    titleDisplay: 'builds',
    headline: 'Physical computing, firmware, systems & prototypes',
    accentColor: '#be2626', // Aged Vermilion Print Ink (NO GREEN)
    accentLight: '#df5a5a',
    bgFolder: '#240a08',
    borderFolder: '#4a1512',
    tabPosition: 'left',
    summary: 'Hardware architectures, embedded systems, microcontrollers, and low-level software projects.',
    description: 'A repository for schematics, firmware code, FPGA verilog testbenches, circuit board revisions, and end-to-end engineering prototypes created at VIT Chennai and independent lab hours.',
    techKeywords: ['Verilog/VHDL', 'ARM Cortex', 'Embedded C/C++', 'KiCAD', 'RTOS', 'Linux Kernel'],
    archivalCategory: 'ENGINEERING & SYSTEMS',
    intakeNote: 'Dossier initialized. Waiting for real hardware schematics, firmware repositories, and build logs to be deposited.',
    ticketConfig: {
      paperColor: '#ede4ce', // Aged manila/cream paper
      bodyColor: '#be2626', // Aged vermilion litho ink
      textColor: '#f4ede0',
      accentDetailColor: '#dca926',
      ticketNum: '№ 4416',
      priceTag: 'ADMIT ONE',
      subLabel: 'INTERNATIONAL GRAND PRIX',
      yearStamp: '2026',
      rotation: -2.5,
      offsetY: 6,
    },
    schemaFields: [
      { key: 'title', label: 'Project Name', type: 'string', description: 'Name of the hardware or software build', example: 'FPGA RISC-V Micro-Core' },
      { key: 'category', label: 'Domain', type: 'string', description: 'Hardware, Embedded, Systems, or Software', example: 'embedded' },
      { key: 'stack', label: 'Tech Stack', type: 'string[]', description: 'Chips, languages, tools utilized', example: '["Verilog", "Basys 3", "Vivado"]' },
      { key: 'schematicUrl', label: 'Schematic / Repo', type: 'link', description: 'Link to circuit diagram or repository', example: 'github.com/lakshhnaa/...' },
    ],
  },
  {
    id: 'leetcode',
    path: '/leetcode',
    name: 'leetcode',
    indexNum: '02',
    badgeCode: 'ALGO-50',
    titleDisplay: 'leetcode',
    headline: 'Algorithmic intuition, patterns, and complexity proofs',
    accentColor: '#1b3491', // Aged Prussian / Ultramarine Stamp Ink
    accentLight: '#5975db',
    bgFolder: '#07112e',
    borderFolder: '#122359',
    tabPosition: 'mid-left',
    summary: 'Curated problem solutions, pattern breakdowns, and mathematical complexity notes.',
    description: 'Structured index of solved algorithmic challenges across dynamic programming, graph theory, trees, bit manipulation, and memory-efficient data structures.',
    techKeywords: ['Two Pointers', 'Graph Traversal', 'Dynamic Prog', 'Bitwise Math', 'Segment Trees'],
    archivalCategory: 'ALGORITHMS & DATA STRUCTURES',
    intakeNote: 'Log ledger initialized. Waiting for verified problem entries, personal solution notes, and complexity analyses.',
    ticketConfig: {
      paperColor: '#ede4ce',
      bodyColor: '#1b3491', // Aged cobalt blue
      textColor: '#f4ede0',
      accentDetailColor: '#dca926',
      ticketNum: '50c',
      priceTag: 'NIPPON 英国',
      subLabel: 'LOGIC & PROOF SEASON',
      yearStamp: '1974',
      rotation: 1.8,
      offsetY: -8,
    },
    schemaFields: [
      { key: 'problemNumber', label: 'Problem #', type: 'number', description: 'Official problem identifier', example: '42' },
      { key: 'title', label: 'Problem Title', type: 'string', description: 'Title of the algorithmic challenge', example: 'Trapping Rain Water' },
      { key: 'difficulty', label: 'Tier', type: 'string', description: 'Easy / Medium / Hard', example: 'Hard' },
      { key: 'timeComplexity', label: 'Big-O Time', type: 'string', description: 'Optimal asymptotic run time', example: 'O(N)' },
    ],
  },
  {
    id: 'learning',
    path: '/learning',
    name: 'learning',
    indexNum: '03',
    badgeCode: 'STUDY-74',
    titleDisplay: 'learning',
    headline: 'Syllabus deep dives, technical notes & mental models',
    accentColor: '#d4941c', // Aged Solar Ochre / Golden Mustard
    accentLight: '#f0b74f',
    bgFolder: '#241905',
    borderFolder: '#47320a',
    tabPosition: 'center',
    summary: 'Living study logs on digital electronics, operating systems, computer networking, and signal processing.',
    description: 'An open study notebook dissecting theoretical concepts, university coursework synthesis, whitepapers, and fundamental engineering mechanics.',
    techKeywords: ['Computer Architecture', 'Signal Processing', 'Network Protocols', 'Memory Hierarchies', 'Semiconductors'],
    archivalCategory: 'ACADEMIC SYNTHESIS & RESEARCH',
    intakeNote: 'Folder indexed. Waiting for coursework synthesis chapters and self-directed study notes.',
    ticketConfig: {
      paperColor: '#ede4ce',
      bodyColor: '#d4941c', // Aged ochre mustard
      textColor: '#141317',
      accentDetailColor: '#141317',
      ticketNum: '50c',
      priceTag: 'SEAT 12',
      subLabel: 'BLOOM SEASON DISPATCH',
      yearStamp: '1974',
      rotation: -1.2,
      offsetY: 8,
    },
    schemaFields: [
      { key: 'topic', label: 'Subject / Area', type: 'string', description: 'Theoretical topic explored', example: 'Pipelining & Branch Prediction' },
      { key: 'domain', label: 'Discipline', type: 'string', description: 'Electronics, Systems, or Architecture', example: 'architecture' },
      { key: 'keyTakeaways', label: 'Core Notes', type: 'string[]', description: 'Key distilled principles', example: '["Hazards", "Forwarding", "Branch target buffer"]' },
    ],
  },
  {
    id: 'books',
    path: '/books',
    name: 'books',
    indexNum: '04',
    badgeCode: 'STAR-97',
    titleDisplay: 'books',
    headline: 'Annotated bookshelf, marginalia & foundational texts',
    accentColor: '#c24b1a', // Aged Terracotta / Burnt Persimmon
    accentLight: '#e67345',
    bgFolder: '#240d04',
    borderFolder: '#471b08',
    tabPosition: 'mid-right',
    summary: 'Volumes read, active shelf, marginalia, and quotes on engineering, computing history, and philosophy.',
    description: 'A physical and digital library registry tracking texts that shaped my perspective on machines, systems thinking, craft, and technology culture.',
    techKeywords: ['Systems Thinking', 'Computer History', 'Cognitive Science', 'Engineering Craft'],
    archivalCategory: 'READING CABINET & MARGINALIA',
    intakeNote: 'Shelf catalog ready. Waiting for reading list, review notes, and favorite excerpts.',
    ticketConfig: {
      paperColor: '#ede4ce',
      bodyColor: '#c24b1a', // Aged burnt orange
      textColor: '#141317',
      accentDetailColor: '#141317',
      ticketNum: 'NIPPON 星場',
      priceTag: 'IN KYOTO',
      subLabel: 'STAR FIELD ARCHIVE',
      yearStamp: '1997',
      rotation: 2.8,
      offsetY: -5,
    },
    schemaFields: [
      { key: 'title', label: 'Book Title', type: 'string', description: 'Title of the published text', example: 'Designing Data-Intensive Applications' },
      { key: 'author', label: 'Author', type: 'string', description: 'Primary author(s)', example: 'Martin Kleppmann' },
      { key: 'status', label: 'Shelf Status', type: 'string', description: 'Reading, Read, or Queued', example: 'Read' },
      { key: 'highlightQuote', label: 'Key Margin Quote', type: 'string', description: 'Memorable passage or takeaway', example: 'Reliability is tolerating faults...' },
    ],
  },
  {
    id: 'blogs',
    path: '/blogs',
    name: 'blogs',
    indexNum: '05',
    badgeCode: 'AIR-25',
    titleDisplay: 'blogs',
    headline: 'Essays, lab dispatches, reflections & technical writing',
    accentColor: '#bf2460', // Aged Risograph Magenta / Weathered Pink
    accentLight: '#df5289',
    bgFolder: '#240612',
    borderFolder: '#470d24',
    tabPosition: 'right',
    summary: 'Longform writings documenting engineering experiments, project post-mortems, and thoughts.',
    description: 'A personal publication column for detailed walk-throughs of engineering problems, reflections on university life at VIT, and essays on systems design.',
    techKeywords: ['Lab Post-Mortems', 'Technical Deep Dives', 'Observations', 'Engineering Essays'],
    archivalCategory: 'WRITING & DISPATCHES',
    intakeNote: 'Publishing desk mounted. Awaiting first original written essays and markdown drafts.',
    ticketConfig: {
      paperColor: '#ede4ce',
      bodyColor: '#bf2460', // Aged magenta/pink ink
      textColor: '#f4ede0',
      accentDetailColor: '#dca926',
      ticketNum: '25¢',
      priceTag: 'AIR MAIL ✉',
      subLabel: 'PAR AVION DISPATCH',
      yearStamp: '1982',
      rotation: -2.2,
      offsetY: 7,
    },
    schemaFields: [
      { key: 'title', label: 'Article Headline', type: 'string', description: 'Title of the blog post', example: 'Debugging an SPI Bus at 2 AM' },
      { key: 'date', label: 'Publish Date', type: 'date', description: 'Date of release', example: '2026-10-15' },
      { key: 'readTime', label: 'Est. Read Time', type: 'string', description: 'Estimated reading duration', example: '6 min read' },
      { key: 'synopsis', label: 'Summary Kicker', type: 'string', description: 'Abstract of the article', example: 'A deep dive into logic analyzer captures...' },
    ],
  },
  {
    id: 'toolbox',
    path: '/toolbox',
    name: 'toolbox',
    indexNum: '06',
    badgeCode: 'BENCH-08',
    titleDisplay: 'toolbox',
    headline: 'Hardware instruments, dev environment & everyday gear',
    accentColor: '#4b1a7d', // Aged Typewriter / Archival Violet
    accentLight: '#7e3ec2',
    bgFolder: '#130421',
    borderFolder: '#2c0c4a',
    tabPosition: 'left',
    summary: 'The physical instruments, software utilities, CLI configs, and bench tools I rely on daily.',
    description: 'A catalog of workbench gear (oscilloscopes, multimeter, soldering iron, dev boards) and software toolchains (Neovim/VS Code, Linux dotfiles, compilers).',
    techKeywords: ['Rigol Scope', 'Logic Analyzers', 'Linux Shell', 'GCC/Clang', 'Neovim', 'PlatformIO'],
    archivalCategory: 'INSTRUMENTATION & GEAR',
    intakeNote: 'Bench catalog initialized. Waiting for equipment list, lab bench photo records, and software dotfiles.',
    ticketConfig: {
      paperColor: '#ede4ce',
      bodyColor: '#4b1a7d', // Aged archival purple ink
      textColor: '#f4ede0',
      accentDetailColor: '#dca926',
      ticketNum: 'BALCONY',
      priceTag: 'ROW C',
      subLabel: 'CELESTIAL WORKSHOP',
      yearStamp: '1988',
      rotation: 2.1,
      offsetY: 4,
    },
    schemaFields: [
      { key: 'name', label: 'Tool / Gear Name', type: 'string', description: 'Name of the hardware or software tool', example: 'Saleae Logic 8 Analyzer' },
      { key: 'category', label: 'Category', type: 'string', description: 'Hardware lab, software dev, or EDA', example: 'hardware-lab' },
      { key: 'usage', label: 'Primary Use Case', type: 'string', description: 'How it fits into the daily workflow', example: 'Capturing I2C and UART communications' },
    ],
  },
  {
    id: 'achievements',
    path: '/achievements',
    name: 'achievements',
    indexNum: '07',
    badgeCode: 'HONOR-01',
    titleDisplay: 'achievements',
    headline: 'Verified milestones, hackathons, academic honors & awards',
    accentColor: '#be2626', // Aged Vermilion & Antique Newsprint
    accentLight: '#df5a5a',
    bgFolder: '#240a08',
    borderFolder: '#4a1512',
    tabPosition: 'center',
    summary: 'Milestones attained across hackathons, engineering competitions, scholarships, and academic recognition.',
    description: 'An official verification dossier recording public competitive achievements, merit awards, hackathon podium placements, and certifications.',
    techKeywords: ['Hackathons', 'Merit Honors', 'SENSE Dept Awards', 'Symposium Podiums', 'Paper Presentation'],
    archivalCategory: 'MILESTONES & HONORS',
    intakeNote: 'Registry drawer opened. Waiting for verified credentials, competition certificates, and award citations.',
    ticketConfig: {
      paperColor: '#be2626',
      bodyColor: '#f1e8d4', // Antique warm book page paper
      textColor: '#141317',
      accentDetailColor: '#be2626',
      ticketNum: '1ST PRIZE',
      priceTag: 'HONORARY',
      subLabel: 'MEDAL ROSETTE 1991',
      yearStamp: '1991',
      rotation: -1.6,
      offsetY: -6,
    },
    schemaFields: [
      { key: 'title', label: 'Honor / Award', type: 'string', description: 'Name of the accolade or prize', example: '1st Place — National Embedded Hackathon' },
      { key: 'issuerOrEvent', label: 'Conferring Body', type: 'string', description: 'Host organization or university', example: 'VIT Chennai Riviera Tech' },
      { key: 'date', label: 'Award Date', type: 'date', description: 'Date received', example: '2025-11-20' },
    ],
  },
];
