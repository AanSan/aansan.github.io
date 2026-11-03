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

export { MotionFX };
export default MotionFX;
