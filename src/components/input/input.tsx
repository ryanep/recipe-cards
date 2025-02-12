import type { InputHTMLAttributes } from "react";

interface InputProps {
  readonly defaultValue?: number | string;
  readonly id: string;
  readonly isRequired?: boolean;
  readonly name: string;
  readonly placeholder?: string;
  readonly type: InputHTMLAttributes<HTMLInputElement>["type"];
}

export const Input = ({
  defaultValue,
  id,
  isRequired,
  name,
  placeholder,
  type,
}: InputProps) => {
  return (
    <input
      className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm shadow-xs placeholder:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800"
      defaultValue={defaultValue}
      id={id}
      name={name}
      placeholder={placeholder}
      required={isRequired}
      type={type}
    />
  );
};
