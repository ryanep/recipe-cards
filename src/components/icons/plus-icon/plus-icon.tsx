interface PlusIcon {
  readonly size?: number;
}

export const PlusIcon = ({ size = 20 }: PlusIcon) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      version="1.1"
      viewBox="0 0 640 640"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 320c0 17.696-1.536 32-19.232 32h-140.768v140.768c0 17.664-14.304 19.232-32 19.232s-32-1.568-32-19.232v-140.768h-140.768c-17.664 0-19.232-14.304-19.232-32s1.568-32 19.232-32h140.768v-140.768c0-17.696 14.304-19.232 32-19.232s32 1.536 32 19.232v140.768h140.768c17.696 0 19.232 14.304 19.232 32z" />
    </svg>
  );
};
