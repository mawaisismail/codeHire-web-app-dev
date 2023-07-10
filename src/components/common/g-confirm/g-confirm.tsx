import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { RiInformationLine } from "react-icons/ri";
import { classNames } from "utils";
import { GButton } from "../g-button";
import { GDialog } from "../g-dialog";
import { GConfirmProps } from "./types";

export const GConfirm = (props: GConfirmProps) => {
  const [openState, setOpenState] = useState(false);

  const {
    open = openState,
    setOpen = setOpenState,
    type = "primary",
    children,
    title,
    description,
    icon: Icon = RiInformationLine,
    confirmLabel,
    onConfirm,
    loading,
    disabled,
    childrenElement,
  } = props;

  const confirm = () => {
    // setOpen(false)
    onConfirm();
  };

  const colors = {
    primary: "primary",
    success: "green",
    warning: "amber",
    danger: "red",
    purple: "purple",
  };

  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>
      <GDialog open={open} onClose={() => setOpen(false)} showClose={false}>
        <>
          <div
            className={classNames(
              "mx-auto flex items-center justify-center h-12 w-12 rounded-full",
              `bg-${colors[type]}-100`
            )}
          >
            <Icon
              className={`h-6 w-6 text-${colors[type]}-500`}
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-md leading-6 font-medium text-t-title"
            >
              {title}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-xs text-t-dark">{description}</p>
            </div>
          </div>
          {childrenElement && childrenElement}
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <GButton onClick={() => setOpen(false)} variant="text">
              Cancel
            </GButton>
            <GButton
              style={{
                background: "#ef4444",
                color: "white",
                opacity: disabled ? 0.5 : 1,
              }}
              color={"danger"}
              onClick={confirm}
              variant="colored"
              loading={loading}
              disabled={disabled || false}
            >
              &nbsp;&nbsp;{confirmLabel || "Confirm"}&nbsp;&nbsp;
            </GButton>
          </div>
        </>
      </GDialog>
    </div>
  );
};
