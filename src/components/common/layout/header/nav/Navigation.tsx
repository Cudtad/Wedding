/* eslint-disable @next/next/no-img-element */
"use client";

import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import useMobile from "@/hooks/useMobile";

const navigation = [
  {
    title: "couple",
    // href: "/story",
    target: "couple", // Thêm target tương ứng với ID của phần cần scroll đến
  },
  {
    title: "stories",
    // href: "/gallery",
    target: "story",
  },
  {
    title: "memories",
    // href: "/event",
    target: "sweetMemory",
  },
  {
    title: "wedding",
    // href: "/attending",
    target: "ourWedding",
  },
];

type Props = {
  changeText: boolean;
};

export default function Navigation({ changeText }: Props) {
  const [isActive, setIsActive] = useState<string>("");
  const isMobile = useMobile();

  const handleNavLinkClick = (key: string) => {
    setIsActive(key);
    if (key === "couple") {
      window.scrollTo({
        top: isMobile ? 620 : 700,
        behavior: "smooth",
      });
    }
    if (key === "story") {
      window.scrollTo({
        top: isMobile ? 2250 : 1900,
        behavior: "smooth",
      });
    }
    if (key === "sweetMemory") {
      window.scrollTo({
        top: isMobile ? 5000 : 4300,
        behavior: "smooth",
      });
    }
    if (key === "ourWedding") {
      window.scrollTo({
        top: isMobile ? 6800 : 5900,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex md:justify-center items-center">
      <div className="flex items-center gap-x-6 md:gap-5">
        {navigation.map((nav, index) => {
          const active = nav.target === isActive;
          if (index === Math.ceil(navigation.length / 2)) {
            return (
              <>
                <button
                  key={index}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <img
                    src="/assets/images/logo.png"
                    alt="Logo"
                    className="w-10 h-10 md:w-20 md:h-20 rounded-full"
                  />
                </button>
                <button
                  key={nav.title}
                  className={clsx(
                    "font-semibold text-xs md:text-base hover:text-primary",
                    {
                      "text-white": !changeText && !active,
                      "text-black": changeText && !active,
                      "text-primary": active,
                    }
                  )}
                  onClick={() => handleNavLinkClick(nav.target)}
                >
                  {nav.title.toLocaleUpperCase()}
                </button>
              </>
            );
          }
          return (
            <button
              key={nav.title}
              className={clsx(
                "font-semibold text-xs md:text-base hover:text-primary",
                active && "text-primary",
                {
                  "text-white": !changeText,
                  "text-black": changeText,
                }
              )}
              onClick={() => handleNavLinkClick(nav.target)}
            >
              {nav.title.toLocaleUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
