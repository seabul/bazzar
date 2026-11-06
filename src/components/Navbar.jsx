import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import NavbarAuth from "@/components/NavbarAuth";
import NavbarCategories from "@/components/NavbarCategories";
import NavbarMobileMenu from "@/components/NavbarMobileMenu";
import BengaliDate from "@/components/BengaliDate";

export default function Navbar({ categories = [] }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors duration-200">
      {/* Top Navbar Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Bangla Date */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="text-3xl filter transition-transform group-hover:scale-110 duration-200">
                🛒
              </span>
              <div>
                <span className="text-2xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400 block leading-tight">
                  বাজার দর
                </span>
                <BengaliDate />
              </div>
            </Link>
          </div>

          {/* Desktop Controls (Theme Toggle + Auth Client Island) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <NavbarAuth />
          </div>

          {/* Mobile Controls & Menu Client Island */}
          <NavbarMobileMenu categories={categories} />
        </div>

        {/* Categories Bar (Desktop Client Island for pathname tracking) */}
        <NavbarCategories categories={categories} />
      </div>
    </header>
  );
}
