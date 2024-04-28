import "#/styles/global.css";
import { cx } from "classix";
import { Header } from "#/components/header";
import type { Metadata } from "next";
import type { ReactNode } from "react";

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
      <body className={cx("bg-black text-neutral-100 antialiased min-h-dvh")}>
        <div className="flex min-h-dvh flex-col">
          <Header />

          <main className="grow bg-neutral-900 p-5">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
