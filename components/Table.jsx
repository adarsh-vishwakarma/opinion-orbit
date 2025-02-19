"use client";

import React, { useState, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const FeedbackTable = ({ feedbacks }) => {
  console.log(feedbacks); // Debugging: Check received feedbacks

  const [searchQuery, setSearchQuery] = useState("");

  // Filtered feedbacks based on userName search
  const filteredData = useMemo(() => {
    return feedbacks
      .filter((feedback) =>
        feedback.userName.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((feedback, index) => ({
        ...feedback,
        autoId: index + 1, // Auto-incremented ID
      }));
  }, [feedbacks, searchQuery]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "autoId",
        header: "ID",
      },
      {
        accessorKey: "userName",
        header: "User Name",
      },
      {
        accessorKey: "userEmail",
        header: "User Email",
      },
      {
        accessorKey: "message",
        header: "Message",
      },
      {
        accessorKey: "rating",
        header: "Rating",
        cell: ({ row }) => {
          const rating = row.original.rating || Math.floor(Math.random() * 5) + 1; // Default rating if missing
          return "⭐".repeat(rating);
        },
      },
    ],
    []
  );

  // Initialize the table with filtered data
  const table = useReactTable({
    columns,
    data: filteredData, // Pass filtered data
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-full overflow-x-auto">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by User Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-300 min-w-[500px]">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 border border-gray-300 cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === "asc" ? " 🔼" : " 🔽"}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 border border-gray-300 text-sm sm:text-base">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="p-2 text-center">
                No feedbacks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
