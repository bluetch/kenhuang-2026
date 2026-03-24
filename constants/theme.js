// ─── Design Tokens ────────────────────────────────────────────────────────────
// Single source of truth for colors and font families.
// Import these wherever you need a design value instead of hardcoding strings.

export const COLORS = {
  // Backgrounds
  bgDeep:    "#0D1533", // main page background
  bgBase:    "#0B1220", // footer / darkest sections
  bgSurface: "#142040", // cards, panels
  bgElevated:"#1A2D5A", // card headers, elevated surfaces
  bgIndie:   "#1A1800", // yellow-theme dark bg (indie dev mode)

  // Borders
  border: "#243570",

  // Accent — Blue (INDIE DEV / frontend)
  blue:      "#4D9EFF",
  blueLight: "#7BBFFF",
  blueDark:  "#2468CC",

  // Accent — Yellow (FRONTEND DEV / mentor)
  yellow:     "#FFD60A",
  yellowDark: "#CCA800",

  // Text hierarchy
  textPrimary:     "#D0E4FF", // headings, important labels
  textSecondary:   "#C4D8F0", // sub-headings
  textMuted:       "#B0C4DE", // body text (large)
  textSubtle:      "#9ABCE8", // body text (small, secondary)
  textFaint:       "#8898BB", // captions, meta (≥14px — passes WCAG AA)
  textDecorative:  "#6880AA", // purely decorative labels (≤10px only)

  // Status / misc
  red: "#FF3E3E",
};

export const FONTS = {
  mono:    "Space Mono, monospace", // labels, badges, code
  pixel:   "VT323, monospace",      // display headings, scores
  heading: "Syne, sans-serif",      // section headings
  body:    "DM Sans, sans-serif",   // body copy, descriptions
};
