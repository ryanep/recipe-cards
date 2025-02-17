import { cx } from "classix";
import { Loader } from "#/components/loader";
import type { ReactNode } from "react";

interface ButtonProps {
  readonly children: ReactNode;
  readonly intent?: "confirm" | "destructive" | "neutral";
  readonly isLoading?: boolean;
  readonly onClick?: () => void;
  readonly type: "button" | "submit";
}

export const Button = ({
  children,
  intent = "confirm",
  isLoading = false,
  onClick,
  type = "submit",
}: ButtonProps) => {
  return (
    <button
      className={cx(
        "block relative rounded-md px-4 py-2 font-semibold text-white hover:opacity-90 cursor-pointer",
        intent === "confirm" && "bg-blue-600",
        intent === "destructive" && "bg-red-600",
        intent === "neutral" && "bg-neutral-400 dark:bg-neutral-600"
      )}
      disabled={isLoading}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      <span className={cx(isLoading && "text-transparent")}>{children}</span>

      {isLoading ? (
        <div className="-translate-1/2 absolute left-1/2 top-1/2">
          <Loader />
        </div>
      ) : null}
    </button>
  );
};
