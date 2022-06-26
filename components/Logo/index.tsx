import { FC } from "react";

export enum LogoTypes {
  BLACK,
  WHITE,
}

interface LogoProps {
  type: LogoTypes;
  classname?: string;
}

const Logo: FC<LogoProps> = ({ classname, type }) => {
  return (
    <img
      src={
        type === LogoTypes.BLACK
          ? "/images/black.png"
          : "/images/logo_white.png"
      }
      width={124}
      height={24}
      className={`cursor-pointer ${classname}`}
    />
  );
};

export default Logo;
