import { Shield } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center animate-pulse">
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
        <div className="h-1.5 w-24 bg-zinc-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full animate-[progress_1s_ease-in-out_infinite]" />
        </div>
        <span className="text-xs font-medium text-zinc-500">Loading LocalBuild...</span>
      </div>
    </div>
  );
}
