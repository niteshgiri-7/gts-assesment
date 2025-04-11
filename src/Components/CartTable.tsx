import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import useCart from "../hooks/useCart";
import { CartContextType, CartItem } from "../types/types";
import { ProductCellValue, QuantityCellValue } from "./TableCells";

const CartTable = ({ cartItems }: { cartItems: CartItem[] }) => {
  const { increment, decrement, removeItem } = useCart() as CartContextType;
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<CartItem>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:underline"
        >
          Product {column.getIsSorted() === "asc" ? "↑" : column.getIsSorted() === "desc" ? "↓" : ""}
        </button>
      ),
      cell: ({ row }) => <ProductCellValue item={row.original} />,
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:underline"
        >
          Price {column.getIsSorted() === "asc" ? "↑" : column.getIsSorted() === "desc" ? "↓" : ""}
        </button>
      ),
      cell: ({ row }) => (
        <div className="text-xs sm:text-sm text-gray-900">${row.original.price * 103}</div>
      ),
    },
    {
      accessorKey: "quantity",
      header: ({ column }) => (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:underline"
        >
          Quantity {column.getIsSorted() === "asc" ? "↑" : column.getIsSorted() === "desc" ? "↓" : ""}
        </button>
      ),
      cell: ({ row }) => (
        <QuantityCellValue
          item={row.original}
          onDecrement={decrement}
          onIncrement={increment}
        />
      ),
    },
    {
      id: "total",
      header: ({ column }) => (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:underline"
        >
          Total {column.getIsSorted() === "asc" ? "↑" : column.getIsSorted() === "desc" ? "↓" : ""}
        </button>
      ),
      cell: ({ row }) => (
        <div className="text-xs sm:text-sm text-gray-900">
          Rs.{row.original.price * 103 * row.original.quantity!}
        </div>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <button
          className="text-red-500 hover:text-red-700 flex justify-end"
          onClick={() => removeItem(row.original._id)}
          aria-label="Remove item"
        >
          <BiX className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: cartItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 overflow-hidden">
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-2 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;