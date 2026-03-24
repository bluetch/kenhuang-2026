import { useState, useEffect, useRef, useCallback } from "react";

const GIF_W        = 57;    // running sprite display width
const GIF_H        = 59;    // running sprite display height
const TELEPORT_W   = 126;   // teleport beam canvas width (3x of 42)
const TELEPORT_H   = 546;   // teleport beam canvas height (3x of 182)
const GROUND       = 36;    // px from viewport bottom
const SPEED        = 2.2;

// ── Tooltip with two actions ──────────────────────────────────────────
interface TooltipProps {
  paused: boolean;
  onTogglePause: () => void;
  onLeave: () => void;
}

function Tooltip({ paused, onTogglePause, onLeave }: TooltipProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: GIF_H + 8,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        pointerEvents: "auto",
        zIndex: 9999,
      }}
    >
      {/* Caret */}
      <div style={{ display: "flex", gap: 4 }}>
        {/* STOP / RESUME */}
        <button
          onClick={(e) => { e.stopPropagation(); onTogglePause(); }}
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "8px",
            letterSpacing: "0.06em",
            padding: "4px 8px",
            background: paused ? "#FFD60A" : "#142040",
            color: paused ? "#0D1533" : "#7BBFFF",
            border: `1px solid ${paused ? "#CCA800" : "#4D9EFF"}`,
            boxShadow: `2px 2px 0 0 ${paused ? "#CCA800" : "#243570"}`,
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "all 0.1s",
          }}
        >
          {paused ? "▶ RESUME" : "⏸ STOP"}
        </button>

        {/* LEAVE */}
        <button
          onClick={(e) => { e.stopPropagation(); onLeave(); }}
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "8px",
            letterSpacing: "0.06em",
            padding: "4px 8px",
            background: "#142040",
            color: "#4D9EFF",
            border: "1px solid #4D9EFF",
            boxShadow: "2px 2px 0 0 #243570",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          ↑ LEAVE
        </button>
      </div>

      {/* Arrow pointing down to character */}
      <div style={{
        width: 0,
        height: 0,
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderTop: "5px solid #4D9EFF",
      }} />
    </div>
  );
}

type MegaManMode = "running" | "teleporting" | "gone";

// ── Main component ────────────────────────────────────────────────────
export function MegaMan() {
  const [posX, setPosX]         = useState(80);
  const [dir, setDir]           = useState(1);
  const [paused, setPaused]     = useState(false);
  const [hovered, setHovered]   = useState(false);
  const [mode, setMode]         = useState<MegaManMode>("running");

  const xRef      = useRef(80);
  const dirRef    = useRef(1);
  const pausedRef = useRef(false);
  const rafRef    = useRef<number | null>(null);

  // keep pausedRef in sync
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  // ── Auto walk ────────────────────────────────────────────────────
  useEffect(() => {
    if (mode !== "running") return;
    let vw = window.innerWidth;
    const onResize = () => { vw = window.innerWidth; };
    window.addEventListener("resize", onResize);

    const tick = () => {
      if (!pausedRef.current) {
        let x = xRef.current;
        let d = dirRef.current;
        x += SPEED * d;
        if (x >= vw - GIF_W - 10) { x = vw - GIF_W - 10; d = -1; }
        if (x <= 10)               { x = 10;               d =  1; }
        xRef.current   = x;
        dirRef.current = d;
        setPosX(x);
        setDir(d);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [mode]);

  const handleTogglePause = useCallback(() => {
    setPaused(p => !p);
  }, []);

  const handleLeave = useCallback(() => {
    setHovered(false);
    setMode("teleporting");
    // After the teleport animation plays (~1.8s), hide permanently
    setTimeout(() => setMode("gone"), 1800);
  }, []);

  if (mode === "gone") return null;

  // Center the teleport beam over the character's midpoint
  const teleportLeft = xRef.current + GIF_W / 2 - TELEPORT_W / 2;

  return (
    <>
      {/* Teleport beam (replaces character during leave) */}
      {mode === "teleporting" && (
        <div
          style={{
            position: "fixed",
            left: teleportLeft,
            bottom: GROUND,
            width: TELEPORT_W,
            height: TELEPORT_H,
            zIndex: 9998,
            pointerEvents: "none",
          }}
        >
          <img
            src="/images/megaman-x-teleport-processed.gif"
            alt=""
            aria-hidden="true"
            width={TELEPORT_W}
            height={TELEPORT_H}
            draggable={false}
            style={{
              display: "block",
              imageRendering: "pixelated",
              transform: dir < 0 ? "scaleX(-1)" : "none",
            }}
          />
        </div>
      )}

      {/* Running character */}
      {mode === "running" && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "fixed",
            left: posX,
            bottom: GROUND,
            zIndex: 9998,
            cursor: "default",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {hovered && (
            <Tooltip
              paused={paused}
              onTogglePause={handleTogglePause}
              onLeave={handleLeave}
            />
          )}

          <img
            src="/images/megaman-x.gif"
            alt=""
            aria-hidden="true"
            width={GIF_W}
            height={GIF_H}
            draggable={false}
            style={{
              display: "block",
              imageRendering: "pixelated",
              transform: dir < 0 ? "scaleX(-1)" : "none",
              filter: "drop-shadow(0 2px 4px rgba(77,158,255,0.4))",
              opacity: paused ? 0.7 : 1,
              transition: "opacity 0.2s",
            }}
          />
        </div>
      )}
    </>
  );
}
