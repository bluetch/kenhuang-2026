import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  if (Array.isArray(children)) {
    return (
      <div className="flex flex-wrap gap-2">
        {children.map((item) => (
          <span
            key={`tag-${item}`}
            className="text-[10px] tracking-widest uppercase text-game-blue bg-game-blue/10 border border-game-blue px-2 py-0.5"
            style={{ fontFamily: "Space Mono, monospace" }}
          >
            {item}
          </span>
        ))}
      </div>
    );
  }
  return (
    <span
      className="text-[10px] tracking-widest uppercase text-game-blue bg-game-blue/10 border border-game-blue px-2 py-0.5"
      style={{ fontFamily: "Space Mono, monospace" }}
    >
      {children}
    </span>
  );
};
