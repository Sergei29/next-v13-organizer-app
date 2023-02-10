import React, { ComponentProps } from "react";
import clsx from "clsx";

const Card = ({
  children,
  className,
  ...restDivProps
}: ComponentProps<"div">): JSX.Element => (
  <div
    className={clsx(
      "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
      className
    )}
    {...restDivProps}
  >
    {children}
  </div>
);

export default Card;
