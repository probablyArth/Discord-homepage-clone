import { FC } from "react";
import Logo from "../Logo";
import { LogoTypes } from "../Logo";
import HorizontalNavBar from "./HorizontalNavBar";

const NavBar: FC = () => {
  return (
    <div className="bg-brand flex justify-center p-8">
      <HorizontalNavBar />
    </div>
  );
};

export default NavBar;
