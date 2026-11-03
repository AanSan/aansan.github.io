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
        id: 'bbm-operations',
        title: 'BBM Operations & Ledger Automation Tool',
        badge: 'In Production (Pemda DIY)',
        type: 'Vanilla JS Utility',
        description: 'Client-side operational tool created to replace manual, error-prone fuel coupon tracking for internal public administration. Automatically calculates quotas, organizes vehicle allocations, and generates clean accounting ledgers for ~15 office personnel with zero backend friction.',
        tags: ['JavaScript (ES6+)', 'DOM Manipulation', 'HTML5 / CSS3', 'Workflow Automation'],
        repoUrl: 'https://github.com/aansan/BBM',
        demoUrl: 'https://aansan.github.io/BBM',
        demoLabel: 'Launch Demo',
      },
      {
        id: 'fnstory-app',
        title: 'FNStory — Digital Invitation & Interactive Media',
        badge: 'Live Web Application',
        type: 'Cloudflare Pages',
        description: 'Production single-page web app built with mobile-first responsiveness, dynamic audio controls, and interactive event scheduling. Engineered with next-gen media optimization (WebP & modern audio compression) for instantaneous load times over cellular connections.',
        tags: ['Modern JavaScript', 'Cloudflare Pages', 'Web Performance', 'Media Pipeline'],
        repoUrl: '',
        demoUrl: 'https://fnstory.my.id',
        demoLabel: 'Visit fnstory.my.id',
      },
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
