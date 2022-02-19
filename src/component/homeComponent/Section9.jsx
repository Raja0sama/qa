import { Space, TextSection } from "../";

import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";
import r5 from "../../assets/r5.png";
import r6 from "../../assets/r6.png";

export function Section9(props) {
  return (
    <section className="w-full flex flex-col">
      <div
        style={{
          width: " 80%",
          margin: "auto",
        }}
        className="flex"
      >
        {[r1, r2, r3].map((e, i) => (
          <div key={`${i}-section9`} className="w-full flex ">
            <img
              style={{
                width: 116,
                height: 100,
                marginRight: 20,
              }}
              className="w-full flex"
              src={e}
            />
            <div>
              <TextSection
                parentProps={{
                  style: {
                    width: "75%",
                  },
                }}
                {...props.theme}
                tagProps={{
                  size: "lg",
                }}
                tag={"keto kebabs"}
                descriptionProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Playfair Display",
                  },
                }}
                description={" Meals on wheels best food trucks in the UAE"}
                author={"U. R. Oliver"}
              ></TextSection>
            </div>
          </div>
        ))}
      </div>
      <Space y={30} />
      <div
        style={{
          width: " 80%",
          margin: "auto",
        }}
        className="flex"
      >
        {[r4, r5, r6].map((e, i) => (
          <div key={`${i}-section9-1`} className="w-full flex ">
            <img
              style={{
                width: 116,
                height: 100,
                marginRight: 20,
              }}
              className="w-full flex"
              src={e}
            />
            <div>
              <TextSection
                parentProps={{
                  style: {
                    width: "75%",
                  },
                }}
                {...props.theme}
                tagProps={{
                  size: "lg",
                }}
                tag={"keto kebabs"}
                descriptionProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Playfair Display",
                  },
                }}
                description={" Meals on wheels best food trucks in the UAE"}
                author={"U. R. Oliver"}
              ></TextSection>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
