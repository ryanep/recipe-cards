import { cx } from "classix";
import type { ReactNode } from "react";

interface ButtonProps {
  readonly children: ReactNode;
  readonly intent?: "confirm" | "destructive" | "neutral";
  readonly onClick?: () => void;
  readonly type: "button" | "submit";
}

export const Button = ({
  children,
  intent = "confirm",
  onClick,
  type = "submit",
}: ButtonProps) => {
  return (
    <button
      className={cx(
        "block rounded-md px-4 py-2 font-semibold text-sm text-white hover:opacity-90",
        intent === "confirm" && "bg-blue-600",
        intent === "destructive" && "bg-red-600",
        intent === "neutral" && "bg-neutral-400 dark:bg-neutral-600"
      )}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
};
