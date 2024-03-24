import Link from "next/link";
import React from "react";

const Nextjs = () => {
  return (
    <div>
      Nextjs{" "}
      <div className='w-full bg-blue-400'>
        <h1 className='text-5xl'>TailwindCSS playground</h1>
        <br />
        <p>TailwindCSSの各種パラメータのハンズオンなどを行う</p>

        <h2>参考にしたサイトなど</h2>
        <ul>
          <li>
            <Link
              href={"https://zenn.dev/ya_s_u/articles/awesome-nextjs-repos"}
            >
              個人開発で参考になるNext.jsリポジトリ10選
            </Link>
          </li>
          <li>サイト1</li>
          <li>サイト1</li>
          <li>サイト1</li>
          <li>サイト1</li>
          <li>サイト1</li>
        </ul>
      </div>
    </div>
  );
};

export default Nextjs;
