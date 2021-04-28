import { GetStaticProps } from 'next';

type Episode = {
    id: string;
    title: string;
    members: string;
    // ...
}

type HomeProps = {
  episodes: Episode[]
}

export default function Home(props: HomeProps) {
  const { episodes } = props;

  console.log(episodes);

  return (
    <h1>Index</h1>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes?_limit=12&_published_at&_order=desc');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    // Every 8 hours (which means that 3 api calls are going to be made by day)
    revalidate: 60 * 60 * 8,
  };
};
