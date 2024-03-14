import Link from "next/link";

const BoxDecorationBreak = () => {
  return (
    <div className='block'>
      <div>
        <Link href={"/tailwindcss/layout"}>Layout</Link>
      </div>
      <div>
        <Link href={"/tailwindcss/effects"}>Effects</Link>
      </div>
      <div>
        <Link href={"/tailwindcss/animation"}>Animation</Link>
      </div>
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

export default BoxDecorationBreak;
