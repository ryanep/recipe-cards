import type { ReactNode } from "react";

interface ButtonProps {
  readonly children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="block rounded-md bg-blue-600 px-4 py-2 font-bold text-white"
      type="submit"
    >
      {children}
    </button>
  );
};
