/**
 * @fileoverview Creative Motion & Parallax FX Engine.
 * Features:
 *  - Interactive Constellation & Stardust Canvas with physics cursor repulsion.
 *  - 3D Gyroscope/Tilt effect with dynamic specular spotlight on cards.
 *  - Multi-depth parallax scroll engine for orbs and section typography.
 *  - Magnetic snap behavior for key interactive buttons.
 *  - Fluid dual-ring customized pointer cursor.
 */

export class MotionFX {
  constructor() {
    this.mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    this.cursorRing = null;
    this.cursorDot = null;
    this.spotlight = null;
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.particleCount = 55;
    this.scrollY = window.scrollY;
    this.rafId = null;
  }

  init() {
    // Only initialize mouse-dependent enhancements if fine pointer is available
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

    this.createDomElements(hasFinePointer);
    this.initCanvas();
    this.bindEvents(hasFinePointer);
    this.initCardTilt();
    this.initMagneticButtons();
    this.initParallaxScroll();

    this.animate();
  }

  createDomElements(hasFinePointer) {
    // 1. Interactive Ambient Spotlight
    this.spotlight = document.createElement('div');
    this.spotlight.className = 'mouse-spotlight';
    document.body.appendChild(this.spotlight);

    // 2. Custom Cursor Rings
    if (hasFinePointer) {
      this.cursorDot = document.createElement('div');
      this.cursorDot.className = 'custom-cursor-dot';
      this.cursorRing = document.createElement('div');
      this.cursorRing.className = 'custom-cursor-ring';

      document.body.appendChild(this.cursorDot);
      document.body.appendChild(this.cursorRing);
    }

    // 3. Ambient Stardust Canvas
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'cosmicCanvas';
    document.body.prepend(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
  }

  initCanvas() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    this.particles = [];

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: Math.random() * 0.45 + 0.15,
        color: i % 3 === 0 ? '99, 102, 241' : (i % 3 === 1 ? '56, 189, 248' : '168, 85, 247')
      });
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEvents(hasFinePointer) {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;

      if (this.spotlight) {
        this.spotlight.style.opacity = '1';
        this.spotlight.style.transform = 	ranslate3d(px, px, 0);
      }

      if (this.cursorDot) {
        this.cursorDot.style.transform = 	ranslate3d(px, px, 0) translate(-50%, -50%);
      }
    }, { passive: true });

    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
    }, { passive: true });

    if (hasFinePointer) {
      document.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (target && target.closest('a, button, [data-interactive="true"], .card-glass')) {
          document.body.classList.add('cursor-hover');
        } else {
          document.body.classList.remove('cursor-hover');
        }
      });
    }
  }

  /**
   * 3D Card Tilt with Dynamic Radial Flashlight border
   */
  initCardTilt() {
    const bindCards = () => {
      const cards = document.querySelectorAll('.card-glass');
      cards.forEach((card) => {
        if (card.dataset.tiltBound) return;
        card.dataset.tiltBound = 'true';

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Set CSS custom properties for radial spotlight
          card.style.setProperty('--mouse-x', ${x}px);
          card.style.setProperty('--mouse-y', ${y}px);

          // Calculate 3D tilt angles
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
          const rotateY = ((x - centerX) / centerX) * 6;  // max 6 deg

          card.style.transform = perspective(1000px) rotateX(deg) rotateY(deg) scale3d(1.015, 1.015, 1.015);
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
      });
    };

    bindCards();
    // Re-bind when view injects cards asynchronously
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
          btn.style.transform = 	ranslate3d(px, px, 0);
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
   * Multi-layer Parallax Scroll for background orbs & headers
   */
  initParallaxScroll() {
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

    const updateParallax = () => {
      const scrolled = window.scrollY;
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed) || 0.15;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + scrolled + rect.height / 2;
        const offset = (scrolled - elCenter) * speed;
        el.style.transform = 	ranslate3d(0, px, 0);
      });
    };

    window.addEventListener('scroll', updateParallax, { passive: true });
  }

  animate() {
    // 1. Smooth Spring Cursor Ring Lerp
    if (this.cursorRing) {
      if (this.mouse.x === -1000) {
        this.mouse.x = this.mouse.targetX;
        this.mouse.y = this.mouse.targetY;
      } else {
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.16;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.16;
      }
      this.cursorRing.style.transform = 	ranslate3d(px, px, 0) translate(-50%, -50%);
    }

    // 2. Cosmic Canvas Particles Simulation
    if (this.ctx && this.canvas) {
      const w = this.canvas.width;
      const h = this.canvas.height;
      this.ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
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
        this.ctx.fillStyle = gba(, );
        this.ctx.fill();

        // Constellation connective lines
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 95) {
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist2 / 95) * 0.15;
            this.ctx.strokeStyle = gba(129, 140, 248, );
            this.ctx.lineWidth = 0.8;
            this.ctx.stroke();
          }
        }
      }
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }
}
