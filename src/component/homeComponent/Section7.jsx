import { Space, Tag, TextSection } from "../";

import glass from "../../assets/glassLight.png";
import glassDark from "../../assets/glass-dark.png";

export function Section7(props) {
  const G = {
    light: glass,
    dark: glassDark,
  };
  const S = {
    dark: "screen",
    light: "multiply",
  };
  console.log(S[props.color]);
  return (
    <section className={` section-${props.color}-b`}>
      <Space y={100} />
      <div className="flex">
        <Space x={"25%"} />
        <div className="w-full justify-end flex  flex-col">
          <div>
            <TextSection
              noBottomSpace
              parentProps={{
                style: {
                  width: "80%",
                },
              }}
              {...props.theme}
              tagProps={{
                size: "lg",
              }}
              tag={"Half full"}
              description={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
              }
              descriptionProps={{
                style: {
                  fontFamily: "roboto",
                },
              }}
              title={`Louvre Abu Dhabi marks 4th anniversary with world class exhibition
              Louvre Abu Dhabi marks 4th`}
            ></TextSection>
          </div>
        </div>
        <div className="w-full items-center flex flex-col">
          <Tag size="lg" {...props.theme}>
            One story, Two perspectives
          </Tag>
          <Space y={80} />
          <img
            src={G[props.color]}
            style={{
              mixBlendMode: `${S[props.color]}`,
              width: 284,
              height: 323,
            }}
          />
        </div>
        <div className="w-full justify-end flex  flex-col">
          <div>
            <TextSection
              noBottomSpace
              parentProps={{
                style: {
                  width: "77%",
                },
              }}
              {...props.theme}
              tagProps={{
                size: "lg",
                invert: true,
              }}
              tag={"Half full"}
              description={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
              }
              descriptionProps={{
                opacity: 0.2,
                style: {
                  fontFamily: "roboto",
                },
              }}
              titleProps={{
                opacity: 0.2,
              }}
              title={`Louvre Abu Dhabi marks 4th anniversary with world class exhibition
              Louvre Abu Dhabi marks 4th`}
            ></TextSection>
          </div>
        </div>
        <Space x={"25%"} />
      </div>
      <Space y={100} />
    </section>
  );
}
