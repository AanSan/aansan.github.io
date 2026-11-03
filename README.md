# Developer Portfolio (MVC Architecture)

Clean, modular implementation of Noviyan Hogy Andika Suryanto's portfolio adhering to:
- **MVC Architecture** (Model-View-Controller pattern).
- **Airbnb JavaScript Style Guide** standards (clean imports, naming conventions, const/let, arrow functions, trailing commas, single quotes).
- **Incremental Rule**: Uses `++` increments rather than `+= 1`.
- **JSDoc Documentation**: Comprehensive annotations on classes, methods, parameters, and types.

---

## Directory Structure

```text
portfolio_modular/
├── index.html                   # Clean semantic HTML entry point
├── css/
│   └── style.css                # Base & custom glassmorphism styles
├── js/
│   ├── main.js                  # Application bootstrap
│   ├── models/
│   │   └── PortfolioModel.js    # Data state & business models
│   ├── views/
│   │   └── PortfolioView.js     # DOM manipulation & template rendering
│   └── controllers/
│       └── PortfolioController.js # Event handling & business coordination
└── README.md
```

## Running Locally

Because this project uses native **ES Modules** (`<script type="module">`), run it with any static local web server:

```bash
# Using Python
python -m http.server 8000

# Using Node / npx
npx serve .
# or
npx live-server
```

Then open `http://localhost:8000` in your browser.
