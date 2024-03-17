import React from "react";
import GalleryButton from "../../../../component/atoms/button";
import { atomsList } from "../../../../const/atomic-design";

const Atoms = () => {
  return (
    <div>
      Atoms
      {/* TODO: 画面サイズに応じてGridの列幅を制御する */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-5'>
        {atomsList.map((atom, index) => {
          return (
            <div
              key={index}
              className='w-full h-40 bg-blue-500'
            >
              <div>{atom}</div>
              {/* TODO: コンポーネントを表示 */}
              <div></div>
            </div>
          );
        })}
        <div className='w-full h-40 bg-blue-500'>
          テキスト（Text）
          <br />
        </div>
        <div className='w-full h-40 bg-blue-500'>
          ボタン（Button）
          <br />
          <GalleryButton></GalleryButton>
        </div>
      </div>
    </div>
  );
};

export default Atoms;
