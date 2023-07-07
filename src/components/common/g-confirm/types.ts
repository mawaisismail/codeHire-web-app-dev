import { IconType } from "react-icons/lib";

export interface GConfirmProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  type?: "primary" | "success" | "warning" | "danger" | "purple";
  icon?: IconType;
  title: string;
  description: string;
  children: JSX.Element;
  confirmLabel?: string;
  onConfirm: () => void;
  loading?: boolean;
  disabled?: boolean;
}
