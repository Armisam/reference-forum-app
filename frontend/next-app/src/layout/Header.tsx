import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-700">
      <nav className="flex flex-col sm:flex-row text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Forum App</h1>

        <div className={`space-x-4 sm:flex sm:space-x-4`}>
          <Link href="/" className="block py-2 hover:underline focus:underline">
            Home
          </Link>
          <Link
            href="/login"
            className="block py-2 hover:underline focus:underline"
          >
            Log in
          </Link>
          <Link
            href="/topics/new"
            className="block py-2 hover:underline focus:underline"
          >
            Add new topic
          </Link>
          <Link
            href="/rights"
            className="block py-2 hover:underline focus:underline"
          >
            Rights
          </Link>
        </div>
      </nav>
    </header>
  );
}
