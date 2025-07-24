import SwarShiksha from "@/assets/images/swar_siksha_lap-frame.png";
import KrishiSeva from "@/assets/images/Krishi-Seva.png";
import NyayaSetu from "@/assets/images/Nyaya_Setu.png";
import CheckCricleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import resumeAnalyzer from "@/assets/images/resume_analyzer.png";
const portfolioProjects = [
  {
    event: "Ideathon2.0",
    year: "2023",
    title: "Swar Shiksha",
    results: [
      { title: "Improved rural student engagement by 45%" },
      { title: "Reduced course access time by 30%" },
      { title: "Boosted mobile learning adoption by 40%" },
    ],
    link: "https://github.com/GangwarPriyansh/Swar-Shiksha",
    image: SwarShiksha,
  },
  {
    event: "Smart India Hackathon",
    year: "2024",
    title: "Krishi Seva",
    results: [
      { title: "Streamlined crop advisory system by 50%" },
      { title: "Increased farmer registrations by 35%" },
      { title: "Improved weather-based notifications by 25%" },
    ],
    link: "https://github.com/ash2shukla/sih2024",
    image: KrishiSeva,
  },
  {
    event: "Hacknovate 6.0",
    year: "2025",
    title: "Nyaya Setu",
    results: [
      { title: "Simplified legal form submissions by 40%" },
      { title: "Reduced case resolution waiting time by 20%" },
      { title: "Expanded rural legal service access by 30%" },
    ],
    link: "https://github.com/pranjalboss123/DigiCourt",
    image: NyayaSetu,
  },
  {
    event: "Personal Project",
    year: "2025",
    title: "ResumeBuddy",
    results: [
      { title: "Reduced resume creation time by 40%" },
      { title: "Improved resume analysis accuracy by 35%" },
      { title: "Boosted interview rates by 30% with ATS optimization" },
    ],
    link: "https://github.com/GangwarPriyansh/Resume-Analyzer",
    image: resumeAnalyzer,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow=" Real-world Results"
          title=" Featured Projects"
          discription="  See how i transformed concept into engaging digital experience"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 
                md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r
                   from-emerald-300 to-sky-400 inline-flex
                    gap-2 font-bold tracking-widest text-sm 
                    text-transparent bg-clip-text whitespace-nowrap"
                  >
                    <span>{project.event}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2  border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCricleIcon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Code</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 
                    lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:rounded-t-3xl md:rounded-t-3xl sm: rounded-t-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
