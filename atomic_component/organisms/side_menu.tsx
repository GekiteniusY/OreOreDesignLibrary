import Link from "next/link";
import React from "react";

export const AD_SideMenu = () => {
  return (
    <>
      <div className='block'>
        <Link href={"/some_path"}>Menu1</Link>
      </div>
      <div className='block'>
        <Link href={"/some_path"}>Menu1</Link>
      </div>
      <div className='block'>
        <Link href={"/some_path"}>Menu1</Link>
      </div>
      <div className='block'>
        <Link href={"/some_path"}>Menu1</Link>
      </div>
      <div className='block'>
        <Link href={"/some_path"}>Menu1</Link>
      </div>
    </>
  );
};
