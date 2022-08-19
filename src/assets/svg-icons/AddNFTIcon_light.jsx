import React from "react";

function AddNFTIconLight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="125"
      height="125"
      viewBox="0 0 197 197"
    >
      <defs>
        <filter
          id="Bg"
          x="0"
          y="0"
          width="197"
          height="197"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="13" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="17" result="blur" />
          <feFlood floodOpacity="0.31" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Button_" data-name="Button " transform="translate(-1092 11)">
        <g transform="matrix(1, 0, 0, 1, 1092, -11)" filter="url(#Bg)">
          <rect
            id="Bg-2"
            data-name="Bg"
            width="95"
            height="95"
            rx="47.5"
            transform="translate(51 38)"
            fill="#6c26b1"
          />
        </g>
        <text
          id="Label"
          transform="translate(1178 49)"
          fill="#fff"
          fontSize="37"
          fontFamily="Poppins-SemiBold, Poppins"
          fontWeight="600"
        >
          <tspan x="0" y="39">
            +
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default AddNFTIconLight;
