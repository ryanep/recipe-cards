import type { StarProps } from './types';

export const Star = ({ fill }: StarProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 512 512"
      fill="#333333"
    >
      <linearGradient y2="0%" x2="100%" y1="0%" x1="0%" id="gradient">
        <stop stopColor="#d2c300" offset={`${fill}%`} />
        <stop stopColor="#333333" offset={`${fill}%`} />
      </linearGradient>
      <path
        d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"
        fill="url('#gradient')"
      />
    </svg>
  );
};
