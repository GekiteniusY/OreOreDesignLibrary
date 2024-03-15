import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex max-w-screen-2xl mx-auto px-4'>
        <div className='hidden lg:block overflow-y-auto px-10 pt-7'>
          <div className='flex w-60 h-10 bg-red-300 opacity-80 text-nowrap'>
            {/* TODO: TailwindCSS配下で全文検索機能を追加する */}
            全文検索の検索ボックス
          </div>
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
        </div>
        <div className='block w-full px-10 pt-7'>{children}</div>
      </div>
    </>
  );
}
