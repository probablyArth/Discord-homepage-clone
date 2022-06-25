import React from "react";
import Button, { ButtonColor, ButtonSize } from "../Button";
import { Download } from "../Icons";

const Hero = () => {
  return (
    <div className="pt-[4.3rem] pb-36  flex flex-col justify-center items-center hero">
      <h1 className="font-extrabold text-white text-[5rem] scale-y-75 leading-5 tracking-[-4px] word-spacing-2 pt-24">
        IMAGINE A PLACE ...
      </h1>
      <div className="text-center text-[19px] text-white font-dm-sans p-12">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community.
        <br /> Where just you and a handful of friends can spend time together.
        A place that makes it easy
        <br /> to talk every day and hang out more often.
      </div>
      <div className="flex">
        <Button size={ButtonSize.BIG} color={ButtonColor.WHITE}>
          <Download />
          <span className="pl-2">Download for Windows</span>
        </Button>
        <Button size={ButtonSize.BIG} color={ButtonColor.BLACK}>
          <span className="pl-2">Open Discord in your browser</span>
        </Button>
      </div>
      <img
        src={"/images/heroLeft.svg"}
        width="689"
        height={"352"}
        className={"absolute left-[50%] ml-[-1030px] top-[274px]"}
        alt={"chill fish"}
      />
      <img
        src={"/images/heroRight.svg"}
        width="615"
        height={"360"}
        className={"absolute right-[50%] mr-[-1030px] top-[266px]"}
        alt={"chill fish"}
      />
    </div>
  );
};

export default Hero;
