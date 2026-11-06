"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function NavbarMobileMenu({ categories = [] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("সফলভাবে লগআউট হয়েছে");
      setMobileMenuOpen(false);
      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error("লগআউট করতে সমস্যা হয়েছে");
    }
  };

  return (
    <>
      {/* Mobile Menu & Theme Toggle Buttons */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-3">
          {/* Mobile Auth */}
          <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
            {session?.user ? (
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    {session.user.name ? session.user.name[0].toUpperCase() : "U"}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                      {session.user.name || "ব্যবহারকারী"}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{session.user.email}</p>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 text-center py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    আমার প্রোফাইল
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex-1 py-2 bg-rose-50 dark:bg-rose-950/40 rounded-lg text-sm font-medium text-rose-600 dark:text-rose-400 cursor-pointer"
                  >
                    লগআউট
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Categories */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              ক্যাটাগরি
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  pathname === "/"
                    ? "bg-emerald-600 text-white"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                🏠 সব পণ্য
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id || cat.slug}
                  href={`/category/${cat.slug || cat.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 ${
                    pathname === `/category/${cat.slug || cat.id}`
                      ? "bg-emerald-600 text-white"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{cat.icon || "📦"}</span>
                  <span>{cat.nameBn}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

