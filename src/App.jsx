import "./App.scss";

import {
  BorderDivider,
  Layout,
  Section1,
  Section10,
  Section11,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Space,
} from "./component";

import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const theme = { dark };
  const color = dark ? "dark" : "light";
  const toggleDark = () => setDark(!dark);

  return (
    <Layout toggleDark={toggleDark} {...theme}>
      <Space y={40} />
      <Section1 theme={theme}></Section1>
      <BorderDivider textProps={{ color: "#EDC47F" }}>
        1 row: 5 circles with bg
      </BorderDivider>
      <Section2 theme={theme} color={color}></Section2>
      <BorderDivider textProps={{ color: "#F0C0C1" }}>
        2 rows: 1 x 3
      </BorderDivider>
      <Section3 theme={theme}></Section3>
      <BorderDivider textProps={{ color: "#74BDB1" }}>
        {" "}
        1 row: 4 with bg
      </BorderDivider>
      <Section4 theme={theme} color={color}></Section4>
      <BorderDivider textProps={{ color: "#DD6849" }}>
        1 full width article
      </BorderDivider>
      <Section5></Section5>
      <BorderDivider textProps={{ color: "#EDC47F" }}>
        1 row: 2 x 1 inverted
      </BorderDivider>
      <Section6 theme={theme}></Section6>
      <BorderDivider textProps={{ color: "#F0C0C1" }}>
        1 row: 2 stories with bg
      </BorderDivider>
      <Section7 theme={theme} color={color}></Section7>
      <BorderDivider textProps={{ color: "#74BDB1" }}>
        1 row: 2 stories with bg
      </BorderDivider>
      <Section8 theme={theme} color={color}></Section8>
      <BorderDivider textProps={{ color: "#DD6849" }}>
        1 row: 2 stories with bg
      </BorderDivider>
      <Section9 theme={theme}></Section9>
      <BorderDivider textProps={{ color: "#F0C0C1" }}>
        1 row: 2 stories with bg
      </BorderDivider>
      <Section10 theme={theme}></Section10>
      <Section11 color={color}></Section11>
    </Layout>
  );
}

export default App;
