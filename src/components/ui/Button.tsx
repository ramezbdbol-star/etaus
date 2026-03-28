import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-semibold shadow-lg shadow-gold-500/15 hover:shadow-gold-500/30 hover:from-gold-300 hover:to-gold-400",
  secondary:
    "border border-gold-500/40 text-gold-400 hover:bg-gold-500/5 hover:border-gold-400",
  ghost:
    "text-gold-400 hover:text-gold-300 font-medium",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] transition-all duration-400 cursor-pointer";
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
