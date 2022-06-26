import React, { FC } from "react";
import Button, { ButtonColor, ButtonSize } from "../Button";
import { Download } from "../Icons";
import Section, { SectionColor, SectionTypes } from "../Section";

const Sections: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Section
        color={SectionColor.WHITE}
        img={"images/section1.svg"}
        head={"Create an invite-only place where you belong"}
        desc={
          "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        }
        type={SectionTypes.LEFT}
      />
      <Section
        color={SectionColor.OFF_WHITE}
        img={"images/section2.svg"}
        head={"Create an invite-only place where you belong"}
        desc={
          "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        }
        type={SectionTypes.RIGHT}
      />
      <Section
        color={SectionColor.WHITE}
        img={"images/section3.svg"}
        head={"Create an invite-only place where you belong"}
        desc={
          "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        }
        type={SectionTypes.LEFT}
      />
      <Section
        color={SectionColor.OFF_WHITE}
        img={"images/section4.svg"}
        head={"Create an invite-only place where you belong"}
        desc={
          "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        }
        type={SectionTypes.CENTER}
      />
      <div className="bg-offWhite w-full flex flex-col justify-center items-center py-28">
        <h1 className="text-notQuiteBlack text-3xl font-bold py-10 px-12 stars">
          Ready to start your journey?
        </h1>
        <Button size={ButtonSize.BIG} color={ButtonColor.BLUE}>
          <Download />
          <span className="pl-2">Download For Windows</span>
        </Button>
      </div>
    </div>
  );
};

export default Sections;
