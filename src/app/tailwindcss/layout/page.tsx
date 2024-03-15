import Link from "next/link";
import React from "react";

const Layout = () => {
  return (
    <div>
      <h1 className='text-5xl'>Layout</h1>
      <br />
      <div>
        <Link href={"/tailwindcss/layout/box_decoration_break"}>
          box-decoration-break: 複数行要素のレンダリングオプション
        </Link>
        <p>
          複数行（multiple
          line）のコンテンツを含んだ場合、それぞれの行を個別にあつかうか、複数行で1つとして扱うか
        </p>
      </div>
    </div>
  );
};

export default Layout;
