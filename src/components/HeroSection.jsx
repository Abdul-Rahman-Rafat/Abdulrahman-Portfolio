import { useEffect } from "react";
import Typed from "typed.js";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {

  useEffect(() => {
    const typed = new Typed("#typed-name", {
      strings: [
        "Abdulrahman Rafat",
        "a Full-Stack Developer",
        "a Problem Solver"
      ],
      typeSpeed: 40,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* TITLE WITH TYPING EFFECT */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in">
            Hi, I'm{" "}
            <span
              id="typed-name"
              className="text-primary text-gradient ml-2"
            ></span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            I’m a Full-Stack Developer experienced in building web applications
            and APIs. I focus on creating reliable, high-quality solutions and
            improving overall performance.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
