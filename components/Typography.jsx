const VARIANT_CONFIG = {
  h1: {
    Tag: "h1",
    baseClass: "font-display text-4xl font-semibold mb-8 text-cream tracking-tight",
  },
  h2: {
    Tag: "h2",
    baseClass: "font-display text-3xl font-semibold mb-6 text-cream tracking-tight",
  },
  h3: {
    Tag: "h3",
    baseClass: "font-display text-2xl font-semibold mb-4 text-cream tracking-tight",
  },
  h4: {
    Tag: "h4",
    baseClass: "font-display text-xl font-semibold mb-3 text-cream",
  },
  h5: {
    Tag: "h5",
    baseClass: "font-display font-semibold text-base mb-2 text-cream",
  },
  h6: {
    Tag: "h6",
    baseClass: "font-display font-semibold text-sm mb-1 text-cream",
  },
};

export const Typography = ({ className = "", variant = "h4", children, ...rest }) => {
  const config = VARIANT_CONFIG[variant];

  if (!config) return <>{children}</>;

  const { Tag, baseClass } = config;

  return (
    <Tag
      className={`${baseClass} ${className}`}
      style={{ fontFamily: "Fraunces, Georgia, serif" }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
