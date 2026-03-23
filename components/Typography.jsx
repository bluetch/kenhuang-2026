const VARIANT_CONFIG = {
  h1: { Tag: "h1", baseClass: "text-4xl font-bold mb-8 text-dark tracking-tight" },
  h2: { Tag: "h2", baseClass: "text-3xl font-bold mb-6 text-dark tracking-tight" },
  h3: { Tag: "h3", baseClass: "text-2xl font-bold mb-4 text-dark" },
  h4: { Tag: "h4", baseClass: "text-xl font-bold mb-3 text-dark" },
  h5: { Tag: "h5", baseClass: "font-bold text-base mb-2 text-dark" },
  h6: { Tag: "h6", baseClass: "font-bold text-sm mb-1 text-dark" },
};

export const Typography = ({ className = "", variant = "h4", children, ...rest }) => {
  const config = VARIANT_CONFIG[variant];
  if (!config) return <>{children}</>;
  const { Tag, baseClass } = config;
  return (
    <Tag
      className={`${baseClass} ${className}`}
      style={{ fontFamily: "Syne, sans-serif" }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
