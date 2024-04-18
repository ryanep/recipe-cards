import "#/styles/global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import {cx} from 'classix';
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Recipe Cards",
  title: "Recipe Cards",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.className,
          "bg-black text-neutral-100 flex flex-col antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
