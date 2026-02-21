import DataTable from "../lib/data-table";

const LOCAL_API = 'http://localhost:3000/api/state_data'

export default async function Page() {
    const response = await fetch(LOCAL_API);
    const data = await response.text();
    const parsedData = JSON.parse(data)


    return (
        <div>
            <h1>Voter Registration Deadlines By State</h1>
            <DataTable data={parsedData}/>
        </div>
    );
  }





