import { Space, TextSection } from "../";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";

export function Section2(props) {
  return (
    <section className={`flex flex-col w-full section-${props.color}-b`}>
      <Space y={50} />
      <div className="flex">
        <Space x={109} />
        {[p1, p2, p3, p4, p5].map((e, i) => (
          <div
            key={`${i}-section2`}
            className="flex flex-col w-full items-center"
          >
            <div className="flex">
              <span className="">{i + 1}</span>
              <img alt="basically no alt to display here." src={e} />
            </div>
            <Space y={10} />
            <TextSection
              parentProps={{
                className: "flex flex-col items-center text-center",
              }}
              {...props.theme}
              tagProps={{
                size: "lg",
              }}
              tag={"Vladimir Putin"}
              description={"Meals on wheels best in the UAE"}
              author={""}
            ></TextSection>
          </div>
        ))}
        <Space x={109} />
      </div>
    </section>
  );
}
