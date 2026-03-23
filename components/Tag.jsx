export const Tag = ({ children, variant = "black" }) => {
  if (Array.isArray(children)) {
    return (
      <div className="flex flex-wrap gap-2">
        {children.map((item) => (
          <span
            key={`tag-${item}`}
            className="text-[10px] tracking-widest uppercase text-lime px-3 py-1"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              background: "rgba(197,241,53,0.12)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    );
  } else {
    return (
      <span
        className="text-[10px] tracking-widest uppercase text-lime px-2 py-0.5"
        style={{
          fontFamily: "JetBrains Mono, monospace",
          background: "rgba(197,241,53,0.12)",
        }}
      >
        {children}
      </span>
    );
  }
};
