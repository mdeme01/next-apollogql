import { getUsers } from '@/graphql/queries';
import { ssrApolloClient } from '@/apollo/apollo-client';

export default async function Page() {
  const { loading, error, data } = await ssrApolloClient.query({ query: getUsers });

  if (error) {
    console.error(error);
    return <div>error</div>;
  }

  if (loading) return <div>loading...</div>;

  return (
    <main>
      <h2>With server side rendering</h2>
      {data.userCollection?.edges.map((edge, idx) => (
        <div key={idx}>{edge.node.name}</div>
      ))}
    </main>
  );
}
