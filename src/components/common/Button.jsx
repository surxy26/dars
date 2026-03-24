import { Link } from "react-router-dom";

function Button({
  children,
  href,
  to,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300";
  const styles =
    variant === "outline"
      ? "border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
      : "bg-white text-black hover:bg-neutral-200";

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles} ${className}`}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}


export default Button;