import { Icon } from "components";
import Link from "next/link";
import { forwardRef, memo } from "react";
import clsx from "clsx";

export const Button = memo(
  forwardRef(
    (
      {
        children,
        onClick,
        disabled,
        icon = {},
        href = null,
        link = false,
        className = "",
        responsive = false,
        variant = "primary",
        type = "button",
        ...rest
      },
      ref
    ) => {
      const variants = {
        primary:
          "cursor-pointer py-3 px-8 bg-[#4D9EFF] hover:bg-[#2468CC] text-[#0D1533] font-semibold flex-shrink-0 rounded-full h-12",
        ["primary-outline"]:
          "cursor-pointer py-3 px-8 bg-transparent border border-[#4D9EFF] hover:bg-[#4D9EFF] hover:text-[#0D1533] text-[#4D9EFF] rounded-full h-12",
        secondary:
          "bg-[#142040] border border-[#243570] md:hover:border-[#4D9EFF] text-[#4D9EFF]",
        plain:
          "text-[#4D9EFF] md:hover:bg-[#142040]",
        link: "",
        action:
          "text-[#D0E4FF] bg-[#1A2D5A] md:hover:bg-[#243570]",
      };

      const variantClass = variants[variant];

      const iconSize = {
        xs: "h-4 w-4",
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      }[icon.size || "md"];

      const Tag = link ? "span" : href ? "a" : "button";

      const element = (
        <Tag
          {...rest}
          onClick={onClick}
          ref={ref}
          disabled={disabled}
          type={type}
          href={href}
          className={clsx(
            "p-3 text-center appearance-none rounded-full inline-flex items-center justify-center space-x-2 transition-all duration-300 focus:outline-none",
            variantClass,
            className,
            {
              "opacity-40 pointer-events-none": disabled,
            }
          )}
        >
          {icon.name && (
            <span
              className={clsx(
                `${iconSize} ${icon.classes} shrink-0`,
                { "inline-block md:hidden": responsive }
              )}
            >
              <Icon name={icon.name} />
            </span>
          )}
          {children && (
            <span
              className={clsx({ "hidden md:inline-block": responsive })}
            >
              {children}
            </span>
          )}
        </Tag>
      );

      return link ? (
        <Link
          href={href}
          onClick={(e) => (disabled ? e.preventDefault() : undefined)}
          className={className}
        >
          {element}
        </Link>
      ) : (
        element
      );
    }
  )
);

Button.displayName = "Button";
