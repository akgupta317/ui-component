/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#102de6",
        "primary-foreground": "#ffffff",
        secondary: "#f3f4f6",
        "secondary-foreground": "#111827",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        accent: "#f3f4f6",
        "accent-foreground": "#111827",
        background: "#ffffff",
        foreground: "#0f172a",
        input: "#e5e7eb",
      },
    },
  },
  plugins: [],
}