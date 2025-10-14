import React from "react";
import {
  FcComboChart,
  FcFinePrint,
  FcReading,
  FcTodoList,
} from "react-icons/fc";
import { motion } from "motion/react";

const AboutSection = () => {
  const featDetails = [
    {
      icon: FcComboChart,
      title: "Analytics",
      details:
        "Visualize your progress and see where your job hunt performs best.",
    },
    {
      icon: FcFinePrint,
      title: "Tracker",
      details:
        "Track every job application from “Applied” to “Hired” in one place.",
    },
    {
      icon: FcReading,
      title: "Resume Builder",
      details:
        "Create and customize professional resumes — ready to send anytime.",
    },
    {
      icon: FcTodoList,
      title: "Notes",
      details:
        "Add quick notes or set follow-ups so you never miss deadlines or interviews.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 gap-4 min-h-[65vh] w-full"
    >
      {featDetails.map((t) => (
        <div className="grid-container">
          <h1 className="text-3xl">
            <t.icon size={55} />
          </h1>
          <h1 className="text-lg font-semibold">{t.title}</h1>
          <p className="text-center">{t.details}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default AboutSection;
