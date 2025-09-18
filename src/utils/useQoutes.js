// utils/useMotivationalQuotes.js
import { useState, useEffect } from "react";

const quotes = [
  "Your first job doesn’t define your whole career. It’s just the start.",
  "Every expert was once a beginner—keep learning.",
  "Rejection is redirection toward something better.",
  "Consistency beats intensity. Show up every day.",
  "You bring fresh ideas to the table—don’t underestimate that.",
  "Skills can be learned; attitude and persistence win in the long run.",
  "Don’t compare your Chapter 1 to someone else’s Chapter 20.",
  "Small progress each day leads to big achievements.",
  "Your first role is a stepping stone, not the final destination.",
  "Believe in yourself—companies hire potential, not perfection.",
];

export function useMotivationalQuotes(interval = 180000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return quotes[currentIndex];
}
