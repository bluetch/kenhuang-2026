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
        // Cartoon Toy Blue Dark — design tokens
        paper: {
          DEFAULT: "#0D1533",
          white: "#142040",
          warm: "#1A2D5A",
          border: "#243570",
          muted: "#2E4490",
        },
        dark: {
          DEFAULT: "#1A2D5A",
          rich: "#0D1533",
          mid: "#243570",
        },
        text: {
          DEFAULT: "#D0E4FF",
          muted: "#6880AA",
          faint: "#354870",
        },
        // Game accent colors — blue primary + yellow secondary
        game: {
          blue: "#4D9EFF",
          "blue-light": "#7BBFFF",
          "blue-dark": "#2468CC",
          yellow: "#FFD60A",
          "yellow-dark": "#CCA800",
          cyan: "#96D4FF",
          red: "#FF6B6B",
          "red-dark": "#CC3333",
          // keep for category backward compat
          pink: "#FFD60A",
          "pink-light": "#FFE55A",
          green: "#4DDFAA",
          "green-dark": "#2BB88A",
          purple: "#8899FF",
        },
        neon: {
          blue: "#4D9EFF",
          "blue-light": "#7BBFFF",
          yellow: "#FFD60A",
          cyan: "#96D4FF",
          red: "#FF6B6B",
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
        pixel: ["VT323", "monospace"],
        crt: ["'Press Start 2P'", "monospace"],
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
        "glitch": "glitch 0.4s steps(1) infinite",
        "neon-pulse": "neonPulse 2.5s ease-in-out infinite",
        "scan": "scanlineMove 6s linear infinite",
        "ring-rotate": "ringRotate 8s linear infinite",
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
          "98%": { opacity: 0.6 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fillBar: { "from": { width: "0%" } },
        levelUp: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)", filter: "brightness(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        pixelPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(77,158,255,0.5)" },
          "50%": { boxShadow: "0 0 0 8px rgba(77,158,255,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "25%": { transform: "translate(-2px, 2px)", filter: "hue-rotate(40deg)" },
          "50%": { transform: "translate(2px, -2px)" },
          "75%": { transform: "translate(-2px, -2px)", filter: "hue-rotate(-40deg)" },
          "100%": { transform: "translate(0)" },
        },
        neonPulse: {
          "0%, 100%": { textShadow: "0 0 10px #4D9EFF, 0 0 20px rgba(77,158,255,0.5)" },
          "50%": { textShadow: "0 0 5px #4D9EFF, 0 0 15px #4D9EFF, 0 0 40px #4D9EFF, 0 0 60px rgba(77,158,255,0.3)" },
        },
        scanlineMove: {
          "0%": { top: "-80px" },
          "100%": { top: "100%" },
        },
        ringRotate: {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        "pixel": "4px 4px 0 0 #4D9EFF",
        "pixel-blue": "4px 4px 0 0 #4D9EFF",
        "pixel-yellow": "4px 4px 0 0 #FFD60A",
        "pixel-sm": "2px 2px 0 0 #4D9EFF",
        "pixel-lg": "6px 6px 0 0 #4D9EFF",
        "pixel-pink": "4px 4px 0 0 #FFD60A",
        "pixel-green": "4px 4px 0 0 #4DDFAA",
        "neon-blue": "0 0 10px #4D9EFF, 0 0 20px rgba(77,158,255,0.4)",
        "neon-yellow": "0 0 10px #FFD60A, 0 0 20px rgba(255,214,10,0.4)",
        "inner-top": "inset 0 2px 0 0 rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};
