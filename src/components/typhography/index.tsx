import "./Typography.scss";
import { TypographyProps } from "./typograhyType.ts";

export const Typography = ({
  variant = "p",
  children,
  style = {},
  className,
}: TypographyProps) => {
  const Tag = variant;
  const baseClass = `typography-${variant} ${className}`;

  return (
    <Tag className={`${baseClass}`} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;
