"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Bounce from "./components/Bounce";
import Stars from "./components/stars";

console.log("Bounce is:", Bounce);



// Icon components
const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
  </svg>
);


// const PortfolioIcon = () => (
//   <svg width="22" height="21" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <rect x="3" y="3" width="18" height="18" />
//   </svg>
// );

// const ChevronLeftIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 transition-opacity duration-200 group-hover:opacity-100">
//     <path d="M12 15L6 9L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const ChevronRightIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 transition-opacity duration-200 group-hover:opacity-100">
//     <path d="M6 3L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const CursorIcon = () => (
//   <svg width="14" height="16" viewBox="0 0 122 138" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M38.5891 63.4239L70.3209 59.8634C83.09 57.3596 114.208 52.1517 105.303 26.3164C100.446 18.1128 86.6215 6.20353 70.1806 24.1947C67.2649 28.0673 61.1103 38.1874 59.817 47.6869C56.297 44.0719 49.9482 26.043 61.4792 12.6414C68.5497 4.4239 87.5869 -8.14163 107.172 7.33591C117.889 15.0765 133.037 37.159 107.896 63.5637C100.913 70.8983 82.6172 71.8017 70.6637 73.5595C50.6964 76.4957 13.9411 78.4676 14.1198 98.4519C14.2143 109.603 20.0535 129.789 44.7462 119.741C49.9947 117.605 63.8151 107 63.7473 89.5228C70.8914 111.441 60.9953 127.62 53.8855 131.695C27.3424 146.909 8.93204 126.911 3.47886 115.677C-10.5111 79.7142 21.0565 65.8571 38.5891 63.4239Z" fill="currentColor"/>
//   </svg>
// );

const CppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
  </svg>
);

const PythonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052z"/>
    <path d="M12.087 24c6.093 0 5.713-2.656 5.713-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.45s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.578 0-1.046-.47-1.046-1.052 0-.581.468-1.051 1.046-1.051.579 0 1.047.47 1.047 1.051 0 .582-.468 1.052-1.047 1.052z"/>
  </svg>
);



// Data for the portfolio

const currSchool = [
  {
    role: "computer science",
    school: "Macaualy Honors at CUNY Hunter College",
    logo: "/macaualy.png",
    alt: "Macaulay Honors College",
    href: "https://www.hunter.cuny.edu/macaulay-honors-college-at-hunter-college/",
  },
]

const currentPositions = [
  {
    role: "software engineering intern",
    company: "trance4mation games",
     logo: "/trance4mation.png",
    alt: "trance4mation",
     href: "https://www.trance4mationnation.org/",
  },

  {
    role: "ai/ml data annotator intern",
    company: "handshake",
      logo:"/handshake.png",
    alt: "handshake",
     href: "https://joinhandshake.com/",
  },

  {
    role: "ai/swe data intern",
    company: "snorkel.ai",
    logo: "/snorkel.avif",
    alt: "snorkel.ai",
    href: "https://snorkel.ai/",
  }
];

const previousPositions = [
  {
    role: "software engineering intern",
    company: "stemkasa",
     logo: "/stemkasa.jpg",
    alt: "stemkasa",
     href: "http://www.renafrique.com/LandingPage/",
  },
  {
    role: "coding instructor",
    company: "iCAMP",
     logo: "/icamp.png",
    alt: "iCAMP",
     href: "https://icamp.com/",
  },
];

const projects = [
  { name: "ai-efficient quizlet", href: "https://flashbrainai.vercel.app/", image: "/firebase.png"},
  { name: "valorant rag companion", href: "https://valo-scout.vercel.app/", image: "/val.png" },
  { name: "bronx data analysis", href: "https://anttomm.github.io/TheBronx/", icon: PythonIcon },
];

const comingSoon = [
  { name: "c++ game engine", icon: CppIcon },
];

// const writing = [
//   { title: "grpc", href: "/blogs/grpc" },
// ];

