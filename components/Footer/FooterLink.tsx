import React, { FC, ReactNode } from "react";

interface FooterLinkProps {
  children: ReactNode;
}

const FooterLink: FC<FooterLinkProps> = ({ children }) => {
  return (
    <h1 className="text-white hover:underline cursor-pointer">{children}</h1>
  );
};

export default FooterLink;
