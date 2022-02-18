import React from "react";

export default function Text({ children, type, contain = undefined, ...p }) {
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
        fontWeight: 500,
        fontSize: 12,
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

  return <div {...props}>{children}</div>;
}
