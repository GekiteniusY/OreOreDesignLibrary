import Link from "next/link";
import React from "react";

const BoxDecorationBreak = () => {
  return (
    <>
      <p>
        &apos;Hello&apos;、&apos;World&apos;が個別のブロックであるかのようにレンダリングされている
      </p>
      <span className='box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...'>
        Hello
        <br />
        World
      </span>
      <div>
        &apos;Hello&apos;、&apos;World&apos;が連続したフラグメントとしてレンダリングされている
      </div>
      <span className='box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...'>
        Hello
        <br />
        World
      </span>
      <br />
      <p>ホバー時のみbox-decoration-sliceといった使い方もできる</p>
      <span className='box-decoration-clone hover:box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...'>
        Normal: box-decoration-clone
        <br />
        When Hover: box-decoration-slice
      </span>
    </>
  );
};

export default BoxDecorationBreak;
