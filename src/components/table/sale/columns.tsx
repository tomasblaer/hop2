"use client";
import { item, itemType } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Checkbox } from "../../ui/checkbox";

export const columns: ColumnDef<item>[] = [
  {
    accessorKey: "itemType",
    header: "Vörutegund",
    cell: ({ row }) => {
      const itemType: itemType = row.getValue("itemType");
      const { name } = itemType;
      if (name) {
        return name;
      }
      return "Vörutegund hefur ekki nafn";
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
    accessorKey: "itemType",
    header: "Verð",
    cell: ({ row }) => {
      const itemType: itemType = row.getValue("itemType");
      const { price } = itemType;
      return `${price} kr`;
    },
  },
];
