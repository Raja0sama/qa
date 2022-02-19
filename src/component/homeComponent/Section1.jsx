import { Space, Tag, Text, TextSection } from "../";

import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";

export function Section1(props) {
  return (
    <section className="flex ">
      <div className="w-full flex flex-col ">
        <div
          className="flex items-center flex-col text-center"
          style={{ marginRight: 41 }}
        >
          <Tag {...props.theme}>Travel</Tag>
          <Space y={15} />
          <Text type={"sxl"} contain={414}>
            Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
            programming for all
          </Text>
          <Space y={25} />
          <Text type={"xl"} contain={416}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            in odio vel risus dignissim interdum.
          </Text>
          <Space y={21} />
          <Text type={"md"} contain={499}>
            U. R. Oliver
          </Text>
        </div>
        <Space y={24} />
        <img alt="basically no alt to display here." src={img1} />
      </div>
      <Space x={"6.2%"} />
      <div className="w-full flex">
        <div className="w-full">
          <TextSection
            {...props.theme}
            tag={"Dine"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
            }
            author={"U. R. Oliver"}
          ></TextSection>
          <TextSection
            {...props.theme}
            tag={"Dine"}
            description={
              "Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis."
            }
            author={"U. R. Oliver"}
          ></TextSection>
          <TextSection
            {...props.theme}
            image={img2}
            tag={"Dine"}
            description={"Meals on wheels best food trucks in the UAE"}
            author={"U. R. Oliver"}
          ></TextSection>
        </div>
        <Space x={"7%"} />

        <div className="w-full">
          <div className="w-full">
            <TextSection
              {...props.theme}
              image={img3}
              tag={"Dine"}
              description={"Meals on wheels best food trucks in the UAE"}
              author={"U. R. Oliver"}
            ></TextSection>
            <TextSection
              {...props.theme}
              tag={"Dine"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
              }
              author={"U. R. Oliver"}
            ></TextSection>
            <TextSection
              {...props.theme}
              tag={"Dine"}
              description={
                "Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis."
              }
              author={"U. R. Oliver"}
            ></TextSection>
          </div>
        </div>
      </div>
    </section>
  );
}
