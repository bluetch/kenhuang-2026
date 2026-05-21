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
            className="px-3 py-1 text-[10px] uppercase tracking-[0.16em]"
            style={{
              fontFamily: "Space Mono, monospace",
              color: "#7a685a",
              background: "#fff7ef",
              border: "1px solid #dfd2c5",
              borderRadius: "999px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    );
  }
  return (
    <span
      className="px-3 py-1 text-[10px] uppercase tracking-[0.16em]"
      style={{
        fontFamily: "Space Mono, monospace",
        color: "#7a685a",
        background: "#fff7ef",
        border: "1px solid #dfd2c5",
        borderRadius: "999px",
      }}
    >
      {children}
    </span>
  );
};
