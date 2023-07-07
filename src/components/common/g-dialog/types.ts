import { ReactNode } from "react";

export enum ModalTypes {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}

export interface GDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string | ReactNode;
  description?: string;
  icon?: any;
  children?: ReactNode;
  showClose?: boolean;
  className?: string;
  maxWidth?: "md" | "lg" | "xl" | "2xl" | "3xl";
  lineBreak?: boolean;
  showFullSubTitle?: boolean;
}
