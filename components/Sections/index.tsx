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
        head={"Where hanging out is easy"}
        desc={
          "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
        }
        type={SectionTypes.RIGHT}
      />
      <Section
        color={SectionColor.WHITE}
        img={"images/section3.svg"}
        head={"From few to a fandom"}
        desc={
          "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
        }
        type={SectionTypes.LEFT}
      />
      <Section
        color={SectionColor.OFF_WHITE}
        img={"images/section4.svg"}
        head={"RELIABLE TECH FOR STAYING CLOSE"}
        desc={
          "Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share."
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
