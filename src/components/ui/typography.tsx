import React from "react";

type variantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption";
interface TypographyProps {
  variant: variantType;
  children: React.ReactNode;
  className: string;
}

const Typography: React.FunctionComponent<TypographyProps> = ({
  variant,
  className,
  children,
}) => {
  const { typographyClassName, component } = renderTypographyProps(variant);
  const TypographyElement = React.createElement(component, {
    className: `${className} ${typographyClassName}`,
    children,
  });
  return <>{TypographyElement};</>;
};

const renderTypographyProps = (variant: variantType) => {
  switch (variant) {
    case "h1":
      return { typographyClassName: "Display-2xl", component: "h1" };
    case "h2":
      return { typographyClassName: "Display-xl", component: "h2" };
    case "h3":
      return { typographyClassName: "Display-lg", component: "h3" };
    case "h4":
      return { typographyClassName: "Display-md", component: "h4" };
    case "h5":
      return { typographyClassName: "Display-sm", component: "h5" };
    case "h6":
      return { typographyClassName: "Display-xs", component: "h6" };
    case "subtitle1":
      return { typographyClassName: "Text-xl", component: "p" };
    case "subtitle2":
      return { typographyClassName: "Text-lg", component: "p" };
    case "body1":
      return { typographyClassName: "Text-md", component: "p" };
    case "body2":
      return { typographyClassName: "Text-sm", component: "p" };
    case "caption":
      return { typographyClassName: "Text-xs", component: "span" };
  }
};

export default Typography;
