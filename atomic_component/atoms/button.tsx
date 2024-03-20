import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const AD_FullRoundedButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='bg-white text-black py-2 px-4 rounded-full border border-black'>
      {children}
    </button>
  );
};

export const AD_SomeCoolButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='mt-4 px-6 py-3 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
      {children}
    </button>
  );
};

const tempComponent = () => {
  return (
    <div className=''>
      Button
      <div>
        <p>bg-white text-black py-2 px-4 rounded-full border border-black</p>
        <button className='bg-white text-black py-2 px-4 rounded-full border border-black'>
          ボタンのテキスト
        </button>
      </div>
      <div>
        <p>
          bg-white text-black py-2 px-4 rounded-full border border-gray-300
          shadow
        </p>
        <button className='bg-white text-black py-2 px-4 rounded-full border border-gray-300 shadow'>
          Button text
        </button>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
