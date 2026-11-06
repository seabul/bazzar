import Link from "next/link";
import { toBengaliNumber, formatUnit } from "@/lib/utils";

export default function ProductCard({ product }) {
  if (!product) return null;

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";
  const dirSymbol = isUp ? "▲" : isDown ? "▼" : "—";

  const badgeColor = isUp
    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/80"
    : isDown
    ? "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/80"
    : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700";

  const productUrl = `/product/${product.slug || product.id}`;

  return (
    <Link
      href={productUrl}
      className="group bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        {/* Top Header: Emoji + Category Tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-3xl sm:text-4xl p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/40 transition-colors">
            {product.image || product.categoryIcon || "🛒"}
          </span>
          {product.categoryNameBn && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {product.categoryNameBn}
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
          {product.nameBn}
        </h3>

        {/* Unit line */}
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          প্রতি {formatUnit(product.unit)}
        </p>
      </div>

      {/* Bottom Price & Change Badge */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between">
        <div>
          <span className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 block font-medium">
            আজকের দাম
          </span>
          <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">
            {toBengaliNumber(product.today)}{" "}
            <span className="text-sm font-sans font-normal text-slate-600 dark:text-slate-400">
              টাকা
            </span>
          </span>
        </div>

        {/* Percentage Badge */}
        <span
          className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg border ${badgeColor}`}
        >
          <span>{dirSymbol}</span>
          <span>{toBengaliNumber(product.change?.pct ?? 0)}%</span>
        </span>
      </div>
    </Link>
  );
}
