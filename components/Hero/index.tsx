import React from "react";
import { Media } from "../../utils/MediaQueriesProvider";
import Button, { ButtonColor, ButtonSize } from "../Button";
import { Download } from "../Icons";

const Hero = () => {
  return (
    <div className="px-8 lg:pt-[4.3rem] lg:pb-36  flex flex-col lg:justify-center lg:items-center hero HERO relative overflow-y-hidden overflow-x-hidden">
      <h1 className="font-black text-3xl md:text-7xl text-white lg:text-[5rem] scale-y-75 lg:tracking-[-4px] lg:word-spacing-2 pt-24">
        IMAGINE A <br />
        PLACE ...
      </h1>
      <div className="w-2/3 lg:w-full lg:text-center text-md md:text-lg text-white font-dm-sans lg:p-12 py-8">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community.
        <br /> Where just you and a handful of friends can spend time together.
        A place that makes it easy
        <br /> to talk every day and hang out more often.
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col sm:flex-row items-center md:flex-col lg:flex-row z-20">
          <Button
            size={ButtonSize.BIG}
            color={ButtonColor.WHITE}
            classname={"my-2 lg:my-0"}
          >
            <Download />
            <span className="pl-2">Download for Windows</span>
          </Button>
          <Button size={ButtonSize.BIG} color={ButtonColor.BLACK}>
            <span className="pl-2 text-center">
              Open Discord in your browser
            </span>
          </Button>
        </div>
        <Media greaterThanOrEqual="lg">
          <img
            src={"/images/heroLeft.svg"}
            width="689"
            height={"352"}
            className={"absolute left-[50%] ml-[-1030px] top-[356px] "}
            alt={"chill fish"}
          />
        </Media>
        <Media between={["xs", "sm"]}>
          <img
            src={"/images/heroLeft.svg"}
            width="689"
            height={"352"}
            className={"relative left-[50%] ml-[-1030px] top-[356px] "}
            alt={"chill fish"}
          />
        </Media>
        <img
          src={"/images/heroRight.svg"}
          width="615"
          height={"360"}
          className={
            "relative lg:absolute right-[-60px] lg:right-[50%] lg:mr-[-1030px] lg:top-[348px]"
          }
          alt={"chill fish"}
        />
      </div>
    </div>
  );
};

export default Hero;
