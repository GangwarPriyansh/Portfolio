import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

import Hacknovate from "@/assets/images/Hacknovate_Certificate.jpg";
import SIH from "@/assets/images/SIH_certificate.jpg";
import javaDSA from "@/assets/images/java_DSA.jpg";
import javaBasis from "@/assets/images/java_basis.jpg";

export const CertificateSection = () => {
  const certificateData = [
    {
      title: "Hacknovate 6.0",
      institute: "ABES Institute of Technology",
      date: "April 2025",
      description:
        "Reached finals in the annual hackathon with a project on AI-based Law Management portal, competing against 150+ teams.",
      image: Hacknovate,
    },
    {
      title: "Smart India Hackathon 2024",
      institute: "Indian Institute of Technology, Hyderabad",
      date: "December 2024",
      description:
        "Won national-level hackathon with an innovative on AI-based agricultural solution, recognized by the Ministry of Agriculture.",
      image: SIH,
    },
    {
      title: "Data Structures & Algorithms in Java",
      institute: "Apna College",
      date: "October 2024",
      description:
        "Completed comprehensive course covering advanced DSA concepts, problem-solving techniques.",
      image: javaDSA,
    },
    {
      title: "Core Java Certification",
      institute: "Softpro India Pvt. Ltd.",
      date: "September 2024",
      description:
        "Mastered Java fundamentals including OOP concepts, collections framework, and exception handling.",
      image: javaBasis,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Where i have participated"
          title="Certifications & Achievements"
          discription="A showcase of earned certifications in hackathons and innovation programs"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 mt-10 md:mt-20">
          {certificateData.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-out group"
            >
              <div className="relative overflow-hidden p-3">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-96 lg:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer rounded-2xl"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                  {cert.title}
                </h3>

                <p className="bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text mb-3">
                  {cert.institute}
                </p>
                <hr className="border-t-2 border-white/5 mt-2 mb-3" />

                <p className="text-sm md:text-base text-white/50 leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full">
                    {cert.date}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
