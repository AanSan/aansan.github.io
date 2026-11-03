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
  }

  /**
   * Renders the project cards into the DOM.
   * @param {import('../models/PortfolioModel.js').Project[]} projects - Array of project objects.
   */
  renderProjects(projects) {
    if (!this.elements.projectsContainer) return;

    let projectCardsHtml = '';
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const tagsHtml = project.tags
        .map((tag) => `<span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">${tag}</span>`)
        .join('');

      // Snippet kode interaktif sesuai project
      const codeSnippet = project.id === 'bbm-operations' 
        ? `<span class="text-indigo-400">const</span> calculateQuota = (<span class="text-sky-300">vehicle</span>) =&gt; {\n  <span class="text-indigo-400">const</span> base = vehicle.type === <span class="text-emerald-300">'official'</span> ? 50 : 25;\n  <span class="text-indigo-400">return</span> base * vehicle.allocationRatio;\n};`
        : `<span class="text-indigo-400">const</span> initAudioEngine = () =&gt; {\n  <span class="text-indigo-400">const</span> audio = <span class="text-sky-300">document</span>.getElementById(<span class="text-emerald-300">'bgm'</span>);\n  audio.format = <span class="text-emerald-300">'audio/m4a'</span>;\n  audio.play();\n};`;

      const card = `
        <article class="code-preview-card p-5 bg-grid-pattern flex flex-col justify-between">
          <!-- Bagian Atas: Tabs Pilihan (HTML, CSS, JS) -->
          <div>
            <div class="flex items-center justify-center gap-3 mb-5">
              <span class="pill-tab text-xs">Html</span>
              <span class="pill-tab text-xs">Css</span>
              <span class="pill-tab active text-xs">Js</span>
            </div>

            <!-- Preview Showcase Box -->
            <div class="relative w-full h-44 rounded-2xl bg-black/80 border border-slate-800/80 overflow-hidden flex items-center justify-center mb-5 group">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0b0f19] to-transparent opacity-40"></div>
              
              <!-- Badge Info -->
              <span class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded text-[11px] font-mono ${project.repoUrl ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' : 'bg-brand-950/80 text-brand-300 border border-brand-800/60'}">
                ${project.badge}
              </span>

              <div class="text-center z-10 px-4">
                <h4 class="text-white font-bold text-lg mb-1">${project.title}</h4>
                <p class="text-xs text-slate-400">${project.type}</p>
              </div>
            </div>

            <!-- Jendela Terminal Kode (MacOS Style) -->
            <div class="terminal-window p-4 mb-5">
              <!-- Traffic lights buttons -->
              <div class="flex items-center gap-2 mb-3">
                <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </div>
              <!-- Code block -->
              <pre class="text-xs text-slate-300 leading-relaxed overflow-x-auto selection:bg-indigo-500"><code>${codeSnippet}</code></pre>
            </div>

            <!-- Deskripsi Proyek -->
            <p class="text-slate-300 text-sm leading-relaxed mb-4">
              ${project.description}
            </p>

            <div class="flex flex-wrap gap-1.5 mb-6">
              ${tagsHtml}
            </div>
          </div>

          <!-- Tombol Aksi -->
          <div class="flex items-center gap-3 pt-3 border-t border-slate-800/80">
            ${project.repoUrl ? `
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 14.42 22 12A10 10 0 0 0 12 2z"/></svg>
                <span>Repo</span>
              </a>` : ''}
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors">
              <span>${project.demoLabel}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </article>
      `;

      projectCardsHtml = `${projectCardsHtml}${card}`;
    }

    this.elements.projectsContainer.innerHTML = projectCardsHtml;
  }

  /**
   * Renders categorized technical skills.
   * @param {import('../models/PortfolioModel.js').SkillCategory[]} categories - Skill groups.
   */
  renderSkills(categories) {
    if (!this.elements.skillsContainer) return;

    let skillsHtml = '';
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const listItems = category.items
        .map((item) => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-brand-400"></span>${item}</li>`)
        .join('');

      const col = `
        <div class="card-glass rounded-xl p-5">
          <div class="text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">${category.index}. ${category.title}</div>
          <ul class="space-y-2 text-sm text-slate-300">
            ${listItems}
          </ul>
        </div>
      `;

      skillsHtml = `${skillsHtml}${col}`;
    }

    this.elements.skillsContainer.innerHTML = skillsHtml;
  }

  /**
   * Renders verified certifications list.
   * @param {import('../models/PortfolioModel.js').Certification[]} certifications - Verified records.
   */
  renderCertifications(certifications) {
    if (!this.elements.certificationsContainer) return;

    let certsHtml = '';
    for (let i = 0; i < certifications.length; i++) {
      const cert = certifications[i];
      const card = `
        <div class="card-glass rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div class="text-xs font-mono text-emerald-400 mb-2">${cert.track}</div>
            <h3 class="text-base font-bold text-white mb-2">${cert.title}</h3>
            <p class="text-xs text-slate-400 leading-relaxed mb-4">
              ${cert.description}
            </p>
          </div>
          <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors">
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

export default PortfolioView;
