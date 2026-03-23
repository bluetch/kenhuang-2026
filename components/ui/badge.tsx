import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border text-xs font-mono-site transition-colors font-medium tracking-wider uppercase",
  {
    variants: {
      variant: {
        default: "border-transparent bg-lime-faint text-lime px-3 py-1",
        outline: "border-ink-border text-cream-muted px-3 py-1",
        active: "border-transparent bg-lime text-ink px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
