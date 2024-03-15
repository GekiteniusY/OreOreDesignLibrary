import React from "react";

const Filters = () => {
  return (
    <div>
      <h1 className='text-5xl'>Filters</h1>
      <div className='w-full h-96 bg-white p-4'>
        <div className='block w-32 h-32 bg-green-400 drop-shadow-md'>
          あああ
        </div>
        {/* TODO:ホバー時にドロップシャドウしたけど、浮き出てくるように見えない→アニメーションが必要そう */}
        <div className='block mt-4 w-32 h-32 bg-green-400 hover:drop-shadow-2xl'>
          あああ
        </div>
      </div>
    </div>
  );
};

export default Filters;
