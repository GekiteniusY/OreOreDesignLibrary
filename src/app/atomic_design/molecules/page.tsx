import React from "react";
import { AD_FullRoundedButton } from "../../../../atomic_component/atoms/button";
import { AD_Card_HoverAnimation } from "../../../../atomic_component/molecules/card/card";

const moleculesComponents = {
  "ボタン（Button）": <AD_FullRoundedButton>TEXT</AD_FullRoundedButton>,
  "カード（Card）": <AD_Card_HoverAnimation>TEXT</AD_Card_HoverAnimation>,
};

const Molecules = () => {
  return (
    <div className='block'>
      Atoms
      {/* TODO: それぞれの項目に応じたコンポーネントを表示する */}
      {/* TODO: 画面サイズに応じてGridの列幅を制御する */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-5'>
        {Object.entries(moleculesComponents).map(
          ([atomName, sampleComponent]) => {
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
          }
        )}
      </div>
    </div>
  );
};

export default Molecules;
