"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ArrowUpDown } from "lucide-react";

export default function CategorySort({ currentSort = "default" }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSortChange = (e) => {
    const val = e.target.value;
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    if (val === "default") {
      params.delete("sort");
    } else {
      params.set("sort", val);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <div className="flex items-center gap-2 self-start sm:self-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl shadow-xs">
      <ArrowUpDown className="w-4 h-4 text-slate-400 dark:text-slate-500" />
      <label
        htmlFor="sort-select"
        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium"
      >
        সাজান:
      </label>
      <select
        id="sort-select"
        value={currentSort}
        onChange={handleSortChange}
        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 bg-transparent dark:bg-slate-900 focus:outline-hidden cursor-pointer"
      >
        <option value="default" className="dark:bg-slate-900">
          ডিফল্ট
        </option>
        <option value="price-asc" className="dark:bg-slate-900">
          দাম: কম থেকে বেশি
        </option>
        <option value="price-desc" className="dark:bg-slate-900">
          দাম: বেশি থেকে কম
        </option>
      </select>
    </div>
  );
}

