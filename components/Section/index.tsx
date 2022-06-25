import React, { FC } from "react";

export enum SectionTypes {
  RIGHT,
  LEFT,
  CENTER,
}

export enum sectionColor {
  WHITE,
  OFF_WHITE,
}

interface sectionProps {
  type: SectionTypes;
  img: string;
  head: string;
  desc: string;
  color: sectionColor;
}

const Section: FC<sectionProps> = () => {
  return <div>Section</div>;
};

export default Section;
