// "use client";
// export const Header = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };
//   return (
//     <div className="flex justify-center items-center fixed top-3 w-full z-30">
//       <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
//         <button onClick={() => scrollToSection("home")} className="nav-item">
//           Home
//         </button>

//         <button
//           onClick={() => scrollToSection("projects")}
//           className="nav-item"
//         >
//           Projects
//         </button>

//         <button
//           onClick={() => scrollToSection("certificates")}
//           className="nav-item"
//         >
//           Certificates
//         </button>

//         <button onClick={() => scrollToSection("about")} className="nav-item">
//           About
//         </button>

//         <button
//           onClick={() => scrollToSection("contact")}
//           className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
//         >
//           Resume
//         </button>
//       </nav>
//     </div>
//   );
// };

"use client";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-3 w-full z-30 px-4">
      {/* Header Entrance Animation */}
      <div className="relative flex justify-center animate-fade-in-down">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <button onClick={() => scrollToSection("home")} className="nav-item">
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="nav-item"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("certificates")}
            className="nav-item"
          >
            Certificates
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end w-full">
          <div className="border border-white/15 rounded-full bg-white/10 backdrop-blur">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 focus:outline-none" // Added focus outline none for better animation look
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Close Icon (X) - Animated
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white transition-transform duration-300 ease-in-out rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon - Animated
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white transition-transform duration-300 ease-in-out -rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Animations */}
        {isMenuOpen && (
          <nav
            className={`absolute top-[calc(100%+0.5rem)] w-full md:hidden flex flex-col items-center gap-2 p-4 border border-white/15 rounded-2xl bg-slate-900/90 backdrop-blur-md
            ${
              isMenuOpen ? "animate-slide-down-fade" : "animate-slide-up-fade"
            } `}
          >
            <button
              onClick={() => scrollToSection("home")}
              className="nav-item"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-item"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="nav-item"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-item"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
            >
              Resume
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};