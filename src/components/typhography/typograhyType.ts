import { ReactNode } from "react";

export type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};
