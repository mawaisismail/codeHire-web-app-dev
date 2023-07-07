import { CgSpinner } from "react-icons/cg";
import { classNames } from "utils";

export const GLoading = (props: {
  label?: string;
  className?: string;
  addMargin?: boolean;
}) => {
  const { label, className, addMargin = true } = props;
  return (
    <div
      className={classNames(
        "w-full h-full flex flex-col items-center justify-center",
        addMargin ? "p-4 m-6" : ""
      )}
    >
      <CgSpinner className="absolute w-8 h-8 animate-spin text-primary-500" />
      {label}
    </div>
  );
};
