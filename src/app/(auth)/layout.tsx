import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full flex justify-center items-center">{children}</div>
  );
};

export default Layout;
