"use client";

import { useRouter } from "next/navigation";
import { Button } from "../button";
import type { ReactNode } from "react";

interface ModalProps {
  readonly actionButton: ReactNode;
  readonly children: ReactNode;
  readonly title: string;
}

export const Modal = ({ actionButton, children, title }: ModalProps) => {
  const router = useRouter();

  const handleCloseButtonClick = () => {
    router.back();
  };

  return (
    <dialog
      className="fixed left-1/2 top-1/2 m-0 flex w-96 -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md border border-neutral-400 bg-white/95 text-neutral-900 shadow-lg backdrop-blur-sm dark:border-neutral-800 dark:bg-black/90 dark:text-neutral-50"
      open
    >
      <header className="flex justify-between gap-4 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
        <h2 className="text-lg font-semibold">{title}</h2>

        <button onClick={handleCloseButtonClick} type="button">
          <svg
            fill="currentColor"
            height="20"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
          </svg>
        </button>
      </header>

      <div className="px-4 text-neutral-500 dark:text-neutral-300">
        {children}
      </div>

      <div className="flex justify-between gap-4 px-4 pb-4">
        <Button intent="neutral" onClick={handleCloseButtonClick} type="button">
          Cancel
        </Button>

        {actionButton}
      </div>
    </dialog>
  );
};
