import Link from "next/link";
import ButtonPreviousPage from "../../atomic_component/molecules/button/button_previous_page";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <ButtonPreviousPage>Back to Previous Page?</ButtonPreviousPage>
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
