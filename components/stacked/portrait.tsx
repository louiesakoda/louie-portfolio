import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Louie's photo portrait (supplied by Louie, 2026-11-20; it replaces the
 * pen doodle). Large on the homepage, small at the top of a case study
 * and on the standard pages.
 *
 * A color photo in a rounded square (Louie picked this over a circle and
 * a black-and-white version). The photo has its own edge, so it sits flush
 * with the name below it; the doodle needed a negative margin for the
 * empty space around the drawing.
 */
function Portrait({ size = "lg", className }: { size?: "lg" | "sm"; className?: string }) {
  return (
    <div
      className={cn(
        "portrait overflow-hidden rounded-md",
        size === "lg" ? "w-[9.75rem]" : "w-20",
        className,
      )}
    >
      <Image
        src="/portrait/louie-photo.webp"
        width={640}
        height={640}
        alt="Louie Sakoda, smiling, in clear glasses and a dark sweater."
        sizes={size === "lg" ? "156px" : "80px"}
        // Both sizes sit at the top of the page, so neither loads lazily.
        // The large one is the homepage's largest image: preload it. The
        // small one only needs to start at once (Next allows one or the other).
        {...(size === "lg" ? { preload: true } : { loading: "eager" as const })}
      />
    </div>
  );
}

export { Portrait };
