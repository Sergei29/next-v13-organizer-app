import React, { ComponentProps } from "react";
import clsx from "clsx";

const Input = ({
  className,
  ...restInputProps
}: ComponentProps<"input">): JSX.Element => (
  <input
    className={clsx(
      "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
      className
    )}
    {...restInputProps}
  />
);

export default Input;
