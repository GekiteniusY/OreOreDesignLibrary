import Link from "next/link";

const TailwindCSS = () => {
  return (
    <div className='w-full bg-blue-400'>
      <h1 className='text-5xl'>TailwindCSS playground</h1>
      <br />
      <p>TailwindCSSの各種パラメータのハンズオンなどを行う</p>

      <h2>参考にしたサイトなど</h2>
      <ul>
        <li>
          <Link href={"https://nerdcave.com/tailwind-cheat-sheet"}>
            Tailwind Cheet Sheet
          </Link>
        </li>
        <li>
          <Link
            href={
              "https://zenn.dev/cybozu_frontend/articles/8caf1decb1e82c#template%E3%81%A8%E3%81%AF%EF%BC%9F"
            }
          >
            Next.js 13 Template と Layout の使い分け
          </Link>
        </li>
        <li>
          <Link
            href={
              "https://tail-animista.vercel.app/play/basic/scale-up/scale-up-center"
            }
          >
            Tailanimista
          </Link>
        </li>
        <li>サイト1</li>
        <li>サイト1</li>
        <li>サイト1</li>
        <li>サイト1</li>
        <li>サイト1</li>
      </ul>
    </div>
  );
};

export default TailwindCSS;
