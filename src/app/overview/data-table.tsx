'use client'

import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, getSortedRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import { columns } from './columns'
import { Input } from '../lib/ui/input'



export default function DataTable({data}: {data: any}) {
  const [globalFilter, setGlobalFilter] = useState<any>([])
  const table = useReactTable({ 
    data, 
    columns: columns, 
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: 'includesString',
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter
    })

  return (
    <div className="container py-10 mx-auto">
      <Input
        value={globalFilter || ''}
        onChange={e => table.setGlobalFilter(String(e.target.value))}
        placeholder="Search..."
        className="max-w-sm"
      />
      <table>
      <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className= "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                    {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}