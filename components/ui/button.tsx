import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase select-none active:translate-y-[1px] active:translate-x-[1px]",
  {
    variants: {
      variant: {
        default: "bg-game-blue text-white border-2 border-dark shadow-pixel hover:shadow-none hover:translate-y-1 hover:translate-x-1",
        outline: "bg-white text-dark border-2 border-dark shadow-pixel hover:shadow-none hover:translate-y-1 hover:translate-x-1",
        pink: "bg-game-pink text-white border-2 border-dark shadow-pixel hover:shadow-none hover:translate-y-1 hover:translate-x-1",
        yellow: "bg-game-yellow text-dark border-2 border-dark shadow-pixel hover:shadow-none hover:translate-y-1 hover:translate-x-1",
        green: "bg-game-green text-dark border-2 border-dark shadow-pixel hover:shadow-none hover:translate-y-1 hover:translate-x-1",
        ghost: "text-text-muted hover:text-dark hover:bg-paper-warm border-2 border-transparent",
        link: "text-game-blue underline-offset-4 hover:underline p-0 h-auto",
        destructive: "bg-game-red text-white border-2 border-dark shadow-pixel hover:shadow-none hover:translate-y-1 hover:translate-x-1",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
