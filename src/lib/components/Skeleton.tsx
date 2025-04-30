import { cn } from "../utils/cn";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export const Skeleton = ({
  className,
  width = "100%",
  height = "1rem",
}: SkeletonProps) => {
  return (
    <div
      className={cn("animate-pulse rounded bg-gray-200/80", className)}
      style={{ width, height }}
    />
  );
};
