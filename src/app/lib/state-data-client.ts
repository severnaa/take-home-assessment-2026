import { StateRegistrationData } from './types'

const LOCAL_API = 'http://localhost:3000/api/state_data'

export default async function stateDataClient(): Promise<StateRegistrationData[]> {
    try{
        const response = await fetch(LOCAL_API);
        const data = await response.text();
        return JSON.parse(data) as StateRegistrationData[]
    } catch (e) {
        console.error("Something went wrong when calling data from API" + e)
    }
}
