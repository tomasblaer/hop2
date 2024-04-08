import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="">
        <ul className="flex justify-end gap-4 p-4">
          <li>
            <Link href="/">Skrá Fyrirtæki</Link>
          </li>
          <li>
            <Link href="/#">Fyrirtækisinnskráning</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}