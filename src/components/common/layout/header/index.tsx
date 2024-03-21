"use client";

import { useEffect, useState } from "react";
import Navigation from "./nav/Navigation";

export default function Header() {
  const [changeBg, setChangeBg] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onScroll() {
    window.scrollY > 80 ? setChangeBg(true) : setChangeBg(false);
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        changeBg ? "bg-white pb-0 shadow-xl" : "bg-transparent pb-5"
      }`}
    >
      <div className="flex justify-between items-center py-4 mx-auto px-2 md:px-0 md:max-w-screen-xl">
        <Navigation changeText={changeBg} />
      </div>
    </div>
  );
}
