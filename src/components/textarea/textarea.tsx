interface TextareaProps {
  readonly defaultValue?: string;
  readonly id: string;
  readonly isRequired?: boolean;
  readonly name: string;
  readonly placeholder?: string;
}

export const Textarea = ({
  defaultValue,
  id,
  isRequired,
  name,
  placeholder,
}: TextareaProps) => {
  return (
    <textarea
      className="w-full rounded-md border-2 border-neutral-200 bg-white p-2 text-sm placeholder:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800"
      defaultValue={defaultValue}
      id={id}
      name={name}
      placeholder={placeholder}
      required={isRequired}
    />
  );
};
