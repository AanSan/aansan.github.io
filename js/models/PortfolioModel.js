/**
 * @fileoverview Data models for the developer portfolio following MVC pattern.
 */

/**
 * @typedef {Object} Profile
 * @property {string} name - Developer full name.
 * @property {string} role - Current profession / role title.
 * @property {string} headline - Primary hero headline summary.
 * @property {string} bio - Detailed professional biography.
 * @property {string} availability - Current availability status.
 * @property {string} email - Primary contact email.
 * @property {string} github - GitHub profile URL.
 * @property {string} demoSite - Showcase production site URL.
 */

/**
 * @typedef {Object} Project
 * @property {string} id - Unique project identifier.
 * @property {string} title - Project title.
 * @property {string} badge - Status badge text.
 * @property {string} type - Project type/category label.
 * @property {string} description - Detailed overview of the project.
 * @property {string[]} tags - Technology stack tags.
 * @property {string} [repoUrl] - Link to repository, if public.
 * @property {string} demoUrl - Live deployment link.
 * @property {string} demoLabel - Display label for live link.
 */

/**
 * @typedef {Object} SkillCategory
 * @property {string} index - Category index representation (e.g. "01").
 * @property {string} title - Category name.
 * @property {string[]} items - List of skills / tools.
 */

/**
 * @typedef {Object} Certification
 * @property {string} id - Certificate identifier.
 * @property {string} track - Issuing platform track title.
 * @property {string} title - Certification title.
 * @property {string} description - Brief summary of certified competencies.
 * @property {string} verifyUrl - URL to verify authenticity.
 */

/**
 * @typedef {Object} TerminalApp
 * @property {string} id - Unique terminal application identifier.
 * @property {string} title - Display title.
 * @property {string} badge - Architecture/status badge.
 * @property {string} type - System domain label.
 * @property {string} summary - Comprehensive engineering summary.
 * @property {string} command - Terminal launch command.
 * @property {string[]} tags - Technology stack tags.
 * @property {string[]} highlights - Key architectural features.
 * @property {string} codeSnippet - Primary source code demonstration.
 */

/**
 * @typedef {Object} Experience
 * @property {string} role - Position title and organization.
 * @property {string} period - Active time period and location.
 * @property {string} description - Scope of work and achievements.
 */

/**
 * Model class managing portfolio data and state.
 */
