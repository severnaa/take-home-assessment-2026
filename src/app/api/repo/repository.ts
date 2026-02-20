import { Client } from 'pg'

const DB_URL = "postgres://postgres:test@localhost:5432/state_registration_deadlines";
const user = "postgres";
const password = "test";
const host = "localhost";
const port = 5432;


export async function getStateData() {
    let result: String | null = null;
    const client = new Client({
        user,
        host,
        database: "state_registration_deadlines",
        password,
        port,
    });
    try {
        await client.connect();
        const res = await client.query('SELECT * FROM voter_registration_deadlines;')
        console.log('Pulled all data from table')
        result = JSON.stringify(res.rows);
    } catch (err) {
        console.error(err);
    } finally {
        await client.end()
    }
    return result || "Data is not available"
};


