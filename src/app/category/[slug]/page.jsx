import Link from "next/link";
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategorySort from "@/components/CategorySort";
import { getCategories, getCategoryBySlug, getProducts } from "@/lib/api";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  return {
    title: `${category?.nameBn || "ক্যাটাগরি"} — বাজার দর (Bazar Dor)`,
    description: `${category?.nameBn || "ক্যাটাগরি"} এর পণ্যের আজকের পাইকারি ও খুচরা বাজারদর।`,
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const { sort = "default" } = (await searchParams) || {};

  const [categories, category, allProducts, categoryProducts] = await Promise.all([
    getCategories(),
    getCategoryBySlug(slug),
    getProducts(),
    getProducts(slug),
  ]);

  const resolvedCategory = category || { nameBn: slug, icon: "📦" };

  let sortedProducts = [...categoryProducts];
  if (sort === "price-asc") {
    sortedProducts.sort((a, b) => Number(a.today ?? 0) - Number(b.today ?? 0));
  } else if (sort === "price-desc") {
    sortedProducts.sort((a, b) => Number(b.today ?? 0) - Number(a.today ?? 0));
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Navbar categories={categories} />
      <PriceTicker products={allProducts} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <span className="text-5xl mb-4 block">🔍</span>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              কোনো পণ্য পাওয়া যায়নি
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto text-sm">
              এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য তালিকাভুক্ত নেই অথবা ভুল ক্যাটাগরি অনুসন্ধান করা হয়েছে।
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              হোম পেজে ফিরে যান
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Category Header & Sort Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800">
                  {resolvedCategory.icon || "📦"}
                </span>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {resolvedCategory.nameBn || "ক্যাটাগরি"}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    মোট {sortedProducts.length}টি পণ্য পাওয়া গেছে
                  </p>
                </div>
              </div>

              {/* Sort dropdown client island */}
              <CategorySort currentSort={sort} />
            </div>

            {/* Grid of Product Cards (Server Components) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
