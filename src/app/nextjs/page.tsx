import Link from "next/link";
import React from "react";

const Nextjs = () => {
  return (
    <div>
      <div className='w-full'>
        <h1 className='text-5xl'>Next.js playground</h1>
        <br />
        <div>
          pinned contents
          <div></div>
        </div>
        <br />
        <p>Next.jsの各種ハンズオンなどを行う</p>
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
        </ul>
      </div>
    </div>
  );
};

export default Nextjs;
