import Link from 'next/link'

export default async function Page() {

  return (
    <main>
      <h1>USA Voter Registration Data</h1>
      <ul>
        <li><Link href={'/overview'}>Voter Registration Data Overview</Link></li>
        <li><Link href={'/state'}>Map showing off Data</Link></li>
      </ul>
    </main>
  );
}
