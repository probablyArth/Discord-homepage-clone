import React, { FC, ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  classname?: string;
}

const Link: FC<LinkProps> = ({ children, classname }) => {
  return (
    <div
      className={`hover:underline text-white text-md cursor-pointer font-semibold mx-[1vw] ${classname}`}
    >
      {children}
    </div>
  );
};

export default Link;
