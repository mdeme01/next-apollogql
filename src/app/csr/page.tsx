'use client';

import { useQuery } from '@apollo/client';
import { getUsers } from '@/graphql/queries';

export default function Page() {
  const { loading, error, data } = useQuery(getUsers);

  if (error) {
    console.error(error);
    return <div>error</div>;
  }

  if (loading) return <div>loading...</div>;

  return (
    <main>
      <h2>With client side rendering</h2>
      {data && data.userCollection?.edges.map((edge, idx) => <div key={idx}>{edge.node.name}</div>)}
    </main>
  );
}
