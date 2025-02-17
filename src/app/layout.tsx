import "#/styles/global.css";
import { cx } from "classix";
import { Header } from "#/components/header";
import { getTranslation } from "#/i18n/server";
import type { Metadata } from "next";
import type { ReactNode } from "react";

interface RootLayoutProps {
  readonly children: ReactNode;
}

export const generateMetadata = async (): Promise<Metadata> => {
  const { t } = await getTranslation(["common", "home"]);

  return {
    title: {
      default: t("common:pageTitle", { name: t("home:pageTitle") }),
      template: t("common:pageTitle", { name: "%s" }),
    },
  };
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={cx(
          "bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 antialiased min-h-dvh"
        )}
      >
        <div className="flex min-h-dvh flex-col">
          <Header />

          <div className="grow flex-col bg-neutral-50 p-5 dark:bg-neutral-900">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
