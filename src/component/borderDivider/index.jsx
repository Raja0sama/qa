import { Space, Text } from "..";

export function BorderDivider({ children, textProps }) {
  console.log({ textProps });
  return (
    <div>
      <Space y={50} />
      <div className="header-border" />
      <Space y={9} />
      <Text
        className={"text-center text-uppercase"}
        {...textProps}
        type={"2xl"}
      >
        {children}
      </Text>
      <Space y={9} />
      <div className="header-border" />
      <Space y={50} />
    </div>
  );
}
