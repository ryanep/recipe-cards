import type { ReactNode } from "react";

interface ButtonProps {
  readonly children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="rounded-md bg-blue-600 px-4 font-bold text-white"
      type="submit"
    >
      {children}
    </button>
  );
};
