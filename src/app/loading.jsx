import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar Skeleton */}
      <div className="h-18 bg-white border-b border-slate-200 animate-pulse px-6 flex items-center justify-between">
        <div className="w-36 h-8 bg-slate-200 rounded-lg" />
        <div className="w-48 h-8 bg-slate-200 rounded-lg" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="h-44 bg-slate-200 rounded-3xl animate-pulse" />

        <div className="space-y-4">
          <div className="w-48 h-6 bg-slate-200 rounded animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
