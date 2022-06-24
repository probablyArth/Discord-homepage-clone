import Logo, { LogoTypes } from "../Logo";
import Link from "../Link";
import Button, { ButtonColor, ButtonSize } from "../Button";

const HorizontalNavBar = () => {
  return (
    <div className="flex items-center w-2/3 justify-center">
      <Logo type={LogoTypes.WHITE} />
      <div className="flex justify-between">
        <Link>Download</Link>
        <Link>Nitro</Link>
        <Link>Safety</Link>
        <Link>Support</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
      </div>
      <Button color={ButtonColor.WHITE} size={ButtonSize.SMALL}>
        Login
      </Button>
    </div>
  );
};

export default HorizontalNavBar;
