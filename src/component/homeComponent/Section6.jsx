import { ItemContent } from "../";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";

export function Section6(props) {
  return (
    <section className="flex w-full">
      <ItemContent img={i1} theme={props.theme}></ItemContent>
      <ItemContent img={i2} inverted theme={props.theme}></ItemContent>
      <ItemContent img={i3} theme={props.theme}></ItemContent>
    </section>
  );
}
