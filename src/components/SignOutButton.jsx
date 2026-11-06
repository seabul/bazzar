"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

export default function SignOutButton({ className = "" }) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("সফলভাবে লগআউট হয়েছে");
      router.push("/");
      router.refresh();
    } catch (e) {
      toast.error("লগআউট করতে সমস্যা হয়েছে");
    }
  };

  return (
    <button
      onClick={handleSignOut}
      type="button"
      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-rose-200 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-semibold rounded-xl text-sm transition-colors cursor-pointer ${className}`}
    >
      <LogOut className="w-4 h-4" />
      <span>লগআউট</span>
    </button>
  );
}

