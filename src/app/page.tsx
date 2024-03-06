export default function Home() {
  return (
    <>
      {/* main header */}
      <header>
        <h1>Header</h1>
      </header>

      {/* navigation */}
      <nav className='flex'>
        <ul>
          <li>Home</li>
          <li>Atomic Design</li>
          <li>Cache Strategy</li>
          <li>Next.js Rendering Types</li>
          <li>TailwindCSS</li>
        </ul>
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

        <h2>Next.js Rendering Types</h2>
        <h2>TailwindCSS</h2>

        {/* aside contents */}
        <aside>nothing</aside>
      </main>
    </>
  );
}
