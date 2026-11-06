import Link from "next/link";
import { toBengaliNumber, formatUnit } from "@/lib/utils";
import {
  ArrowLeft,
  Store,
  MapPin,
  TrendingUp,
  TrendingDown,
  Layers,
} from "lucide-react";

export default function ProductDetail({ product }) {
  if (!product) {
    return (
      <div className="text-center py-20 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        <span className="text-5xl mb-4 block">🔍</span>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
          পণ্যটি পাওয়া যায়নি
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto text-sm">
          আপনার অনুরোধকৃত পণ্যটির কোনো তথ্য সার্ভারে খুঁজে পাওয়া যায়নি।
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  // Calculate Market Prices Summary
  const markets = Array.isArray(product.markets) ? product.markets : [];
  const minPrices = markets.map((m) => m.min).filter(Boolean);
  const maxPrices = markets.map((m) => m.max).filter(Boolean);

  const minPrice = minPrices.length > 0 ? Math.min(...minPrices) : product.today;
  const maxPrice = maxPrices.length > 0 ? Math.max(...maxPrices) : product.today;
  const avgPrice =
    markets.length > 0
      ? Math.round(
          markets.reduce((acc, m) => acc + (m.min + m.max) / 2, 0) /
            markets.length
        )
      : product.today;

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";
  const dirSymbol = isUp ? "▲" : isDown ? "▼" : "—";
  const badgeClass = isUp
    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/80"
    : isDown
    ? "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/80"
    : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700";

  return (
    <div className="space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>সকল পণ্যে ফিরে যান</span>
        </Link>
      </div>

      {/* Top — Summary Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors duration-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <span className="text-5xl sm:text-6xl p-4 bg-emerald-50 dark:bg-slate-800 rounded-2xl border border-emerald-100/60 dark:border-slate-700 shadow-xs">
              {product.image || product.categoryIcon || "🛒"}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {product.categoryNameBn && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                    <Layers className="w-3 h-3" />
                    {product.categoryNameBn}
                  </span>
                )}
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  প্রতি {formatUnit(product.unit)}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}
                >
                  {dirSymbol} {toBengaliNumber(product.change?.pct ?? 0)}%
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                {product.nameBn}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
                আজকের বাজার বিশ্লেষণে {product.nameBn}-এর গড় মূল্য{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {toBengaliNumber(product.today)} টাকা
                </span>
                । গতকালের মূল্যের তুলনায় এটি{" "}
                {isUp ? "বৃদ্ধি পেয়েছে" : isDown ? "হ্রাস পেয়েছে" : "অপরিবর্তিত"}
                ।
              </p>
            </div>
          </div>

          {/* Today's Price Big Banner */}
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/80 rounded-2xl p-5 text-center min-w-[200px]">
            <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block mb-1">
              আজকের নির্ধারিত মূল্য
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">
              {toBengaliNumber(product.today)}{" "}
              <span className="text-lg font-sans font-normal text-emerald-600 dark:text-emerald-400">
                টাকা
              </span>
            </div>
            <span className="text-xs text-emerald-600 dark:text-emerald-400/80 block mt-1">
              প্রতি {formatUnit(product.unit)}
            </span>
          </div>
        </div>

        {/* Price - Summary 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          {/* Min Price */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">
              📉 সর্বনিম্ন দাম
            </span>
            <p className="text-xl font-bold text-slate-900 dark:text-white font-mono">
              {toBengaliNumber(minPrice)}{" "}
              <span className="text-xs font-sans font-normal text-slate-500 dark:text-slate-400">
                টাকা
              </span>
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">সব বাজারের মধ্যে সর্বনিম্ন</p>
          </div>

          {/* Average Price */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
            <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300 block mb-1">
              📊 গড় বাজারদর
            </span>
            <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400 font-mono">
              {toBengaliNumber(avgPrice)}{" "}
              <span className="text-xs font-sans font-normal text-emerald-600 dark:text-emerald-400">
                টাকা
              </span>
            </p>
            <p className="text-xs text-emerald-600/80 dark:text-emerald-400/60 mt-0.5">সব বাজারের গড় হিসাব</p>
          </div>

          {/* Max Price */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">
              📈 সর্বোচ্চ দাম
            </span>
            <p className="text-xl font-bold text-slate-900 dark:text-white font-mono">
              {toBengaliNumber(maxPrice)}{" "}
              <span className="text-xs font-sans font-normal text-slate-500 dark:text-slate-400">
                টাকা
              </span>
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">সব বাজারের মধ্যে সর্বোচ্চ</p>
          </div>
        </div>
      </div>

      {/* বাজারভিত্তিক আজকের দাম (Market by Market Pricing) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors duration-200">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <span className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
            <Store className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              বাজারভিত্তিক আজকের দাম
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              বিভিন্ন পাইকারি ও খুচরা বাজারে {product.nameBn}-এর আজকের দামের তালিকা
            </p>
          </div>
        </div>

        {markets.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400 text-sm py-4 text-center">
            এই পণ্যের বাজারভিত্তিক কোনো তথ্য পাওয়া যায়নি।
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider bg-slate-50/70 dark:bg-slate-800/70">
                  <th className="py-3 px-4 font-semibold rounded-l-xl">বাজারের নাম</th>
                  <th className="py-3 px-4 font-semibold">বিভাগ / এলাকা</th>
                  <th className="py-3 px-4 font-semibold text-right">সর্বনিম্ন দাম</th>
                  <th className="py-3 px-4 font-semibold text-right">সর্বোচ্চ দাম</th>
                  <th className="py-3 px-4 font-semibold text-right rounded-r-xl">গড় দাম</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {markets.map((m, idx) => {
                  const mAvg = Math.round((m.min + m.max) / 2);
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-emerald-50/30 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <Store className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{m.market}</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          {m.division}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-medium text-slate-700 dark:text-slate-200">
                        {toBengaliNumber(m.min)} ৳
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-medium text-slate-700 dark:text-slate-200">
                        {toBengaliNumber(m.max)} ৳
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-700 dark:text-emerald-400">
                        {toBengaliNumber(mAvg)} ৳
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

