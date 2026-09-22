import React, { useState } from "react";
import { Building2, Image as ImageIcon } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  category?: string;
  aspectRatio?: "16/10" | "4/3";
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}

/**
 * Reusable ProjectImage component
 * - Guarantees proper responsive aspect-ratio with zero layout shift
 * - Automatically handles image loading errors gracefully without displaying broken icons or raw overflowing alt text
 * - Provides accessible screen-reader tags
 */
export default function ProjectImage({
  src,
  alt,
  title,
  category,
  aspectRatio = "16/10",
  className = "",
  loading = "lazy",
  width = 640,
  height = 400,
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = aspectRatio === "4/3" ? "aspect-[4/3]" : "aspect-[16/10]";

  if (hasError) {
    return (
      <div
        className={`relative w-full ${aspectClass} bg-gradient-to-br from-[#EEF2F6] to-[#E3E8EF] flex flex-col items-center justify-center p-4 text-center border-b border-[#DDE3EC] select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#DDE3EC] flex items-center justify-center text-[#3157D5] mb-2 shadow-xs">
          <Building2 className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold text-[#263044] line-clamp-1 max-w-[90%]">
          {title}
        </span>
        <span className="text-[11px] font-medium text-[#667085] mt-0.5">
          {category ? `${category} Project` : "Project preview unavailable"}
        </span>
        {/* Screen reader only alt text to preserve accessibility */}
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#F2F5FA] ${className}`}>
      {/* Subtle skeleton shimmer before load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2F5FA] via-[#EAEFF7] to-[#F2F5FA] animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${
          isLoaded ? "opacity-100 group-hover:scale-105" : "opacity-0"
        }`}
      />
    </div>
  );
}
