import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* TODO: Atomic Design配下で全文検索機能を追加する */}
      {children}
    </>
  );
}
