import { useEffect, useState } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    setActiveSection(window.location.pathname);
  }, []);

  return activeSection;
}