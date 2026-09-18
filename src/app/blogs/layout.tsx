import React from "react";
interface LayoutProps {
  children: React.ReactNode;
}

const PsotLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div>fixed layout </div>
      <div>{children}</div>
    </div>
  );
};

export default PsotLayout;
