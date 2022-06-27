import React, { FC } from "react";

export enum SectionTypes {
  RIGHT,
  LEFT,
  CENTER,
}

export enum SectionColor {
  WHITE,
  OFF_WHITE,
}

interface SectionProps {
  type: SectionTypes;
  img: string;
  head: string;
  desc: string;
  color: SectionColor;
}

const Section: FC<SectionProps> = ({ type, img, head, desc, color }) => {
  var direction = "";
  var text = "";
  if (type === SectionTypes.RIGHT) {
    direction = "md:flex-row-reverse";
  } else if (type === SectionTypes.CENTER) {
    direction = "md:flex-col md:flex-col-reverse md:py-0";
    text = "font-black text-[3rem] scale-y-75 tracking-tighter word-spacing-1 ";
  }

  const bgColor = color === SectionColor.OFF_WHITE ? "bg-offWhite" : "bg-white";

  return (
    <section
      className={`scroll py-8 md:py-0 flex md:px-72 justify-center items-center  flex-col md:flex-row ${direction} ${bgColor}`}
    >
      <img src={img} />
      <div
        className={`flex flex-col ${
          type === SectionTypes.CENTER
            ? "md:pt-32 pb-0 md:px-32 text-center w-full max-w-4/5"
            : "md:p-32 p-8"
        }`}
      >
        <h1
          className={`text-notQuiteBlack font-bold text-xl md:text-5xl ${text} py-4`}
        >
          {head}
        </h1>
        <div className="text-notQuiteBlack text-md md:text-lg md:py-14">
          {desc}
        </div>
      </div>
    </section>
  );
};

export default Section;
