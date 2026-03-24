const VARIANT_CONFIG = {
  h1: { Tag: "h1", baseClass: "text-4xl font-bold mb-6 tracking-tight", style: { color: "#D0E4FF" } },
  h2: { Tag: "h2", baseClass: "text-3xl font-bold mb-5 tracking-tight", style: { color: "#D0E4FF" } },
  h3: { Tag: "h3", baseClass: "text-2xl font-bold mb-4 mt-10", style: { color: "#C4D8F0" } },
  h4: { Tag: "h4", baseClass: "text-xl font-bold mb-3 mt-8", style: { color: "#C4D8F0" } },
  h5: { Tag: "h5", baseClass: "font-bold text-base mb-2 mt-6", style: { color: "#B0C4DE" } },
  h6: { Tag: "h6", baseClass: "font-bold text-sm mb-2 mt-4", style: { color: "#8898BB" } },
};

export const Typography = ({ className = "", variant = "h4", style: styleProp, children, ...rest }) => {
  const config = VARIANT_CONFIG[variant];
  if (!config) return <>{children}</>;
  const { Tag, baseClass, style: variantStyle } = config;
  return (
    <Tag
      className={`${baseClass} ${className}`}
      style={{ fontFamily: "Syne, sans-serif", ...variantStyle, ...styleProp }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
