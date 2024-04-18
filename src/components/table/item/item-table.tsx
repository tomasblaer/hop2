"use client";
import { item } from "@/lib/types";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../../ui/button";
import { useCallback, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, DollarSign, Trash2 } from "lucide-react";

import { useToast } from "../../ui/use-toast";
import { getToken, revalidatePathAction } from "@/app/actions";
import { revalidatePath } from "next/cache";
import AddItemDialog from "@/components/forms/item-add-dialog";

type ItemTableProps = {
  columns: ColumnDef<item>[];
  data: item[];
  itemTypeId: string;
};

export default function ItemTable({
  columns,
  data,
  itemTypeId,
}: ItemTableProps) {
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 7,
  });

  const { toast } = useToast();

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
      pagination,
    },
  });

  const sellItems = useCallback(async (items: number[]) => {
    const token = await getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token!.value}`,
      },
      body: JSON.stringify({ items }),
    });
    const data = await res.json();
  }, []);

  const deleteItem = useCallback(async (id: number) => {
    const token = await getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/item/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token!.value}`,
      },
    });
    const data = await res.json();
  }, []);

  const onDelete = useCallback(() => {
    const rows = table.getFilteredSelectedRowModel().rows;
    if (rows.length === 0) {
      toast({
        title: "Villa",
        description: "Engar vörur valdar",
      });
      return;
    }
    if (rows.length === 1) {
      deleteItem(rows[0].original.id);
    } else {
      rows.forEach((row) => {
        deleteItem(row.original.id);
      });
    }

    table.toggleAllRowsSelected(false);
    revalidatePathAction(`/dashboard/item/${itemTypeId}`);
  }, [deleteItem, itemTypeId, table, toast]);

  const onSale = useCallback(async () => {
    if (table.getFilteredSelectedRowModel().rows.length === 0) {
      toast({
        title: "Villa",
        description: "Engar vörur valdar",
      });
      return;
    }
    const ids = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original.id);
    sellItems(ids);
    table.toggleAllRowsSelected(false);
    revalidatePathAction(`/dashboard/item/${itemTypeId}`);
    revalidatePathAction(`/dashboard/sales`);

  }, [itemTypeId, sellItems, table, toast]);

  const unsoldItems = useMemo(() => table.getRowModel().rows.filter((row) => !row.original.saleId).length, [table]);

  const totalItems = useMemo(() => table.getRowModel().rows.length, [table]);

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Engar vörur í vörutegund
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-2">
        <div className="grid grid-cols-4 mr-auto text-sm gap-x-2 ">
          <AddItemDialog id={itemTypeId} />
          <Button
            variant="outline"
            size="sm"
            title="Eyða vöru"
            onClick={onDelete}
          >
            <Trash2 />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-green-300 hover:bg-green-200"
            title="Skrá vöru sem selda"
            onClick={onSale}
          >
            <DollarSign />
          </Button>
          {totalItems > 0 && 
            <p className="text-sm my-auto font-semibold text-gray-600 select-none">Óseldar vörur: {unsoldItems}/{totalItems}</p>
          }
        </div>
        <div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowLeft />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