export default function Home() {

  const [schoolOpen, setSchoolOpen] = useState(false);
  return (
    <>
    <Bounce src="/msftlogo.png" size={120} speed={2.2} />
    <Stars />

    <img
  src="/lofiboy.webp"
  alt="lofiboy"
  className="
    hidden md:block
    fixed right-0 top-1/2 -translate-y-1/2
    w-[22rem] lg:w-[26rem] xl:w-[32rem] 2xl:w-[38rem]
    h-auto
    z-20 pointer-events-none animate-fade-in
  "
/>


    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 relative z-10">
      <div className="max-w-lg w-full space-y-1 md:space-y-2 mx-auto">
        {/* Header */}
        <div className="mb-1 animate-fade-in">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide">
            hi, im ant
          </h1>
        </div>

        <div className="mb-3 animate-fade-in">
          <h1 className="text-l sm:text-xl md:text-2xl font-light text-white tracking-wide">
            cs major & math minor
          </h1>
        </div>

        {/* {Education Section} */}

        <div className="animate-fade-in delay-1">
          <p onClick={() => setSchoolOpen(!schoolOpen)}
          className="mb-2 cursor-pointer select-none text-stone-100 text-xs md:text-sm font-medium tracking-widest uppercase">
            school
            <span
            className={`inline-flex w-6 h-3 items-center justify-center text-stone-400 transition-transform duration-200 ${
              schoolOpen ? "rotate-90" : ""
              }`}
              >
                ▶
                </span>
                </p>
                {schoolOpen && (
                  <span className="font-mono text-stone-500 group-hover:text-stone-300 transition-colors text-[13px]">
                    <div className="animate-fade-in delay-1">
                    <p>ba in cs & math with expected grad in may 2027</p>
                    <p>deans list from fall '23 - fall '25</p>
                    <p>⠀</p>
                    <p> completed coursework in:</p>
                    <ul>
                      <li>object-oriented programming (c++, python)</li>
                      <li>calculus 1-2, linear algebra</li>
                      <li>automata, game engines</li>
                      <li>⠀</li>
                    </ul>
                    </div>
                  </span>
                  
                )}
          <ul className="text-xs md:text-sm text-stone-400 space-y-1">
            {currSchool.map((position, index) => (
              <li key={index}>
                <a
                href={position.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-all duration-200 hover:bg-stone-800/80 hover:translate-x-0.5"
                >
                  <span className="font-mono text-stone-500 group-hover:text-stone-300 transition-colors text-[13px]">
                    {position.role}
                  </span>
                  <Image
                  src={position.logo}
                  alt={position.alt}
                  width={16}
                  height={16}
                  className="w-5 h-3 rounded-sm"
                />
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Currently Section */}
        <div className="animate-fade-in delay-1">
          <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium tracking-widest uppercase">currently</p>
          <ul className="text-xs md:text-sm text-stone-400 space-y-1">
            {currentPositions.map((position, index) => (
              <li key={index}>
                <a
                  href={position.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-all duration-200 hover:bg-stone-800/80 hover:translate-x-0.5"
                >
                  <span className="font-mono text-stone-500 group-hover:text-stone-300 transition-colors text-[13px]">
                    {position.role}
                  </span>
                  <Image
                    src={position.logo}
                    alt={position.alt}
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded-sm"
                  />
                  <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                    {position.company}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="h-auto min-h-[80px] md:min-h-[60px]">
          <div className="mt-4 space-y-3">
            {/* Previously Section */}
            <div className="animate-fade-in delay-2">
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium tracking-widest uppercase">previously...</p>
              <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                {previousPositions.map((position, index) => (
                  <li key={index}>
                    <a
                      href={position.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-all duration-200 hover:bg-stone-800/80 hover:translate-x-0.5"
                    >
                      <span className="font-mono text-stone-500 group-hover:text-stone-300 transition-colors text-[13px]">
                        {position.role}
                      </span>
                      <Image
                        src={position.logo}
                        alt={position.alt}
                        width={16}
                        height={16}
                        className="w-4 h-4 rounded-sm"
                      />
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {position.company}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Section */}
            <div className="animate-fade-in delay-3">
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium tracking-widest uppercase">projects</p>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                  {projects.map((project, index) => (
                    <li key={index}>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-all duration-200 hover:bg-stone-800/80 hover:text-stone-100 hover:translate-x-0.5 font-mono text-stone-500 group-hover:text-stone-300 transition-colors text-[13px]"
                      >
                        {project.icon && <project.icon />}
                        {project.image && (
                          <Image
                            src={project.image}
                            alt=""
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5"
                          />
                        )}
                        {project.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="animate-fade-in delay-3">
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium tracking-widest uppercase">coming soon</p>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                  {comingSoon.map((comingSoon, index) => (
                    <li key={index}>
                      <a
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-all duration-200 hover:bg-stone-800/80 hover:text-stone-100 hover:translate-x-0.5 font-mono text-stone-500 group-hover:text-stone-300 transition-colors text-[13px]"
                      >
                        {comingSoon.icon && <comingSoon.icon />}
                        {comingSoon.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Writing Section */}
            {/* <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">writing</p>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                  {writing.map((post, index) => (
                    <li key={index}>
                      <a
                        href={post.href}
                        className="block -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80 hover:text-stone-100"
                      >
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex items-center gap-3 text-xs text-stone-400 max-w-lg w-full animate-fade-in delay-5">
          {/* Social Links */}

          
          
          <div className="flex items-center gap-1.5">
            <a
              href="mailto:atommaso05@gmail.com"
              className="group flex h-8 w-8 justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-tommaso-041483310/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-8 w-8 justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/AntTomm"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-8 w-8 justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>

        </div>

        {/* Inspiration Credit */}
        <p className="text-[10px] text-stone-600 text-center mt-6 animate-fade-in delay-5">
          inspired by{" "}
          <a
            href="https://nicholaschen.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-400 transition-colors"
          >
            nicholas chen
          </a>
        </p>

        {/* Latest Update */}
        <p className="text-[10px] text-stone-600 text-center mt-6 animate-fade-in delay-5">
          latest update{" "}
          <a>2/2/26</a>
        </p>
      </div>
    </main>
    </>
  );
}
