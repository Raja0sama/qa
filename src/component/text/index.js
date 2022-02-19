import React from "react";

export default function Text({
  size,
  children,
  type,
  bold,
  textTransform,
  opacity = 1,
  contain = undefined,
  color,
  style,
  ...p
}) {
  console.log({ color });
  let props = {};
  if (type == "nr") {
    props = {
      style: {
        fontWeight: 500,
        fontSize: 20,
        width: contain,
      },
    };
  }
  if (type == "lg") {
    props = {
      style: {
        fontWeight: 500,
        fontFamily: "Playfair Display",

        fontSize: 24,
        width: contain,
      },
    };
  }
  if (type == "sxl") {
    props = {
      style: {
        fontWeight: 500,
        fontSize: 28,
        fontFamily: "Playfair Display",
        width: contain,
      },
    };
  }

  if (type == "xl") {
    props = {
      style: {
        fontWeight: 400,
        fontSize: 18,
        fontFamily: "Playfair Display",
        width: contain,
      },
    };
  }
  if (type == "md") {
    props = {
      style: {
        fontWeight: 400,
        fontSize: 12,
        width: contain,
      },
    };
  }
  if (type == "rg") {
    props = {
      style: {
        fontWeight: 500,
        fontSize: 14,
        width: contain,
      },
    };
  }
  if (type == "2xl") {
    props = {
      style: {
        fontWeight: 900,
        fontSize: 40,
        width: contain,
      },
    };
  }

  props = {
    ...props,
    ...p,
  };

  if (props.style) {
    props.style = {
      ...props.style,
      opacity,
      fontSize: size || props.style.fontSize,
      fontWeight: bold ? "700" : props.style.fontWeight,
      textTransform: textTransform || props.style.textTransform,
      color: color || "inherit",
      ...style,
    };
    // if (size) props.style.fontSize = size;
    // if (textTransform) props.style.textTransform = textTransform;
    // if (bold) props.style.fontWeight = "bold";
  }
  return <div {...props}>{children}</div>;
}
