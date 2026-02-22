'use client'

import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, getSortedRowModel, ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'

const COLUMNS: ColumnDef<{[x: string]: {};}, any>[] = [
  { accessorKey: 'State', header: 'State', sortingFn: 'alphanumeric' },
  { accessorKey: 'DeadlineInPerson', header: 'DeadlineInPerson', sortingFn: 'datetime' },
  { accessorKey: 'DeadlineByMail', header: 'DeadlineByMail', sortingFn: 'datetime' },
  { accessorKey: 'DeadlineOnline', header: 'DeadlineOnline', sortingFn: 'datetime' },
  { accessorKey: 'ElectionDayRegistration', header: 'ElectionDayRegistration', sortingFn: 'alphanumeric' },
  { accessorKey: 'OnlineRegistrationLink', header: 'OnlineRegistrationLink', sortingFn: 'alphanumeric' },
  { accessorKey: 'Description', header: 'Description', sortingFn: 'alphanumeric' },
];

export default function DataTable({data}: {data: any}) {
  const [globalFilter, setGlobalFilter] = useState<any>([])
  const table = useReactTable({ 
    data, 
    columns: COLUMNS, 
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: 'includesString',
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter
    })

  console.log("Hello!!!")

  return (
    <div>
      <input
        value={globalFilter || ''}
        onChange={e => table.setGlobalFilter(String(e.target.value))}
        placeholder="Search..."
      />
      <table>
      <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                                ? 'Sort descending'
                                : 'Clear sort'
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
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
                <td key={cell.id}>
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