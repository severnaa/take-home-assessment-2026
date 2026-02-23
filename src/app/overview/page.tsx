import stateDataClient from "../lib/state-data-client";
import DataTable from "./data-table";

export default async function Page() {
    const parsedData= await stateDataClient()

    return (
        <div>
            <h1>Voter Registration Deadlines By State</h1>
            <DataTable data={parsedData}/>
        </div>
    );
  }
