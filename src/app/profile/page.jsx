import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { User, Mail, Edit3, ArrowLeft, ShieldCheck } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import SignOutButton from "@/components/SignOutButton";

export const metadata = {
  title: "আমার প্রোফাইল — বাজার দর",
  description: "আপনার বাজার দর প্রোফাইল তথ্য",
};

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/signin?callbackUrl=/profile");
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>হোম পেজে ফিরে যান</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Profile Card (Server Component) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-6 transition-colors duration-200">
          <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-bold shadow-md overflow-hidden">
              {user.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="w-full h-full object-cover"
                />
              ) : (
                (user.name || "ব")[0].toUpperCase()
              )}
            </div>

            <div className="text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {user.name || "সম্মানিত ব্যবহারকারী"}
                </h1>
                <span className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{user.email}</p>
            </div>
          </div>

          {/* Details list (Server Component) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-200 shadow-xs">
                <User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </span>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500">পূর্ণ নাম</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {user.name || "দেওয়া নেই"}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-200 shadow-xs">
                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </span>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500">ইমেইল ঠিকানা</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons: Edit info + Logout Client Island */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/profile/update"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl text-sm shadow-xs transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span>তথ্য আপডেট করুন (Update Information)</span>
            </Link>

            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
