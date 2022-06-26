import React, { FC } from "react";
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
    </div>
  );
};

export default Sections;
