# Complonent Directory

https://zenn.dev/saki/articles/640f45aa21a19a
上記の記事に則って、Atomic Designにおけるpagesはドメイン情報を含むページで再利用しない前提のためcomponent/配下には作成しない。

## Atomic Designの捉え方
TODO: Readmeの内容といっしょに整理する
TODO: Zennの記事のリンクを貼る

## 命名規則
Atomic Designの略（AD）を頭に付与する
「AD_コンポーネント種類名_識別子」とする
Ex, AD_InputField_SomeSome

## 実装時の決め事
- コメントで目的を記述する
  Call To Actionを意識したものなのかとか
  制作するに至った経緯とか、こう使ったら良いんじゃないかという当時の見込みとか
- 


## どこまで実装するか
propsとして汎用的に渡しうるものを用意しておく
１つのファイルに同じ種類の別のデザインのコンポーネントを複数作成する
同じ種類の別のデザインのコンポーネントであっても、１つのinterfaceを利用する
interfaceはその種類のコンポーネントで全て共通させるため、未使用のものがあっても構わない

```ts
// Cardという種類で複数のコンポーネントを定義
// interfaceは１つ
// children以外はnullableで定義
interface AD_CardProps {
  children: React.ReactNode;
  link?: string;
  title?: string;
  sentence?: string;
}

export const AD_Card = () => {
  return <div>Card</div>;
};

export const AD_HoverAnimationCard: React.FC<AD_CardProps> = ({ children }) => {
  return (
    <div className='mt-4 w-32 h-32 bg-green-400 hover:drop-shadow-2xl hover:animate-slide-top'>
      {children}
    </div>
  );
};

export const AD_CardWithMoveArrow: React.FC<AD_CardProps> = ({
  link,
  title,
  sentence,
}) => {
  return (
    <a
      href={link}
      className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      target='_blank'
      rel='noopener noreferrer'
    >
      <h2 className='mb-3 text-2xl font-semibold'>
        {title}
        {/* 動く右矢印→ */}
        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
          -&gt;
        </span>
      </h2>
      {/* 余白なし、最大30ch（1chは親のフォントの0の横幅分、テキストサイズsm、透過度0.5 */}
      <p className='m-0 max-w-[30ch] text-sm opacity-50'>{sentence}</p>
    </a>
  );
};
```




