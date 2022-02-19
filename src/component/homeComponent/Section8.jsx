import { Space, StarIcon, Tag, TextSection } from "../";

import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";

export function Section8(props) {
  return (
    <section className={`flex flex-col w-full section-${props.color}-b`}>
      <Space y={50} />
      <div className="flex">
        <Space x={"2%"} />
        {[s1, s2, s3, s4].map((e, i) => (
          <div
            key={`${i}-section8`}
            className="flex"
            style={{
              padding: 20,
            }}
          >
            <div className="flex flex-col w-full ">
              <div className="flex">
                <div className="w-full relative">
                  <img
                    alt="basically no alt to display here."
                    className="w-full"
                    src={e}
                  />
                  <div
                    className="absolute"
                    style={{
                      bottom: 4,
                      left: 0,
                    }}
                  >
                    <Tag
                      style={{
                        display: "flex",
                      }}
                      {...props.theme}
                    >
                      <span className="flex items-center">
                        <StarIcon theme={props.color} />
                        <Space x={5} />
                        4.4
                      </span>
                    </Tag>
                  </div>
                </div>
              </div>
              <Space y={34} />

              <TextSection
                parentProps={{
                  style: {
                    width: "80%",
                  },
                }}
                {...props.theme}
                tagProps={{
                  size: "lg",
                }}
                tag={"eat"}
                description={
                  "  Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"
                }
                author={"U. R. Oliver"}
              ></TextSection>
            </div>
            {/* <Space x={30} /> */}
          </div>
        ))}
        <Space x={"2%"} />
      </div>
      <Space y={50} />
    </section>
  );
}
