import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { User, ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import UpdateProfileForm from "@/components/UpdateProfileForm";

export const metadata = {
  title: "তথ্য আপডেট করুন — বাজার দর",
  description: "আপনার বাজার দর প্রোফাইল নাম ও তথ্য হালনাগাদ করুন",
};

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/signin?callbackUrl=/profile/update");
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/profile"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>প্রোফাইলে ফিরে যান</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Form Container (Server Component shell) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-6 transition-colors duration-200">
          <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
            <span className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
              <User className="w-6 h-6" />
            </span>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                তথ্য আপডেট করুন
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                আপনার অ্যাকাউন্ট এর নাম পরিবর্তন করতে নিচের ফর্মটি ব্যবহার করুন
              </p>
            </div>
          </div>

          {/* Interactive Form (Client Island) */}
          <UpdateProfileForm
            initialName={user.name || ""}
            email={user.email || ""}
          />
        </div>
      </div>
    </div>
  );
}
