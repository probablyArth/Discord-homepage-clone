import { FC } from "react";
import { IconProps } from ".";

const DownloadIcon: FC<IconProps> = ({ classname }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`cursor-pointer ${classname}`}
    >
      <g fill="currentColor">
        <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
        <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
      </g>
    </svg>
  );
};

export default DownloadIcon;
