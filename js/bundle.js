(function() {

/* === Bundled: js/models/PortfolioModel.js === */
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

/* === Bundled: js/views/PortfolioView.js === */
/**
 * @fileoverview View module rendering DOM components according to UI state.
 */

/**
 * View class responsible for UI elements and template rendering.
 */
class PortfolioView {
  /**
   * Initializes references to key UI elements.
   */
  constructor() {
    this.elements = {
      heroTitle: document.getElementById('heroTitle'),
      heroHeadline: document.getElementById('heroHeadline'),
      heroBio: document.getElementById('heroBio'),
      heroAvailability: document.getElementById('heroAvailability'),
      copyEmailBtn: document.getElementById('copyEmailBtn'),
      copyEmailText: document.getElementById('copyEmailText'),
      projectsContainer: document.getElementById('projectsContainer'),
      cliLabContainer: document.getElementById('cliLabContainer'),
      skillsContainer: document.getElementById('skillsContainer'),
      certificationsContainer: document.getElementById('certificationsContainer'),
      experienceContainer: document.getElementById('experienceContainer'),
      mobileMenuBtn: document.getElementById('mobileMenuBtn'),
      mobileMenu: document.getElementById('mobileMenu'),
      mobileMenuOpenIcon: document.getElementById('mobileMenuOpenIcon'),
      mobileMenuCloseIcon: document.getElementById('mobileMenuCloseIcon'),
      backToTopBtn: document.getElementById('backToTopBtn'),
    };
  }

  /**
   * Renders hero section with profile data.
   * @param {import('../models/PortfolioModel.js').Profile} profile - The user profile data.
   */
  renderHero(profile) {
    if (this.elements.heroTitle) {
      this.elements.heroTitle.textContent = profile.name;
    }
    if (this.elements.heroHeadline) {
      this.elements.heroHeadline.innerHTML = `<span class="text-white">${profile.role}</span> focused on modern JavaScript, clean front-end architecture, and AI-accelerated tooling.`;
    }
    if (this.elements.heroBio) {
      this.elements.heroBio.textContent = profile.bio;
    }
    if (this.elements.copyEmailText) {
      this.elements.copyEmailText.textContent = profile.email;
    }

    const clockEl = document.getElementById('heroLiveClock');
    if (clockEl) {
      const updateClock = () => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        clockEl.textContent = `${timeStr} WIB • UTC+7`;
      };
      updateClock();
      setInterval(updateClock, 30000);
    }
  }

  /**
   * Renders the project cards with alternating layout (Zigzag Showcase):
   * Project 1 (FNStory): Live Phone Mockup on LEFT, Code & Details on RIGHT.
   * Project 2 (BBM): Code & Details on LEFT, Live Phone Mockup on RIGHT.
   * @param {import('../models/PortfolioModel.js').Project[]} projects - Array of project objects.
   */
  renderProjects(projects) {
    if (!this.elements.projectsContainer) return;

    let projectCardsHtml = '';
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const isBBM = project.id === 'bbm-operations';
      const isReversed = (i % 2 === 1); // BBM (i=1) reversed: code/details on left, phone on right

      const tagsHtml = project.tags
        .map((tag) => `<span class="text-xs px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 font-mono border border-slate-700/50">${tag}</span>`)
        .join('');

      // Subtle staggered parallax speed (Folio-v2 micro-depth)
      const parallaxSpeed = i % 2 === 0 ? '0.015' : '-0.012';

      // Code snippets with clean English documentation
      const codeSnippet = isBBM 
        ? `<span class="text-indigo-400">async function</span> <span class="text-sky-300">reconcileReceipt</span>(receiptBlob) {\n  <span class="text-slate-500">// OCR AI: Layout-preserving physical receipt extraction</span>\n  <span class="text-indigo-400">const</span> ocrData = <span class="text-indigo-400">await</span> WhispererAI.<span class="text-sky-300">extractLayout</span>(receiptBlob);\n  <span class="text-indigo-400">const</span> { stationId, totalLiters, amount, licensePlate } = ocrData;\n\n  <span class="text-slate-500">// Sync verified ledger to Google Sheets database via GAS API</span>\n  <span class="text-indigo-400">return</span> GoogleSheetApp.<span class="text-sky-300">appendRecord</span>({\n    licensePlate,\n    amount,\n    timestamp: <span class="text-indigo-400">new</span> Date().<span class="text-sky-300">toISOString</span>(),\n    status: <span class="text-emerald-300">'VERIFIED_SPBU'</span>\n  });\n}`
        : `<span class="text-indigo-400">const</span> <span class="text-sky-300">initInteractiveApp</span> = () =&gt; {\n  <span class="text-slate-500">// Dynamic audio controls via HTML5 Web Audio API</span>\n  <span class="text-indigo-400">const</span> audio = document.<span class="text-sky-300">getElementById</span>(<span class="text-emerald-300">'bgmEngine'</span>);\n  audio.src = <span class="text-emerald-300">'assets/audio/ambient.m4a'</span>;\n  audio.<span class="text-sky-300">play</span>();\n\n  <span class="text-slate-500">// Mobile-first PWA caching &amp; Cloudflare edge delivery</span>\n  navigator.serviceWorker?.<span class="text-sky-300">register</span>(<span class="text-emerald-300">'/sw.js'</span>);\n};`;

      const domainDisplay = project.demoUrl.replace(/^https?:\/\//, '');

      // Ultra-sleek Thin Glass Squircle Frame (< 100% scaled high-density viewport)
      const glassFrameCol = `
        <div class="lg:col-span-6 flex justify-center w-full min-w-0 ${isReversed ? 'order-1 lg:order-2' : 'order-1'}">
          <div class="glass-squircle-frame relative w-full max-w-[480px] h-[300px] sm:h-[400px] lg:h-[430px] flex flex-col justify-between shadow-2xl">
            
            <!-- Window Glass Header Bar -->
            <div class="h-10 px-3 sm:px-4 bg-slate-900/80 backdrop-blur-md flex items-center justify-between border-b border-white/10 z-20 shrink-0 select-none">
              <!-- Traffic Light Dots -->
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm border border-rose-600/50"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm border border-amber-600/50"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm border border-emerald-600/50"></span>
              </div>

              <!-- Domain & SSL Badge Pill -->
              <div class="px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/60 flex items-center gap-1.5 max-w-[190px] sm:max-w-[220px] truncate text-[11px] font-mono text-slate-300">
                <svg class="w-3 h-3 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                <span class="truncate font-medium text-slate-200">${domainDisplay}</span>
              </div>

              <!-- Quick Launch Button -->
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors p-1" title="Open live app in new tab">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>

            <!-- Scaled Interactive Viewport Canvas (High-density rendering at 88% scale) -->
            <div class="glass-squircle-viewport relative w-full flex-1 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none z-10"></div>
              <iframe 
                src="${project.demoUrl}" 
                title="${project.title}" 
                class="glass-squircle-iframe" 
                loading="lazy" 
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups">
              </iframe>
            </div>

            <!-- Bottom Glass Status Bar -->
            <div class="h-6 px-3 sm:px-4 bg-slate-900/70 backdrop-blur-sm border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400 select-none z-20 shrink-0">
              <span class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Interactive Preview</span>
              </span>
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline flex items-center gap-1">
                <span>Open Live</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>

          </div>
        </div>
      `;

      // Details & Terminal Code Column
      const detailsCol = `
        <div class="lg:col-span-6 flex flex-col justify-between w-full min-w-0 ${isReversed ? 'order-2 lg:order-1' : 'order-2'}">
          <div>
            <!-- Status Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>${project.badge}</span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-xl sm:text-3xl font-bold text-white tracking-tight mb-1">${project.title}</h3>
            <p class="text-xs sm:text-sm font-mono text-brand-400 font-medium mb-3 sm:mb-4">${project.type}</p>

            <!-- Description -->
            <p class="text-slate-300 text-xs sm:text-base leading-relaxed mb-4 sm:mb-5">
              ${project.description}
            </p>

            <!-- Terminal Window (MacOS Style Code Inspection) -->
            <div class="terminal-window p-3 sm:p-4 mb-4 sm:mb-5 shadow-inner w-full min-w-0 overflow-hidden">
              <div class="flex items-center justify-between mb-2.5 sm:mb-3 border-b border-slate-800/80 pb-2">
                <div class="flex items-center gap-1.5 sm:gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500 inline-block shadow-sm"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block shadow-sm"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-green-500 inline-block shadow-sm"></span>
                </div>
                <span class="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate max-w-[170px] sm:max-w-none">${isBBM ? 'GoogleScript.js • OCR_AI.js' : 'audioEngine.js • pwaService.js'}</span>
                <span class="text-[10px] font-mono text-indigo-400 font-semibold shrink-0">ES6+</span>
              </div>
              <pre class="text-[11px] sm:text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto selection:bg-indigo-500 pb-1 w-full max-w-full"><code>${codeSnippet}</code></pre>
            </div>

            <!-- Tags Stack -->
            <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              ${tagsHtml}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2.5 sm:gap-3 pt-4 border-t border-slate-800/80">
            ${project.repoUrl ? `
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 sm:gap-2 text-xs font-semibold px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700/60 shadow-sm active:scale-95 text-center">
                <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 14.42 22 12A10 10 0 0 0 12 2z"/></svg>
                <span>GitHub Repo</span>
              </a>` : ''}
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 sm:px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow active:scale-95 text-center">
              <span>${project.demoLabel}</span>
              <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      `;

      const card = `
        <article class="code-preview-card bento-card p-5 sm:p-9 bg-grid-pattern w-full min-w-0" data-parallax-speed="${parallaxSpeed}">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center w-full min-w-0">
            ${glassFrameCol}
            ${detailsCol}
          </div>
        </article>
      `;

      projectCardsHtml = `${projectCardsHtml}${card}`;
    }

    this.elements.projectsContainer.innerHTML = projectCardsHtml;
  }

  /**
   * Sanitizes raw string values for safe insertion into HTML templates.
   * @param {string} str - Raw string to escape.
   * @returns {string} Sanitized HTML entity-encoded string.
   */
  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Animates element text with a hacker / cipher scramble decryption effect.
   * Characters rapidly randomize and decrypt character-by-character into the target string.
   * @param {HTMLElement} el - Target DOM node.
   * @param {string} targetText - Final plain text to reveal.
   * @param {number} [duration=1500] - Animation duration in milliseconds.
   */
  scrambleText(el, targetText, duration = 1500) {
    if (!el || !targetText) return;
    const chars = '01#$@%&*<>{}[]/\\+=~^?0123456789ABCDEF!_';
    const startTimestamp = performance.now();

    if (el._scrambleRaf) {
      cancelAnimationFrame(el._scrambleRaf);
    }

    const animate = (now) => {
      const elapsed = now - startTimestamp;
      const progress = Math.min(1, elapsed / duration);
      const revealedLength = Math.floor(progress * targetText.length);

      let result = '';
      for (let i = 0; i < targetText.length; i++) {
        if (i < revealedLength) {
          result += targetText[i];
        } else if (targetText[i] === ' ' || targetText[i] === '\n') {
          result += targetText[i];
        } else {
          const randChar = chars[Math.floor(Math.random() * chars.length)];
          result += `<span class="cipher-char">${randChar}</span>`;
        }
      }

      el.innerHTML = result;

      if (progress < 1) {
        el._scrambleRaf = requestAnimationFrame(animate);
      } else {
        el.textContent = targetText;
      }
    };

    el._scrambleRaf = requestAnimationFrame(animate);
  }

  /**
   * Renders the interactive in-browser Terminal & CLI Lab.
   * @param {Object[]} terminalApps - List of terminal CLI applications.
   */
  renderTerminalLab(terminalApps) {
    if (!this.elements.cliLabContainer || !terminalApps || terminalApps.length === 0) return;

    this.terminalApps = terminalApps;
    this.selectedAppIndex = 0;

    const app = this.terminalApps[this.selectedAppIndex];

    const tabsHtml = this.terminalApps.map((item, idx) => {
      const isActive = idx === this.selectedAppIndex;
      return `
        <button 
          type="button" 
          class="cli-tab-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all whitespace-nowrap shrink-0 ${
            isActive 
              ? 'bg-indigo-600/30 text-white border border-indigo-500/50 shadow-sm' 
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
          }"
          data-app-index="${idx}">
          <span class="text-indigo-400 mr-1.5">0${idx + 1}.</span>${item.title.split(' ')[0]} ${item.title.split(' ')[1] || ''}
        </button>
      `;
    }).join('');

    const highlightsHtml = app.highlights.map(hl => `
      <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
        <span>${hl}</span>
      </li>
    `).join('');

    const tagsHtml = app.tags.map(tag => `
      <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-700/60">${tag}</span>
    `).join('');

    const labCard = `
      <article class="code-preview-card bento-card p-5 sm:p-9 bg-grid-pattern w-full min-w-0" data-parallax-speed="0.01">
        
        <!-- App Switcher Tabs -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6 sm:mb-8 border-b border-slate-800/80 pb-4 w-full min-w-0">
          <span class="text-xs font-mono text-slate-400 flex items-center gap-1.5 shrink-0">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Environment:</span>
          </span>
          <div id="cliTabsGroup" class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:flex-wrap">
            ${tabsHtml}
          </div>
        </div>

        <!-- Main Dual Column Display -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch w-full min-w-0">
          
          <!-- Column 1: Live Interactive Terminal Console (lg:col-span-6) -->
          <div class="lg:col-span-6 flex flex-col w-full min-w-0">
            <div class="glass-squircle-frame relative w-full h-[380px] sm:h-[440px] lg:h-[470px] flex flex-col justify-between shadow-2xl border border-white/10">
              
              <!-- Terminal Top Bar -->
              <div class="h-10 px-3 sm:px-4 bg-slate-900/90 backdrop-blur-md flex items-center justify-between border-b border-white/10 select-none z-20 shrink-0">
                <div class="flex items-center gap-1.5 truncate mr-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm border border-rose-600/50 shrink-0"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm border border-amber-600/50 shrink-0"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm border border-emerald-600/50 shrink-0"></span>
                  <span id="cliTerminalTitle" class="text-[10px] sm:text-[11px] font-mono text-slate-400 ml-1.5 truncate">bash - ${app.command}</span>
                </div>
                <button id="cliResetBtn" type="button" class="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 shrink-0 active:scale-95" title="Restart simulation">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  <span>Restart</span>
                </button>
              </div>

              <!-- Terminal Output Screen -->
              <div id="cliTerminalScreen" class="flex-1 p-3 sm:p-4 bg-[#060913] font-mono text-xs text-slate-200 overflow-y-auto space-y-1.5 selection:bg-indigo-600 selection:text-white whitespace-pre-wrap break-words">
                <!-- Dynamic logs injected by terminal runner -->
              </div>

              <!-- Terminal Interactive Prompt Input Bar -->
              <form id="cliTerminalForm" class="p-2 sm:p-3 bg-slate-900/90 backdrop-blur-md border-t border-white/10 flex items-center gap-2 select-none z-20 shrink-0">
                <span id="cliPromptLabel" class="text-xs font-mono text-emerald-400 shrink-0">&gt;</span>
                <input 
                  type="text" 
                  id="cliTerminalInput" 
                  class="flex-1 min-w-0 bg-slate-950/80 border border-slate-700/70 rounded-lg px-3 py-1.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-[15px] sm:text-xs"
                  placeholder="Enter input..."
                  autocomplete="off"
                  spellcheck="false" />
                <button type="submit" class="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold transition-colors shrink-0 active:scale-95">
                  Send
                </button>
              </form>

              <!-- Interactive Quick Shortcuts -->
              <div id="cliShortcutsBar" class="px-2.5 sm:px-3 py-2 bg-slate-950/90 border-t border-white/5 flex items-center gap-1.5 text-xs font-mono overflow-x-auto scrollbar-none whitespace-nowrap">
                <!-- Dynamic shortcuts for fast clicking -->
              </div>

            </div>
          </div>

          <!-- Column 2: Architectural Details & Code Inspector (lg:col-span-6) -->
          <div class="lg:col-span-6 flex flex-col justify-between w-full min-w-0">
            <div class="w-full min-w-0">
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span id="cliAppBadge">${app.badge}</span>
              </div>

              <!-- Title & Subtitle -->
              <h3 id="cliAppTitle" class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">${app.title}</h3>
              <p id="cliAppType" class="text-xs sm:text-sm font-mono text-brand-400 font-medium mb-4">${app.type}</p>

              <!-- Summary Description -->
              <p id="cliAppSummary" class="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                ${app.summary}
              </p>

              <!-- Architectural Highlights -->
              <ul id="cliAppHighlights" class="space-y-2 mb-5">
                ${highlightsHtml}
              </ul>

              <!-- Terminal Code Inspection Box -->
              <div id="cliCodeWindow" class="terminal-window p-3 sm:p-4 mb-4 sm:mb-5 shadow-inner w-full min-w-0 overflow-hidden">
                <div class="flex items-center justify-between mb-2.5 border-b border-slate-800/80 pb-2">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shadow-sm"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shadow-sm"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm"></span>
                    <span id="cliCodeFile" class="text-[11px] font-mono text-slate-400 ml-1.5">${app.id === 'calendar-cli' ? 'calenderModel.js' : app.id === 'tictactoe-cli' ? 'tictactoe.js' : 'atm.js'}</span>
                  </div>
                  <span class="text-[10px] font-mono text-indigo-400 font-semibold shrink-0">ES6+ CLI</span>
                </div>
                <pre class="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto selection:bg-indigo-500 max-h-[160px] overflow-y-auto w-full max-w-full pb-1"><code id="cliCodeContent">${this.escapeHtml(app.codeSnippet)}</code></pre>
              </div>

              <!-- Tags Stack -->
              <div id="cliAppTags" class="flex flex-wrap gap-2">
                ${tagsHtml}
              </div>
            </div>
          </div>

        </div>
      </article>
    `;

    this.elements.cliLabContainer.innerHTML = labCard;
    this.initTerminalSimulator(app, false);
    this.bindTabEvents();
  }

  /**
   * Switches the active terminal lab environment with cyber cipher decryption animations.
   * @param {number} newIndex - Index of newly selected terminal app.
   */
  switchEnvironment(newIndex) {
    if (newIndex === this.selectedAppIndex || !this.terminalApps[newIndex]) return;

    this.selectedAppIndex = newIndex;
    const app = this.terminalApps[newIndex];

    // 1. Update Tab Buttons styling
    const tabBtns = this.elements.cliLabContainer.querySelectorAll('.cli-tab-btn');
    tabBtns.forEach((btn, idx) => {
      const isActive = idx === newIndex;
      btn.className = `cli-tab-btn px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all whitespace-nowrap shrink-0 ${
        isActive 
          ? 'bg-indigo-600/30 text-white border border-indigo-500/50 shadow-sm' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
      }`;
    });

    // 2. Cipher Decryption Animation on Right Column (1.5s deliberate pacing)
    const titleEl = document.getElementById('cliAppTitle');
    const badgeEl = document.getElementById('cliAppBadge');
    const typeEl = document.getElementById('cliAppType');
    const summaryEl = document.getElementById('cliAppSummary');
    const termTitleEl = document.getElementById('cliTerminalTitle');

    this.scrambleText(titleEl, app.title, 1500);
    this.scrambleText(badgeEl, app.badge, 1200);
    this.scrambleText(typeEl, app.type, 1350);
    this.scrambleText(summaryEl, app.summary, 1500);
    this.scrambleText(termTitleEl, `bash - ${app.command}`, 1200);

    // 3. Update Highlights with subtle fade synchronized with cipher
    const highlightsEl = document.getElementById('cliAppHighlights');
    if (highlightsEl) {
      highlightsEl.style.opacity = '0';
      highlightsEl.style.transition = 'opacity 0.4s ease';
      setTimeout(() => {
        highlightsEl.innerHTML = app.highlights.map(hl => `
          <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
            <span>${hl}</span>
          </li>
        `).join('');
        highlightsEl.style.opacity = '1';
      }, 400);
    }

    // 4. Update Code Box with cyber glitch effect
    const codeWindow = document.getElementById('cliCodeWindow');
    const codeFile = document.getElementById('cliCodeFile');
    const codeContent = document.getElementById('cliCodeContent');

    if (codeWindow) {
      codeWindow.classList.remove('cipher-glitch');
      void codeWindow.offsetWidth; // Force reflow
      codeWindow.classList.add('cipher-glitch');
    }
    if (codeFile) {
      codeFile.textContent = app.id === 'calendar-cli' ? 'calenderModel.js' : app.id === 'tictactoe-cli' ? 'tictactoe.js' : 'atm.js';
    }
    if (codeContent) {
      codeContent.innerHTML = this.escapeHtml(app.codeSnippet);
    }

    // 5. Update Tags
    const tagsEl = document.getElementById('cliAppTags');
    if (tagsEl) {
      tagsEl.innerHTML = app.tags.map(tag => `
        <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-700/60">${tag}</span>
      `).join('');
    }

    // 6. Switch Terminal Simulator with Cipher Handshake
    this.initTerminalSimulator(app, true);
  }

  /**
   * Attaches click event handlers to terminal environment selector tabs.
   */
  bindTabEvents() {
    const tabBtns = this.elements.cliLabContainer.querySelectorAll('.cli-tab-btn');
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.appIndex, 10);
        this.switchEnvironment(idx);
      });
    });
  }

  /**
   * Boots the in-browser interactive terminal simulator runner for an application.
   * @param {import('../models/PortfolioModel.js').TerminalApp} app - Active terminal application config.
   * @param {boolean} [isSwitch=false] - Whether triggered by an environment tab switch.
   */
  initTerminalSimulator(app, isSwitch = false) {
    const screen = document.getElementById('cliTerminalScreen');
    const form = document.getElementById('cliTerminalForm');
    const input = document.getElementById('cliTerminalInput');
    const promptLabel = document.getElementById('cliPromptLabel');
    const resetBtn = document.getElementById('cliResetBtn');
    const shortcutsBar = document.getElementById('cliShortcutsBar');

    if (!screen || !form || !input) return;

    const term = {
      clear() {
        screen.innerHTML = '';
      },
      log(type, text) {
        const div = document.createElement('div');
        div.className = 'leading-relaxed ';
        if (type === 'system') div.className += 'text-slate-400';
        else if (type === 'info') div.className += 'text-indigo-400';
        else if (type === 'prompt') div.className += 'text-sky-300';
        else if (type === 'user') div.className += 'text-white font-semibold';
        else if (type === 'output') div.className += 'text-emerald-300 whitespace-pre';
        else if (type === 'error') div.className += 'text-rose-400';
        else if (type === 'success') div.className += 'text-emerald-400 font-semibold';
        else div.className += 'text-slate-300';

        div.textContent = text;
        screen.appendChild(div);
        screen.scrollTop = screen.scrollHeight;
      },
      setPrompt(label, placeholder, shouldFocus = false) {
        if (promptLabel) promptLabel.textContent = label;
        if (input) {
          input.placeholder = placeholder;
          input.value = '';
          if (shouldFocus && typeof input.focus === 'function') {
            try {
              input.focus({ preventScroll: true });
            } catch (_) {}
          }
        }
      },
      setShortcuts(shortcuts) {
        if (!shortcutsBar) return;
        shortcutsBar.innerHTML = '';
        const span = document.createElement('span');
        span.className = 'text-slate-500 mr-1 shrink-0 text-xs';
        span.textContent = 'Quick:';
        shortcutsBar.appendChild(span);

        shortcuts.forEach(({ label, value }) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'px-2.5 py-1 rounded bg-slate-900 border border-slate-700/70 hover:border-indigo-400 active:bg-indigo-900/50 text-slate-300 hover:text-white transition-colors shrink-0 text-xs font-mono touch-manipulation';
          btn.textContent = label;
          btn.addEventListener('click', () => {
            input.value = value;
            form.dispatchEvent(new Event('submit'));
          });
          shortcutsBar.appendChild(btn);
        });
      },
      setDone() {
        if (promptLabel) promptLabel.textContent = 'Finished:';
        if (input) {
          input.placeholder = 'Click [Restart] to run again';
          input.value = '';
        }
      }
    };

    let runner = null;

    if (app.id === 'calendar-cli') {
      runner = {
        step: 'year',
        year: 2026,
        month: 11,
        start() {
          term.clear();
          term.log('system', '$ node index.js');
          term.log('info', '--- Monthly Calendar Generator (MVC Engine) ---');
          term.log('prompt', 'Enter full year (e.g., 2001 or 2026):');
          this.step = 'year';
          term.setPrompt('Year: ', '2026');
          term.setShortcuts([
            { label: '2026', value: '2026' },
            { label: '2025', value: '2025' },
            { label: '2001', value: '2001' },
            { label: '2030', value: '2030' },
          ]);
        },
        handle(val) {
          if (this.step === 'year') {
            const y = parseInt(val.trim(), 10);
            if (isNaN(y) || y < 1800) {
              term.log('error', 'Error: Please enter a valid year >= 1800.');
              return;
            }
            this.year = y;
            term.log('user', `> Year: ${y}`);
            this.step = 'month';
            term.log('prompt', 'Enter month in number between 1 and 12:');
            term.setPrompt('Month (1-12): ', '11');
            term.setShortcuts([
              { label: '11 (Nov)', value: '11' },
              { label: '7 (Jul)', value: '7' },
              { label: '1 (Jan)', value: '1' },
              { label: '12 (Dec)', value: '12' },
            ]);
          } else if (this.step === 'month') {
            const m = parseInt(val.trim(), 10);
            if (isNaN(m) || m < 1 || m > 12) {
              term.log('error', 'Error: Please enter a month number between 1 and 12.');
              return;
            }
            this.month = m;
            term.log('user', `> Month: ${m}`);
            this.renderOutput();
          }
        },
        renderOutput() {
          const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          const isLeap = (y) => (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
          const getDays = (m, y) => {
            if (m === 2) return isLeap(y) ? 29 : 28;
            if ([4, 6, 9, 11].includes(m)) return 30;
            return 31;
          };
          let totalDays = 0;
          for (let y = 1800; y < this.year; y++) totalDays += isLeap(y) ? 366 : 365;
          for (let m = 1; m < this.month; m++) totalDays += getDays(m, this.year);
          const startDay = (3 + totalDays) % 7;
          const daysInMonth = getDays(this.month, this.year);

          const title = `${monthNames[this.month]} ${this.year}`;
          const divider = '-----------------------------------';
          const headerDays = ' Sun  Mon  Tue  Wed  Thu  Fri  Sat';

          let grid = '\n' + title.padStart(Math.floor((35 + title.length) / 2)) + '\n' + divider + '\n' + headerDays + '\n';
          let row = '';
          for (let i = 0; i < startDay; i++) row += '     ';
          let col = startDay;
          for (let d = 1; d <= daysInMonth; d++) {
            row += String(d).padStart(4, ' ') + ' ';
            col++;
            if (col === 7) {
              grid += row + '\n';
              row = '';
              col = 0;
            }
          }
          if (row.length > 0) grid += row + '\n';

          term.log('output', grid);
          term.log('success', '✔ Calendar successfully generated. Process exited with code 0.');
          term.setDone();
          term.setShortcuts([{ label: 'Run Again (2026)', value: '2026' }]);
          this.step = 'year';
        }
      };
    } else if (app.id === 'tictactoe-cli') {
      runner = {
        board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
        currentPlayer: 'X',
        gameOver: false,
        start() {
          this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
          this.currentPlayer = 'X';
          this.gameOver = false;
          term.clear();
          term.log('system', '$ node tictactoe.js');
          term.log('info', '--- Tic-Tac-Toe Terminal Game (OOP) ---');
          this.printBoard();
          this.askMove();
        },
        printBoard() {
          let out = '-------------\n';
          for (let r = 0; r < 3; r++) {
            out += `| ${this.board[r][0]} | ${this.board[r][1]} | ${this.board[r][2]} |\n`;
            out += '-------------\n';
          }
          term.log('output', out);
        },
        askMove() {
          term.log('prompt', `Player ${this.currentPlayer}'s turn. Enter row and column (0, 1, or 2):`);
          term.setPrompt(`Player ${this.currentPlayer} (row col): `, '1 1');
          
          const emptyCells = [];
          for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
              if (this.board[r][c] === ' ') emptyCells.push({ label: `(${r},${c})`, value: `${r} ${c}` });
            }
          }
          term.setShortcuts(emptyCells.slice(0, 5));
        },
        handle(val) {
          if (this.gameOver) {
            this.start();
            return;
          }
          const parts = val.trim().split(/[\s,]+/);
          const r = parseInt(parts[0], 10);
          const c = parseInt(parts[1], 10);
          if (![0, 1, 2].includes(r) || ![0, 1, 2].includes(c)) {
            term.log('error', 'Error: Invalid coordinates! Enter two numbers (0, 1, or 2), e.g. "1 1".');
            return;
          }
          if (this.board[r][c] !== ' ') {
            term.log('error', `Cell (${r}, ${c}) is already occupied! Choose another cell.`);
            return;
          }
          this.board[r][c] = this.currentPlayer;
          term.log('user', `> Player ${this.currentPlayer} -> Row: ${r}, Col: ${c}`);
          this.printBoard();

          if (this.checkWin()) {
            term.log('success', `★ Player ${this.currentPlayer} won the match!`);
            this.gameOver = true;
            term.setDone();
            term.setShortcuts([{ label: 'Play Again', value: '1 1' }]);
            return;
          }
          if (this.isFull()) {
            term.log('info', 'The game is a draw!');
            this.gameOver = true;
            term.setDone();
            term.setShortcuts([{ label: 'Play Again', value: '1 1' }]);
            return;
          }

          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
          this.askMove();
        },
        checkWin() {
          const b = this.board, p = this.currentPlayer;
          return (
            (b[0][0] === p && b[0][1] === p && b[0][2] === p) ||
            (b[1][0] === p && b[1][1] === p && b[1][2] === p) ||
            (b[2][0] === p && b[2][1] === p && b[2][2] === p) ||
            (b[0][0] === p && b[1][0] === p && b[2][0] === p) ||
            (b[0][1] === p && b[1][1] === p && b[2][1] === p) ||
            (b[0][2] === p && b[1][2] === p && b[2][2] === p) ||
            (b[0][0] === p && b[1][1] === p && b[2][2] === p) ||
            (b[0][2] === p && b[1][1] === p && b[2][0] === p)
          );
        },
        isFull() {
          return this.board.every(row => row.every(cell => cell !== ' '));
        }
      };
    } else if (app.id === 'atm-cli') {
      runner = {
        accounts: Array.from({ length: 10 }, (_, i) => ({ id: i, balance: 100.0 })),
        currentId: null,
        awaitingAmount: null,
        start() {
          this.currentId = null;
          this.awaitingAmount = null;
          term.clear();
          term.log('system', '$ node atm.js');
          term.log('info', '--- ATM Banking Simulation (OOP BankAccount) ---');
          term.log('prompt', 'Enter an account id (0 - 9):');
          term.setPrompt('Account ID (0-9): ', '0');
          term.setShortcuts([
            { label: 'ID: 0', value: '0' },
            { label: 'ID: 1', value: '1' },
            { label: 'ID: 5', value: '5' },
          ]);
        },
        handle(val) {
          if (this.currentId === null) {
            const id = parseInt(val.trim(), 10);
            if (isNaN(id) || id < 0 || id >= 10) {
              term.log('error', 'Error: Invalid ID! Please enter a number between 0 and 9.');
              return;
            }
            this.currentId = id;
            term.log('user', `> Logged in to Account ID: ${id}`);
            this.showMenu();
            return;
          }

          if (this.awaitingAmount) {
            const amount = parseFloat(val.trim());
            if (isNaN(amount) || amount <= 0) {
              term.log('error', 'Error: Please enter a valid positive amount.');
              return;
            }
            if (this.awaitingAmount === 'withdraw') {
              if (amount > this.accounts[this.currentId].balance) {
                term.log('error', `Insufficient funds! Current balance: $${this.accounts[this.currentId].balance.toFixed(1)}`);
              } else {
                this.accounts[this.currentId].balance -= amount;
                term.log('success', `✔ Successfully withdrew $${amount.toFixed(1)}. New balance: $${this.accounts[this.currentId].balance.toFixed(1)}`);
              }
            } else {
              this.accounts[this.currentId].balance += amount;
              term.log('success', `✔ Successfully deposited $${amount.toFixed(1)}. New balance: $${this.accounts[this.currentId].balance.toFixed(1)}`);
            }
            this.awaitingAmount = null;
            this.showMenu();
            return;
          }

          const choice = parseInt(val.trim(), 10);
          term.log('user', `> Option: ${choice}`);
          switch (choice) {
            case 1:
              term.log('output', `Account #${this.currentId} balance is $${this.accounts[this.currentId].balance.toFixed(1)}`);
              this.showMenu();
              break;
            case 2:
              this.awaitingAmount = 'withdraw';
              term.log('prompt', 'Enter an amount to withdraw:');
              term.setPrompt('Amount ($): ', '25');
              term.setShortcuts([
                { label: '$20', value: '20' },
                { label: '$50', value: '50' },
                { label: '$100', value: '100' },
              ]);
              break;
            case 3:
              this.awaitingAmount = 'deposit';
              term.log('prompt', 'Enter an amount to deposit:');
              term.setPrompt('Amount ($): ', '50');
              term.setShortcuts([
                { label: '$25', value: '25' },
                { label: '$50', value: '50' },
                { label: '$100', value: '100' },
              ]);
              break;
            case 4:
              term.log('info', 'Logged out of account session.');
              this.currentId = null;
              term.log('prompt', 'Enter an account id (0 - 9):');
              term.setPrompt('Account ID: ', '0');
              term.setShortcuts([
                { label: 'ID: 0', value: '0' },
                { label: 'ID: 1', value: '1' },
              ]);
              break;
            default:
              term.log('error', 'Invalid choice! Please choose 1, 2, 3, or 4.');
              this.showMenu();
              break;
          }
        },
        showMenu() {
          term.log('info', 'Main menu:\n  1: Check balance\n  2: Withdraw\n  3: Deposit\n  4: Exit account');
          term.setPrompt('Enter choice (1-4): ', '1');
          term.setShortcuts([
            { label: '1: Balance', value: '1' },
            { label: '2: Withdraw', value: '2' },
            { label: '3: Deposit', value: '3' },
            { label: '4: Exit', value: '4' },
          ]);
        }
      };
    }

    if (runner) {
      if (isSwitch) {
        term.clear();
        const hex1 = `0x${Math.floor(Math.random() * 0xFFFFF).toString(16).toUpperCase()}`;
        const hex2 = `0x${Math.floor(Math.random() * 0xFFFFF).toString(16).toUpperCase()}`;
        term.log('system', '[SYSTEM] DE-INITIALIZING CONTEXT BUFFER...');

        if (this.cipherSwitchTimers && Array.isArray(this.cipherSwitchTimers)) {
          this.cipherSwitchTimers.forEach(timerId => clearTimeout(timerId));
        }
        this.cipherSwitchTimers = [];

        this.cipherSwitchTimers.push(setTimeout(() => {
          term.log('info', `[CIPHER] DECRYPTING RUNTIME: ${hex1} -> ${hex2}`);
        }, 350));

        this.cipherSwitchTimers.push(setTimeout(() => {
          term.log('prompt', `[HANDSHAKE] INITIALIZING ${app.command}...`);
        }, 800));

        this.cipherSwitchTimers.push(setTimeout(() => {
          term.log('success', '[READY] SECURE ENVIRONMENT MOUNTED (100% OK)');
        }, 1250));

        this.cipherSwitchTimers.push(setTimeout(() => {
          runner.start();
        }, 1500));
      } else {
        runner.start();
      }

      form.onsubmit = (e) => {
        e.preventDefault();
        const val = input.value;
        if (!val || !val.trim()) return;
        input.value = '';
        runner.handle(val);
      };

      if (resetBtn) {
        resetBtn.onclick = () => {
          runner.start();
        };
      }
    }
  }

  /**
   * Renders categorized technical skills with Bento Glass 2.0 aesthetics.
   * @param {import('../models/PortfolioModel.js').SkillCategory[]} categories - Skill groups.
   */
  renderSkills(categories) {
    if (!this.elements.skillsContainer) return;

    const speeds = ['0.012', '-0.01', '0.012', '-0.01'];
    let skillsHtml = '';
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const speed = speeds[i % speeds.length];
      const listItems = category.items
        .map((item) => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0"></span><span>${item}</span></li>`)
        .join('');

      const col = `
        <div class="card-glass bento-card p-5 sm:p-6 flex flex-col justify-between w-full min-w-0" data-parallax-speed="${speed}">
          <div>
            <div class="text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4 pb-2 border-b border-slate-800/80">${category.index}. ${category.title}</div>
            <ul class="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-300">
              ${listItems}
            </ul>
          </div>
        </div>
      `;

      skillsHtml = `${skillsHtml}${col}`;
    }

    this.elements.skillsContainer.innerHTML = skillsHtml;
  }

  /**
   * Renders verified certifications list with Glass 2.0 and staggered depth.
   * @param {import('../models/PortfolioModel.js').Certification[]} certifications - Verified records.
   */
  renderCertifications(certifications) {
    if (!this.elements.certificationsContainer) return;

    const speeds = ['0.012', '0.006', '-0.01'];
    let certsHtml = '';
    for (let i = 0; i < certifications.length; i++) {
      const cert = certifications[i];
      const speed = speeds[i % speeds.length];
      const card = `
        <div class="card-glass bento-card p-5 sm:p-6 flex flex-col justify-between w-full min-w-0" data-parallax-speed="${speed}">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-mono text-emerald-400">${cert.track}</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400/80"></span>
            </div>
            <h3 class="text-sm sm:text-base font-bold text-white mb-2">${cert.title}</h3>
            <p class="text-xs text-slate-400 leading-relaxed mb-4 sm:mb-5">
              ${cert.description}
            </p>
          </div>
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors pt-3 border-t border-slate-800/80 active:scale-95">
            <span>Verify Credential #${cert.id}</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      `;

      certsHtml = `${certsHtml}${card}`;
    }

    this.elements.certificationsContainer.innerHTML = certsHtml;
  }

  /**
   * Renders background experience and education details.
   * @param {import('../models/PortfolioModel.js').Experience[]} experiences - Career history entries.
   */
  renderExperiences(experiences) {
    if (!this.elements.experienceContainer) return;

    let expHtml = '';
    for (let i = 0; i < experiences.length; i++) {
      const exp = experiences[i];
      const isLast = i === experiences.length - 1;
      const borderClass = isLast ? '' : 'border-b border-slate-800/80 pb-4 sm:pb-5';

      const entry = `
        <div class="${borderClass} w-full min-w-0">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <h3 class="text-sm sm:text-base font-bold text-white">${exp.role}</h3>
            <span class="text-xs font-mono text-slate-400">${exp.period}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            ${exp.description}
          </p>
        </div>
      `;

      expHtml = `${expHtml}${entry}`;
    }

    this.elements.experienceContainer.innerHTML = expHtml;
  }

  /**
   * Binds click event listener for email copy button.
   * @param {function(): void} handler - Callback invoked when copy button is triggered.
   */
  bindCopyEmail(handler) {
    if (this.elements.copyEmailBtn) {
      this.elements.copyEmailBtn.addEventListener('click', handler);
    }
  }

  /**
   * Displays temporary feedback after copying email to clipboard.
   * @param {string} feedbackMessage - Feedback label to display.
   */
  showCopyFeedback(feedbackMessage) {
    if (!this.elements.copyEmailText) return;

    const originalText = this.elements.copyEmailText.textContent;
    this.elements.copyEmailText.textContent = feedbackMessage;

    setTimeout(() => {
      this.elements.copyEmailText.textContent = originalText;
    }, 2000);
  }

  /**
   * Binds mobile hamburger navigation menu toggle, link clicks, and outside-tap dismiss.
   */
  bindMobileMenu() {
    if (!this.elements.mobileMenuBtn || !this.elements.mobileMenu) return;

    const toggleMenu = (open) => {
      const isOpening = open !== undefined ? open : this.elements.mobileMenu.classList.contains('hidden');
      if (isOpening) {
        this.elements.mobileMenu.classList.remove('hidden');
        this.elements.mobileMenuBtn.setAttribute('aria-expanded', 'true');
        if (this.elements.mobileMenuOpenIcon) this.elements.mobileMenuOpenIcon.classList.add('hidden');
        if (this.elements.mobileMenuCloseIcon) this.elements.mobileMenuCloseIcon.classList.remove('hidden');
      } else {
        this.elements.mobileMenu.classList.add('hidden');
        this.elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (this.elements.mobileMenuOpenIcon) this.elements.mobileMenuOpenIcon.classList.remove('hidden');
        if (this.elements.mobileMenuCloseIcon) this.elements.mobileMenuCloseIcon.classList.add('hidden');
      }
    };

    this.elements.mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking any mobile nav link
    const links = this.elements.mobileMenu.querySelectorAll('.mobile-nav-link');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!this.elements.mobileMenu.contains(e.target) && !this.elements.mobileMenuBtn.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on window resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        toggleMenu(false);
      }
    }, { passive: true });
  }

  /**
   * Binds floating back-to-top button visibility and smooth scroll handler.
   */
  bindBackToTop() {
    if (!this.elements.backToTopBtn) return;

    const handleScroll = () => {
      if (window.scrollY > 350) {
        this.elements.backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
      } else {
        this.elements.backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    this.elements.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}

/* === Bundled: js/controllers/PortfolioController.js === */
/**
 * @fileoverview Controller module handling business logic and mediating between Model and View.
 */

/**
 * Controller class coordinating PortfolioModel and PortfolioView.
 */
class PortfolioController {
  /**
   * Initializes controller with model and view instances.
   * @param {import('../models/PortfolioModel.js').default} model - Model instance.
   * @param {import('../views/PortfolioView.js').default} view - View instance.
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  /**
   * Boots and renders the portfolio application.
   */
  init() {
    this.renderAll();
    this.view.bindCopyEmail(this.handleCopyEmail.bind(this));
    this.view.bindMobileMenu();
    this.view.bindBackToTop();
  }

  /**
   * Triggers rendering across all views with latest model data.
   */
  renderAll() {
    this.view.renderHero(this.model.getProfile());
    this.view.renderProjects(this.model.getProjects());
    this.view.renderTerminalLab(this.model.getTerminalApps());
    this.view.renderSkills(this.model.getSkillCategories());
    this.view.renderCertifications(this.model.getCertifications());
    this.view.renderExperiences(this.model.getExperiences());
  }

  /**
   * Handles user click to copy the email address.
   * @returns {Promise<void>}
   */
  async handleCopyEmail() {
    const profile = this.model.getProfile();
    const count = this.model.incrementCopyCount();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(profile.email);
      } else {
        // Fallback for environments lacking Clipboard API
        const tempInput = document.createElement('input');
        tempInput.value = profile.email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      this.view.showCopyFeedback('Email Copied!');
      console.info(`[PortfolioController] Email copied successfully. Total interactions: ${count}`);
    } catch (error) {
      console.error('[PortfolioController] Failed to copy email to clipboard:', error);
      this.view.showCopyFeedback('Copy failed');
    }
  }
}

/* === Bundled: js/MotionFX.js === */
/**
 * @fileoverview Creative Motion & Parallax FX Engine (Bento Glassmorphism 2.0).
 * Features:
 *  - Interactive Stardust & Constellation Canvas with physics cursor repulsion.
 *  - 3D Gyroscope/Tilt effect with dynamic specular spotlight on Bento & Glass cards.
 *  - Multi-depth staggered parallax scroll engine for orbs, bento modules, and headers.
 *  - Magnetic snap behavior for key interactive buttons.
 *  - Fluid dual-ring customized pointer cursor.
 */

class MotionFX {
  constructor() {
    this.mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    this.laserDot = null;
    this.canvas = null;
    this.ctx = null;
    this.constellations = [];
    this.ambientStars = [];
    this.comets = [];
    this.cometParticles = [];
    this.lastCometTime = performance.now() - 16000; // First bright comet glides across in ~12 seconds
    this.scrollY = window.scrollY;
    this.parallaxItems = [];
    this.rafId = null;
  }

  /**
   * Initializes motion elements, canvas context, event listeners, and animation loop.
   */
  init() {
    const hasFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    this.isMobile = !hasFinePointer || window.innerWidth < 768;

    this.createDomElements(hasFinePointer);
    this.initCanvas();
    this.bindEvents(hasFinePointer);
    this.initCardTilt(hasFinePointer);
    this.initMagneticButtons(hasFinePointer);
    this.initParallaxScroll(this.isMobile);

    this.animate();
  }

  /**
   * Creates laser cursor and background cosmic canvas nodes.
   * @param {boolean} hasFinePointer - Indicates precision mouse pointer availability.
   */
  createDomElements(hasFinePointer) {
    // 1. Precise Center Laser Pointer (0ms instant hardware tracking, fine pointer only)
    if (hasFinePointer) {
      this.laserDot = document.createElement('div');
      this.laserDot.className = 'custom-laser-dot';
      document.body.appendChild(this.laserDot);
    }

    // 2. Ambient Stardust Canvas
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'cosmicCanvas';
    document.body.prepend(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
  }

  /**
   * Procedural generator for authentic real-world astronomical constellations.
   * Accurately models real stellar asterisms: Ursa Major, Orion, Cassiopeia, Crux, Cygnus, Scorpius.
   * @param {number} archetypeIndex - Constellation selector.
   * @param {number} cx - X center origin coordinate.
   * @param {number} cy - Y center origin coordinate.
   * @param {Object} palette - Color palette scheme.
   * @returns {Object} Configured constellation cluster.
   */
  createConstellation(archetypeIndex, cx, cy, palette) {
    let localStars = [];
    let edges = [];
    let name = '';

    switch (archetypeIndex % 6) {
      case 0: // 1. URSA MAJOR (Biduk Besar / The Great Bear - Big Dipper Asterism)
        name = 'Ursa Major';
        localStars = [
          { dx: -105, dy: -28, r: 2.1, isAlpha: false, name: 'Alkaid' },
          { dx: -76, dy: -20, r: 2.2, isAlpha: false, name: 'Mizar' },
          { dx: -42, dy: -12, r: 2.5, isAlpha: true, name: 'Alioth' },
          { dx: -6, dy: -10, r: 1.8, isAlpha: false, name: 'Megrez' },
          { dx: -14, dy: 30, r: 2.1, isAlpha: false, name: 'Phecda' },
          { dx: 42, dy: 35, r: 2.4, isAlpha: true, name: 'Merak' },
          { dx: 48, dy: -8, r: 2.7, isAlpha: true, name: 'Dubhe' },
        ];
        // Handle: 0-1-2-3; Bowl: 3-4-5-6-3
        edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]];
        break;

      case 1: // 2. ORION (Sang Pemburu / The Hunter)
        name = 'Orion';
        localStars = [
          { dx: -45, dy: -55, r: 3.0, isAlpha: true, customColor: '251, 146, 60', name: 'Betelgeuse' }, // Orange-red supergiant
          { dx: 42, dy: -48, r: 2.4, isAlpha: false, name: 'Bellatrix' },
          { dx: 0, dy: -70, r: 1.8, isAlpha: false, name: 'Meissa' },
          { dx: -22, dy: -2, r: 2.2, isAlpha: false, name: 'Alnitak' }, // Belt 1
          { dx: 0, dy: 0, r: 2.5, isAlpha: true, name: 'Alnilam' },     // Belt 2
          { dx: 22, dy: 2, r: 2.2, isAlpha: false, name: 'Mintaka' },   // Belt 3
          { dx: -38, dy: 58, r: 2.3, isAlpha: false, name: 'Saiph' },
          { dx: 46, dy: 54, r: 2.9, isAlpha: true, customColor: '186, 230, 253', name: 'Rigel' }, // Blue supergiant
        ];
        // Shoulders to head & between shoulders; down to belt; belt line; belt to feet; between feet
        edges = [
          [0, 2], [2, 1], [0, 1],
          [0, 3], [1, 5],
          [3, 4], [4, 5],
          [3, 6], [5, 7],
          [6, 7]
        ];
        break;

      case 2: // 3. CASSIOPEIA (Ratu Kasiopeia / The Celestial W)
        name = 'Cassiopeia';
        localStars = [
          { dx: -68, dy: -20, r: 2.1, isAlpha: false, name: 'Segin' },
          { dx: -34, dy: 24, r: 2.3, isAlpha: false, name: 'Ruchbah' },
          { dx: 0, dy: -24, r: 2.8, isAlpha: true, name: 'Navi' },
          { dx: 38, dy: 22, r: 2.6, isAlpha: true, customColor: '253, 186, 116', name: 'Schedar' },
          { dx: 72, dy: -18, r: 2.3, isAlpha: false, name: 'Caph' },
        ];
        edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
        break;

      case 3: // 4. CRUX (Salib Selatan / Southern Cross / Bintang Pari)
        name = 'Crux';
        localStars = [
          { dx: 0, dy: -48, r: 2.6, isAlpha: true, customColor: '254, 215, 170', name: 'Gacrux' }, // Reddish top
          { dx: 0, dy: 50, r: 2.9, isAlpha: true, customColor: '186, 230, 253', name: 'Acrux' },   // Brilliant blue base
          { dx: -35, dy: 2, r: 2.6, isAlpha: true, name: 'Mimosa' },
          { dx: 32, dy: -6, r: 2.1, isAlpha: false, name: 'Delta Cru' },
          { dx: 12, dy: 18, r: 1.5, isAlpha: false, name: 'Ginan' }, // 5th star
        ];
        edges = [
          [0, 1], [2, 3],
          [0, 2], [2, 1], [1, 3], [3, 0]
        ];
        break;

      case 4: // 5. CYGNUS (Sang Angsa / Northern Cross)
        name = 'Cygnus';
        localStars = [
          { dx: 0, dy: -60, r: 2.9, isAlpha: true, customColor: '224, 242, 254', name: 'Deneb' }, // Bright tail
          { dx: 0, dy: 0, r: 2.5, isAlpha: true, name: 'Sadr' },   // Chest center
          { dx: 0, dy: 65, r: 2.1, isAlpha: false, name: 'Albireo' }, // Beak
          { dx: -55, dy: -10, r: 2.2, isAlpha: false, name: 'Gienah' }, // East wing
          { dx: 55, dy: -10, r: 2.2, isAlpha: false, name: 'Delta Cyg' }, // West wing
          { dx: -90, dy: -25, r: 1.7, isAlpha: false, name: 'Zeta Cyg' },
          { dx: 90, dy: -25, r: 1.7, isAlpha: false, name: 'Iota Cyg' },
        ];
        edges = [
          [0, 1], [1, 2],
          [5, 3], [3, 1], [1, 4], [4, 6]
        ];
        break;

      case 5: // 6. SCORPIUS (Kalajengking / The Scorpion)
      default:
        name = 'Scorpius';
        localStars = [
          { dx: -65, dy: -45, r: 2.2, isAlpha: false, name: 'Graffias' }, // Claw
          { dx: -32, dy: -20, r: 3.1, isAlpha: true, customColor: '248, 113, 113', name: 'Antares' }, // Fiery Red Heart
          { dx: 5, dy: -10, r: 2.0, isAlpha: false, name: 'Wei' },
          { dx: 30, dy: 10, r: 1.9, isAlpha: false, name: 'Mu Sco' },
          { dx: 45, dy: 40, r: 2.3, isAlpha: false, name: 'Sargas' },
          { dx: 30, dy: 65, r: 2.6, isAlpha: true, name: 'Shaula' }, // Stinger
          { dx: 14, dy: 58, r: 1.8, isAlpha: false, name: 'Lesath' },
        ];
        edges = [
          [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]
        ];
        break;
    }

    const stars = localStars.map((s) => ({
      ...s,
      dispX: 0,
      dispY: 0,
      velX: 0,
      velY: 0,
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.012 + Math.random() * 0.02,
      baseAlpha: s.isAlpha ? 0.82 : 0.55,
      currentAlpha: s.isAlpha ? 0.82 : 0.55,
      color: s.customColor || (s.isAlpha ? palette.alphaStarColor : palette.starColor),
    }));

    return {
      name,
      cx,
      cy,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      lineColor: palette.lineColor,
      labelAlpha: 0,
      stars,
      edges,
    };
  }

  /**
   * Populates ambient stardust and procedurally distributes celestial constellations.
   */
  initCanvas() {
    if (!this.canvas) return;
    const w = this.canvas.width;
    const h = this.canvas.height;

    this.constellations = [];
    this.ambientStars = [];
    this.comets = [];
    this.cometParticles = [];
    this.lastCometTime = performance.now() - 16000;

    const palettes = [
      { starColor: '224, 242, 254', lineColor: '129, 140, 248', alphaStarColor: '147, 197, 253' }, // Indigo-Blue
      { starColor: '207, 250, 254', lineColor: '56, 189, 248', alphaStarColor: '125, 211, 252' }, // Cyan-Sky
      { starColor: '243, 232, 255', lineColor: '168, 85, 247', alphaStarColor: '192, 132, 252' }, // Violet-Purple
      { starColor: '209, 250, 229', lineColor: '52, 211, 153', alphaStarColor: '110, 231, 183' }, // Emerald-Teal
      { starColor: '254, 243, 199', lineColor: '245, 158, 11', alphaStarColor: '252, 211, 77' }, // Golden-Amber
    ];

    const constellationCount = this.isMobile ? 3 : 6;
    const ambientCount = this.isMobile ? 18 : 35;

    // Distribute constellations smoothly across celestial quadrants
    const cols = this.isMobile ? 1 : 3;
    const rows = Math.ceil(constellationCount / cols);
    const colW = w / cols;
    const rowH = h / rows;

    for (let i = 0; i < constellationCount; i++) {
      const colIdx = i % cols;
      const rowIdx = Math.floor(i / cols);
      const cx = colIdx * colW + colW * (0.2 + Math.random() * 0.6);
      const cy = rowIdx * rowH + rowH * (0.2 + Math.random() * 0.6);
      const palette = palettes[i % palettes.length];
      this.constellations.push(this.createConstellation(i, cx, cy, palette));
    }

    // Ambient twinkling dust stars (deep space background)
    for (let i = 0; i < ambientCount; i++) {
      const bvx = (Math.random() - 0.5) * 0.12;
      const bvy = (Math.random() - 0.5) * 0.12;
      this.ambientStars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: bvx,
        vy: bvy,
        baseVx: bvx,
        baseVy: bvy,
        radius: Math.random() * 1.1 + 0.5,
        baseAlpha: Math.random() * 0.45 + 0.15,
        currentAlpha: 0.3,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.01 + Math.random() * 0.025,
        color: i % 2 === 0 ? '148, 163, 184' : '203, 213, 225',
      });
    }
  }

  /**
   * Spawns a rare, magnificent bright celestial comet with long ion and dust tails.
   * Glides gracefully across the sky every 28 - 45 seconds.
   * @param {number} now - High-resolution timestamp.
   */
  spawnBrightComet(now) {
    if (!this.canvas || this.comets.length >= 2) return;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Diagonal trajectories from upper boundaries
    const fromLeft = Math.random() > 0.5;
    const startX = fromLeft ? Math.random() * (w * 0.4) - 40 : Math.random() * (w * 0.4) + w * 0.6;
    const startY = -40;

    const angle = fromLeft
      ? (Math.PI / 4) + (Math.random() - 0.5) * 0.25
      : (Math.PI * 0.75) + (Math.random() - 0.5) * 0.25;

    const speed = 3.6 + Math.random() * 1.6; // Majestic celestial glide speed
    const tailLength = 250 + Math.random() * 110; // Long 250 - 360px tail

    this.comets.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      tailLength,
      alpha: 0,
      maxAlpha: 0.95,
      life: 0,
      maxLife: 280 + Math.random() * 80, // ~4.5 to 6 seconds flight time
      colorCore: '255, 255, 255',
      colorIon: Math.random() > 0.4 ? '56, 189, 248' : '168, 85, 247',
      colorDust: '224, 242, 254',
    });

    this.lastCometTime = now;
  }

  /**
   * Adjusts canvas pixel dimensions to viewport bounds.
   */
  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.initCanvas();
  }

  /**
   * Binds pointer, resize, scroll, and interactive hover event handlers.
   * @param {boolean} hasFinePointer - Indicates precision pointer availability.
   */
  bindEvents(hasFinePointer) {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;

      if (this.laserDot) {
        this.laserDot.style.display = 'block';
        this.laserDot.style.opacity = '1';
        this.laserDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      if (this.laserDot) {
        this.laserDot.style.opacity = '0';
      }
    });

    document.addEventListener('mouseenter', () => {
      if (this.laserDot) {
        this.laserDot.style.opacity = '1';
      }
    });

    // Touchscreen Guard: If a touchscreen is tapped at any point, immediately hide custom laser dot
    window.addEventListener('touchstart', () => {
      if (this.laserDot) {
        this.laserDot.style.display = 'none';
        this.laserDot.style.opacity = '0';
      }
      document.body.classList.remove('cursor-hover', 'cursor-active');
    }, { passive: true });

    if (hasFinePointer) {
      document.addEventListener('mousedown', () => {
        document.body.classList.add('cursor-active');
      });
      document.addEventListener('mouseup', () => {
        document.body.classList.remove('cursor-active');
      });
    }

    // Active Navigation Scrollspy & Instant Click Sync (Desktop & Mobile)
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sectionIds = ['projects', 'cli-lab', 'skills', 'certifications', 'about'];
    let isManualClickNavigating = false;
    let clickNavTimer = null;

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
        isManualClickNavigating = true;
        clearTimeout(clickNavTimer);
        clickNavTimer = setTimeout(() => {
          isManualClickNavigating = false;
        }, 900);
      });
    });

    const updateActiveNav = () => {
      if (isManualClickNavigating) return;

      // 1. If at the absolute top (Hero section), no nav link should be active
      if (window.scrollY < 120) {
        navLinks.forEach((l) => l.classList.remove('active'));
        return;
      }

      // 2. Bottom of page check (highlight Experience / about)
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 70);
      if (isAtBottom) {
        navLinks.forEach((l) => {
          l.classList.toggle('active', l.getAttribute('href') === '#about');
        });
        return;
      }

      // 3. Balanced viewport detection:
      // A section is active if its top has entered the upper view zone (<= 45% of viewport)
      // and its bottom hasn't scrolled off the top of the screen (>= 90px).
      let currentId = '';
      const readingLine = window.innerHeight * 0.45;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= readingLine && rect.bottom >= 90) {
            currentId = id;
            break;
          }
        }
      }

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', Boolean(currentId && href === `#${currentId}`));
      });
    };

    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
      updateActiveNav();
    }, { passive: true });

    updateActiveNav();

    if (hasFinePointer) {
      document.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (target && target.closest('a, button, [data-interactive="true"], input, select, textarea, [role="button"], label, summary')) {
          document.body.classList.add('cursor-hover');
        } else {
          document.body.classList.remove('cursor-hover');
        }
      });
    }
  }

  /**
   * Subtle Micro-Tilt & iOS Liquid Glass Specular Engine
   * Gentle, grounded 3D perspective (max 2.0 deg) with edge-safe smoothing
   * to eliminate corner hit-test glitching.
   */
  initCardTilt(hasFinePointer) {
    if (!hasFinePointer) return; // Touchscreens don't use cursor hover tilt
    const bindCards = () => {
      const cards = document.querySelectorAll('.card-glass, .code-preview-card, .bento-card');
      cards.forEach((card) => {
        if (card.dataset.tiltBound) return;
        card.dataset.tiltBound = 'true';

        card.addEventListener('mouseenter', () => {
          clearTimeout(card._leaveTimer);
          card.style.transition = 'transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease';
        });

        // Mouse coordinates tracking in 3D space
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Set CSS custom properties for specular reflections & light caustics
          card.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
          card.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
          card.style.setProperty('--mouse-pct-x', `${((x / rect.width) * 100).toFixed(1)}%`);
          card.style.setProperty('--mouse-pct-y', `${((y / rect.height) * 100).toFixed(1)}%`);

          // Calculate normalized coordinates (-1 to 1) from card center, clamped
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rawNormX = (x - centerX) / centerX;
          const rawNormY = (y - centerY) / centerY;
          const normX = Math.max(-1, Math.min(1, rawNormX));
          const normY = Math.max(-1, Math.min(1, rawNormY));

          // Edge-damping to eliminate corner oscillation / glitching
          // As cursor nears the card perimeter (within 28px), tilt smoothly eases to 0
          const padX = Math.min(1, Math.min(x, rect.width - x) / 28);
          const padY = Math.min(1, Math.min(y, rect.height - y) / 28);
          const edgeDamping = Math.max(0, padX * padY);

          // Calmer, subtle micro-tilt (max 1.2 deg instead of extreme tilt)
          const maxTilt = 1.2;
          const rotateX = normY * -maxTilt * edgeDamping;
          const rotateY = normX * maxTilt * edgeDamping;

          // Dynamic refraction angle
          const angle = (Math.atan2(y - centerY, x - centerX) * 180 / Math.PI + 360) % 360;
          card.style.setProperty('--mouse-angle', `${angle.toFixed(1)}deg`);

          // Apply gentle perspective WITHOUT scale distortion to eliminate edge oscillation
          const parallaxOffset = card.style.getPropertyValue('--parallax-offset') || '0px';
          card.style.transform = `perspective(1200px) translate3d(0, ${parallaxOffset}, 0) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        });

        // Smooth recovery on mouse leave
        card.addEventListener('mouseleave', () => {
          const parallaxOffset = card.style.getPropertyValue('--parallax-offset') || '0px';
          card.style.setProperty('--mouse-x', '-1000px');
          card.style.setProperty('--mouse-y', '-1000px');
          card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease';
          card.style.transform = `perspective(1200px) translate3d(0, ${parallaxOffset}, 0) rotateX(0deg) rotateY(0deg)`;

          clearTimeout(card._leaveTimer);
          card._leaveTimer = setTimeout(() => {
            if (!card.matches(':hover')) {
              card.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
            }
          }, 480);
        });
      });
    };

    bindCards();
    const observer = new MutationObserver(bindCards);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /**
   * Magnetic snap effect for interactive buttons
   */
  initMagneticButtons(hasFinePointer) {
    if (!hasFinePointer) return; // Only for precision mouse cursors
    const bindButtons = () => {
      const buttons = document.querySelectorAll('header a, header button, .magnetic-btn, #copyEmailBtn');
      buttons.forEach((btn) => {
        if (btn.dataset.magneticBound) return;
        btn.dataset.magneticBound = 'true';
        btn.classList.add('magnetic-btn');

        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);
          btn.style.transform = `translate3d(${(x * 0.25).toFixed(1)}px, ${(y * 0.25).toFixed(1)}px, 0)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate3d(0, 0, 0)';
        });
      });
    };

    bindButtons();
    const observer = new MutationObserver(bindButtons);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /**
   * Registers all elements marked with data-parallax-speed.
   * Caches current positions so dynamic DOM additions seamlessly blend in.
   */
  registerParallaxElements() {
    const elements = document.querySelectorAll('[data-parallax-speed]');
    const existingMap = new Map();
    this.parallaxItems.forEach((it) => existingMap.set(it.el, it.currentY));

    this.parallaxItems = Array.from(elements).map((el) => {
      const speed = parseFloat(el.dataset.parallaxSpeed) || 0.01;
      const isOrb = el.classList.contains('parallax-orb');
      // Gentle clamped limits: orbs max 35px, cards max 12px
      const maxOffset = isOrb ? 35 : 12;
      const prevY = existingMap.has(el) ? existingMap.get(el) : 0;
      return {
        el,
        speed,
        isOrb,
        maxOffset,
        currentY: prevY,
        targetY: prevY,
      };
    });
  }

  /**
   * Calculates subtle viewport-relative target offsets for each parallax item.
   */
  updateParallaxTargets() {
    const winH = window.innerHeight;
    const viewCenter = winH / 2;

    for (let i = 0; i < this.parallaxItems.length; i++) {
      const item = this.parallaxItems[i];
      const rect = item.el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const diffFromCenter = viewCenter - elCenter;
      const rawTarget = diffFromCenter * item.speed;
      item.targetY = Math.max(-item.maxOffset, Math.min(item.maxOffset, rawTarget));
    }
  }

  /**
   * Folio-v2 inspired Smooth Inertia Parallax Scroll Engine
   * Gentle, clamped micro-offsets with lerp damping (0.08)
   */
  initParallaxScroll(isMobile) {
    if (isMobile) return; // Native momentum scroll is smoothest on mobile touch devices
    this.registerParallaxElements();
    this.updateParallaxTargets();

    // Initialize currentY to targetY so elements start at resting position
    for (let i = 0; i < this.parallaxItems.length; i++) {
      const item = this.parallaxItems[i];
      item.currentY = item.targetY;
      const offsetPx = item.currentY.toFixed(2);
      if (item.el.dataset.tiltBound) {
        item.el.style.setProperty('--parallax-offset', `${offsetPx}px`);
        item.el.style.transform = `perspective(1200px) translate3d(0, ${offsetPx}px, 0) rotateX(0deg) rotateY(0deg)`;
      } else {
        item.el.style.transform = `translate3d(0, ${offsetPx}px, 0)`;
      }
    }

    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
      this.updateParallaxTargets();
    }, { passive: true });

    window.addEventListener('resize', () => {
      this.updateParallaxTargets();
    }, { passive: true });

    const observer = new MutationObserver(() => {
      this.registerParallaxElements();
      this.updateParallaxTargets();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /**
   * Main requestAnimationFrame continuous physics loop for lerp parallax and constellation particles.
   */
  animate() {
    // 1. Folio-v2 Smooth Inertia Parallax Scroll Animation (Skip on mobile for pure 120Hz native scrolling)
    if (!this.isMobile) {
      for (let i = 0; i < this.parallaxItems.length; i++) {
        const item = this.parallaxItems[i];
        
        // Interpolate with subtle ease damping (0.08)
        item.currentY += (item.targetY - item.currentY) * 0.08;

        if (Math.abs(item.targetY - item.currentY) > 0.01) {
          const offsetPx = item.currentY.toFixed(2);

          if (item.el.dataset.tiltBound) {
            item.el.style.setProperty('--parallax-offset', `${offsetPx}px`);
            if (!item.el.matches(':hover')) {
              item.el.style.transform = `perspective(1200px) translate3d(0, ${offsetPx}px, 0) rotateX(0deg) rotateY(0deg)`;
            }
          } else {
            item.el.style.transform = `translate3d(0, ${offsetPx}px, 0)`;
          }
        }
      }
    }

    // 2. Celestial Constellation & Stardust Simulation
    if (this.ctx && this.canvas) {
      const now = performance.now();
      const w = this.canvas.width;
      const h = this.canvas.height;
      this.ctx.clearRect(0, 0, w, h);

      // A. Ambient Twinkling Deep-Space Stars
      for (let i = 0; i < this.ambientStars.length; i++) {
        const star = this.ambientStars[i];

        // Mouse repulsion on ambient stars
        if (!this.isMobile && this.mouse.targetX > -500) {
          const dx = star.x - this.mouse.targetX;
          const dy = star.y - this.mouse.targetY;
          const dist = Math.hypot(dx, dy);
          const repelRadius = 110;

          if (dist < repelRadius && dist > 0) {
            const force = Math.pow(1 - dist / repelRadius, 1.2) * 2.2;
            star.vx += (dx / dist) * force;
            star.vy += (dy / dist) * force;
          }
        }

        // Return ambient stars back to peaceful drifting speed
        star.vx = star.vx * 0.94 + star.baseVx * 0.06;
        star.vy = star.vy * 0.94 + star.baseVy * 0.06;

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = w;
        if (star.x > w) star.x = 0;
        if (star.y < 0) star.y = h;
        if (star.y > h) star.y = 0;

        const twinkle = Math.sin(now * star.twinkleSpeed * 0.08 + star.twinklePhase);
        star.currentAlpha = Math.max(0.08, star.baseAlpha + twinkle * (star.baseAlpha * 0.4));

        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${star.color}, ${star.currentAlpha})`;
        this.ctx.fill();
      }

      // B. Constellations (Geometric Asterisms, Mouse Repulsion & Spring Reformation)
      for (let i = 0; i < this.constellations.length; i++) {
        const c = this.constellations[i];

        // Smooth constellation drift
        c.cx += c.vx;
        c.cy += c.vy;

        // Wrap constellation center smoothly when completely off-screen
        if (c.cx < -160) c.cx = w + 160;
        if (c.cx > w + 160) c.cx = -160;
        if (c.cy < -160) c.cy = h + 160;
        if (c.cy > h + 160) c.cy = -160;

        // Physics: Repulsion when mouse approaches, and elastic spring return to constellation home
        for (let j = 0; j < c.stars.length; j++) {
          const s = c.stars[j];
          const homeX = c.cx + s.dx;
          const homeY = c.cy + s.dy;
          const curX = homeX + s.dispX;
          const curY = homeY + s.dispY;

          // 1. Repulsion force from mouse cursor
          if (!this.isMobile && this.mouse.targetX > -500) {
            const dx = curX - this.mouse.targetX;
            const dy = curY - this.mouse.targetY;
            const dist = Math.hypot(dx, dy);
            const repelRadius = 135;

            if (dist < repelRadius && dist > 0) {
              const force = Math.pow(1 - dist / repelRadius, 1.3) * 3.8;
              s.velX += (dx / dist) * force;
              s.velY += (dy / dist) * force;
            }
          }

          // 2. Hooke's elastic spring force pulling star back to constellation shape
          const springK = 0.048; // Elasticity returning to home position
          const damping = 0.86;  // Damping preventing infinite oscillation

          s.velX += (-s.dispX) * springK;
          s.velY += (-s.dispY) * springK;

          s.velX *= damping;
          s.velY *= damping;

          s.dispX += s.velX;
          s.dispY += s.velY;

          // Micro-damping clamp when settled at home
          if (Math.abs(s.dispX) < 0.005 && Math.abs(s.velX) < 0.005) {
            s.dispX = 0;
            s.velX = 0;
          }
          if (Math.abs(s.dispY) < 0.005 && Math.abs(s.velY) < 0.005) {
            s.dispY = 0;
            s.velY = 0;
          }

          // Twinkle and energy luminescence when scattered
          const twinkle = Math.sin(now * s.twinkleSpeed * 0.08 + s.twinklePhase);
          const dispMag = Math.hypot(s.dispX, s.dispY);
          const scatterGlow = Math.min(0.35, (dispMag / 50) * 0.35);
          s.currentAlpha = Math.max(0.2, Math.min(1.0, s.baseAlpha + twinkle * 0.25 + scatterGlow));
        }

        // Draw Constellation Lines (Starlight connections that stretch dynamically when scattered)
        this.ctx.save();
        for (let e = 0; e < c.edges.length; e++) {
          const s1 = c.stars[c.edges[e][0]];
          const s2 = c.stars[c.edges[e][1]];
          const x1 = c.cx + s1.dx + s1.dispX;
          const y1 = c.cy + s1.dy + s1.dispY;
          const x2 = c.cx + s2.dx + s2.dispX;
          const y2 = c.cy + s2.dy + s2.dispY;

          const restingDist = Math.hypot(s1.dx - s2.dx, s1.dy - s2.dy);
          const currentDist = Math.hypot(x1 - x2, y1 - y2);
          const stretch = currentDist / (restingDist || 1);

          const lineAlpha = ((s1.currentAlpha + s2.currentAlpha) / 2) * (stretch > 1.9 ? 0.18 : 0.32);

          this.ctx.beginPath();
          this.ctx.moveTo(x1, y1);
          this.ctx.lineTo(x2, y2);
          this.ctx.strokeStyle = `rgba(${c.lineColor}, ${lineAlpha})`;
          this.ctx.lineWidth = Math.max(0.4, 0.75 / (stretch * 0.5 + 0.5));
          this.ctx.stroke();
        }
        this.ctx.restore();

        // Draw Constellation Stars & 4-Point Lens Flares for Alpha Stars
        for (let j = 0; j < c.stars.length; j++) {
          const s = c.stars[j];
          const sx = c.cx + s.dx + s.dispX;
          const sy = c.cy + s.dy + s.dispY;

          // Main Star Core
          this.ctx.beginPath();
          this.ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
          this.ctx.fillStyle = `rgba(${s.color}, ${s.currentAlpha})`;
          this.ctx.fill();

          // Alpha Star 4-point diffraction flare & ambient halo
          if (s.isAlpha && s.currentAlpha > 0.4) {
            this.ctx.save();
            // Ambient soft glow halo
            this.ctx.beginPath();
            this.ctx.arc(sx, sy, s.r * 2.8, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${s.color}, ${s.currentAlpha * 0.15})`;
            this.ctx.fill();

            // 4-point cross diffraction spikes
            const spike = s.r * 3.5;
            this.ctx.strokeStyle = `rgba(${s.color}, ${s.currentAlpha * 0.4})`;
            this.ctx.lineWidth = 0.6;
            this.ctx.beginPath();
            this.ctx.moveTo(sx - spike, sy);
            this.ctx.lineTo(sx + spike, sy);
            this.ctx.moveTo(sx, sy - spike);
            this.ctx.lineTo(sx, sy + spike);
            this.ctx.stroke();
            this.ctx.restore();
          }
        }

        // Draw real-world constellation name label smoothly below cluster when near
        let isHovered = false;
        if (!this.isMobile && this.mouse.targetX > -500) {
          const distToCenter = Math.hypot(this.mouse.targetX - c.cx, this.mouse.targetY - c.cy);
          if (distToCenter < 160) isHovered = true;
        }

        const targetLabelAlpha = isHovered ? 0.65 : 0;
        c.labelAlpha += (targetLabelAlpha - c.labelAlpha) * 0.08;
        if (c.labelAlpha > 0.03) {
          this.ctx.save();
          this.ctx.font = '500 10px "JetBrains Mono", monospace';
          this.ctx.fillStyle = `rgba(${c.lineColor}, ${c.labelAlpha})`;
          this.ctx.textAlign = 'center';
          this.ctx.fillText(c.name.toUpperCase(), c.cx, c.cy + 75);
          this.ctx.restore();
        }
      }

      // C. Rare Celestial Bright Comets (Every 28 - 45 seconds, magnificent glowing tails)
      if (now - this.lastCometTime > 28000 + Math.random() * 17000) {
        this.spawnBrightComet(now);
      }

      for (let i = this.comets.length - 1; i >= 0; i--) {
        const comet = this.comets[i];
        comet.x += comet.vx;
        comet.y += comet.vy;
        comet.life++;

        // Graceful fade in and fade out
        if (comet.life < 40) {
          comet.alpha = (comet.life / 40) * comet.maxAlpha;
        } else if (comet.life > comet.maxLife - 60) {
          comet.alpha = ((comet.maxLife - comet.life) / 60) * comet.maxAlpha;
        } else {
          comet.alpha = comet.maxAlpha;
        }

        if (comet.life >= comet.maxLife || comet.y > h + 100 || comet.x < -150 || comet.x > w + 150) {
          this.comets.splice(i, 1);
          continue;
        }

        // Shed subtle stardust wake particles
        if (comet.life % 4 === 0 && this.cometParticles.length < 35) {
          this.cometParticles.push({
            x: comet.x + (Math.random() - 0.5) * 6,
            y: comet.y + (Math.random() - 0.5) * 6,
            vx: -comet.vx * 0.08 + (Math.random() - 0.5) * 0.3,
            vy: -comet.vy * 0.08 + (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.5 + 0.8,
            alpha: comet.alpha * 0.7,
            color: comet.colorIon,
          });
        }

        const normV = Math.hypot(comet.vx, comet.vy);
        const normVx = comet.vx / normV;
        const normVy = comet.vy / normV;
        const tailEndX = comet.x - normVx * comet.tailLength;
        const tailEndY = comet.y - normVy * comet.tailLength;

        this.ctx.save();

        // 1. Wide Diffuse Dust Tail (Soft stardust plume)
        const dustGrad = this.ctx.createLinearGradient(comet.x, comet.y, tailEndX, tailEndY);
        dustGrad.addColorStop(0, `rgba(${comet.colorDust}, ${comet.alpha * 0.35})`);
        dustGrad.addColorStop(0.3, `rgba(${comet.colorIon}, ${comet.alpha * 0.18})`);
        dustGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');
        this.ctx.beginPath();
        this.ctx.moveTo(comet.x, comet.y);
        this.ctx.lineTo(tailEndX - normVy * 20, tailEndY + normVx * 20);
        this.ctx.lineTo(tailEndX + normVy * 20, tailEndY - normVx * 20);
        this.ctx.closePath();
        this.ctx.fillStyle = dustGrad;
        this.ctx.fill();

        // 2. Razor-sharp Ion Gas Streamer Tail (Intense, straight core streamer)
        const ionGrad = this.ctx.createLinearGradient(comet.x, comet.y, tailEndX, tailEndY);
        ionGrad.addColorStop(0, `rgba(${comet.colorCore}, ${comet.alpha * 0.95})`);
        ionGrad.addColorStop(0.15, `rgba(${comet.colorIon}, ${comet.alpha * 0.7})`);
        ionGrad.addColorStop(0.6, `rgba(${comet.colorIon}, ${comet.alpha * 0.25})`);
        ionGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');
        this.ctx.beginPath();
        this.ctx.moveTo(comet.x, comet.y);
        this.ctx.lineTo(tailEndX, tailEndY);
        this.ctx.strokeStyle = ionGrad;
        this.ctx.lineWidth = 3.2;
        this.ctx.stroke();

        // 3. Coma Halo (Luminous gas atmosphere)
        const comaGrad = this.ctx.createRadialGradient(comet.x, comet.y, 0, comet.x, comet.y, 24);
        comaGrad.addColorStop(0, `rgba(${comet.colorCore}, ${comet.alpha * 0.95})`);
        comaGrad.addColorStop(0.3, `rgba(${comet.colorIon}, ${comet.alpha * 0.5})`);
        comaGrad.addColorStop(1, `rgba(${comet.colorIon}, 0)`);
        this.ctx.beginPath();
        this.ctx.arc(comet.x, comet.y, 24, 0, Math.PI * 2);
        this.ctx.fillStyle = comaGrad;
        this.ctx.fill();

        // 4. Blazing Nucleus Core
        this.ctx.beginPath();
        this.ctx.arc(comet.x, comet.y, 3.2, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${comet.alpha})`;
        this.ctx.shadowBlur = 14;
        this.ctx.shadowColor = `rgba(${comet.colorIon}, 1)`;
        this.ctx.fill();

        // 5. 4-Point Starlight Flare on the nucleus
        const flareLen = 14;
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${comet.alpha * 0.75})`;
        this.ctx.lineWidth = 0.8;
        this.ctx.beginPath();
        this.ctx.moveTo(comet.x - flareLen, comet.y);
        this.ctx.lineTo(comet.x + flareLen, comet.y);
        this.ctx.moveTo(comet.x, comet.y - flareLen);
        this.ctx.lineTo(comet.x + flareLen, comet.y);
        this.ctx.stroke();

        this.ctx.restore();
      }

      // Lingering comet stardust sparkles
      for (let p = this.cometParticles.length - 1; p >= 0; p--) {
        const cp = this.cometParticles[p];
        cp.x += cp.vx;
        cp.y += cp.vy;
        cp.alpha -= 0.016;

        if (cp.alpha <= 0) {
          this.cometParticles.splice(p, 1);
          continue;
        }

        this.ctx.beginPath();
        this.ctx.arc(cp.x, cp.y, cp.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${cp.color}, ${cp.alpha})`;
        this.ctx.fill();
      }
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }
}

/* === Bundled: js/main.js === */
/**
 * @fileoverview Main entry point initializing the Portfolio MVC application.
 */





/**
 * Initializes and starts application when DOM is ready.
 * @returns {void}
 */
const bootstrap = () => {
  const model = new PortfolioModel();
  const view = new PortfolioView();
  const controller = new PortfolioController(model, view);

  controller.init();

  // Initialize creative Parallax & Hover Mouse Engine
  const motion = new MotionFX();
  motion.init();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

})();
