const LOCAL_API = 'http://localhost:3000/api/state_data'

export default async function Page() {
  const response = await fetch(LOCAL_API);
  const data = await response.text();

  return (
    <main>
      <h1>HELLO</h1>
      <h1>{data}</h1>
    </main>
  );
}
