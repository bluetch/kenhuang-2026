import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center text-xs font-mono tracking-widest uppercase transition-colors border-2",
  {
    variants: {
      variant: {
        default: "bg-game-blue/10 text-game-blue border-game-blue px-2 py-0.5",
        outline: "bg-transparent text-text-muted border-paper-border px-2 py-0.5",
        active: "bg-game-blue text-white border-game-blue px-2 py-0.5",
        pink: "bg-game-pink/10 text-game-pink border-game-pink px-2 py-0.5",
        yellow: "bg-game-yellow/20 text-dark border-game-yellow px-2 py-0.5",
        green: "bg-game-green/10 text-game-green-dark border-game-green px-2 py-0.5",
        achievement: "bg-game-yellow text-dark border-dark shadow-pixel-sm px-3 py-1",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
