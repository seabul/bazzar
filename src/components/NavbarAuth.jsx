"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { User, LogOut, ChevronDown } from "lucide-react";

export default function NavbarAuth() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("সফলভাবে লগআউট হয়েছে");
      setUserDropdownOpen(false);
      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error("লগআউট করতে সমস্যা হয়েছে");
    }
  };

  if (isPending) {
    return (
      <div className="w-24 h-9 bg-slate-200 dark:bg-slate-800 animate-pulse rounded-lg" />
    );
  }

  if (session?.user) {
    return (
      <div className="relative">
        <button
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-400 bg-slate-50 dark:bg-slate-800 transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm overflow-hidden">
            {session.user.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="w-full h-full object-cover"
              />
            ) : (
              (session.user.name || "ব")[0].toUpperCase()
            )}
          </div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200 max-w-[120px] truncate">
            {session.user.name || session.user.email}
          </span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>

        {userDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 py-1.5 z-50">
            <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700">
              <p className="text-xs text-slate-400">লগইন করা আছে</p>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                {session.user.name || "ব্যবহারকারী"}
              </p>
            </div>
            <Link
              href="/profile"
              onClick={() => setUserDropdownOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              <User className="w-4 h-4" />
              আমার প্রোফাইল
            </Link>
            <button
              onClick={handleSignOut}
              className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              লগআউট
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <Link
        href="/signin"
        className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
      >
        সাইন ইন
      </Link>
      <Link
        href="/signup"
        className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-xs transition-all"
      >
        সাইন আপ
      </Link>
    </div>
  );
}
