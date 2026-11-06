import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Left Side */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-lg mb-1">
              <span>🛒</span>
              <span>বাজার দর</span>
            </div>
            <p className="text-sm text-slate-400">
              বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </p>
          </div>

          {/* Right Side */}
          <div className="max-w-md text-xs sm:text-sm text-slate-400 italic">
            “সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।”
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© 2026 বাজার দর (Bazar Dor). সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              হোম
            </Link>
            <Link href="/signin" className="hover:text-slate-300 transition-colors">
              সাইন ইন
            </Link>
            <Link href="/signup" className="hover:text-slate-300 transition-colors">
              রেজিস্ট্রেশন
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
