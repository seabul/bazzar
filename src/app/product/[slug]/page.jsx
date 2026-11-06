import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Footer from "@/components/Footer";
import ProductDetail from "./ProductDetail";
import { getCategories, getProducts, getProductBySlugOrId } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlugOrId(slug);
  return {
    title: `${product?.nameBn || "পণ্য বিবরণ"} — বাজার দর (Bazar Dor)`,
    description: `${product?.nameBn || "পণ্য বিবরণ"} এর আজকের বাজারদর ও বিস্তারিত তথ্য।`,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const [categories, allProducts, product] = await Promise.all([
    getCategories(),
    getProducts(),
    getProductBySlugOrId(slug),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Navbar categories={categories} />
      <PriceTicker products={allProducts} />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ProductDetail product={product} />
      </main>

      <Footer />
    </div>
  );
}
