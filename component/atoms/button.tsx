import React from "react";

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

const GalleryButton = () => {
  return (
    <>
      <button className='bg-white text-black py-2 px-4 rounded-full border border-black'>
        TEXT
      </button>
    </>
  );
};

export default GalleryButton;
