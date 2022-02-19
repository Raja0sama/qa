import React from "react";

export default function Tag({ children, size, dark, invert, ...props }) {
  const color = !dark ? "light" : "dark";
  const i = invert ? "-invert" : "";
  const fontSize = size === "lg" ? `14px` : "10px";
  return (
    <div>
      <span className={`tag-${color}${i}`} style={{ fontSize }} {...props}>
        {children}
      </span>
    </div>
  );
}
