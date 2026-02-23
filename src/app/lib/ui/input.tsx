import * as React from "react"
import { twMerge } from "tailwind-merge"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
      />
    )
  }
)
