export default function Home(props) {
  const { episodes } = props;

  console.log(episodes);

  return (
    <h1>Index</h1>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    // Every 8 hours (which means that 3 api calls are going to be made by day)
    revalidate: 60 * 60 * 8,
  };
}
