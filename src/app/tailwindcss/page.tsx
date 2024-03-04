import Link from "next/link";

const BoxDecorationBreak = () => {
  return (
    <div>
      <Link href={"/tailwindcss/layout/box_decoration_break"}>
        box-decoration-break: 複数行要素のレンダリングオプション
      </Link>
      <p>
        複数行（multiple
        line）のコンテンツを含んだ場合、それぞれの行を個別にあつかうか、複数行で1つとして扱うか
      </p>
    </div>
  );
};

export default BoxDecorationBreak;
