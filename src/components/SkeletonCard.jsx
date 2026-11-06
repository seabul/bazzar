export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 animate-pulse flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-slate-200 rounded-xl" />
          <div className="w-16 h-5 bg-slate-200 rounded-full" />
        </div>
        <div className="h-5 bg-slate-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-slate-100 rounded w-1/3" />
      </div>
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="w-20 h-6 bg-slate-200 rounded" />
        <div className="w-16 h-6 bg-slate-100 rounded" />
      </div>
    </div>
  );
}
