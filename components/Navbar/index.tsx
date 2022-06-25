import { FC } from "react";
import HorizontalNavBar from "./HorizontalNavBar";

const NavBar: FC = () => {
  return (
    <div className="flex justify-center pt-6 px-2">
      <HorizontalNavBar />
    </div>
  );
};

export default NavBar;
