import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "tertiary2" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-primary hover:bg-primary-dark text-white focus:ring-primary",
    secondary: "bg-secondary border-2 border-secondary hover:border-white text-white focus:ring-secondary",
    tertiary: "btn-burst bg-transparent border-2 border-white text-white hover:border-tertiary focus:ring-tertiary",
    tertiary2: "bg-tertiary border-2 border-tertiary hover:border-white text-white focus:ring-secondary",
    text: "group relative bg-transparent text-foreground hover:text-white focus:ring-neutral-900 transition-colors duration-400",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {variant === "text" ? (
        <span className="relative inline-block">
          {children}
          <span className="absolute bottom-0 left-0 h-px w-full bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
        </span>
      ) : (
        children
      )}
    </button>
  );
}