/**
 * @fileoverview Main entry point initializing the Portfolio MVC application.
 */

import PortfolioModel from './models/PortfolioModel.js';
import PortfolioView from './views/PortfolioView.js';
import PortfolioController from './controllers/PortfolioController.js';
import { MotionFX } from './MotionFX.js';

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
