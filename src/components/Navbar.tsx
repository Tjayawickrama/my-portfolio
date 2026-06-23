import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`header${menuOpen ? " menu-open" : ""}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          Tharushi.
        </a>
        <a
          href="mailto:tharushijayawickrama1234@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          tharushijayawickrama1234@gmail.com
        </a>

        {/* Hamburger button - mobile/tablet only */}
        <button
          className={`hamburger${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          data-cursor="disable"
        >
          <span />
          <span />
          <span />
        </button>

        <ul>
          <li>
            <a data-href="#about" href="#about" onClick={handleNavLinkClick}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={handleNavLinkClick}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={handleNavLinkClick}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
