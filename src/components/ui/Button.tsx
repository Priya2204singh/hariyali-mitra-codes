import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm": variant === "default",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "border-2 border-primary bg-background text-primary hover:bg-primary/10": variant === "outline",
            "bg-background text-primary hover:bg-primary/10": variant === "ghost",
            "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm": variant === "destructive",
            "h-12 px-6 py-2 text-base": size === "default",
            "h-10 px-4 text-sm": size === "sm",
            "h-14 px-8 text-lg rounded-2xl": size === "lg",
            "h-12 w-12 rounded-full": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
