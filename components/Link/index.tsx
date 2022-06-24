import React, { FC, ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  classname?: string;
}

const Link: FC<LinkProps> = ({ children, classname }) => {
  return (
    <div className="text-white text-sm cursor-pointer font-semibold">
      {children}
    </div>
  );
};

export default Link;
