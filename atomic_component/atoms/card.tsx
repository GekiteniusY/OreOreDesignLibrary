import React from "react";

export const CardButton = () => {
  return (
    <div>
      Card
      <div>
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
          <div className='bg-white rounded-lg p-6 w-96'>
            <div className='flex items-center justify-center'>
              {/* TODO: アイコンを修正する */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 text-green-500'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1.293-10.293a1 1 0 00-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414L7.586 10l-1.293 1.293a1 1 0 101.414 1.414L9 11.414l1.293 1.293a1 1 0 001.414-1.414L10.414 10l1.293-1.293a1 1 0 000-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <h2 className='text-xl font-bold ml-2'>Payment successful</h2>
            </div>
            {/* TODO: テキストを修正する */}
            <p className='text-gray-600 mt-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              aliquam laudantium explicabo pariatur iste dolorem animi vitae
              error totam. At sapiente aliquam accusamus facere veritatis.
            </p>
            <div className='mt-6 flex justify-end space-x-4'>
              {/* TODO: 色を修正しないと見えない */}
              <button className='text-gray-500 hover:text-gray-700'>
                Cancel
              </button>
              <button className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600'>
                Deactivate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button></button>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

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
