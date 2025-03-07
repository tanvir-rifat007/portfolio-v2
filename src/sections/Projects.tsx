import JournalPng from "@/assets/images/journal.png";
import DatingPng from "@/assets/images/dating.png";
import MoodyPlayerPng from "@/assets/images/moodyPlayer.png";
import Soroborno from "@/assets/images/sororborno.png";
import Syshealth from "@/assets/images/syshealth.png";
import CodeClips from "@/assets/images/codeclips.png";
import Image from "next/image";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    title: "Journal Mood AI",
    description:
      "Journal Mood AI is an AI-powered journaling app built with Next.js, Clerk, and Docker. It helps users track their mood, analyze sentiments, and get personalized insights through AI-generated responses, music recommendations, visualizations, and image generation.",
    results: [{ title: "Nextjs" }, { title: "Clerk" }, { title: "AI" }],
    link: "https://journal-mood-ai-nextjs-cm9q.vercel.app/",
    image: JournalPng,
    live: true,
  },
  {
    title: "Nudity Checker Fullstack Dating App",
    description:
      "Built a full-featured dating application with real-time matching and automated nudity detection. Implemented using Next.js and containerize with Docker.",

    results: [
      { title: "Nextjs" },
      { title: "Machine Learning" },
      { title: "Tensorflow.js" },
    ],
    link: "https://fullstack-dating-app-nextjs.vercel.app",
    image: DatingPng,
    live: true,
  },
  {
    title: "MoodyPlayer AI Music Player",
    description:
      "Developed a mood-based music player using TensorFlow.js to detect emotions and suggest songs, with a JavaScript and CSS interface and Service Worker for offline capability",

    results: [
      { title: "Live Tranining Model" },
      { title: "Tensorflow.js" },
      { title: "HTML,CSS" },
    ],
    link: "https://moodyplayer.netlify.app/",
    image: MoodyPlayerPng,
    live: true,
  },

  {
    title: "Soroborno Likhi",
    description:
      "Developed a machine learning model to detect soroborno and print it to the canvas using TensorFlow.js.",

    results: [
      { title: "Live Tranining Model" },
      { title: "Tensorflow.js" },
      { title: "HTML,CSS" },
    ],
    link: "https://tanvir-rifat007.github.io/soroborno-likhi",
    image: Soroborno,
    live: true,
  },

  {
    title: "CodeClips PWA",
    description:
      "Developed a Go-based code snippet management tool with a Progressive Web App (PWA) interface. Used Go for backend API, HTML templates for UI and Service Worker for offline capability.",

    results: [{ title: "Golang" }, { title: "PWA" }, { title: "SW" }],
    link: "https://codeclips-go-app-vo5b.onrender.com",
    image: CodeClips,
    live: true,
  },

  {
    title: "Syshealth Checker for Macbook",
    description:
      "Created a systemhealth checker for Macbook using Golang. It checks the system health and provides a notification to the user.",

    results: [{ title: "Golang" }, { title: "Os" }, { title: "Notification" }],
    link: "https://tanvir-rifat007.github.io/soroborno-likhi",
    image: Syshealth,
    live: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real World Results
          </p>
        </div>

        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>

        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Here are a few projects I've worked on recently. Click on the links to
          see the projects in action.
        </p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, i) => {
            return (
              <div
                key={project.title}
                className="bg-gray-800 dark:bg-[#242424] rounded-3xl relative after:content-[''] after:absolute after:inset-0  z-0 after:z-10 overflow-hidden after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10
                 lg:pt-16 lg:px-20 sticky top-0
                "
                style={{
                  top: `calc(64px + ${i * 40}px)`,
                }}
              >
                <div
                  className="inset-0 absolute -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                    <div
                      className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold  tracking-widest text-sm text-transparent bg-clip-text my-4
                      md:text-lg
                    "
                    >
                      <span>{project.description}</span>
                    </div>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 items-center text-sm text-white/50 dark:text-[#e0e0e0] md:text-base"
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    {project.live && (
                      <a href={project.link}>
                        <button className="cursor-pointer h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 bg-white text-gray-950 mt-8 dark:bg-[#333333] dark:text-[#e0e0e0] md:w-auto px-6">
                          <ArrowUpRightIcon className="size-5" />
                          <span> Visit Live Site</span>
                        </button>
                      </a>
                    )}
                  </div>

                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
