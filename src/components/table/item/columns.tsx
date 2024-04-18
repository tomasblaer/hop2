"use client";
import { item } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Checkbox } from "../../ui/checkbox";

export const columns: ColumnDef<item>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "location",
    header: "Staðsetning",
    cell: ({ row }) => {
      const location = row.getValue("location");
      if (location) {
        return location;
      }
      return "Engin skráð staðsetning";
    },
  },
  {
    accessorKey: "comment",
    header: "Athugasemd",
    cell: ({ row }) => {
      const comment = row.getValue("comment");
      if (comment) {
        return comment;
      }
      return "Engin athugasemd";
    },
  },
  {
    accessorKey: "saleId",
    header: "Staða",
    cell: ({ row }) => {
      const saleId = row.getValue("saleId");
      if (saleId) {
        return <Link href={`/dashboard/sale/${saleId}`} className="font-semibold hover:font-bold ease-in duration-150">Seld</Link>;
      }
      return "Óseld";
    },
  },
];
