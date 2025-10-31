// tailwind.config.ts
import type { Config } from "tailwindcss"

export default {
  darkMode: "class", // ← aquí el cambio
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    // si usas src/, añade: "./src/**/*.{ts,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
        display: ["var(--font-heading)"],
      },
    },
  },
  plugins: [],
} satisfies Config
