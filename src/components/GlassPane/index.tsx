import React, { ComponentProps } from "react";
import clsx from "clsx";

const GlassPane = ({
  children,
  className,
  ...restDivProps
}: ComponentProps<"div">): JSX.Element => (
  <div
    className={clsx(
      "glass rounded-2xl border-solid border-2 border-gray-200",
      className
    )}
    {...restDivProps}
  >
    {children}
  </div>
);

export default GlassPane;
