import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={className}
      style={{
        display: "block",
        fontSize: 13,
        fontWeight: 500,
        color: "rgba(255,255,255,0.7)",
        marginBottom: 6,
        ...((props as any).style || {}),
      }}
      {...props}
    />
  )
);
Label.displayName = "Label";
