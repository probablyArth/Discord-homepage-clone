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
    direction = "flex-row-reverse";
  } else if (type === SectionTypes.CENTER) {
    direction = "flex-col flex-col-reverse py-0";
    text = "font-black text-[3rem] scale-y-75 tracking-tighter word-spacing-1 ";
  }

  const bgColor = color === SectionColor.OFF_WHITE ? "bg-offWhite" : "bg-white";

  return (
    <section
      className={`scroll flex px-72 justify-center items-center ${direction} ${bgColor}`}
    >
      <img src={img} />
      <div
        className={`flex flex-col ${
          type === SectionTypes.CENTER
            ? "pt-32 pb-0 px-32 text-center w-full max-w-4/5"
            : "p-32"
        }`}
      >
        <h1 className={`text-notQuiteBlack font-bold text-5xl ${text}`}>
          {head}
        </h1>
        <p className="text-notQuiteBlack text-lg py-14">{desc}</p>
      </div>
    </section>
  );
};

export default Section;
