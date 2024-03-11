export default function Home() {
  return (
    <>
      {/* aside contents */}
      <aside className='mx-4 mt-4'>
        Notice
        <div>THIS SITE IS UNDER CONSTRUCTION</div>
        <ul className='block'>
          <li className='ml-4'>Notice1</li>
          <li className='ml-4'>Notice2</li>
          <li className='ml-4'>Notice3</li>
        </ul>
      </aside>

      {/* main content */}
      <main className='block mx-4 bg-gray-300'>
        <div className='mt-7 box-content bg-green-400'>
          <h2>Atomic Design</h2>
          <p>Atomic Designのコンポーネントをまとめたページ</p>
        </div>

        <div className='mt-7 bg-green-400'>
          <h2>Cache Strategy</h2>
          <p>
            ReactおよびNext.js（App
            Router）のキャッシュ戦略についてまとめたページ
          </p>
        </div>

        <div className='mt-7 bg-green-400'>
          <h2>Next.js Rendering Types</h2>
          <p>Next.jsのレンダリング種別についてまとめたページ</p>
        </div>

        <div className='mt-7 bg-green-400'>
          <h2>TailwindCSS</h2>
          <p>TailwindCSSのサンプルコンポーネントのページ</p>
        </div>
      </main>
    </>
  );
}
