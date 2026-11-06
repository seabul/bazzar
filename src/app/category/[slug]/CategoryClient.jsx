import CategorySort from "@/components/CategorySort";
import ProductCard from "@/components/ProductCard";

export default function CategoryClient({ initialProducts = [], category }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <span className="text-3xl p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800">
            {category?.icon || "📦"}
          </span>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {category?.nameBn || "ক্যাটাগরি"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              মোট {initialProducts.length}টি পণ্য পাওয়া গেছে
            </p>
          </div>
        </div>
        <CategorySort />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {initialProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
