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

export default PortfolioController;
