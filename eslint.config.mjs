// 🧠 ESLint Flat Config for a Next.js + TypeScript + Storybook project
// ------------------------------------------------------------
// This configuration enforces:
// - Next.js and React best practices
// - TypeScript type-aware linting
// - Tailwind CSS class consistency
// - Prettier formatting enforcement
// - Storybook, Jest, and Testing Library integration
// ------------------------------------------------------------

import globals from "globals";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import tailwindcss from "eslint-plugin-tailwindcss";
import storybook from "eslint-plugin-storybook";
import jest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";

export default [
  // ------------------------------------------------------------
  // 🧹 Ignore files & folders that should never be linted
  // ------------------------------------------------------------
  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "storybook-static/**",
      ".storybook/**",
      ".plop/**",
      "dist/**",
      "build/**",
    ],
  },

  // ------------------------------------------------------------
  // 🧩 Core configuration — applies to JS, TS, and JSX/TSX files
  // ------------------------------------------------------------
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true, // Enables type-aware linting using tsconfig.json
        ecmaVersion: "latest", // Support latest JS features
        sourceType: "module", // Enable ES modules
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    // Register all ESLint plugins used in this project
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@next/next": nextPlugin, // Must match rule prefix "@next/next"
      prettier,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      promise,
      unicorn,
      sonarjs,
      tailwindcss,
      storybook,
      jest,
      "testing-library": testingLibrary,
    },

    // Framework-specific settings
    settings: {
      react: { version: "detect" },
      next: { rootDir: "./" },
    },

    rules: {
      // ------------------------------------------------------------
      // 🧠 TypeScript Rules
      // ------------------------------------------------------------
      ...tseslint.configs.recommendedTypeChecked[0].rules,

      // ------------------------------------------------------------
      // ⚛️ Next.js Rules
      // ------------------------------------------------------------
      // Enables Next.js-specific linting (e.g. image optimization, link usage)
      ...nextPlugin.configs["core-web-vitals"].rules,

      // ------------------------------------------------------------
      // 📖 Storybook Rules
      // ------------------------------------------------------------
      ...storybook.configs["flat/recommended"][0].rules,

      // ------------------------------------------------------------
      // ⚛️ React Best Practices
      // ------------------------------------------------------------
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/jsx-uses-react": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ------------------------------------------------------------
      // 🎨 Tailwind CSS Rules
      // ------------------------------------------------------------
      ...tailwindcss.configs.recommended.rules,
      "tailwindcss/classnames-order": "warn", // Keep classes in consistent order

      // ------------------------------------------------------------
      // 🧹 Code Quality & Readability Rules
      // ------------------------------------------------------------
      "unicorn/prefer-query-selector": "off", // Allow document.getElementById etc.
      "sonarjs/no-duplicate-string": "warn", // Warn on repeated string literals

      // ------------------------------------------------------------
      // 📦 Import & Promise Handling Rules
      // ------------------------------------------------------------
      "promise/always-return": ["error", { ignoreLastCallback: true }],
      "promise/catch-or-return": ["error", { allowFinally: true }],
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling"]],
          "newlines-between": "always",
        },
      ],

      // ------------------------------------------------------------
      // 🪄 Prettier Integration
      // ------------------------------------------------------------
      // Enforces formatting rules defined in .prettierrc
      "prettier/prettier": "error",
    },
  },

  // ------------------------------------------------------------
  // 🧪 Jest & Testing Library Configuration
  // ------------------------------------------------------------
  {
    files: ["**/*.test.{js,ts,jsx,tsx}", "**/__tests__/**/*.{js,ts,jsx,tsx}"],
    plugins: {
      jest,
      "testing-library": testingLibrary,
    },
    rules: {
      // Apply recommended testing rules
      ...jest.configs.recommended.rules,
      ...testingLibrary.configs.react.rules,
    },
  },
];
