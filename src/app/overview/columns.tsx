import { ColumnDef, Column } from '@tanstack/react-table'
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<{[x: string]: {};}, any>[] = [
    { 
        accessorKey: 'State', 
        header: ({ column }) => toggelHeader(column, 'State'), 
        sortingFn: 'alphanumeric' 
    },
    { 
        accessorKey: 'DeadlineInPerson', 
        header: ({ column }) => toggelHeader(column, 'DeadlineInPerson'), 
        sortingFn: 'datetime' 
    },
    { 
        accessorKey: 'DeadlineByMail', 
        header: ({ column }) => toggelHeader(column, 'DeadlineByMail'), 
        sortingFn: 'datetime' 
    },
    { 
        accessorKey: 'DeadlineOnline', 
        header: ({ column }) => toggelHeader(column, 'DeadlineOnline'), 
        sortingFn: 'datetime' 
    },
    { 
        accessorKey: 'ElectionDayRegistration', 
        header: ({ column }) => toggelHeader(column, 'ElectionDayRegistration'), 
        sortingFn: 'alphanumeric' 
    },
    { 
        accessorKey: 'OnlineRegistrationLink', 
        header: ({ column }) => toggelHeader(column, 'OnlineRegistrationLink'), 
        sortingFn: 'alphanumeric' 
    },
    { 
        accessorKey: 'Description', 
        header: ({ column }) => toggelHeader(column, 'Description'),
        sortingFn: 'alphanumeric' 
    },
  ];


  const toggelHeader = ( column: Column<any, any>, child: string ) => {
    return (
        <button
            className="hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            onClick={() => {
                column.toggleSorting(column.getIsSorted() === "asc");
            }}
            >
            { child }
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
    );
  }