"use client";
export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-30">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
       
        <button onClick={() => scrollToSection("home")} className="nav-item">
          Home
        </button>
        
        <button
          onClick={() => scrollToSection("projects")}
          className="nav-item"
        >
          Projects
        </button>
       
        <button onClick={() => scrollToSection("about")} className="nav-item">
          About
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Resume
        </button>
      </nav>
    </div>
  );
};
