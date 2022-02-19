import { Space, TextSection } from "../";

export function ItemContent(props) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center" style={{ margin: 30 }}>
        {!props?.inverted && (
          <>
            <img
              alt="basically no alt to display here."
              width={"100%"}
              src={props.img}
            />
            <Space y={26} />
          </>
        )}

        <TextSection
          parentProps={{
            className: "flex flex-col items-center text-center",
            style: {
              width: "98%",
            },
          }}
          noBottomSpace
          {...props.theme}
          tagProps={{
            size: "lg",
          }}
          tag={"OPEN HOUSE"}
          description={`Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
          programming for all`}
          author={"U. R. Oliver"}
        ></TextSection>
        {props.inverted && (
          <>
            <Space y={26} />

            <img
              alt="basically no alt to display here."
              width={"100%"}
              src={props.img}
            />
          </>
        )}
      </div>
    </div>
  );
}
