import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
}

export default layout