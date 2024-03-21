import clsx from "clsx";
import React from "react";

type Props = {
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ active, className, children, onClick }: Props) => {
  return (
    <button
      className={clsx(
        "font-semibold text-sm md:text-base hover:text-primary",
        active && "text-primary",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavLink;
