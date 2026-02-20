import Link from 'next/link'

const LOCAL_API = 'http://localhost:3000/api/state_data'

export default async function Page() {
  const response = await fetch(LOCAL_API);
  const data = await response.text();

  return (
    <main>
      <h1>HELLO</h1>
      <Link href={'/overview'}>Voter Registration Data Overview</Link>
    </main>
  );
}
