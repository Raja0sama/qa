import { PlayIcon, Space, TextSection } from "../";

import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";

export function Section10(props) {
  return (
    <section className="w-full flex">
      {[v1, v2, v3].map((e, i) => {
        return (
          <div key={`${i}-section10`} className="w-full text-center">
            <div>
              <div className="relative">
                <img alt="basically no alt to display here." src={e} />
                <div className=" absolute topLeft bottomRight flex justify-center items-center">
                  <div
                    className="rounded bg-black flex justify-center items-center"
                    style={{
                      width: 100,
                      height: 100,
                      background: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <PlayIcon />
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <Space y={30} />

                <TextSection
                  parentProps={{
                    style: {
                      width: "50%",
                    },
                  }}
                  {...props.theme}
                  tagProps={{
                    size: "lg",
                  }}
                  tag={"eat"}
                  descriptionProps={{
                    style: {
                      fontSize: 16,
                      fontFamily: "Playfair Display",
                    },
                  }}
                  description={
                    "  Meals on wheels: Meals on wheels: best in the UAE best"
                  }
                  author={"U. R. Oliver"}
                ></TextSection>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
