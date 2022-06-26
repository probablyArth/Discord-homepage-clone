import React from "react";
import { USA } from "../Icons";
import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import Logo, { LogoTypes } from "../Logo";
import Button, { ButtonColor, ButtonSize } from "../Button";

const Footer = () => {
  return (
    <footer className="bg-notQuiteBlack flex flex-col items-center">
      <div className="grid grid-cols-6 w-2/3 py-16">
        <div className="col-span-2">
          <h1 className="font-extrabold text-lightBrand text-[2.5rem] scale-y-75 leading-10">
            IMAGINE A <br />
            PLACE
          </h1>
          <div className="flex items-center py-5">
            <USA /> <h1 className="text-white px-2 text-sm">English, USA</h1>
          </div>
          <div className="flex justify-between w-1/3">
            <AiOutlineTwitter className="text-white cursor-pointer" size={24} />
            <AiOutlineInstagram
              className="text-white cursor-pointer"
              size={24}
            />
            <AiFillFacebook className="text-white cursor-pointer" size={24} />
            <AiFillYoutube className="text-white cursor-pointer" size={24} />
          </div>
        </div>
        <FooterColumn rows="8" title="Product">
          <FooterLink>Download</FooterLink>
          <FooterLink>Nitro</FooterLink>
          <FooterLink>Status</FooterLink>
          <h1>
            <wbr />
          </h1>
          <h1>
            <wbr />
          </h1>
          <h1>
            <wbr />
          </h1>
          <h1>
            <wbr />
          </h1>
        </FooterColumn>
        <FooterColumn rows="8" title="Company">
          <FooterLink>About</FooterLink>
          <FooterLink>Jobs</FooterLink>
          <FooterLink>Branding</FooterLink>
          <FooterLink>Newsroom</FooterLink>
          <h1>
            <wbr />
          </h1>
          <h1>
            <wbr />
          </h1>
          <h1>
            <wbr />
          </h1>
        </FooterColumn>
        <FooterColumn rows="8" title="Resources">
          <FooterLink>College</FooterLink>
          <FooterLink>Support</FooterLink>
          <FooterLink>Safety</FooterLink>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Feedback</FooterLink>
          <FooterLink>Developers</FooterLink>
          <FooterLink>StreamKit</FooterLink>
        </FooterColumn>
        <FooterColumn rows="8" title="Policies">
          <FooterLink>Terms</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Cookie Settings</FooterLink>
          <FooterLink>Guidelines</FooterLink>
          <FooterLink>Acknowledgements</FooterLink>
          <FooterLink>Licenses</FooterLink>
          <FooterLink>Moderation</FooterLink>
        </FooterColumn>
      </div>
      <div className="flex justify-between w-2/3 py-16 items-center border-t-brand border-t-[1px]">
        <Logo type={LogoTypes.WHITE} />
        <Button color={ButtonColor.BLUE} size={ButtonSize.SMALL}>
          Sign up
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
