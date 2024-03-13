import React from "react";

interface NavigationText {
  children: React.ReactNode;
}

const NavigationText: React.FC<NavigationText> = ({ children }) => {
  return (
    <>
      <li className=''>
        <div className='hover:text-red-700 p-1'>{children}</div>
      </li>
    </>
  );
};

export default NavigationText;
