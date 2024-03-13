import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  active?: boolean;
  className?: string;
  href: string;
  children?: React.ReactNode;
  isTarget?: boolean;
};

const NavLink = ({ active, className, href, children, isTarget }: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        "font-semibold text-sm md:text-base hover:text-primary",
        active && "text-primary",
        className
      )}
      target={isTarget === true ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
