import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Skeleton } from "./Skeleton";
import { cn } from "../utils/cn";
import { Search } from "lucide-react";

// Types
export type SortingState = {
  id: string;
  desc: boolean;
} | null;

export type ColumnDef<T> = {
  id: string;
  accessorKey?: string;
  header: string | React.ReactNode;
  cell: (info: { row: T }) => React.ReactNode;
  enableSorting?: boolean;
  enableFiltering?: boolean;
};

export type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  totalItems?: number;
  isLoading?: boolean;
  enableSorting?: boolean;
  enableColumnFilters?: boolean;
  enableGlobalFilter?: boolean;
  enablePagination?: boolean;
  enableColumnVisibility?: boolean;
  enableRowSelection?: boolean;
  stickyHeader?: boolean;
  stickyFirstColumn?: boolean;
  initialSorting?: SortingState;
  initialPageSize?: number;
  pageSizes?: number[];
  onSortingChange?: (sorting: SortingState) => void;
  onPaginationChange?: (pageIndex: number, pageSize: number) => void;
  onColumnFiltersChange?: (filters: any) => void;
  onColumnVisibilityChange?: (visibility: Record<string, boolean>) => void;
  onGlobalFilterChange?: (filter: string) => void;
  onRowSelectionChange?: (selectedRows: any[]) => void;
  emptyStateTitle?: string;
  emptyStateDescription?: string;
  emptyStateAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
};

const defaultPageSizes = [5, 10, 20, 50, 100, 200];

