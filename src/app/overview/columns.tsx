import { ColumnDef, Column } from '@tanstack/react-table'
import { ArrowUpDown } from "lucide-react";
import { StateRegistrationData } from '../lib/types';

// Customized column definitions
// This is where sorting and sepcialized components can be implemented
export const columns: ColumnDef<StateRegistrationData, any>[] = [
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
        cell: ({ cell }) => {return (<a href={cell.getValue()}> Online Registration Link </a>)}
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
            onClick={() => {
                column.toggleSorting(column.getIsSorted() === "asc");
            }}
        >
            { child }
            <ArrowUpDown/>
        </button>
    );
  }
  