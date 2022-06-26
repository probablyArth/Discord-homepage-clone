import React, { FC, ReactNode } from "react";

interface FooterColumnProps {
  children: ReactNode;
  title: string;
  rows: string;
}

const FooterColumn: FC<FooterColumnProps> = ({ children, title, rows }) => {
  return (
    <div className={`grid grid-rows-${rows} gap-y-3`}>
      <h1 className="text-brand">{title}</h1>
      {children}
    </div>
  );
};

export default FooterColumn;
