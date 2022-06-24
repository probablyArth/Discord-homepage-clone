import Image from "next/image";
import { FC } from "react";
import logo from "../../public/images/logo.png";

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
    <Image
      src={
        type === LogoTypes.BLACK
          ? "/images/black.png"
          : "/images/logo_white.png"
      }
      width={124}
      height={24}
      layout={"intrinsic"}
      className={classname}
    />
  );
};

export default Logo;
