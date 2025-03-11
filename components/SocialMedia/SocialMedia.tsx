"use client";

import React from "react";

interface SocialIcon {
  id: string;
  viewBox: string;
  path: string;
  width: number;
  height: number;
}

const socialIcons: SocialIcon[] = [
  {
    id: "facebook",
    viewBox: "0 0 18 29",
    path: "M16 2h-3.818a6.363 6.363 0 0 0-6.364 6.364v3.818H2v5.09h3.818v10.183h5.091V17.273h3.818L16 12.182h-5.09V8.364a1.273 1.273 0 0 1 1.272-1.273H16z",
    width: 15,
    height: 25,
  },
  {
    id: "instagram",
    viewBox: "0 0 26 26",
    path: "M13 17.89a4.889 4.889 0 1 0 0-9.779 4.889 4.889 0 0 0 0 9.778M2 17.889V8.11A6.11 6.11 0 0 1 8.111 2h9.778A6.11 6.11 0 0 1 24 8.111v9.778A6.11 6.11 0 0 1 17.889 24H8.11A6.11 6.11 0 0 1 2 17.889ZM19.722 6.29l.013-.014",
    width: 20,
    height: 20,
  },
  {
    id: "twitter",
    viewBox: "0 0 30 25",
    path: "M28 2.012S25.615 3.42 24.29 3.82A5.295 5.295 0 0 0 15 7.366v1.181A12.6 12.6 0 0 1 4.364 3.194S-.364 13.83 10.273 18.557A13.76 13.76 0 0 1 2 20.921c10.636 5.91 23.636 0 23.636-13.59a5.3 5.3 0 0 0-.094-.982C26.748 5.16 28 2.012 28 2.012",
    width: 25,
    height: 20,
  },
  {
    id: "youtube",
    viewBox: "0 0 31 23",
    path: "M18.2 11.586l-4.725 2.7v-5.4z M2 12.54v-1.91C2 6.72 2 4.767 3.222 3.51c1.223-1.258 3.147-1.313 6.996-1.421C12.042 2.037 13.905 2 15.5 2s3.458.037 5.282.089c3.849.108 5.773.163 6.996 1.42C29 4.767 29 6.721 29 10.63v1.911c0 3.909 0 5.863-1.222 7.12-1.223 1.258-3.147 1.313-6.996 1.422-1.824.051-3.687.088-5.282.088s-3.458-.037-5.282-.088c-3.849-.11-5.773-.164-6.996-1.421C2 18.403 2 16.449 2 12.54Z",
    width: 25,
    height: 20,
  },
];

const SocialMedia: React.FC = () => {
  return (
    <>
      {socialIcons.map((icon) => (
        <div
          key={icon.id}
          className="rounded-full flex items-center justify-center bg-[#EDFFEF] w-[50px] h-[49px] cursor-pointer hover:bg-primary group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={icon.width}
            height={icon.height}
            fill="none"
            viewBox={icon.viewBox}
            className="stroke-[#484848] group-hover:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d={icon.path}
            ></path>
          </svg>
        </div>
      ))}
    </>
  );
};

export default SocialMedia;
