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

export default PortfolioView;
