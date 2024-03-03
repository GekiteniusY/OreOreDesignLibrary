interface CardProps {
  link: string;
  title: string;
  sentence: string;
}

export const CardWithMoveArrow: React.FC<CardProps> = ({
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
