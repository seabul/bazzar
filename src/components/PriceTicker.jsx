import Link from "next/link";
import { toBengaliNumber, formatUnit } from "@/lib/utils";

export default function PriceTicker({ products = [] }) {
  if (!products || products.length === 0) return null;

  const tickerItems = [...products, ...products];

  return (
    <div className="w-full bg-emerald-900 dark:bg-slate-900 text-white text-xs sm:text-sm py-2 overflow-hidden border-b border-emerald-800 dark:border-slate-800 shadow-inner select-none transition-colors duration-200">
      <div className="flex animate-marquee items-center gap-6 whitespace-nowrap">
        {tickerItems.map((item, idx) => {
          const isUp = item.change?.dir === "up";
          const isDown = item.change?.dir === "down";
          const dirSymbol = isUp ? "▲" : isDown ? "▼" : "—";
          const badgeClass = isUp
            ? "text-emerald-300 dark:text-emerald-400 font-semibold"
            : isDown
            ? "text-rose-300 dark:text-rose-400 font-semibold"
            : "text-slate-300 dark:text-slate-400";

          return (
            <Link
              key={`${item.id}-${idx}`}
              href={`/product/${item.slug || item.id}`}
              className="inline-flex items-center gap-2 hover:text-emerald-200 dark:hover:text-emerald-300 transition-colors px-2 py-0.5 rounded"
            >
              <span className="text-base">{item.image || "🛒"}</span>
              <span className="font-medium text-slate-100">{item.nameBn}</span>
              <span className="text-emerald-100 dark:text-emerald-200 font-mono">
                {toBengaliNumber(item.today)} ৳/{formatUnit(item.unit)}
              </span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded ${badgeClass}`}>
                {dirSymbol} {toBengaliNumber(item.change?.pct ?? 0)}%
              </span>
              <span className="text-emerald-700 dark:text-slate-700 mx-1">•</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
