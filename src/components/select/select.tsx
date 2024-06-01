interface SelectProps {
  readonly id: string;
  readonly isRequired?: boolean;
  readonly name: string;
  readonly options: {
    label: string;
    value: string;
  }[];
}

export const Select = ({ id, isRequired, name, options }: SelectProps) => {
  return (
    <select
      className="w-full rounded-md border-2 border-neutral-200 bg-white p-2 text-sm placeholder:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800"
      id={id}
      name={name}
      required={isRequired}
    >
      <option value="">Select</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
