import { PropsWithChildren } from "react";

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full bg-gray-100">
      {/* Header */}
      <main className="pt-40 pb-20">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default LandingLayout;
