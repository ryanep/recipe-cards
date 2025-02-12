interface SelectProps {
  readonly defaultValue?: number | string;
  readonly id: string;
  readonly isRequired?: boolean;
  readonly name: string;
  readonly options: {
    label: string;
    value: string;
  }[];
}

export const Select = ({
  defaultValue,
  id,
  isRequired,
  name,
  options,
}: SelectProps) => {
  return (
    <select
      className="w-full rounded-md border border-neutral-200 bg-white p-2 text-sm shadow-xs placeholder:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800"
      defaultValue={defaultValue}
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
