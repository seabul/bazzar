import Link from "next/link";
import { Home } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-16 transition-colors duration-200">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl text-center space-y-6">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        <div className="w-20 h-20 bg-rose-50 dark:bg-rose-950/50 text-rose-500 dark:text-rose-400 rounded-3xl flex items-center justify-center mx-auto text-4xl shadow-xs">
          🧺
        </div>

        <div className="space-y-2">
          <span className="text-5xl font-black text-emerald-600 dark:text-emerald-400 block font-mono">
            ৪০৪
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            পাতাটি খুঁজে পাওয়া যায়নি
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            আপনি যে পাতাটি বা পণ্যটি খুঁজছেন তা মুছে ফেলা হয়েছে অথবা ভুল ঠিকানায় প্রবেশ করেছেন।
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>হোম পেজে ফিরে যান</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
