import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
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
        resize: "vertical",
        minHeight: 100,
        ...((props as any).style || {}),
      }}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
