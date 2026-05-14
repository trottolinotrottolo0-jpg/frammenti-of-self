import { useEffect, useRef, useState } from "react";

const IntroOverlay = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem("intro-seen");
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (seen || !isMobile) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {
        // autoplay blocked: skip intro
        finish();
      });
    }

    const timeout = window.setTimeout(finish, 6000);

    function finish() {
      setFading(true);
      window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
        sessionStorage.setItem("intro-seen", "1");
      }, 600);
    }

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-background flex items-center justify-center transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => {
          setFading(true);
          setTimeout(() => {
            setVisible(false);
            document.body.style.overflow = "";
            sessionStorage.setItem("intro-seen", "1");
          }, 600);
        }}
        className="h-full w-full object-cover md:object-contain"
      />
    </div>
  );
};

export default IntroOverlay;
