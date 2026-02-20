'use client'

import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

export default function DataTable({data}: {data: string}) {

    const parsedData = JSON.parse(data)
    const columns = [
        { accessorKey: 'State', header: 'State' },
        { accessorKey: 'DeadlineInPerson', header: 'DeadlineInPerson' },
        { accessorKey: 'DeadlineByMail', header: 'DeadlineByMail' },
        { accessorKey: 'DeadlineOnline', header: 'DeadlineOnline' },
        { accessorKey: 'ElectionDayRegistration', header: 'ElectionDayRegistration' },
        { accessorKey: 'OnlineRegistrationLink', header: 'OnlineRegistrationLink' },
        { accessorKey: 'Description', header: 'Description' },
    ]
    const table = useReactTable({ data: parsedData, columns, getCoreRowModel: getCoreRowModel() })

    return (
        <table>
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
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
      )
  }