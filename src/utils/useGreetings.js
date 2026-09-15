import { useState, useEffect } from "react";

function getGreetingByHour() {
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

export function useGreeting() {
  const [greeting, setGreeting] = useState(getGreetingByHour());

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreetingByHour());
    }, 1000); // check every 1 second

    return () => clearInterval(interval);
  }, []);

  return greeting;
}
