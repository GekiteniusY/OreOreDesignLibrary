export default function Home() {
  return (
    <>
      {/* aside contents */}
      <aside className='mt-4'>
        <h2 className='bg-slate-400'>Notice</h2>
        <div>THIS SITE IS UNDER CONSTRUCTION</div>
        <ul className='block'>
          <li className='ml-4'>Notice1</li>
          <li className='ml-4'>Notice2</li>
          <li className='ml-4'>Notice3</li>
        </ul>
      </aside>

      {/* main content */}
      <main className='block'>
        <div className='mt-7 box-content'>
          <h2 className='bg-slate-400'>Atomic Design</h2>
          <p>Atomic Designのコンポーネントをまとめたページ</p>
        </div>

        <div className='mt-7'>
          <h2 className='bg-slate-400'>Next.js</h2>
          <p>
            Next.jsのいろいろについてまとめたページ <br />
            Cache Strategy: ReactおよびNext.js（App Router）のキャッシュ戦略{" "}
            <br />
            Rendering Types: レンダリング種別
          </p>
        </div>

        <div className='mt-7'>
          <h2 className='bg-slate-400'>TailwindCSS</h2>
          <p>TailwindCSSのサンプルコンポーネントのページ</p>
        </div>
      </main>
    </>
  );
}
