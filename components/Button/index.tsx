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
      ? "bg-white text-black"
      : "bg-notQuiteBlack text-white";

  const sizeClass = size === ButtonSize.BIG ? "text-lg" : "text-sm";

  return (
    <div className={`rounded-xl p-2 ${colorClass} ${sizeClass} ${classname}`}>
      {children}
    </div>
  );
};

export default Button;
