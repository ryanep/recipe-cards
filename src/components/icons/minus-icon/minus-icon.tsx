interface MinusIconProps {
  readonly size?: number;
}

export const MinusIcon = ({ size = 20 }: MinusIconProps) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      version="1.1"
      viewBox="0 0 640 640"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 320c0 17.696-1.536 32-19.232 32h-345.536c-17.664 0-19.232-14.304-19.232-32s1.568-32 19.232-32h345.568c17.664 0 19.2 14.304 19.2 32z" />
    </svg>
  );
};
