"use client";
import React, { useEffect, useState } from "react";

const HorizontalList = () => {
  const [
    scrollPositionCurrentPreservation,
    setScrollPositionCurrentPreservation,
  ] = useState(0);

  useEffect(() => {
    const currentPreservationElement = document.getElementById(
      "currentPreservation"
    );

    if (currentPreservationElement) {
      currentPreservationElement.scrollLeft = scrollPositionCurrentPreservation;
    }

    console.log(currentPreservationElement?.scrollLeft);

    return () => {};
  }, [scrollPositionCurrentPreservation]);

  // TODO: スクロールの上限を設定する ※現状は実行した分だけ画面サイズを超えて内部的にスクロールできてしまう
  const scrollPreservationNextButtonClick = () => {
    console.log("clicked");
    console.log(scrollPositionCurrentPreservation);
    setScrollPositionCurrentPreservation(
      scrollPositionCurrentPreservation + 100
    );
  };

  // TODO: スクロールの上限を設定する ※現状は実行した分だけ画面サイズを超えて内部的にスクロールできてしまう
  const scrollPreservationBackButtonClick = () => {
    console.log("clicked");
    console.log(scrollPositionCurrentPreservation);
    setScrollPositionCurrentPreservation(
      scrollPositionCurrentPreservation - 100
    );
  };

  return (
    <div>
      HorizontalList
      <div>
        <div className='flex'>
          {[...Array(10)].map((_, index) => (
            <>some element</>
          ))}
        </div>
      </div>
      <div>
        <div className='pt-10 bg-blue-400'>
          {/* Y軸パディング5　X軸パディング10　右マージン20 */}
          <h1 className='flex py-5 px-10 mr-20 font-bold text-4xl text-gray-800 bg-yellow-300'>
            直近の予約
          </h1>
          {/* X軸下にマージン10：Shadowのため　 */}
          <button onClick={scrollPreservationNextButtonClick}>
            Next Button
          </button>
          <p>----</p>
          <button onClick={scrollPreservationBackButtonClick}>
            Back Button
          </button>
          <div
            id='currentPreservation'
            className='flex pb-10 overflow-x-scroll hidden-scrollbar bg-orange-300'
          >
            <div className='flex flex-nowrap ml-10 space-x-3 bg-orange-500'>
              {/* TODO: 直近の予約情報を取得して表示する処理 */}
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className='inline-block w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-200 hover:shadow-xl transition-shadow duration-300 ease-in-out'
                >
                  <p>TEXT</p>
                  <p>TEXT</p>
                  <p>TEXT</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HorizontalList;
