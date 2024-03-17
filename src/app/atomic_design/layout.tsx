import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex max-w-screen-2xl mx-auto px-4'>
        <div className='hidden lg:block overflow-y-auto pl-10 pt-7'>
          <div className='flex w-60 h-10 bg-red-300 opacity-80 text-nowrap'>
            {/* TODO: Atomic Design配下で全文検索機能を追加する */}
            全文検索の検索ボックス
          </div>
          <div>
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
        </div>
        <div className='block w-full px-10 pt-7'>
          <div className='block h-7 w-full bg-blue-400'>ページ階層を表示</div>
          {children}
        </div>
      </div>
    </>
  );
}