export function Table<T>({
  data,
  columns,
  totalItems = 0,
  isLoading = false,
  enableSorting = true,
  enableColumnFilters = false,
  enableGlobalFilter = false,
  enablePagination = true,
  enableColumnVisibility = true,
  enableRowSelection = false,
  stickyHeader = true,
  stickyFirstColumn = true,
  initialSorting = null,
  initialPageSize = 10,
  pageSizes = defaultPageSizes,
  onSortingChange,
  onPaginationChange,
  onColumnFiltersChange,
  onColumnVisibilityChange,
  onGlobalFilterChange,
  onRowSelectionChange,
  emptyStateTitle = "No data found",
  emptyStateDescription = "Try adjusting your search or filter criteria to find what you're looking for.",
  emptyStateAction,
  className,
}: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>(initialSorting);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [currentColumnDropdown, setCurrentColumnDropdown] = useState<
    string | null
  >(null);
  const [showColumnFilter, setShowColumnFilter] = useState(false);

  // Calculate total pages
  const pageCount = Math.ceil(totalItems / pageSize);

  // Handle sorting
  const handleSortingChange = (columnId: string) => {
    let newSorting: SortingState = null;

    if (sorting === null) {
      newSorting = { id: columnId, desc: false };
    } else if (sorting.id !== columnId) {
      newSorting = { id: columnId, desc: false };
    } else if (sorting.id === columnId && !sorting.desc) {
      newSorting = { id: columnId, desc: true };
    }

    setSorting(newSorting);
    if (onSortingChange) {
      onSortingChange(newSorting);
    }
  };

  // Handle pagination
  const nextPage = () => {
    if (pageIndex < pageCount - 1) {
      setPageIndex(pageIndex + 1);
      if (onPaginationChange) {
        onPaginationChange(pageIndex + 1, pageSize);
      }
    }
  };

  const previousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      if (onPaginationChange) {
        onPaginationChange(pageIndex - 1, pageSize);
      }
    }
  };

  const changePageSize = (size: number) => {
    setPageSize(size);
    setPageIndex(0);
    if (onPaginationChange) {
      onPaginationChange(0, size);
    }
  };

  // Handle global filter
  const handleGlobalFilterChange = (value: string) => {
    setGlobalFilter(value);
    if (onGlobalFilterChange) {
      onGlobalFilterChange(value);
    }
  };

  // Handle column visibility
  const toggleColumnVisibility = (columnId: string, visible: boolean) => {
    const newVisibility = {
      ...columnVisibility,
      [columnId]: visible,
    };
    setColumnVisibility(newVisibility);
    if (onColumnVisibilityChange) {
      onColumnVisibilityChange(newVisibility);
    }
  };

  // Clear sorting
  const clearSorting = () => {
    setSorting(null);
    if (onSortingChange) {
      onSortingChange(null);
    }
  };

  // Render skeleton rows for loading state
  const renderSkeletons = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <tr key={`skeleton-${index}`} className="border-b border-gray-200">
        {columns.map((column, colIndex) => (
          <td
            key={`skeleton-col-${colIndex}`}
            className={cn(
              "px-6 py-4 whitespace-nowrap",
              colIndex === 0 &&
                stickyFirstColumn &&
                "sticky left-0 bg-white z-10 shadow-[8px_0_16px_-10px_rgba(0,0,0,0.2)]"
            )}>
            <Skeleton />
          </td>
        ))}
      </tr>
    ));
  };

  // Render empty state
  const renderEmptyState = () => (
    <tr>
      <td colSpan={columns.length} className="px-6 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <Search size={48} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {emptyStateTitle}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{emptyStateDescription}</p>
          {emptyStateAction && (
            <button
              onClick={emptyStateAction.onClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              {emptyStateAction.label}
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className={cn("flex flex-col", className)}>
      {enableGlobalFilter && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => handleGlobalFilterChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-2 rounded-md border-gray-200 border-collapse">
            <thead
              className={cn(
                "bg-gray-50 text-gray-500 tracking-wider h-[50px]",
                stickyHeader && "sticky top-0 z-20"
              )}>
              <tr>
                {columns.map((column, index) => {
                  const isFirstColumn = index === 0;
                  const isSorted = sorting?.id === column.id;
                  const isVisible = columnVisibility[column.id] !== false;

                  if (!isVisible) return null;

                  return (
                    <th
                      key={column.id}
                      className={cn(
                        "px-6 py-3 text-left whitespace-nowrap relative text-xs",
                        isFirstColumn &&
                          stickyFirstColumn &&
                          "sticky left-0 bg-gray-50 z-10 shadow-[8px_0_16px_-10px_rgba(0,0,0,0.2)]",
                        isSorted && "text-blue-600"
                      )}>
                      <div className="flex items-center">
                        <div
                          className={cn(
                            "flex-1",
                            column.enableSorting !== false &&
                              enableSorting &&
                              "cursor-pointer"
                          )}
                          onClick={() => {
                            if (
                              column.enableSorting !== false &&
                              enableSorting
                            ) {
                              handleSortingChange(column.id);
                            }
                          }}>
                          {column.header}
                        </div>

                        {/* Sorting indicators */}
                        {column.enableSorting !== false && enableSorting && (
                          <span className="inline-flex items-center ml-2">
                            {isSorted ? (
                              sorting.desc ? (
                                <ArrowDownIcon size={16} />
                              ) : (
                                <ArrowUpIcon size={16} />
                              )
                            ) : (
                              <div className="w-4 h-4 opacity-0 group-hover:opacity-50">
                                <ArrowUpIcon size={16} />
                              </div>
                            )}
                          </span>
                        )}

                        {/* Column actions dropdown */}
                        {enableColumnVisibility && (
                          <Menu as="div" className="relative ml-2">
                            <Menu.Button
                              className="flex items-center"
                              onClick={() =>
                                setCurrentColumnDropdown(column.id)
                              }>
                              <ChevronDownIcon
                                size={16}
                                className="text-gray-400"
                              />
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95">
                              <Menu.Items className="absolute right-0 z-30 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  {sorting?.id === column.id && (
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          onClick={clearSorting}
                                          className={cn(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "block px-4 py-2 text-sm w-full text-left"
                                          )}>
                                          Clear sort
                                        </button>
                                      )}
                                    </Menu.Item>
                                  )}
                                  {column.enableFiltering !== false &&
                                    enableColumnFilters && (
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            onClick={() =>
                                              setShowColumnFilter(true)
                                            }
                                            className={cn(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-sm w-full text-left"
                                            )}>
                                            Filter
                                          </button>
                                        )}
                                      </Menu.Item>
                                    )}
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        onClick={() =>
                                          toggleColumnVisibility(
                                            column.id,
                                            false
                                          )
                                        }
                                        className={cn(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm w-full text-left"
                                        )}>
                                        Hide column
                                      </button>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="bg-white text-sm">
              {isLoading
                ? renderSkeletons()
                : data.length === 0
                ? renderEmptyState()
                : data.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-gray-200 hover:bg-gray-50">
                      {columns.map((column, colIndex) => {
                        const isVisible = columnVisibility[column.id] !== false;
                        if (!isVisible) return null;

                        return (
                          <td
                            key={`${rowIndex}-${column.id}`}
                            className={cn(
                              "px-6 py-4 whitespace-nowrap border-b border-gray-200",
                              colIndex === 0 && stickyFirstColumn
                                ? "sticky left-0 bg-white z-10 shadow-[8px_0_16px_-10px_rgba(0,0,0,0.2)]"
                                : "text-gray-500"
                            )}>
                            {column.cell({ row })}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {enablePagination && data.length > 0 && (
          <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 flex items-center justify-center disabled:opacity-50"
                onClick={previousPage}
                disabled={pageIndex === 0}>
                <ChevronDownIcon className="rotate-90" size={20} />
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center disabled:opacity-50"
                onClick={nextPage}
                disabled={pageIndex >= pageCount - 1}>
                <ChevronDownIcon className="-rotate-90" size={20} />
              </button>
              <span className="flex items-center gap-1">
                <div className="text-sm text-gray-700">Page</div>
                <strong className="text-sm">
                  {pageIndex + 1} of {pageCount || 1}
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Size</span>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="rounded inline-flex bg-white gap-1 px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {pageSize}
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {pageSizes.map((size) => (
                        <Menu.Item key={size}>
                          {({ active }) => (
                            <button
                              onClick={() => changePageSize(size)}
                              className={cn(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm w-full text-left"
                              )}>
                              {size}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
