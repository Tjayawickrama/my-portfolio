import { PropsWithChildren, useEffect, useRef, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;
  const glowRef = useRef<HTMLDivElement>(null);

  const [showImage, setShowImage] = useState<boolean>(() => {
    if (!isDesktop) return true;
    if (typeof window !== "undefined") return window.scrollY === 0;
    return true;
  });

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setShowImage(true);
      return;
    }
    const onScroll = () => {
      setShowImage(window.scrollY === 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-based purple glow parallax
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrollY / vh, 1); // 0 → 1 as user scrolls one viewport

      // Move glow upward as user scrolls (parallax)
      const translateY = -progress * 60; // shift up 60px max
      const scale = 1 + progress * 0.5;  // grow from 1x to 1.5x
      const opacity = 0.85 + progress * 0.15; // brighten slightly

      glow.style.transform = `translateX(-50%) translateY(${translateY}px) scaleX(${scale})`;
      glow.style.opacity = String(opacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h3>Hello I'm</h3>
            <h2 className="landing-intro-h2">
              Tharushi
              <br />
              <span>Jayawickrama</span>
            </h2>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">UI/UX Designer</div>
              <div className="landing-h2-2">Web Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Web Developer</div>
              <div className="landing-h2-info-1">UI/UX Designer</div>
            </h2>
          </div>
          <div className={`profile-image-wrapper ${showImage ? "loaded" : ""}`}>
            <div className="profile-glow" aria-hidden="true" ref={glowRef} />
            <div className="profile-image-inner">
              <img
                src="/images/about.png"
                alt="Tharushi Jayawickrama"
                className="profile-center-image"
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
