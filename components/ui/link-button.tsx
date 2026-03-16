import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses = {
  primary:
    "border-gold/40 bg-[linear-gradient(135deg,rgba(168,134,75,0.36),rgba(168,134,75,0.18))] text-ivory shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:border-gold/70 hover:bg-[linear-gradient(135deg,rgba(187,151,88,0.48),rgba(168,134,75,0.2))]",
  secondary:
    "border-white/12 bg-white/[0.04] text-ivory hover:border-white/20 hover:bg-white/[0.08]",
  ghost:
    "border-white/10 bg-transparent text-ivory/80 hover:border-gold/25 hover:text-ivory",
} as const;

export function LinkButton({
  href,
  children,
  className,
  external = false,
  variant = "primary",
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
