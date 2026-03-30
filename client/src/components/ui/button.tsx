import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary:
    "bg-[var(--accent)] text-slate-950 hover:bg-[var(--accent-strong)] shadow-[0_14px_40px_rgba(249,115,22,0.28)]",
  secondary:
    "border border-white/12 bg-white/6 text-white hover:bg-white/10",
  ghost: "text-white/80 hover:bg-white/8 hover:text-white",
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200";

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  if (href) {
    return <Link href={href} className={cn(baseClassName, styles[variant], className)}>{children}</Link>;
  }

  return (
    <button
      type={type}
      className={cn(baseClassName, styles[variant], "disabled:cursor-not-allowed disabled:opacity-60", className)}
      {...props}
    >
      {children}
    </button>
  );
}
