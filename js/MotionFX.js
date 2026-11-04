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

export { MotionFX };
export default MotionFX;
