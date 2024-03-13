/* eslint-disable @next/next/no-img-element */
"use client";

import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const navigation = [
  {
    title: "story",
    href: "/story",
  },
  {
    title: "gallery",
    href: "/gallery",
  },
  {
    title: "event",
    href: "/event",
  },
  {
    title: "attending",
    href: "/attending",
  },
];

type Props = {
  changeText: boolean;
};

export default function Navigation({ changeText }: Props) {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <div className="flex items-center gap-5">
        {navigation.map((nav, index) => {
          let localeHref = `/${nav.href}`;
          if (localeHref.endsWith("/"))
            localeHref = localeHref.slice(0, localeHref.length - 1);
          const isActive =
            nav.href === pathname || pathname.startsWith(localeHref);
          if (index === Math.ceil(navigation.length / 2)) {
            return (
              <>
                <Link key={index} href="/">
                  <img
                    src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
                    alt="Logo"
                  />
                </Link>
                <NavLink
                  key={nav.title}
                  href={localeHref}
                  active={isActive}
                  className={clsx("px-2 py-2 text-xl ", {
                    "text-white": !changeText,
                    "text-black": changeText,
                  })}
                >
                  {nav.title.toLocaleUpperCase()}
                </NavLink>
              </>
            );
          }
          return (
            <NavLink
              key={nav.title}
              href={localeHref}
              active={isActive}
              className={clsx("px-2 py-2 text-xl ", {
                "text-white": !changeText,
                "text-black": changeText,
              })}
            >
              {nav.title.toLocaleUpperCase()}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
