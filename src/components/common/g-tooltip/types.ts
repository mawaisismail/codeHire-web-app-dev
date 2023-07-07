export interface GTooltipProps {
  position?: "bottom" | "left" | "right" | "top";
  persist?: boolean;
  content?: JSX.Element | Element | string | undefined;
  className?: string;
  children: JSX.Element | Element;
  onClick?: (e: React.MouseEvent) => void;
}
