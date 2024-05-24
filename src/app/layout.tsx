import "#/styles/global.css";
import { cx } from "classix";
import { Header } from "#/components/header";
import type { Metadata } from "next";
import type { ReactNode } from "react";

interface RootLayoutProps {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s - Recipe Cards",
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <link href="/images/favicon.png" rel="icon" />
      </head>
      <body
        className={cx(
          "bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 antialiased min-h-dvh"
        )}
      >
        <div className="flex min-h-dvh flex-col">
          <Header />

          <main className="grow bg-neutral-50 p-5 dark:bg-neutral-900">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
