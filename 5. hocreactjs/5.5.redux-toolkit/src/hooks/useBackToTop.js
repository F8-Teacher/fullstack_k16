import { useState, useEffect } from "react";

export const useBackToTop = (value) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setShowBackToTop(pos > value);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    showBackToTop,
    handleScrollTop,
  };
};
