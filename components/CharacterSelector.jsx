import { useState } from "react";
import { COLORS, FONTS } from "constants/theme";

const CHARS = [
  {
    src: "/images/about/kenhuang_avatar.png",
    badge: "★ INDIE DEV",
    name: "INDIE DEV",
    accentColor: COLORS.blue,
    accentColor2: COLORS.blueLight,
    lvBg: COLORS.blue,
    lvBorder: COLORS.blueDark,
    labelBg: COLORS.bgSurface,
    glow: ["rgba(77,158,255,0.5)", "rgba(77,158,255,0.2)", "rgba(77,158,255,0.1)"],
    glowHover: ["rgba(77,158,255,0.9)", "rgba(77,158,255,0.4)", "rgba(77,158,255,0.15)"],
    stats: [
      { label: "YRS EXP", value: "1" },
      { label: "GAME JAMS", value: "3" },
      { label: "BUG COUNT", value: "∞" },
    ],
  },
  {
    src: "/images/about/kenhuang_portrait.png",
    badge: "★ FRONTEND DEV",
    name: "FRONTEND DEV",
    accentColor: COLORS.yellow,
    accentColor2: COLORS.yellowDark,
    lvBg: COLORS.yellow,
    lvBorder: COLORS.yellowDark,
    labelBg: COLORS.bgIndie,
    glow: ["rgba(255,214,10,0.5)", "rgba(255,214,10,0.2)", "rgba(255,214,10,0.1)"],
    glowHover: ["rgba(255,214,10,0.9)", "rgba(255,214,10,0.4)", "rgba(255,214,10,0.15)"],
    stats: [
      { label: "YRS EXP", value: "15+" },
      { label: "MENTEES", value: "50+" },
      { label: "COUNTRIES", value: "20+" },
    ],
  },
];

/**
 * CharacterSelector
 * @param {number} size - diameter of the avatar circle in px (default 330)
 */
