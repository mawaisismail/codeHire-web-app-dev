import CSS from "csstype";

export interface GbuttonProps {
  icon?: any;
  variant?: "text" | "contained" | "outlined";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "neutral";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "circle" | "square";
  onClick?: (e?: any) => void;
  disabled?: boolean;
  style?: CSS.Properties;
  className?: string;
  children?: JSX.Element | Element | string | any;
}
