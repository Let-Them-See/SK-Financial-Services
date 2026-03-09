import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={className}
      style={{
        width: "100%",
        padding: "10px 14px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 8,
        color: "#FFFFFF",
        fontSize: 14,
        outline: "none",
        ...((props as any).style || {}),
      }}
      {...props}
    />
  )
);
Input.displayName = "Input";