class PortfolioModel {
  /**
   * Initializes portfolio datasets.
   */
  constructor() {
    /**
     * Profile identity state.
     * @type {Profile}
     */
    this.profile = {
      name: 'Noviyan Hogy Andika Suryanto',
      role: 'Junior Software Engineer',
      headline: 'Junior Software Engineer focused on modern JavaScript, clean front-end architecture, and AI-accelerated tooling.',
      bio: 'Combining rigorous discipline from public sector data integrity with self-driven software engineering. Actively solving real-world friction through browser utilities, web performance optimization, and pragmatic development.',
      availability: 'Available for Remote Software Engineer Roles',
      email: 'aansan26@gmail.com',
      github: 'https://github.com/aansan',
      demoSite: 'https://fnstory.my.id',
    };

    /**
     * List of featured portfolio projects.
     * @type {Project[]}
     */
    this.projects = [
      {
        id: 'fnstory-app',
        title: 'FNStory — Digital Invitation & Interactive Media',
        badge: 'Production Web App',
        type: 'Cloudflare Pages • Mobile-First PWA',
        description: 'High-performance interactive web application built with a mobile-first philosophy, dynamic background audio controls (Web Audio API), and seamless event scheduling. Optimized through next-gen asset compression (WebP & modern audio encoding) delivering instantaneous load times across cellular networks.',
        tags: ['Modern JavaScript', 'Cloudflare Pages', 'Web Audio API', 'Web Performance', 'Responsive UX'],
        repoUrl: '',
        demoUrl: 'https://fnstory.my.id',
        demoLabel: 'Launch fnstory.my.id',
      },
      {
        id: 'bbm-operations',
        title: 'Fuel Voucher Management & Reconciliation System',
        badge: 'In Production • Public Sector',
        type: 'Vanilla JS SPA • Google Apps Script • AI OCR',
        description: 'Public-sector logistics automation engineered for operational fuel voucher distribution, in-transit monitoring with age-alert indicators, and automated station reconciliation. Integrated with LLM Whisperer AI for layout-preserving OCR on physical receipts, Google Sheets API backend, and XSS sanitization safeguards.',
        tags: ['JavaScript (ES6+)', 'Google Apps Script', 'Whisperer AI OCR', 'Google Sheets API', 'Workflow Automation'],
        repoUrl: 'https://github.com/aansan/BBM',
        demoUrl: 'https://aansan.github.io/BBM',
        demoLabel: 'Launch Live Demo',
      },
    ];

    /**
     * Algorithmic & CLI Terminal applications (Node.js & readline-sync).
     * Demonstrating computer science fundamentals, OOP prototypes, and MVC architecture.
     */
    this.terminalApps = [
      {
        id: 'calendar-cli',
        title: 'Monthly Calendar Generator (CLI)',
        badge: 'MVC Architecture • Pure Math',
        type: 'Node.js Utility • Gregorian Algorithm',
        summary: 'Pure mathematical calendar engine implementing Gregorian leap year rules, cumulative elapsed days from Jan 1, 1800, and Zeller-like day-of-week modulo arithmetic. Structured with clean MVC separation (Model, View, Controller) and readline-sync console interface.',
        command: 'node index.js',
        tags: ['Node.js', 'MVC Pattern', 'Gregorian Algorithm', 'readline-sync', 'Modular Architecture'],
        highlights: [
          'Zero Date() API dependency: pure mathematical date calculation',
          'Clean Separation of Concerns: Model, View, and Controller',
          'Dynamic text alignment and ASCII table formatting'
        ],
        codeSnippet: `class CalendarModel {
  isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }

  getDaysInMonth(month = this.month, year = this.year) {
    if (month === 2) return this.isLeapYear(year) ? 29 : 28;
    return [4, 6, 9, 11].includes(month) ? 30 : 31;
  }

  getStartDayOfWeek() {
    let totalDays = 0;
    for (let y = 1800; y < this.year; y++) {
      totalDays += this.isLeapYear(y) ? 366 : 365;
    }
    for (let m = 1; m < this.month; m++) {
      totalDays += this.getDaysInMonth(m, this.year);
    }
    return (3 + totalDays) % 7; // Ref: Jan 1, 1800 = Wednesday (3)
  }
}`
      },
      {
        id: 'tictactoe-cli',
        title: 'Tic-Tac-Toe Terminal Game',
        badge: 'OOP Prototypes • Game Loop',
        type: 'Node.js Interactive Game • 3x3 Matrix Logic',
        summary: 'Two-player turn-based console game engineered with prototype-based OOP, 3x3 matrix state management, dynamic ASCII grid rendering, and comprehensive win/draw condition evaluations using switch-case logic.',
        command: 'node tictactoe.js',
        tags: ['JavaScript (OOP)', 'Matrix Manipulation', 'Game Loop', 'readline-sync', 'State Management'],
        highlights: [
          'Prototype-based class modeling with TicTacToe constructor',
          '8-direction win condition check across rows, columns, and diagonals',
          'Input coordinate validation & draw condition detection'
        ],
        codeSnippet: `function TicTacToe() {
  this.board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  this.currentPlayer = 'X';
}

TicTacToe.prototype.checkWin = function() {
  const b = this.board, p = this.currentPlayer;
  switch (true) {
    case b[0][0] === p && b[0][1] === p && b[0][2] === p:
    case b[1][0] === p && b[1][1] === p && b[1][2] === p:
    case b[2][0] === p && b[2][1] === p && b[2][2] === p:
    case b[0][0] === p && b[1][0] === p && b[2][0] === p:
    case b[0][1] === p && b[1][0] === p && b[2][1] === p:
    case b[0][2] === p && b[1][2] === p && b[2][2] === p:
    case b[0][0] === p && b[1][1] === p && b[2][2] === p:
    case b[0][2] === p && b[1][1] === p && b[2][0] === p:
      return true;
    default:
      return false;
  }
};`
      },
      {
        id: 'atm-cli',
        title: 'ATM Banking System & Account Ledger',
        badge: 'Object-Oriented • Financial State',
        type: 'Node.js Banking Simulation • Account Arrays',
        summary: 'Interactive banking terminal simulating multi-account financial operations. Features OOP BankAccount constructors, balance encapsulation, withdrawal overdraft protection, and an interactive menu loop with readline-sync.',
        command: 'node atm.js',
        tags: ['JavaScript (ES6)', 'OOP Encapsulation', 'Financial State', 'readline-sync', 'Input Guardrails'],
        highlights: [
          'Encapsulated BankAccount instances with balance mutations',
          'Array collection of 10 concurrent account instances',
          'Robust input boundary checks and nested transaction loop'
        ],
        codeSnippet: `function BankAccount(id) {
  this.id = id;
  this.balance = 100.0;
  this.getBalance = function() { return this.balance; };
  this.withdraw = function(amount) { this.balance -= amount; };
  this.deposit = function(amount) { this.balance += amount; };
}

const accountList = [];
for (let i = 0; i < 10; i++) {
  accountList.push(new BankAccount(i));
}

// Interactive menu loop with readline-sync
while (inputMenu !== 4) {
  switch (inputMenu) {
    case 1: console.log(\`Balance: \${accountList[userId].getBalance().toFixed(1)}\`); break;
    case 2: accountList[userId].withdraw(amount); break;
    case 3: accountList[userId].deposit(amount); break;
  }
}`
      }
    ];

    /**
     * Technical skills categorized by domain.
     * @type {SkillCategory[]}
     */
    this.skillCategories = [
      {
        index: '01',
        title: 'Languages & Core',
        items: [
          '<strong>JavaScript</strong> (ES6+, Async, DOM)',
          '<strong>TypeScript</strong> (Foundations)',
          '<strong>HTML5</strong> Semantic Structure',
          '<strong>CSS3</strong> & Flexbox / Grid',
        ],
      },
      {
        index: '02',
        title: 'Frameworks & Web',
        items: [
          '<strong>React</strong> (Codédex Track & Hooks)',
          'Tailwind CSS Framework',
          'Responsive Layout Engineering',
          'Web Performance Optimization',
        ],
      },
      {
        index: '03',
        title: 'AI & Automation',
        items: [
          'Claude, Gemini & ChatGPT CLI',
          'AI-Assisted Debugging & Refactoring',
          'Prompt Crafting & Testing',
          'Browser Automation Scripts',
        ],
      },
      {
        index: '04',
        title: 'Tools & Ops',
        items: [
          'Git & GitHub Version Control',
          'Cloudflare Pages & DNS Setup',
          'Vercel & Netlify Deployments',
          'Chrome DevTools Performance',
        ],
      },
    ];

    /**
     * Verified course track certifications.
     * @type {Certification[]}
     */
    this.certifications = [
      {
        id: 'a106b734',
        track: 'Codédex — The Origins Track',
        title: 'The Origins: JavaScript',
        description: 'Demonstrated mastery in algorithm problem-solving, data structures, and asynchronous control flows through verified projects.',
        verifyUrl: 'https://www.codedex.io/certificates/a106b734-2932-4fdd-8424-7a9c65ea0c3e',
      },
      {
        id: '19a72da3',
        track: 'Codédex — The Origins Track',
        title: 'The Origins: CSS',
        description: 'Certified on box model layout systems, responsive media queries, Flexbox, Grid architecture, and CSS variables.',
        verifyUrl: 'https://www.codedex.io/certificates/19a72da3-98fa-4736-8538-4bbe90ef8502',
      },
      {
        id: '7312686d',
        track: 'Codédex — The Origins Track',
        title: 'The Origins: HTML',
        description: 'Comprehensive coverage of modern semantic elements, accessible document structures, and clean form processing.',
        verifyUrl: 'https://www.codedex.io/certificates/7312686d-3ea2-474a-b3d1-d3581ed1eaa0',
      },
    ];

    /**
     * Professional career history and education.
     * @type {Experience[]}
     */
    this.experiences = [
      {
        role: 'Data & Systems Custodian — Pemda DIY',
        period: '03/2021 – Present | Yogyakarta',
        description: 'Managing public asset data verification, record integrity, and HR performance tracking across governmental platforms. Actively applying automated web solutions and scripts to minimize clerical errors and improve office operations.',
      },
      {
        role: 'Polytechnic of State Finance STAN (PKN STAN)',
        period: 'Graduated 2020 | GPA 3.27',
        description: 'Diploma III in Accounting. Trained in rigorous data auditing, systematic verification, and structured data handling.',
      },
    ];

    /**
     * Counter showing copy events (demonstrating unary increment).
     * @type {number}
     */
    this.copyCounter = 0;
  }

  /**
   * Retrieves profile details.
   * @returns {Profile}
   */
  getProfile() {
    return this.profile;
  }

  /**
   * Retrieves featured projects list.
   * @returns {Project[]}
   */
  getProjects() {
    return this.projects;
  }

  /**
   * Retrieves algorithmic and CLI terminal applications.
   * @returns {TerminalApp[]}
   */
  getTerminalApps() {
    return this.terminalApps;
  }

  /**
   * Retrieves technical skill catalog.
   * @returns {SkillCategory[]}
   */
  getSkillCategories() {
    return this.skillCategories;
  }

  /**
   * Retrieves certification credentials.
   * @returns {Certification[]}
   */
  getCertifications() {
    return this.certifications;
  }

  /**
   * Retrieves background experience list.
   * @returns {Experience[]}
   */
  getExperiences() {
    return this.experiences;
  }

  /**
   * Increments the copy email interaction counter using ++ operator.
   * @returns {number} The updated interaction count.
   */
  incrementCopyCount() {
    this.copyCounter++;
    return this.copyCounter;
  }
}

export default PortfolioModel;
