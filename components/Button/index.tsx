import { FC, ReactNode } from "react";

export enum ButtonSize {
  BIG,
  SMALL,
}

export enum ButtonColor {
  WHITE,
  BLACK,
}

interface ButtonProps {
  size: ButtonSize;
  color: ButtonColor;
  classname?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ color, size, classname, children }) => {
  const colorClass =
    color === ButtonColor.WHITE
      ? "bg-white text-black hover:text-lightBrand"
      : "bg-notQuiteBlack text-white hover:bg-lightGrey";

  const sizeClass =
    size === ButtonSize.BIG
      ? "text-lg px-8 py-4 font-medium"
      : "text-xs px-5 scale-y-110 py-2";

  return (
    <div
      className={`flex items-center hover:shadow-2xl transition-all cursor-pointer rounded-full font-dm-sans mx-3 ${colorClass} ${sizeClass} ${classname}`}
    >
      {children}
    </div>
  );
};

export default Button;
