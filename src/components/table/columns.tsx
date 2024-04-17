"use client";
import { item } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "../ui/checkbox";

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
      const status = row.getValue("saleId");
      if (status) {
        return <Link href={`/dashboard/sale/${status}`}>Seld</Link>;
      }
      return "Óseld";
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Aðgerðir</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Eyða vöru</DropdownMenuItem>
            <DropdownMenuItem disabled={!item.saleId} >
              {item.saleId ?
                <Link href={`/dashboard/sale/${item.saleId}`}>
                  Skoða sölu
                </Link>
                : "Skoða sölu"
              }
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
