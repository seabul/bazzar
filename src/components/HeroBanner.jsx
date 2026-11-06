import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 via-white to-slate-50 dark:from-slate-900/90 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 py-10 sm:py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>দৈনন্দিন বাজারদর মনিটরিং প্ল্যাটফর্ম</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              আজকের সঠিক <span className="text-emerald-600 dark:text-emerald-400 underline decoration-emerald-300 dark:decoration-emerald-500 decoration-wavy decoration-2">বাজার দর</span> জানুন সবার আগে
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              নিত্যপ্রয়োজনীয় চাল, ডাল, তেল, তাজা সবজি, মাছ ও মাংসের সর্বশেষ
              পাইকারি ও খুচরা বাজারমূল্য এক নজরে দেখুন এবং সঠিক দামে পণ্য কিনুন।
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#সব-পণ্য"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>সব পণ্য দেখুন</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <Link
                href="/category/sobji"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl transition-colors shadow-xs"
              >
                আজকের সবজি দর 🥬
              </Link>
            </div>
          </div>

          {/* Banner Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 lg:w-96 aspect-square max-w-full drop-shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/bazar-hero.png"
                alt="বাজারের পণ্যের ডালা"
                width={400}
                height={400}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
