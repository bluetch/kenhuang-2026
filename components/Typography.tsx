import { ReactNode, CSSProperties, HTMLAttributes } from "react";

type VariantKey = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface VariantConfig {
  Tag: VariantKey;
  baseClass: string;
  style: CSSProperties;
}

const VARIANT_CONFIG: Record<VariantKey, VariantConfig> = {
  h1: { Tag: "h1", baseClass: "text-4xl font-bold mb-6 tracking-tight", style: { color: "#1d2636" } },
  h2: { Tag: "h2", baseClass: "text-3xl font-bold mb-5 tracking-tight", style: { color: "#1d2636" } },
  h3: { Tag: "h3", baseClass: "text-2xl font-bold mb-4 mt-10", style: { color: "#243b63" } },
  h4: { Tag: "h4", baseClass: "text-xl font-bold mb-3 mt-8", style: { color: "#243b63" } },
  h5: { Tag: "h5", baseClass: "font-bold text-base mb-2 mt-6", style: { color: "#40506d" } },
  h6: { Tag: "h6", baseClass: "font-bold text-sm mb-2 mt-4", style: { color: "#6a7283" } },
};

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  variant?: VariantKey;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Typography = ({ className = "", variant = "h4", style: styleProp, children, ...rest }: TypographyProps) => {
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
