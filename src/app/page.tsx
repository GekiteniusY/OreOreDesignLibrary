export default function Home() {
  return (
    <>
      {/* main header */}
      <header>
        <h1>Header</h1>
      </header>

      {/* navigation */}
      <nav className='flex p-3'>
        <ul className='flex'>
          <li className='ml-1'>Home</li>
          <li className='ml-4'>Atomic Design</li>
          <li className='ml-4'>Cache Strategy</li>
          <li className='ml-4'>Next.js Rendering Types</li>
          <li className='ml-4'>TailwindCSS</li>
        </ul>
        <p className='ml-10 bg-slate-400'>なにかいれるかも</p>
      </nav>

      {/* main content */}
      <main className='block bg-gray-300'>
        <div className='m-7 bg-cyan-700'>
          <h2>Atomic Design</h2>
          <p>Atomic Designのコンポーネントをまとめたページ</p>
        </div>
        <div className='m-7 bg-green-400'>
          <h2>Cache Strategy</h2>
          <p>
            ReactおよびNext.js（App
            Router）のキャッシュ戦略についてまとめたページ
          </p>
        </div>

        <div className='m-7 bg-green-400'>
          <h2>Next.js Rendering Types</h2>
          <p>Next.jsのレンダリング種別についてまとめたページ</p>
        </div>

        <div className='m-7 bg-green-400'>
          <h2>TailwindCSS</h2>
          <p>TailwindCSSのサンプルコンポーネントのページ</p>
        </div>

        {/* aside contents */}
        <aside>THIS IS ASIDE CONTENTS</aside>
      </main>
    </>
  );
}
