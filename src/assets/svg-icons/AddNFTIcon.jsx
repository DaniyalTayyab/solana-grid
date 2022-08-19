import React from "react";

export default function AddNFTIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // width='197'
      // height='197'
      width="125"
      height="125"
      viewBox="0 0 197 197"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.067"
          x2="0.928"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#d3b651" />
          <stop offset="0.554" stopColor="#f3df8e" />
          <stop offset="1" stopColor="#c77131" />
        </linearGradient>
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
          <feFlood floodColor="#f0d87b" floodOpacity="0.102" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Button_" dataname="Button " transform="translate(-1092 11)">
        <g transform="matrix(1, 0, 0, 1, 1092, -11)" filter="url(#Bg)">
          <rect
            id="Bg-2"
            dataname="Bg"
            width="95"
            height="95"
            rx="47.5"
            transform="translate(51 38)"
            fill="url(#linear-gradient)"
          />
        </g>
        <text
          id="Label"
          transform="translate(1178 49)"
          fill="#303030"
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
