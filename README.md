# Coming Soon Page - Vue 3

A beautiful and responsive coming soon page with countdown timer, built with Vue 3, Tailwind CSS v4, and Vue Router.

## Features

- ⏱️ **Dynamic Countdown Timer** - Real-time countdown with days, hours, minutes, seconds, and milliseconds
- 🎨 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📅 **Custom Date Countdowns** - Create countdowns for any future date
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎭 **Multiple Examples** - Pre-configured countdown examples for various timeframes
- ✨ **Smooth Animations** - Beautiful fade-in effects and transitions
- 🔍 **Date Validation** - Automatic validation with fallback to example dates

## Tech Stack

- **Vue 3** - Composition API
- **Tailwind CSS v4** - CSS-first configuration with custom variants
- **Vue Router** - Client-side routing
- **Vite** - Fast build tool and dev server

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   └── Footer.vue         # Footer component with theme toggle
│   ├── ComingSoon.vue         # Main landing page
│   ├── Counter.vue            # Countdown logic component
│   ├── CounterSquare.vue      # Individual counter display
│   ├── CustomDate.vue         # Custom date countdown page
│   ├── Examples.vue           # Countdown examples gallery
│   └── ToggleButton.vue       # Dark/light mode toggle
├── utils/
│   ├── helpers.js             # Date validation and formatting utilities
│   ├── colorScheme.js         # Theme management
│   └── router-utils.js        # Navigation helpers
├── router.js                  # Route configuration
└── main.js                    # Application entry point
```

## Routes

- `/` - Main coming soon page
- `/countdown/:date` - Custom countdown (accepts ISO string or unix timestamp)
- `/examples` - Gallery of pre-configured countdown examples

### Custom Countdown URLs

You can create custom countdowns by passing a date parameter:

```
/countdown/2025-12-31T23:59:59
/countdown/1735689599000
/countdown/2025-06-21
```

## Development Guidelines

### Tailwind CSS v4 Classes

⚠️ **Important**: This project uses Tailwind CSS v4. Always use the updated class syntax:

**Gradients:**
- ✅ Use: `bg-linear-to-r`, `bg-linear-to-br`
- ❌ Don't use: `bg-gradient-to-r`, `bg-gradient-to-br`

### Dark Mode Best Practices

For proper readability in dark mode, follow these guidelines:

**Card Backgrounds:**
```html
<!-- Light mode: semi-transparent white -->
<!-- Dark mode: solid dark gray -->
<div class="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-90">
```

**Text Colors:**
```html
<!-- Headings -->
<h1 class="text-gray-900 dark:text-white">

<!-- Body text -->
<p class="text-gray-600 dark:text-gray-300">

<!-- Secondary text -->
<span class="text-gray-500 dark:text-gray-400">
```

**Avoid:** Very transparent backgrounds in dark mode (`dark:bg-opacity-10`) as they make text unreadable.

### Date Validation

Always use the validation helpers:

```javascript
import { isValidDate, ifValidDate, isFutureDate } from '@/utils/helpers.js';

// Check if valid date
if (isFutureDate(dateParam)) {
    // Use the date
}

// Get Date object or null
const dateObj = ifValidDate(dateParam);
```

### Code Style

- **Indentation**: 4 spaces (configured in `.prettierrc`)
- **Language**: Code in English, UI text in Portuguese (pt-BR)
- **Formatting**: Run Prettier before committing
  ```bash
  npx prettier -w --ignore-path ./.prettierignore --config ~/.prettierrc .
  ```

## Component Usage

### Counter Component

```vue
<template>
    <Counter :finalDate="myDate" />
</template>

<script setup>
const myDate = '2025-12-31T23:59:59';
</script>
```

### CounterSquare Component

```vue
<template>
    <CounterSquare
        :value="42"
        label="Days"
        singular-label="Day"
        id="days"
    />
</template>
```

## Color Scheme Management

The theme is managed through `src/utils/colorScheme.js` with localStorage persistence:

- `setTheme(theme)` - Set theme ('light', 'dark', or 'auto')
- `getCurrentTheme()` - Get current theme
- `loadTheme()` - Load and apply saved theme

## Detailed Documentation

For detailed development guidelines, see [`.claude/CLAUDE.md`](.claude/CLAUDE.md)

### [MIGRATING TO TW v4](./MIGRATING-TO-TW-V4.md)
