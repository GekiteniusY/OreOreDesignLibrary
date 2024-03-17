import React from "react";
import GalleryButton from "../../../../component/atoms/button";

const Atoms = () => {
  return (
    <div>
      Atoms
      <div className='grid grid-cols-3 gap-12 mt-5'>
        <div className='w-auto h-auto bg-blue-500'>
          ボタン（Button）
          <br />
          <GalleryButton></GalleryButton>
        </div>
        <div className='w-10 h-10 bg-blue-500'>B</div>
        <div className='w-10 h-10 bg-blue-500'>C</div>
        <div className='w-10 h-10 bg-blue-500'>D</div>
        <div className='w-10 h-10 bg-blue-500'>E</div>
        <div className='w-10 h-10 bg-blue-500'>F</div>
      </div>
    </div>
  );
};

export default Atoms;
