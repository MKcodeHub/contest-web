import { type ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </>
  );
};
