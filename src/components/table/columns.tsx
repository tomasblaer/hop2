'use client'
import { item } from '@/lib/types'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<item>[] = [
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'comment',
    header: 'Comment',
  },
  {
    accessorKey: 'saleId',
    header: 'Sale',
  },
]