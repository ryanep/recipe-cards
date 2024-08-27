interface HorizontalDotsIconProps {
  readonly size?: number;
}

export const HorizontalDotsIcon = ({ size = 20 }: HorizontalDotsIconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
};
