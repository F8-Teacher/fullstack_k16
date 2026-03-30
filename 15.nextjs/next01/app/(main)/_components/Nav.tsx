"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="mb-3 border-b border-[#ccc]">
      <ul className="flex gap-3">
        <li>
          <Link href="/" className={pathname === "/" ? "text-red-600" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-red-600" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={pathname === "/products" ? "text-red-600" : ""}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={pathname === "/posts" ? "text-red-600" : ""}
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
