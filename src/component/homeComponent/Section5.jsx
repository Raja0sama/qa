import { Space, Tag, Text } from "../";

import s5 from "../../assets/s5.png";
import s5Overlay from "../../assets/s5-overlay.png";

export function Section5() {
  return (
    <section className="w-full relative">
      <img alt="basically no alt to display here." src={s5} width={"100%"} />
      <img
        alt="basically no alt to display here."
        className="absolute topLeft"
        src={s5Overlay}
        width={"100%"}
      />
      <div className="absolute topLeft bottomRight w-full h-full flex">
        <div className="h-full w-full">
          <div
            style={{
              height: "20%",
            }}
          >
            <Space y={25} />
            <Tag
              style={{
                fontSize: 14,
              }}
            >
              Long Read
            </Tag>
            <Space y={25} />
          </div>
          <div
            style={{
              height: "80%",
              justifyContent: "flex-end",
            }}
            className="w-full flex flex-col items-center text-center "
          >
            <Text className={"color-white"} type={"nr"}>
              Meals on wheels: best in the UAE
            </Text>
            <Space y={20} />
            <Text className={"color-white"} type={"lg"} contain={786}>
              Louvre Abu Dhabi marks 4th anniversary with world class exhibition
              Louvre Abu Dhabi marks 4th anniversary with world class
              exhibitions, programming for all
            </Text>
            <Space y={20} />
            <Text
              className={"color-white"}
              style={{
                fontSize: 16,
              }}
              type={"md"}
            >
              U. R. Oliver
            </Text>
            <Space y={44} />
          </div>
        </div>
      </div>
    </section>
  );
}
