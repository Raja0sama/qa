import React from "react";

export default function Tag({ children, dark, ...props }) {
  const color = !dark ? "light" : "dark";
  console.log({ props });
  return (
    <div>
      <span className={`tag-${color}`} {...props}>
        {children}
      </span>
    </div>
  );
}
