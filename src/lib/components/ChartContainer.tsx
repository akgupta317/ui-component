import React, { useState } from "react";
import { ResponsiveContainer } from "recharts";
import { ArrowUpRight, Info } from "lucide-react";
import { cn } from "../utils/cn";

export interface ChartContainerProps {
  /**
   * The title of the chart
   */
  title?: string;

  /**
   * Chart content to render inside the container
   */
  children: React.ReactNode;

  /**
   * Optional description to show in the info panel
   */
  infoDescription?: string;

  /**
   * Optional calculation details to show in the info panel
   */
  infoCalculation?: string;

  /**
   * Function to execute when the title is clicked
   */
  onTitleClick?: () => void;

  /**
   * Optional custom height for the chart
   */
  chartHeight?: number | string;

  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * ChartContainer - A reusable component for displaying charts with an optional info panel
 */
export const ChartContainer = ({
  title = "Chart",
  children,
  infoDescription = "",
  infoCalculation = "",
  onTitleClick,
  chartHeight = "200px",
  className,
}: ChartContainerProps) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={cn(
        "bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02] transform group",
        showInfo ? "" : "h-80",
        className
      )}>
      <div className="text-lg mb-4 ml-4 mr-4 flex flex-row justify-between items-center">
        <div
          className={cn(
            "flex flex-row items-center gap-2",
            onTitleClick ? "hover:text-primary cursor-pointer" : ""
          )}
          onClick={onTitleClick}>
          <h3 className="text-2xl text-gray-500 group-hover:text-primary transition-colors">
            {title}
          </h3>
          {onTitleClick && (
            <ArrowUpRight className="cursor-pointer text-gray-500 hover:text-primary" />
          )}
        </div>

        {(infoDescription || infoCalculation) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(!showInfo);
            }}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={
              showInfo ? "Hide chart information" : "Show chart information"
            }>
            <Info size={20} />
          </button>
        )}
      </div>

      <div
        className={showInfo ? "h-auto" : "h-[200px]"}
        style={{ height: showInfo ? "auto" : chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>

      {showInfo && (infoDescription || infoCalculation) && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md w-full">
          {infoDescription && (
            <p className="text-sm text-gray-600 mb-2">{infoDescription}</p>
          )}
          {infoCalculation && (
            <div className="text-xs font-mono bg-white p-2 rounded border">
              {infoCalculation}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChartContainer;
