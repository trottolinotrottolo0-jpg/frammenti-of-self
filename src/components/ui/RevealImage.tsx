import { useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  natural?: boolean;
}

const RevealImage = ({ src, alt, className = "", imgClassName = "", natural = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        ...(natural ? { height: "auto" } : {}),
      }}
      className={className}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={natural ? { width: "100%", height: "auto", objectFit: "unset" } : undefined}
        className={natural ? `block ${imgClassName}` : `w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
};

export default RevealImage;
