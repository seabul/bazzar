import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import SignUpForm from "@/components/SignUpForm";

export const metadata = {
  title: "রেজিস্ট্রেশন — বাজার দর",
  description: "বাজার দর প্ল্যাটফর্মে নতুন অ্যাকাউন্ট তৈরি করুন",
};

export default async function SignUpPage({ searchParams }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { callbackUrl = "/" } = (await searchParams) || {};

  if (session?.user) {
    redirect(callbackUrl);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center p-4 transition-colors duration-200">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-6 transition-colors duration-200">
        {/* Top Header (Server Component) */}
        <div className="text-center space-y-2 relative">
          <div className="flex items-center justify-between mb-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>হোমে ফিরুন</span>
            </Link>
            <ThemeToggle />
          </div>

          <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto text-2xl">
            🛒
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            বাজার দর এ নতুন অ্যাকাউন্ট
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            নতুন অ্যাকাউন্ট তৈরি করতে নিচের তথ্যগুলো দিন
          </p>
        </div>

        {/* Interactive Sign Up Form (Client Island) */}
        <SignUpForm callbackUrl={callbackUrl} />
      </div>
    </div>
  );
}
