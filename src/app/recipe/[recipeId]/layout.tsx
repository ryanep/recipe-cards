"use client";
import type { ReactNode } from "react";

interface LayoutProps {
  readonly children: ReactNode;
  readonly modal: ReactNode;
}

const Layout = ({ children, modal }: LayoutProps) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default Layout;
