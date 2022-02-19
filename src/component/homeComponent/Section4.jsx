import { Space, TextSection } from "../";

import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";

export function Section4(props) {
  return (
    <section className={`flex flex-col w-full section-${props.color}-b`}>
      <Space y={50} />
      <div className="flex">
        <Space x={109} />
        {[a1, a2, a3, a4].map((e, i) => (
          <div
            key={`${i}-section4`}
            className="flex flex-col w-full items-center "
          >
            <div className="flex">
              <img alt="basically no alt to display here." src={e} />
            </div>
            <Space y={34} />

            <TextSection
              parentProps={{
                className: "flex flex-col items-center text-center",
                style: {
                  width: "80%",
                },
              }}
              noBottomSpace
              {...props.theme}
              tagProps={{
                size: "lg",
              }}
              tag={" Vladimir Putin"}
              description={` Meals on wheels: Meals on wheels: best in the UAE best in Meals on
              wheels: best in`}
              author={"U. R. Oliver"}
            ></TextSection>
          </div>
        ))}
        <Space x={109} />
      </div>
      <Space y={50} />
    </section>
  );
}
