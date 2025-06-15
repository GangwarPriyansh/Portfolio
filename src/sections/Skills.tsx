import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import HTML from "@/assets/images/html_logo-removebg-preview.png";
import CSS from "@/assets/images/css_logo-removebg-preview.png";
import JavaScript from "@/assets/images/JavaScript_logo-removebg-preview.png";
import NodeJS from "@/assets/images/node.js_logo-removebg-preview.png";
import NextJS from "@/assets/images/next.js_logo-removebg-preview.png";
import MongoDB from "@/assets/images/mongodb_logo-removebg-preview.png";
import { Fragment } from "react";

const skills = [
  {
    name: "HTML",
    type: "Markup Language",
    text: "I use semantic HTML to build accessible, user-friendly web structures that serve as the backbone for responsive, well-structured applications.",
    avatar: HTML,
  },
  {
    name: "CSS",
    type: "Styling Language",
    text: "From layout control to animations, I use modern CSS techniques including Flexbox, Grid, frameworks like Tailwind to craft visually engaging UIs.",
    avatar: CSS,
  },
  {
    name: "JavaScript",
    type: "Programming Language",
    text: "I write clean, modular JavaScript to power interactivity, handle dynamic data, and implement frontend logic with ES6+ best practices.",
    avatar: JavaScript,
  },
  {
    name: "Node.js",
    type: "Runtime Environment",
    text: "Node.js enables me to write fast, non-blocking backend logic using JavaScript, making my full-stack apps efficient and unified in language.",
    avatar: NodeJS,
  },
  {
    name: "Next.js",
    type: "React Framework",
    text: "I use Next.js to build fast, SEO-friendly apps with server-side rendering, API routes, and optimized performance.",
    avatar: NextJS,
  },
  {
    name: "MongoDB",
    type: "NoSQL Database",
    text: "I use MongoDB to design flexible, document-based schemas that store and manage application data in a scalable and performant way.",
    avatar: MongoDB,
  },
];

export const Skills = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="MY SKILLS"
          discription="See what technologies I use to bring web applications to life"
          title="Technologies I Work With"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:70s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 transform hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={skill.avatar}
                          alt={skill.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold md:text-xl lg:text-xl">
                          {skill.name}
                        </div>
                        <div className="text-md text-white/40 sm:text-sm">
                          {skill.type}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {skill.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
