import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({ title, subtitle, className, dark = false }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className={cn(
        "text-4xl md:text-5xl font-serif mb-4",
        dark ? "text-white" : "text-gray-900"
      )}>
        {title}
      </h2>
      {subtitle && (
        <div className={cn(
          "w-24 h-1 mx-auto rounded-full mb-6",
          dark ? "bg-white/30" : "bg-primary/30"
        )} />
      )}
      {subtitle && (
        <p className={cn(
          "max-w-2xl mx-auto text-lg leading-relaxed",
          dark ? "text-gray-200" : "text-gray-600"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
