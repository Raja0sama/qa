import { Space, TextSection } from "../";

import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import img4 from "../../assets/img-4.png";

export function Section3(props) {
  return (
    <section>
      <div className="flex">
        <div>
          <img alt="basically no alt to display here." src={img4} />
        </div>
        <div>
          <Space x={40} />
        </div>
        <div className="w-full flex  items-center">
          <TextSection
            {...props.theme}
            tagProps={{
              size: "lg",
            }}
            tag={"Travel"}
            title={
              "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all"
            }
            description={`Exhin imlave asfear asfasas afsfeaarsa asfasfasf
asfasfa ten cultable doice inverum`}
            author={"Cvita Doleschall"}
          ></TextSection>
          <Space x={"20%"} />
        </div>
      </div>
      <Space y={30} />
      <div className="w-full flex">
        {[c1, c2, c3].map((e, i) => (
          <div key={`${i}-section3`} className="flex">
            <img
              alt="basically no alt to display here."
              style={{ width: 172, height: 122 }}
              src={e}
            />
            <Space x={20} />
            <div className="flex flex-col justify-center">
              <Space y={3} />
              <TextSection
                parentProps={{
                  className: "flex flex-col",
                }}
                noBottomSpace
                {...props.theme}
                tagProps={{
                  size: "lg",
                }}
                tag={"Travel"}
                description={` Meals on wheels best food trucks in the UAE`}
                author={"U. R. Oliver"}
              ></TextSection>
            </div>
          </div>
        ))}
      </div>
      <Space y={30} />
    </section>
  );
}
