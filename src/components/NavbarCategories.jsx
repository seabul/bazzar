"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarCategories({ categories = [] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1.5 py-2.5 border-t border-slate-100 dark:border-slate-800 overflow-x-auto no-scrollbar">
      <Link
        href="/"
        className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
          pathname === "/"
            ? "bg-emerald-600 text-white shadow-xs"
            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        🏠 সব পণ্য
      </Link>
      {categories.map((cat) => {
        const isActive = pathname === `/category/${cat.slug || cat.id}`;
        return (
          <Link
            key={cat.id || cat.slug}
            href={`/category/${cat.slug || cat.id}`}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
              isActive
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>{cat.icon || "📦"}</span>
            <span>{cat.nameBn}</span>
          </Link>
        );
      })}
    </nav>
  );
}

