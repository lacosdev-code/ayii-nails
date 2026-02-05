# 📂 Project Structure Guide

This document provides a detailed overview of the folder structure and architecture choices for **Ayii Nails**.

## High-Level Overview

The project follows a **Feature-First / Component-Based** architecture, tailored for scalability and maintainability.

```bash
src/
├── assets/          # Static assets (images, icons, global styles)
├── components/      # Reusable React components
├── pages/           # Page composition layers
├── styles/          # Global CSS and Tailwind setup
└── main.jsx         # Application entry point
```

## Detailed Breakdown

### `src/assets/`
Contains static files that are imported directly into components.
- **`icons/`**: SVG icons or icon component aggregations.
- **`images/`**: Project-specific images (e.g., testimonials, hero backgrounds).
  - *Note: Large media files should ideally be hosted on a CDN (like ImageKit) for performance.*

### `src/components/`
Components are organized by their scope and reusability.

- **`layout/`**: Structural components that appear on multiple pages.
  - `Header.jsx`: Main navigation bar.
  - `Footer.jsx`: Site footer.

- **`sections/`**: Large, page-specific blocks of content. These are often composed of smaller UI components.
  - `Hero.jsx`: The top-fold section of the landing page.
  - `Services.jsx`: Services grid.
  - `Testimonials.jsx`: Customer reviews section.

- **`ui/`**: "Atoms" or small, generic, highly reusable UI elements.
  - `Button.jsx`: Standardized button component.
  - `Container.jsx`: Wrapper for max-width and padding consistency.
  - `Section.jsx`: Wrapper for vertical spacing consistency.

### `src/pages/`
React components that represent full routes/pages.
- `Home.jsx`: Composes the `layout` and `sections` to build the landing page.

### `src/styles/`
- `global.css`: Global styles, Tailwind directives, and font imports.

## Best Practices

1.  **Component Co-location**: Keep styles and logic close to the component if not using utility classes.
2.  **Absolute Imports**: (Configured via Vite) Use relative paths for now, or configure aliases for cleaner imports.
3.  **Lazy Loading**: For heavy sections, consider `React.lazy` (not currently implemented for this single-page app).
