import React from "react";
import { FullRoundedButton } from "../../../../atomic_component/atoms/button";
import {
  H1Text,
  H2Text,
  H3Text,
} from "../../../../atomic_component/atoms/text";

const atomsComponents = {
  "テキスト（Text）": (
    <div>
      <H1Text>TEXT</H1Text>
      <H2Text>TEXT</H2Text>
      <H3Text>TEXT</H3Text>
    </div>
  ),
  "ボタン（Button）": <FullRoundedButton>TEXT</FullRoundedButton>,
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
              <div className='flex  w-full h-40 items-center justify-center bg-gray-300 rounded-lg p-8 shadow-lg'>
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
