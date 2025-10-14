import React from "react";
import TrckrUI from "../../assets/TRCKR.png";
import JS from "../../assets/javascript-svgrepo-com.svg";
import reactlogo from "../../assets/react-svgrepo-com.svg";
import tailwind from "../../assets/tailwindcss-icon-svgrepo-com.svg";
import git from "../../assets/git-svgrepo-com.svg";
import vercel from "../../assets/vercel-svgrepo-com.svg";
import github from "../../assets/github-142-svgrepo-com.svg";
import { LuArrowRight } from "react-icons/lu";
import Marquee from "react-fast-marquee";
import AboutSection from "./AboutSection";
import { motion } from "motion/react";

const Contents = () => {
  const TechStacks = [
    { Logo: JS },
    { Logo: reactlogo },
    { Logo: tailwind },
    { Logo: git },
    { Logo: github },
    { Logo: vercel },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="py-8 flex flex-col gap-12 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="hero-section"
        >
          {/* Bagdge */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="badge-one"
          >
            Online Job Application Tracker
          </motion.h1>

          {/* Motto */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-7xl text-center font-semibold tracking-tight 
             bg-[radial-gradient(circle_at_center,_#D4D4D4,_#EDEDED,_#8C8C8C)] 
             bg-clip-text text-transparent"
          >
            Never lose track of an opportunity again.
          </motion.h1>

          {/* Buttons Hero Section */}
          <div className="flex gap-4 items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="get-started"
            >
              Get Started
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="learn-more"
            >
              Learn More <LuArrowRight size={18} />
            </motion.button>
          </div>

          {/* Trckr Dashboard Image */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            src={TrckrUI}
            alt="ui"
            className="rounded-t-xl"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-b from-[#222222] via-[#595959] to-[#7a7a7a]  text-white shadow-sm px-4 py-1 text-sm rounded-full text-center"
        >
          Developed by: <span className="font-medium">Roms Golandrina</span>
        </motion.h1>
        <div className="relative w-[50%]">
          <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent " />
          <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent " />
          <Marquee speed={50} pauseOnHover gradient={false}>
            <div className="flex gap-8 pr-8">
              {TechStacks.map((t, index) => (
                <img
                  key={index}
                  src={t.Logo}
                  alt="logo"
                  className="w-16 h-auto object-contain"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      {/* About Section */}
      <div className="flex flex-col gap-8 w-full items-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-semibold"
        >
          What are we about?
        </motion.h1>
        <div className="px-32">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-lg text-gray-500 font-medium [x-16 text-center"
          >
            We’re not about overcomplicating your job hunt. We’re for people
            chasing better opportunities — keeping every application, update,
            and next step in one clean place.
          </motion.p>
        </div>

        <AboutSection />
      </div>
    </div>
  );
};

export default Contents;
