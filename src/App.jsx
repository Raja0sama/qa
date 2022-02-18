import "./App.scss";

import Layout from "./component/layout";
import Space from "./component/space";
import Tag from "./component/tag";
import Text from "./component/text";
import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";
import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";
import img1 from "./assets/img-1.png";
import img2 from "./assets/img-2.png";
import img3 from "./assets/img-3.png";
import img4 from "./assets/img-4.png";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import s5 from "./assets/s5.png";
import s5Overlay from "./assets/s5-overlay.png";

function TextSection({ tag, description, author, image, dark }) {
  const theme = { dark };
  return (
    <div>
      <img src={image} />
      <Space y={6} />
      <Tag {...theme}>{tag}</Tag>
      <Space y={20} />
      <Text type={"xl"} contain={"90%"}>
        {description}
      </Text>
      <Space y={21} />
      <Text type={"md"}>{author}</Text>
      <Space y={30} />
    </div>
  );
}

function BorderDivider({ children }) {
  return (
    <div>
      <Space y={50} />
      <div className="header-border" />
      <Space y={9} />
      <Text className={"text-center text-uppercase"} type={"2xl"}>
        {children}
      </Text>
      <Space y={9} />
      <div className="header-border" />
      <Space y={50} />
    </div>
  );
}

function ItemContent(props) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center" style={{ margin: 30 }}>
        {!props?.inverted && (
          <>
            <img width={"100%"} src={props.img} />

            <Space y={20} />
          </>
        )}
        <Tag
          {...props.theme}
          style={{
            fontSize: 14,
          }}
        >
          OPEN HOUSE
        </Tag>
        <Space y={20} />
        <Text className={"text-center"} type={"xl"}>
          Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
          programming for all
        </Text>
        <Space y={20} />
        <Text className={"text-center"} type={"md"}>
          U. R. Oliver
        </Text>
        {props.inverted && (
          <>
            <Space y={20} />

            <img width={"100%"} src={props.img} />
          </>
        )}
      </div>
    </div>
  );
}

function Section1(props) {
  return (
    <section class="flex ">
      <div className="w-full flex flex-col justify-center">
        <div className="flex items-center flex-col text-center">
          <Tag {...props.theme}>Travel</Tag>
          <Space y={20} />
          <Text type={"sxl"} contain={499}>
            Louvre Abu Dhabi marks 4th
            <br />
            anniversary with world class exhibitions, programming for all
          </Text>
          <Space y={25} />
          <Text type={"xl"} contain={499}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            in odio vel risus dignissim interdum.
          </Text>
          <Space y={21} />
          <Text type={"md"} contain={499}>
            U. R. Oliver
          </Text>
        </div>
        <Space y={24} />
        <img src={img1} />
      </div>
      <Space x={"8%"} />
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

function Section2(props) {
  return (
    <section className={`flex flex-col w-full section-${props.color}-b`}>
      <Space y={50} />
      <div className="flex">
        <Space x={109} />
        {[p1, p2, p3, p4, p5].map((e, i) => (
          <div className="flex flex-col w-full items-center">
            <div className="flex">
              <span className="">{i + 1}</span>
              <img src={e} />
            </div>
            <Space y={10} />
            <Tag
              {...props.theme}
              style={{
                fontSize: 14,
              }}
            >
              Vladimir Putin
            </Tag>
            <Space y={10} />
            <Text type={"xl"} className={"text-center"} contain={"75%"}>
              Meals on wheels best in the UAE
            </Text>
          </div>
        ))}
        <Space x={109} />
      </div>
      <Space y={50} />
    </section>
  );
}

function Section3(props) {
  return (
    <section>
      <div className="flex">
        <div>
          <img src={img4} />
        </div>
        <div>
          <Space x={40} />
        </div>
        <div className="w-full flex flex-col justify-center">
          <div>
            <Tag
              style={{
                fontSize: 14,
              }}
              {...props.theme}
            >
              Travel
            </Tag>
          </div>
          <Space y={20} />
          <Text type={"sxl"} contain={"70%"}>
            Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
            programming for all
          </Text>
          <Space y={20} />
          <Text type={"xl"} contain={"70%"}>
            Exhin imlave asfear asfasas afsfeaarsa asfasfasf asfasfa ten
            cultable doice inverum
          </Text>
          <Space y={20} />
          <Text type={"md"} contain={499}>
            U. R. Oliver
          </Text>
        </div>
      </div>
      <Space y={30} />
      <div className="w-full flex">
        {[c1, c2, c3].map((e) => (
          <div className="flex">
            <img src={e} />
            <Space x={20} />
            <div className="flex flex-col justify-center">
              <Tag {...props.theme}>Culture</Tag>
              <Space y={10} />
              <Text type={"xl"} contain={"60%"}>
                Meals on wheels best food trucks in the UAE
              </Text>
              <Space y={10} />
              <Text type={"md"}>U. R. Oliver</Text>
            </div>
          </div>
        ))}
      </div>
      <Space y={30} />
    </section>
  );
}

function Section4(props) {
  return (
    <section className={`flex flex-col w-full section-${props.color}-b`}>
      <Space y={50} />
      <div className="flex">
        <Space x={109} />
        {[a1, a2, a3, a4].map((e, i) => (
          <div className="flex flex-col w-full items-center">
            <div className="flex">
              <img src={e} />
            </div>
            <Space y={34} />
            <Tag
              {...props.theme}
              style={{
                fontSize: 14,
              }}
            >
              Vladimir Putin
            </Tag>
            <Space y={10} />
            <Text type={"xl"} className={"text-center"} contain={"75%"}>
              Meals on wheels: Meals on wheels: best in the UAE best in Meals on
              wheels: best in
            </Text>
            <Space y={20} />
            <Text type={"md"}>U. R. Oliver</Text>
          </div>
        ))}
        <Space x={109} />
      </div>
      <Space y={50} />
    </section>
  );
}

function Section5() {
  return (
    <section className="w-full relative">
      <img src={s5} width={"100%"} />
      <img className="absolute topLeft" src={s5Overlay} width={"100%"} />
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
            <Text type={"nr"}>Meals on wheels: best in the UAE</Text>
            <Space y={20} />
            <Text type={"lg"} contain={786}>
              Louvre Abu Dhabi marks 4th anniversary with world class exhibition
              Louvre Abu Dhabi marks 4th anniversary with world class
              exhibitions, programming for all
            </Text>
            <Space y={20} />
            <Text
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

function Section6(props) {
  return (
    <section className="flex w-full">
      <ItemContent img={i1} theme={props.theme}></ItemContent>
      <ItemContent img={i2} inverted theme={props.theme}></ItemContent>
      <ItemContent img={i3} theme={props.theme}></ItemContent>
    </section>
  );
}

function App() {
  const dark = false;
  const theme = { dark };
  const color = dark ? "dark" : "light";
  return (
    <Layout {...theme}>
      <Space y={40} />
      <Section1 theme={theme}></Section1>
      <BorderDivider> 1 row: 5 circles with bg</BorderDivider>
      <Section2 theme={theme} color={color}></Section2>
      <BorderDivider> 2 rows: 1 x 3</BorderDivider>
      <Section3 theme={theme}></Section3>
      <BorderDivider> 1 row: 4 with bg</BorderDivider>
      <Section4 theme={theme} color={color}></Section4>
      <BorderDivider>1 full width article</BorderDivider>
      <Section5></Section5>
      <BorderDivider>1 row: 2 x 1 inverted</BorderDivider>
      <Section6 theme={theme}></Section6>
      <BorderDivider>1 row: 2 x 1 inverted</BorderDivider>
    </Layout>
  );
}

export default App;
