import { Space, Tag, Text } from "../";

export function TextSection({
  tag,
  description,
  author,
  image,
  dark,
  tagProps,
  parentProps,
  noBottomSpace,
  descriptionProps,
  titleProps,
  title,
}) {
  const theme = { dark };
  return (
    <div {...parentProps}>
      {image && (
        <>
          <img alt="basically no alt to display here." src={image} />
          <Space y={13} />
        </>
      )}
      <Tag {...tagProps} {...theme}>
        {tag}
      </Tag>
      {title && (
        <>
          <Space y={15} />

          <Text {...titleProps} type={"sxl"} contain={"90%"}>
            {title}
          </Text>
        </>
      )}
      {description && (
        <>
          <Space y={15} />

          <Text {...descriptionProps} type={"xl"} contain={"90%"}>
            {description}
          </Text>
        </>
      )}
      {author && (
        <>
          <Space y={15} />
          <Text type={"md"}>{author}</Text>
        </>
      )}
      {!noBottomSpace && <Space y={58} />}
    </div>
  );
}
