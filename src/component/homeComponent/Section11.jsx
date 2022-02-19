import { Space, Text } from "../";

export function Section11(props) {
  return (
    <section>
      <Space y={40} />
      <div className="header-border" />
      <Space y={40} />
      <section className="w-full flex">
        <div className="w-full">
          <Text bold textTransform={"uppercase"} type="rg">
            News
          </Text>
          <Space y={7} />
          {["Featured News", "Latest News"].map((e) => (
            <div
              key={`${e}`}
              style={{
                padding: "4px 0",
              }}
            >
              <Text type="rg">{e}</Text>
            </div>
          ))}
        </div>
        <div className="w-full">
          <Text bold textTransform={"uppercase"} type="rg">
            Life
          </Text>
          <Space y={7} />
          {[
            "Latest News",
            "Fashion",
            "Dining",
            "Recipes",
            "Art & Culture",
            "Travel",
            "Motoring",
          ].map((e) => (
            <div
              key={`${e}`}
              style={{
                padding: "4px 0",
              }}
            >
              <Text type="rg">{e}</Text>
            </div>
          ))}
        </div>
        <div className="w-full">
          <Text bold textTransform={"uppercase"} type="rg">
            business
          </Text>
          <Space y={7} />
          {[
            "Open House",
            "What does that even mean?",
            "Homegrown",
            "How do I...",
            "Bag off",
            "Where to spend it",
          ].map((e) => (
            <div
              key={`${e}`}
              style={{
                padding: "4px 0",
              }}
            >
              <Text type="rg">{e}</Text>
            </div>
          ))}
        </div>
        <div className="w-full"></div>
        <div className="w-full">
          <div>
            <Text bold textTransform={"uppercase"} type="rg">
              Subscribe
            </Text>
            <Space y={20} />
            <Text type="rg">
              Get fresh updates about the fashion, beauty, trends
            </Text>
            <Space y={20} />
            <div
              className={`flex justify-center items-center section-${props.color}-b`}
            >
              <div
                className="w-full"
                style={{
                  padding: 15,
                }}
              >
                <Text type="rg">Enter your email below</Text>
              </div>
              <div
                style={{
                  padding: 15,
                }}
              >
                <Text type="rg">Submit</Text>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Space y={40} />
      <section className="flex justify-center text-center">
        {["Magazine", "Contact", "About", "Press", "sitemap", "TS + CS"].map(
          (e) => (
            <div key={`${e}`} className={"w-full"}>
              <Text type="rg">{e}</Text>
            </div>
          )
        )}
      </section>
      <Space y={40} />
      <div className="header-border" />
      <Space y={40} />
    </section>
  );
}
