# Noviyan Hogy Andika Suryanto — Software Engineer Portfolio

[![Architecture: MVC](https://img.shields.io/badge/Architecture-MVC%20Pattern-indigo.svg)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
[![Code Style: Airbnb](https://img.shields.io/badge/Code%20Style-Airbnb%20Standard-ff5a5f.svg)](https://github.com/airbnb/javascript)
[![Documentation: JSDoc](https://img.shields.io/badge/Documentation-JSDoc%203-blue.svg)](https://jsdoc.app/)
[![JavaScript: ES6+](https://img.shields.io/badge/JavaScript-ES6%2B%20Vanilla-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Design: Liquid Glass 2.0](https://img.shields.io/badge/Design-Bento%20Glass%202.0-0ea5e9.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

A high-performance, modular developer portfolio engineered with **Vanilla JavaScript (ES6+)**, **MVC Architecture**, and **Apple Liquid Glassmorphism 2.0 aesthetics**. Zero heavy framework bloat, sub-second load times, and complete adherence to industry-standard code quality guidelines.

---

## 🌟 Architectural Overview

This portfolio is built upon rigorous software engineering principles, avoiding monolithic codebases and fragile inline scripts in favor of a clean, decoupled **Model-View-Controller (MVC)** design pattern.

```
┌────────────────────────────────────────────────────────┐
│                      Portfolio                          │
├──────────────────┬──────────────────┬──────────────────┤
│    Model         │     View         │   Controller     │
│  (Data State)    │   (UI & DOM)     │ (Coordination)   │
├──────────────────┼──────────────────┼──────────────────┤
│ • Profile Data   │ • Bento Cards    │ • Bootstrapping  │
│ • Flagship Apps  │ • Squircle Frames│ • State Binding  │
│ • CLI Lab State  │ • Terminal Sim   │ • Event Dispatch │
│ • Technical Tags │ • DOM Mutations  │ • Clipboard Sync │
└──────────────────┴──────────────────┴──────────────────┘
```

### Core Architectural Pillars

1. **Separation of Concerns (SoC)**
   - **`PortfolioModel.js`**: Pure data state layer managing identity profiles, flagship projects, algorithmic CLI programs, technical capabilities, certifications, and career history.
   - **`PortfolioView.js`**: Strict UI presentation layer handling template rendering, squircle glass frames, syntax-highlighted code panels, and in-browser interactive terminal runners.
   - **`PortfolioController.js`**: Mediates communication between Model and View, handling user interaction dispatches and clipboard events.
   - **`MotionFX.js`**: Independent creative motion engine managing physics-based constellation canvas, 3D card tilt with edge-damping physics, and multi-depth inertia parallax scrolling.

2. **Airbnb JavaScript Style Guide Compliance**
   - **Strict Variable Scoping**: Exclusively `const` and `let` declarations; zero `var` statements.
   - **Literal Conventions**: Single quotes (`'...'`) for static strings and backticks (`` `...` ``) for template interpolation.
   - **Trailing Commas**: Mandatory multiline trailing commas on objects, arrays, and function arguments (`comma-dangle`).
   - **Semicolon Termination**: 100% semicolon enforcement across all statements.
   - **Explicit Increments**: Numerical counters utilize unary increment (`++`) operators consistently.
   - **Consistent Naming**: `PascalCase` for classes/constructors, `camelCase` for methods/instances/variables, and `UPPER_SNAKE_CASE` for immutable constants.

3. **Exhaustive JSDoc 3 Type Annotations**
   - `@fileoverview` headers describing module responsibilities and architectural context.
   - Custom `@typedef` structural definitions (`Profile`, `Project`, `TerminalApp`, `SkillCategory`, `Certification`, `Experience`).
   - Full `@param` and `@returns` documentation across all classes, constructors, methods, and callbacks for static type safety and enhanced IDE intellisense.

---

## 🚀 Key Features

### 1. Alternating Flagship Application Showcase
- Dual-column zigzag showcase featuring responsive 6/6 grid balance.
- **Glass Squircle Mockup Frames**: Thin, ultra-sleek glass frames with `rounded-[28px]` squircle corners, macOS traffic dots, SSL lock pill, and active domain indicators.
- **High-Density Scaled Viewports (88% Scale)**: Iframe preview scaled below 100% on a generous virtual canvas, preventing text clipping on mobile viewports while preserving sharp miniature density.
- **Featured Projects**:
  - **FNStory**: Mobile-first interactive PWA with dynamic HTML5 Web Audio API streaming, service worker caching, and Cloudflare Pages edge delivery.
  - **BBM Operations**: Public sector logistics SPA for fuel voucher distribution, aged voucher tracking, and station reconciliation integrating Google Apps Script (GAS) and LLM Whisperer AI OCR.

### 2. Interactive Terminal & CLI Lab (In-Browser Console)
A dedicated in-browser terminal playground running simulated Node.js and `readline-sync` workflows:
- **01. Monthly Calendar Generator (CLI)**:
  - Pure mathematical Gregorian calendar engine implementing leap year rules, cumulative elapsed days from Jan 1, 1800, and Zeller-like day-of-week modulo arithmetic.
  - Built with zero `Date()` API dependencies and structured using clean MVC separation (`CalendarModel`, `CalendarView`, `CalendarController`).
- **02. Tic-Tac-Toe Terminal Game (CLI)**:
  - Two-player turn-based console game engineered with prototype-based OOP, $3\times3$ matrix board state, 8-direction win condition evaluations via `switch (true)`, and draw detection.
- **03. ATM Banking System & Ledger (CLI)**:
  - Multi-account financial simulator managing an array of 10 `BankAccount` instances with encapsulated balance mutations, overdraft guards, and interactive menu loops.
- **Interactive Controls**: Users can type custom inputs directly into the terminal or click pre-configured quick-action pills (`[2026]`, `[11: Nov]`, `[1: Balance]`, `[2: Withdraw $20]`, etc.).

### 3. Motion & Physics Engine (`MotionFX.js`)
- **Cosmic Stardust Canvas**: 2D particle physics engine with constellation interconnect lines and inverse-distance cursor repulsion.
- **Subtle 3D Tilt with Edge-Damping**: Micro-tilt perspective (max `1.2deg`) coupled with mathematical boundary damping (`padX * padY`), smoothly easing rotation to `0deg` at edges to eliminate corner hit-test oscillation loops.
- **Folio-v2 Parallax Scroll**: Staggered inertia parallax scrolling using continuous lerp damping (`currentY += (targetY - currentY) * 0.08`).
- **Laser Dot Cursor & Magnetic Buttons**: Fluid custom pointer with center-anchored glow and magnetic snapping on key interactive controls.
- **Bulletproof Scrollspy**: Viewport reading-line algorithm (`window.innerHeight * 0.45`) with programmatic click-navigation locking to eliminate section highlight jumping.

---

## 📁 Directory Structure

```text
portfolio_modular/
├── index.html                   # Semantic HTML5 document entry point
├── css/
│   └── style.css                # Base styling, Bento Grid 2.0, & Liquid Glassmorphism
├── js/
│   ├── main.js                  # Modular entry point (ES Modules bootstrap)
│   ├── bundle.js                # High-performance compiled bundle (file:// & HTTP compatible)
│   ├── MotionFX.js              # Parallax, particle physics, 3D tilt, & cursor engine
│   ├── models/
│   │   └── PortfolioModel.js    # Data state, entities, and business logic
│   ├── views/
│   │   └── PortfolioView.js     # DOM manipulation, squircle glass frames, & terminal lab
│   └── controllers/
│       └── PortfolioController.js # Event coordination & clipboard handlers
└── README.md                    # Project documentation & engineering standards
```

---

## 🛠️ Getting Started & Local Execution

The project supports two execution modes out-of-the-box:

### Mode 1: Direct File Execution (Zero Configuration)
Double-click `index.html` or open it directly in any modern browser:
```text
file:///path/to/portfolio_modular/index.html
```
*(The included `js/bundle.js` enables full functionality without CORS restrictions on local `file://` protocols).*

### Mode 2: Local HTTP Server (ES Modules Mode)
To run with native ES Modules (`<script type="module" src="./js/main.js">`):

```bash
# Using Node / npx
npx serve .
# or
npx live-server

# Using Python 3
python -m http.server 8000

# Using PHP
php -S localhost:8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🧪 Code Validation & Quality Checks

Ensure syntax validity and style adherence using Node.js:

```bash
# Validate bundle syntax
node --check js/bundle.js

# Validate modular MVC source files
node --check js/models/PortfolioModel.js
node --check js/views/PortfolioView.js
node --check js/controllers/PortfolioController.js
node --check js/MotionFX.js
node --check js/main.js
```

---

## 👤 Author

**Noviyan Hogy Andika Suryanto**  
*Junior Software Engineer*  
- **Email**: [aansan26@gmail.com](mailto:aansan26@gmail.com)  
- **GitHub**: [@aansan](https://github.com/aansan)  
- **Production Showcase**: [fnstory.my.id](https://fnstory.my.id) | [BBM Operations](https://aansan.github.io/BBM)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
