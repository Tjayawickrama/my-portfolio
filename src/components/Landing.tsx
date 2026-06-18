import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;

  const [showImage, setShowImage] = useState<boolean>(() => {
    // On mobile the image is position:absolute — always show it
    if (!isDesktop) return true;
    if (typeof window !== "undefined") return window.scrollY === 0;
    return true;
  });

  useEffect(() => {
    // Only hide the image on scroll for desktop (where it's position:fixed)
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
