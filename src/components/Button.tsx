import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const buttonStyles = cva(["transition-colors", "cursor-pointer"], {
    variants: {
        variant: {
            default: ["bg-gray-100", "hover:bg-gray-200", "hover:cursor-pointer"],
            ghost: ["bg-transparent", "hover:bg-gray-200", "hover:cursor-pointer"]
        },
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-10", "h-10", "flex", "items-center", "justify-center", "p-2.5"]
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

const Button = ({variant, size, className, ...props}: ButtonProps) => {
  return (
    <button {...props} className={twMerge(buttonStyles({variant, size}), className)}/>
  )
}

export default Button