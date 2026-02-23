'use client'

import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, getSortedRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import { columns } from './columns'
import { Input } from '../lib/ui/input'
import { StateRegistrationData } from '../lib/types'


// Table implemented with tansttack to hold all state registration related data
// Styling is added inline for the table
export default function DataTable({data}: {data: StateRegistrationData[]}) {
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
    <div>
      <Input
        value={globalFilter || ''}
        onChange={e => table.setGlobalFilter(String(e.target.value))}
        placeholder="Search..."
      />
      <table style={{width: "100%", borderCollapse: "collapse"}}>
      <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan} style={{border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2"}}>
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{border: "1px solid #ddd", padding: "8px", textAlign: "left"}}>
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
