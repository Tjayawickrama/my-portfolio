import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useRef } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  const iconsRef = useRef<HTMLDivElement>(null);
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/resumes/G.Tharushi cv.pdf";
    link.download = "G.Tharushi cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  // Hide icons when contact or work/projects section is visible
  useEffect(() => {
    const sectionsToHide = [
      document.getElementById("contact"),
      document.getElementById("work"),
    ].filter(Boolean) as HTMLElement[];

    if (!iconsRef.current || sectionsToHide.length === 0) return;

    const visibleSections = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target);
          } else {
            visibleSections.delete(entry.target);
          }
        });
        if (iconsRef.current) {
          const shouldHide = visibleSections.size > 0;
          iconsRef.current.style.opacity = shouldHide ? "0" : "1";
          iconsRef.current.style.pointerEvents = shouldHide ? "none" : "auto";
        }
      },
      { threshold: 0.05 }
    );

    sectionsToHide.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="icons-section" ref={iconsRef} style={{ transition: "opacity 0.4s ease" }}>
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Tjayawickrama" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/tharushi-jayawickrama-60287221b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_me" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#" onClick={handleResumeClick}>
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
