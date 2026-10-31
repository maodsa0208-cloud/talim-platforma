import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Ta’lim platformasi
        </Link>
        <div className="hidden gap-6 text-sm md:flex">
          <Link href="/testlar">Testlar</Link>
          <Link href="/kitoblar">Kitoblar</Link>
          <Link href="/videodarslar">Videodarslar</Link>
        </div>
        <div className="flex gap-3 text-sm">
          <Link href="/kirish" className="px-3 py-2">
            Kirish
          </Link>
          <Link
            href="/royxatdan-otish"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Ro‘yxatdan o‘tish
          </Link>
        </div>
      </nav>
    </header>
  );
}