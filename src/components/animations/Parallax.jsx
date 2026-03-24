import useParallax from "../../hooks/useParallax";

function Parallax({ children, speed = 0.12, className = "" }) {
  const offset = useParallax(speed);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export default Parallax;