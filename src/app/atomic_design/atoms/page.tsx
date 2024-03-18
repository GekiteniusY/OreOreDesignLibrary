import React from "react";
import GalleryButton from "../../../../component/atoms/button";
import { atomsList } from "../../../../const/atomic-design";

const atomsComponents = {
  "テキスト（Text）": <GalleryButton></GalleryButton>,
  "ボタン（Button）": <>Some Text Component</>,
  "リンク（Link）": <>Some Link Component</>,
  "アイコン（Icon）": <>Some Icon Component</>,
  "イメージ（Image）": <>Some Image Component</>,
  "インプットフィールド（Input field）": <>Some Input Field Component</>,
  "チェックボックス（Checkbox）": <></>,
  "ラジオボタン（Radio button）": <></>,
  "セレクトボックス（Select box）": <></>,
  "スライダー（Slider）": <></>,
  "プログレスバー（Progress bar）": <></>,
  "スピナー（Spinner）": <></>,
  "タグ（Tag）": <></>,
  "アバター（Avatar）": <></>,
  "レーティング（Rating）": <></>,
  "アラート（Alert）": <></>,
  "バッジ（Badge）": <></>,
  "ラベル（Label）": <></>,
  "リストアイテム（List item）": <></>,
  "メニューアイテム（Menu item）": <></>,
};

const Atoms = () => {
  return (
    <div className='block'>
      Atoms
      {/* TODO: それぞれの項目に応じたコンポーネントを表示する */}
      {/* TODO: 画面サイズに応じてGridの列幅を制御する */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-5'>
        {Object.entries(atomsComponents).map(([atomName, sampleComponent]) => {
          return (
            <div
              key={atomName}
              className='w-full h-40 bg-blue-400'
            >
              <p className='h-auto'>{atomName}</p>
              <div className='flex bg-red-700 w-full h-40 items-center justify-center'>
                {sampleComponent}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Atoms;