export function CharacterSelector({ size = 330 }) {
  const [charIndex, setCharIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const char = CHARS[charIndex];
  const nextChar = CHARS[charIndex === 0 ? 1 : 0];

  const toggle = () => setCharIndex(i => (i === 0 ? 1 : 0));

  // Scale ring sizes proportionally from avatar circle
  const avatar = size;
  const solidRing = Math.round(size * 1.055);
  const midRing = Math.round(size * 1.115);
  const outerRing = Math.round(size * 1.182);
  const container = outerRing + 10;
  const badgeOffset = Math.round(size * 0.06);
  const statsWidth = container;

  return (
    <div className="flex flex-col items-center gap-6">

      {/* SELECT CHARACTER label */}
      <div
        className="px-4 py-1.5 text-[10px] font-bold tracking-widest cursor-pointer select-none"
        style={{
          fontFamily: FONTS.mono,
          background: hovering ? char.accentColor : char.labelBg,
          color: hovering ? "#0D1533" : char.accentColor,
          border: `1px solid ${char.accentColor}`,
          boxShadow: hovering
            ? `0 0 12px ${char.glow[0]}, 4px 4px 0 0 ${char.lvBorder}`
            : `0 0 6px ${char.glow[1]}`,
          transform: hovering ? "translate(-2px, -2px)" : "none",
          transition: "all 0.15s ease",
        }}
        onClick={toggle}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {hovering
          ? `▶▶ SWITCH → ${nextChar.name}`
          : `▶ SELECT CHARACTER [${charIndex + 1}/2]`}
      </div>

      {/* Ring + avatar — entire area is clickable */}
      <div
        className="relative flex items-center justify-center cursor-pointer"
        style={{ width: `${container}px`, height: `${container}px` }}
        onClick={toggle}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Outer dashed ring */}
        <div
          className="absolute"
          style={{
            width: `${outerRing}px`,
            height: `${outerRing}px`,
            borderRadius: "50%",
            border: `2px dashed ${char.accentColor}`,
            opacity: hovering ? 0.55 : 0.25,
            animation: `ringRotate ${hovering ? "4s" : "12s"} linear infinite`,
            transition: "opacity 0.3s ease",
          }}
        />
        {/* Counter-rotating ring */}
        <div
          className="absolute"
          style={{
            width: `${midRing}px`,
            height: `${midRing}px`,
            borderRadius: "50%",
            border: `1px dashed ${char.accentColor2}`,
            opacity: hovering ? 0.4 : 0.15,
            animation: `ringRotate ${hovering ? "7s" : "20s"} linear infinite reverse`,
            transition: "opacity 0.3s ease",
          }}
        />
        {/* Solid glow ring */}
        <div
          style={{
            position: "absolute",
            width: `${solidRing}px`,
            height: `${solidRing}px`,
            borderRadius: "50%",
            border: `3px solid ${char.accentColor}`,
            boxShadow: hovering
              ? `0 0 40px ${char.glowHover[0]}, 0 0 80px ${char.glowHover[1]}, inset 0 0 40px ${char.glowHover[2]}`
              : `0 0 32px ${char.glow[0]}, 0 0 64px ${char.glow[1]}, inset 0 0 32px ${char.glow[2]}`,
            transition: "border-color 0.4s ease, box-shadow 0.3s ease",
          }}
        />

        {/* Avatar circle */}
        <div
          className="crt-portrait-circle overflow-hidden relative"
          style={{
            width: `${avatar}px`,
            height: `${avatar}px`,
            borderRadius: "50%",
            background: "#142040",
            transform: hovering ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          <img
            src={char.src}
            alt="Ken Huang"
            className="w-full h-full object-cover"
            style={{ display: "block", transition: "opacity 0.3s ease" }}
          />
        </div>

        {/* Hover overlay — switch hint */}
        <div
          className="absolute flex flex-col items-center justify-center"
          style={{
            width: `${avatar}px`,
            height: `${avatar}px`,
            borderRadius: "50%",
            background: hovering ? "rgba(0,0,0,0.52)" : "rgba(0,0,0,0)",
            opacity: hovering ? 1 : 0,
            transition: "opacity 0.25s ease, background 0.25s ease",
            pointerEvents: "none",
          }}
        >
          <p style={{ fontFamily: FONTS.mono, fontSize: "2.8rem", color: char.accentColor, lineHeight: 1 }}>
            ↻
          </p>
          <p style={{ fontFamily: FONTS.mono, fontSize: "10px", color: char.accentColor, letterSpacing: "0.15em", marginTop: "6px" }}>
            {nextChar.name}
          </p>
        </div>

        {/* LV badge */}
        <div
          className="absolute"
          style={{
            bottom: `${badgeOffset}px`,
            right: `${badgeOffset}px`,
            background: char.lvBg,
            border: `2px solid ${char.lvBorder}`,
            boxShadow: hovering
              ? `none`
              : `3px 3px 0 0 ${char.lvBorder}`,
            transform: hovering ? "translate(2px, 2px)" : "none",
            padding: "5px 12px",
            transition: "all 0.15s ease",
          }}
        >
          <p className="text-[11px] font-bold text-[#0D1533]" style={{ fontFamily: FONTS.mono }}>
            LV 15
          </p>
        </div>

        {/* Role badge */}
        <div
          className="absolute"
          style={{
            top: `${badgeOffset}px`,
            left: `${badgeOffset}px`,
            background: "#0D1533",
            border: `1px solid ${char.accentColor}`,
            padding: "5px 10px",
            transition: "border-color 0.4s ease, box-shadow 0.3s ease",
            boxShadow: hovering ? `0 0 8px ${char.glow[0]}` : "none",
          }}
        >
          <p
            className="text-[10px]"
            style={{ fontFamily: FONTS.mono, color: char.accentColor, transition: "color 0.4s ease" }}
          >
            {char.badge}
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="bg-[#142040]"
        style={{
          width: `${statsWidth}px`,
          border: `1px solid ${char.accentColor}`,
          boxShadow: hovering ? `0 0 12px ${char.glow[1]}` : "none",
          transition: "border-color 0.4s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="grid grid-cols-3 text-center">
          {char.stats.map((s, i) => (
            <div
              key={s.label}
              className="py-4 px-2"
              style={{
                borderRight: i < 2 ? `1px solid ${char.accentColor}33` : "none",
                transition: "border-color 0.4s ease",
              }}
            >
              <p
                className="leading-none mb-1"
                style={{ fontFamily: FONTS.pixel, fontSize: "2.2rem", color: char.accentColor, transition: "color 0.4s ease" }}
              >
                {s.value}
              </p>
              <p className="text-[9px] text-[#8898BB]" style={{ fontFamily: FONTS.mono }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
