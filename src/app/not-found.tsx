import Link from "next/link";
import AD_PreviousPageButton from "../../atomic_component/molecules/button/button";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <AD_PreviousPageButton>Back to Previous Page?</AD_PreviousPageButton>
      </p>

      <p>OR</p>
      <p>Back to root page</p>
      <div className='block m-4'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/atomic_design'>Atomic Design top</Link>
        </li>

        <Link href='/nextjs_rendering_types'>Next.js Rendering Types top</Link>
        <Link href='/tailwindcss'>TailwindCSS top</Link>
      </div>
    </div>
  );
}
