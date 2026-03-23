/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Game-inspired light theme tokens
        paper: {
          DEFAULT: "#F8F7F4",
          white: "#FFFFFF",
          warm: "#F3F1EC",
          border: "#E5E3DC",
          muted: "#D4D1C8",
        },
        dark: {
          DEFAULT: "#1A1A2E",
          rich: "#0F0F1A",
          mid: "#2D2D44",
        },
        text: {
          DEFAULT: "#1A1A2E",
          muted: "#6B7280",
          faint: "#9CA3AF",
        },
        // Game accent colors
        game: {
          blue: "#4361EE",
          "blue-light": "#6B87FF",
          "blue-dark": "#2E4DD4",
          pink: "#FF006E",
          "pink-light": "#FF4D98",
          yellow: "#FFB700",
          "yellow-dark": "#D49600",
          green: "#06D6A0",
          "green-dark": "#04B086",
          red: "#EF233C",
          "red-dark": "#C81A2E",
          cyan: "#4CC9F0",
          purple: "#7209B7",
        },
        // shadcn compat
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        game: ["Orbitron", "monospace"],
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
        DEFAULT: "0",
        full: "9999px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "float": "float 3s ease-in-out infinite",
        "flicker": "flicker 4s linear infinite",
        "blink": "blink 1s step-end infinite",
        "spin-slow": "spin 8s linear infinite",
        "fill-bar": "fillBar 1.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "level-up": "levelUp 0.4s ease",
        "pixel-pulse": "pixelPulse 2s ease-in-out infinite",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flicker: {
          "0%, 95%, 100%": { opacity: 1 },
          "96%": { opacity: 0.8 },
          "98%": { opacity: 0.7 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fillBar: {
          "from": { width: "0%" },
        },
        levelUp: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)", filter: "brightness(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        pixelPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(67, 97, 238, 0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(67, 97, 238, 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "pixel": "4px 4px 0 0 #1A1A2E",
        "pixel-blue": "4px 4px 0 0 #4361EE",
        "pixel-pink": "4px 4px 0 0 #FF006E",
        "pixel-yellow": "4px 4px 0 0 #FFB700",
        "pixel-green": "4px 4px 0 0 #06D6A0",
        "pixel-sm": "2px 2px 0 0 #1A1A2E",
        "pixel-lg": "6px 6px 0 0 #1A1A2E",
        "inner-top": "inset 0 2px 0 0 rgba(255,255,255,0.5)",
      },
    },
  },
  plugins: [],
};
