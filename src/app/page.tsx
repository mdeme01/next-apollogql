import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome</h1>
      <Link href={'/csr'}>Client side rendering</Link>
      <br />
      <Link href={'/ssr'}>Server side rendering</Link>
    </main>
  );
}
