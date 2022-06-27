import Logo, { LogoTypes } from "../Logo";
import Link from "../Link";
import Button, { ButtonColor, ButtonSize } from "../Button";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "../../utils/MediaQueriesProvider";

const HorizontalNavBar = () => {
  const isBelow1024 = useMediaQuery("(min-width:1024px )");

  return (
    <div className="flex items-center max-w-7xl w-full justify-between">
      <Logo type={LogoTypes.WHITE} />
      {/* <Media greaterThanOrEqual="lg"> */}
      {isBelow1024 && (
        <div className="flex justify-between">
          <Link>Download</Link>
          <Link>Nitro</Link>
          <Link>Safety</Link>
          <Link>Support</Link>
          <Link>Blog</Link>
          <Link>Careers</Link>
        </div>
      )}
      <div className="flex items-center">
        <Button color={ButtonColor.WHITE} size={ButtonSize.SMALL}>
          Login
        </Button>
        {/* <Media lessThan="lg"> */}
        <AiOutlineMenu className="text-white" size={25} />
      </div>
    </div>
  );
};

export default HorizontalNavBar;
