import Link from "next/link";
import React from "react";

const Routing = () => {
  return (
    <div className='w-full bg-blue-400'>
      <h1 className='text-5xl'>Next.js Routing</h1>
      <br />
      <p>TEXTTEXTTEXT</p>

      <h2>参考にしたサイトなど</h2>
      <ul>
        <li>
          <Link
            href={
              "https://nextjs.org/docs/app/building-your-application/routing"
            }
          >
            Next.js 公式 Routing
          </Link>
        </li>
        <li>サイト1</li>
      </ul>
    </div>
  );
};

export default Routing;
