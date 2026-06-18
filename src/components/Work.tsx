import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Jewelry Website UI/UX Design",
    category: "E-Commerce UI/UX Design",
    tools: "Figma, HCI Principles, Visual Hierarchy",
    description:
      "Designed a modern jewelry e-commerce website focusing on seamless user experience from product discovery to checkout. Created interactive prototypes with smooth user flows.",
    image: "/images/jewelry_website.png",
    link: "https://www.figma.com/design/bzXbz2EZRa5khJIMeaY1fv/Jewelry-web-site?node-id=0-1&t=Czr9ii5O2vrTUXOM-1",
  },
  {
    title: "GOBUSApp — Transport Mobile App",
    category: "Mobile App UI Design — Group Project",
    tools: "Figma, User-Centered Design, Prototyping",
    description:
      "Designed a bus transport mobile app UI for Sri Lanka focused on user-centered design, clear navigation, and visual hierarchy. Created high-fidelity prototypes for an intuitive travel experience.",
    image: "/images/gobusapp.png",
    link: "https://www.figma.com/design/mbEZtE5WKd6IRcIM1MBFxr/Kaimoo?node-id=1987-177&t=MiiZq7a6ZXZxPxb2-1",
  },
   {
    title: "Brain Boost – Brain Training Game Mobile Application",
    category: "Mobile Application",
    tools: "Flutter, Dart, Figma",
    description:
      "Designed and developed an interactive brain-training mobile application featuring engaging cognitive games and intuitive user experiences.",
    image: "/images/game.png",
    link: "https://github.com/Tjayawickrama/brain-boost-game-",
  },
  {
    title: "UI/UX Redesign with HCI Principles",
    category: "UI/UX Design — Group Project",
    tools: "Figma, HCI Principles, Usability Heuristics",
    description:
      "Redesigned an existing interface using HCI principles to improve usability, accessibility, and user experience. Created high-fidelity prototypes in Figma focusing on better interaction flow and reduced cognitive load.",
    image: "/images/hci_redesign.png",
    link: "https://www.figma.com/design/mbEZtE5WKd6IRcIM1MBFxr/Kaimoo?node-id=0-1&t=YN8AwXQP02ggPzds-1",
  },
  {
    title: "Internship Mobile App UI/UX",
    category: "Mobile Application Design",
    tools: "Figma, HCI Principles, Navigation Flow",
    description:
      "Designed a mobile application UI as an internship project focusing on user-centered design and HCI principles. Developed high-fidelity prototypes for a clean, modern mobile interface.",
    image: "/images/mobile_app_internship.svg",
    link: "https://www.figma.com/design/fseOOiyvGZacrJOfamUdKE/Internship-Mobile-Application?node-id=6-3&t=iYv0Hwkd0yuskkUo-1",
  },
  {
    title: "Coffee Shop Web Application",
    category: "Web Development — Group Project",
    tools: "Next.js, React, Responsive Design",
    description:
      "Developed a responsive coffee shop web application using Next.js, focusing on product browsing, UI component design, and user-friendly navigation. Ensured responsive design and performance optimization.",
    image: "/images/coffee_shop.svg",
    link: "https://github.com/OpenStag/project-17",
  },
 
];

const Work = () => {
  useGSAP(() => {
    // Only apply horizontal scroll on desktop
    if (window.innerWidth <= 1024) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p className="work-description">{project.description}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
