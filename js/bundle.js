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
        <div class="lg:col-span-6 flex justify-center ${isReversed ? 'order-1 lg:order-2' : 'order-1'}">
          <div class="glass-squircle-frame relative w-full max-w-[480px] h-[390px] sm:h-[430px] flex flex-col justify-between shadow-2xl">
            
            <!-- Window Glass Header Bar -->
            <div class="h-10 px-4 bg-slate-900/80 backdrop-blur-md flex items-center justify-between border-b border-white/10 z-20 shrink-0 select-none">
              <!-- Traffic Light Dots -->
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm border border-rose-600/50"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm border border-amber-600/50"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm border border-emerald-600/50"></span>
              </div>

              <!-- Domain & SSL Badge Pill -->
              <div class="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/60 flex items-center gap-1.5 max-w-[220px] truncate text-[11px] font-mono text-slate-300">
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
            <div class="h-6 px-4 bg-slate-900/70 backdrop-blur-sm border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400 select-none z-20 shrink-0">
              <span class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Interactive Preview</span>
              </span>
              <span class="text-slate-500">Scale: 88%</span>
            </div>

          </div>
        </div>
      `;

      // Details & Terminal Code Column
      const detailsCol = `
        <div class="lg:col-span-6 flex flex-col justify-between ${isReversed ? 'order-2 lg:order-1' : 'order-2'}">
          <div>
            <!-- Status Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-mono text-emerald-400 mb-3 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>${project.badge}</span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">${project.title}</h3>
            <p class="text-xs sm:text-sm font-mono text-brand-400 font-medium mb-4">${project.type}</p>

            <!-- Description -->
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
              ${project.description}
            </p>

            <!-- Terminal Window (MacOS Style Code Inspection) -->
            <div class="terminal-window p-4 mb-5 shadow-inner">
              <div class="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500 inline-block shadow-sm"></span>
                  <span class="w-3 h-3 rounded-full bg-yellow-500 inline-block shadow-sm"></span>
                  <span class="w-3 h-3 rounded-full bg-green-500 inline-block shadow-sm"></span>
                </div>
                <span class="text-[11px] font-mono text-slate-400">${isBBM ? 'GoogleScript.js • OCR_AI.js' : 'audioEngine.js • pwaService.js'}</span>
                <span class="text-[10px] font-mono text-indigo-400 font-semibold">ES6+</span>
              </div>
              <pre class="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto selection:bg-indigo-500"><code>${codeSnippet}</code></pre>
            </div>

            <!-- Tags Stack -->
            <div class="flex flex-wrap gap-2 mb-6">
              ${tagsHtml}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
            ${project.repoUrl ? `
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700/60 shadow-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 14.42 22 12A10 10 0 0 0 12 2z"/></svg>
                <span>GitHub Repo</span>
              </a>` : ''}
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow">
              <span>${project.demoLabel}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      `;

      const card = `
        <article class="code-preview-card bento-card p-6 sm:p-9 bg-grid-pattern" data-parallax-speed="${parallaxSpeed}">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
          class="cli-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
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
      <article class="code-preview-card bento-card p-6 sm:p-9 bg-grid-pattern" data-parallax-speed="0.01">
        
        <!-- App Switcher Tabs -->
        <div class="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-800/80 pb-4">
          <span class="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Select Environment:</span>
          </span>
          <div id="cliTabsGroup" class="flex flex-wrap items-center gap-2">
            ${tabsHtml}
          </div>
        </div>

        <!-- Main Dual Column Display -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          <!-- Column 1: Live Interactive Terminal Console (lg:col-span-6) -->
          <div class="lg:col-span-6 flex flex-col">
            <div class="glass-squircle-frame relative w-full h-[470px] flex flex-col justify-between shadow-2xl border border-white/10">
              
              <!-- Terminal Top Bar -->
              <div class="h-10 px-4 bg-slate-900/90 backdrop-blur-md flex items-center justify-between border-b border-white/10 select-none z-20 shrink-0">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm border border-rose-600/50"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm border border-amber-600/50"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm border border-emerald-600/50"></span>
                  <span id="cliTerminalTitle" class="text-[11px] font-mono text-slate-400 ml-2">bash - ${app.command}</span>
                </div>
                <button id="cliResetBtn" type="button" class="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50" title="Restart simulation">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  <span>Restart</span>
                </button>
              </div>

              <!-- Terminal Output Screen -->
              <div id="cliTerminalScreen" class="flex-1 p-4 bg-[#060913] font-mono text-xs text-slate-200 overflow-y-auto space-y-1.5 selection:bg-indigo-600 selection:text-white whitespace-pre-wrap">
                <!-- Dynamic logs injected by terminal runner -->
              </div>

              <!-- Terminal Interactive Prompt Input Bar -->
              <form id="cliTerminalForm" class="p-3 bg-slate-900/90 backdrop-blur-md border-t border-white/10 flex items-center gap-2 select-none z-20 shrink-0">
                <span id="cliPromptLabel" class="text-xs font-mono text-emerald-400 shrink-0">&gt;</span>
                <input 
                  type="text" 
                  id="cliTerminalInput" 
                  class="flex-1 bg-slate-950/80 border border-slate-700/70 rounded-lg px-3 py-1.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="Enter input..."
                  autocomplete="off"
                  spellcheck="false" />
                <button type="submit" class="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold transition-colors shrink-0">
                  Send
                </button>
              </form>

              <!-- Interactive Quick Shortcuts -->
              <div id="cliShortcutsBar" class="px-3 py-2 bg-slate-950/90 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                <!-- Dynamic shortcuts for fast clicking -->
              </div>

            </div>
          </div>

          <!-- Column 2: Architectural Details & Code Inspector (lg:col-span-6) -->
          <div class="lg:col-span-6 flex flex-col justify-between">
            <div>
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
              <div id="cliCodeWindow" class="terminal-window p-4 mb-5 shadow-inner">
                <div class="flex items-center justify-between mb-2.5 border-b border-slate-800/80 pb-2">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shadow-sm"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shadow-sm"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm"></span>
                    <span id="cliCodeFile" class="text-[11px] font-mono text-slate-400 ml-1.5">${app.id === 'calendar-cli' ? 'calenderModel.js' : app.id === 'tictactoe-cli' ? 'tictactoe.js' : 'atm.js'}</span>
                  </div>
                  <span class="text-[10px] font-mono text-indigo-400 font-semibold">ES6+ CLI</span>
                </div>
                <pre class="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto selection:bg-indigo-500 max-h-[160px] overflow-y-auto"><code id="cliCodeContent">${this.escapeHtml(app.codeSnippet)}</code></pre>
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
      btn.className = `cli-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
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
        span.className = 'text-slate-500 mr-1';
        span.textContent = 'Quick:';
        shortcutsBar.appendChild(span);

        shortcuts.forEach(({ label, value }) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'px-2 py-0.5 rounded bg-slate-900 border border-slate-700/70 hover:border-indigo-400 text-slate-300 hover:text-white transition-colors';
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
        .map((item) => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-brand-400"></span>${item}</li>`)
        .join('');

      const col = `
        <div class="card-glass bento-card p-6 flex flex-col justify-between" data-parallax-speed="${speed}">
          <div>
            <div class="text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/80">${category.index}. ${category.title}</div>
            <ul class="space-y-2.5 text-sm text-slate-300">
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
        <div class="card-glass bento-card p-6 flex flex-col justify-between" data-parallax-speed="${speed}">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-mono text-emerald-400">${cert.track}</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400/80"></span>
            </div>
            <h3 class="text-base font-bold text-white mb-2">${cert.title}</h3>
            <p class="text-xs text-slate-400 leading-relaxed mb-5">
              ${cert.description}
            </p>
          </div>
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors pt-3 border-t border-slate-800/80">
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
      const borderClass = isLast ? '' : 'border-b border-slate-800/80 pb-5';

      const entry = `
        <div class="${borderClass}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <h3 class="text-base font-bold text-white">${exp.role}</h3>
            <span class="text-xs font-mono text-slate-400">${exp.period}</span>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
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
    this.particles = [];
    this.particleCount = 50;
    this.scrollY = window.scrollY;
    this.parallaxItems = [];
    this.rafId = null;
  }

  /**
   * Initializes motion elements, canvas context, event listeners, and animation loop.
   */
  init() {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

    this.createDomElements(hasFinePointer);
    this.initCanvas();
    this.bindEvents(hasFinePointer);
    this.initCardTilt();
    this.initMagneticButtons();
    this.initParallaxScroll();

    this.animate();
  }

  /**
   * Creates laser cursor and background cosmic canvas nodes.
   * @param {boolean} hasFinePointer - Indicates precision mouse pointer availability.
   */
  createDomElements(hasFinePointer) {
    // 1. Precise Center Laser Pointer (No trailing outer ring)
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
   * Populates ambient stardust particle physics models.
   */
  initCanvas() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    this.particles = [];

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 0.6,
        baseAlpha: Math.random() * 0.4 + 0.15,
        alpha: Math.random() * 0.4 + 0.15,
        color: i % 3 === 0 ? '99, 102, 241' : (i % 3 === 1 ? '56, 189, 248' : '168, 85, 247'),
      });
    }
  }

  /**
   * Adjusts canvas pixel dimensions to viewport bounds.
   */
  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
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

    // Active Navigation Scrollspy & Instant Click Sync
    const navLinks = document.querySelectorAll('.nav-link');
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
        if (target && target.closest('a, button, [data-interactive="true"], .card-glass, .code-preview-card, .bento-card')) {
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
  initCardTilt() {
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
  initMagneticButtons() {
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
  initParallaxScroll() {
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
    // 1. Folio-v2 Smooth Inertia Parallax Scroll Animation (Lerp Damping)
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

    // 2. Ambient Particles Simulation
    if (this.ctx && this.canvas) {
      const w = this.canvas.width;
      const h = this.canvas.height;
      this.ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Mouse repulsion physics
        const dx = this.mouse.targetX - p.x;
        const dy = this.mouse.targetY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 3;
          p.y -= (dy / dist) * force * 3;
        }

        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        this.ctx.fill();

        // Constellation connective lines
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 90) {
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist2 / 90) * 0.12;
            this.ctx.strokeStyle = `rgba(129, 140, 248, ${lineAlpha})`;
            this.ctx.lineWidth = 0.7;
            this.ctx.stroke();
          }
        }
      }
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }
}


/* === Bundled: js/main.js === */
﻿/**
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
