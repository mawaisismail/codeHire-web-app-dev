import { useState } from "react";
import { usePopper } from "react-popper";

import { GTransition } from "../g-transition";
import { GTooltipProps } from "./types";

export const GTooltip = ({
  position = "bottom",
  children,
  className,
  content,
  persist = false,
  ...props
}: GTooltipProps) => {
  const [show, setShow] = useState(false);

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes, state } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: position,
      modifiers: [{ name: "arrow", options: { element: arrowElement } }],
    }
  );

  if (!content) return <>{children}</>;

  return (
    <div className="group inline-block" {...props}>
      <div
        ref={setReferenceElement}
        className="cursor-pointer"
        onMouseEnter={() => setShow(true)}
        onPointerEnter={() => setShow(true)}
        onClick={() => setShow(true)}
        onMouseLeave={() => !persist && setShow(false)}
        onPointerLeave={() => !persist && setShow(false)}
      >
        {children}
      </div>

      <div
        ref={setPopperElement}
        className={`${className} absolute z-20`}
        style={styles.popper}
        {...attributes.popper}
        onMouseLeave={() => persist && setShow(false)}
        onPointerLeave={() => persist && setShow(false)}
      >
        <GTransition show={show}>
          <div
            className="bg-white text-t-dark shadow-lg px-4 py-2 rounded-lg border text-sm max-w-lg whitespace-normal"
            onClick={() => !persist && setShow(false)}
          >
            {content}
          </div>
          <div ref={setArrowElement} style={styles.arrow} />
        </GTransition>
      </div>
    </div>
  );
};
