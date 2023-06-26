import { type ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="mx-auto h-screen max-w-6xl overflow-scroll">
        {children}
      </main>
    </>
  );
};
