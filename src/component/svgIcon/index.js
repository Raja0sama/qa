import React from "react";

export function MenuIcon({ theme }) {
  const color = theme === "dark" ? "#fff" : "#000";
  return (
    <svg
      width={27}
      height={58}
      viewBox="0 0 27 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4.62891"
        y1="20.8574"
        x2="23.0289"
        y2="20.8574"
        stroke={color}
        strokeWidth={2}
      />
      <line x1="4.5" y1={28} x2="22.9" y2={28} stroke={color} strokeWidth={2} />
      <line
        x1="4.62891"
        y1="35.1426"
        x2="23.0289"
        y2="35.1426"
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  );
}
export function StarIcon({ theme }) {
  console.log(theme);
  const color = theme !== "dark" ? "#fff" : "#000";

  return (
    <svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.23753 0.11438L9.28981 4.34874L13.9516 4.99273L10.5588 8.25354L11.3868 12.8857L7.23753 10.6661L3.08766 12.8857L3.91629 8.25354L0.523438 4.99273L5.18526 4.34874L7.23753 0.11438Z"
        fill={color}
      />
    </svg>
  );
}

export function PlayIcon({ theme }) {
  return (
    <svg
      width="28"
      height="39"
      viewBox="0 0 28 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.2969 19.9023L0.28125 0.902344V38.9023L27.2969 19.9023Z"
        fill="white"
      />
    </svg>
  );
}

export function MoonIcon({ theme }) {
  const color = theme === "dark" ? "#fff" : "#000";

  return (
    <svg
      width={25}
      height={37}
      viewBox="0 0 25 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_956)">
        <g clipPath="url(#clip1_3_956)">
          <mask id="path-1-inside-1_3_956" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.32848 19.8718C10.7447 19.8718 15.1355 15.4811 15.1355 10.0648C15.1355 9.01336 14.97 8.00056 14.6637 7.05103C18.147 8.55589 20.5847 12.0223 20.5847 16.058C20.5847 21.4742 16.1939 25.865 10.7777 25.865C6.4129 25.865 2.7141 23.0135 1.4425 19.0718C2.63406 19.5865 3.94796 19.8718 5.32848 19.8718Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.32848 19.8718C10.7447 19.8718 15.1355 15.4811 15.1355 10.0648C15.1355 9.01336 14.97 8.00056 14.6637 7.05103C18.147 8.55589 20.5847 12.0223 20.5847 16.058C20.5847 21.4742 16.1939 25.865 10.7777 25.865C6.4129 25.865 2.7141 23.0135 1.4425 19.0718C2.63406 19.5865 3.94796 19.8718 5.32848 19.8718Z"
            fill={color}
          />
          <path
            d="M14.6637 7.05103L15.2233 5.75572L12.3648 4.52079L13.3208 7.48423L14.6637 7.05103ZM1.4425 19.0718L2.00211 17.7765L-0.856368 16.5415L0.0996351 19.505L1.4425 19.0718ZM13.7244 10.0648C13.7244 14.7018 9.96544 18.4608 5.32848 18.4608V21.2828C11.524 21.2828 16.5465 16.2603 16.5465 10.0648H13.7244ZM13.3208 7.48423C13.5825 8.29549 13.7244 9.1622 13.7244 10.0648H16.5465C16.5465 8.86452 16.3575 7.70563 16.0065 6.61782L13.3208 7.48423ZM14.1041 8.34633C17.0891 9.63593 19.1737 12.6051 19.1737 16.058H21.9957C21.9957 11.4394 19.2048 7.47585 15.2233 5.75572L14.1041 8.34633ZM19.1737 16.058C19.1737 20.6949 15.4147 24.4539 10.7777 24.4539V27.276C16.9732 27.276 21.9957 22.2535 21.9957 16.058H19.1737ZM10.7777 24.4539C7.04306 24.4539 3.87447 22.0146 2.78537 18.6386L0.0996351 19.505C1.55373 24.0124 5.78275 27.276 10.7777 27.276V24.4539ZM5.32848 18.4608C4.14398 18.4608 3.02026 18.2163 2.00211 17.7765L0.882903 20.3671C2.24785 20.9568 3.75193 21.2828 5.32848 21.2828V18.4608Z"
            fill={color}
            mask="url(#path-1-inside-1_3_956)"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3_956">
          <rect
            width={21}
            height={37}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
        <clipPath id="clip1_3_956">
          <rect
            width="20.6949"
            height="52.678"
            fill="white"
            transform="translate(0.5 -8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
