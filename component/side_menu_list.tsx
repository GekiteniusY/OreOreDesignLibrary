"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// ページのパスによってサイドメニューのリストを出し分けをする
const SideMenu = () => {
  const currentPathname: string = usePathname();
  console.log("currentPath is :", currentPathname);
  let menuList: React.JSX.Element;
  let sideMenu: React.JSX.Element = <></>;

  switch (true) {
    case currentPathname.startsWith("/atomic_design"):
      menuList = SideMenuListAtomicDesign();
      break;
    case currentPathname.startsWith("/nextjs"):
      console.log("/nextjsのサイドメニュー");
      menuList = SideMenuListNextjs();
      break;
    case currentPathname.startsWith("/tailwindcss"):
      menuList = SideMenuListAtomicDesign();
      break;
    // ルートディレクトリ（Home）の場合はサイドメニューなしでリターン
    default:
      menuList = <></>;
      return sideMenu;
  }

  // ルートディレクトリ以外の場合はサイドメニューをリターン
  sideMenu = (
    <>
      <div className='hidden lg:block overflow-y-auto pl-10 pt-7'>
        <div className='flex w-60 h-10 bg-red-300 opacity-80 text-nowrap'>
          {/* TODO: Atomic Design配下で全文検索機能を追加する */}
          全文検索の検索ボックス
        </div>
        {menuList}
      </div>
    </>
  );

  return sideMenu;
};

export default SideMenu;

const SideMenuListAtomicDesign = () => {
  return (
    <>
      <div className='block'>
        <Link href={"/atomic_design/atoms"}>Atoms</Link>
      </div>
      <div>
        <Link href={"/atomic_design/molecules"}>Molecules</Link>
      </div>
      <div>
        <Link href={"/atomic_design/organisms"}>Organisms</Link>
      </div>
      <div>
        <Link href={"/atomic_design/templates"}>Templates</Link>
      </div>
      <div>
        <Link href={"/atomic_design/pages"}>Pages</Link>
      </div>
    </>
  );
};

const SideMenuListNextjs = () => {
  return (
    <>
      <div>
        <Link href={"/nextjs/cash_strategy"}>Cache Strategy</Link>
      </div>
      <div>
        <Link href={"/nextjs/rendering_types"}>Rendering Types</Link>
      </div>
      <div>
        <Link href={"/nextjs/functions"}>Functions</Link>
      </div>
    </>
  );
};

const SideMenuListTailwindCSS = () => {
  return (
    <>
      <div>
        <Link href={"/tailwindcss/layout"}>Layout</Link>
      </div>
      <div>
        <Link href={"/tailwindcss/effects"}>Effects</Link>
      </div>
      <div>
        <Link href={"/tailwindcss/transitions_and_animations"}>
          Transitions and Animations
        </Link>
      </div>
      <div>
        <Link href={"/tailwindcss/filters"}>Filters</Link>
      </div>
    </>
  );
};
