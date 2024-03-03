import React, { ReactElement, ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

// 4列のGridレイアウト
export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
      {children}
    </div>
  );
};
