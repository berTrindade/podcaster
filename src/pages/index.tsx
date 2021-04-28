import { GetStaticProps } from 'next';
import { api } from '../services/api';

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
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
    },
  });

  return {
    props: {
      episodes: data,
    },
    // Every 8 hours (which means that 3 api calls are going to be made by day)
    revalidate: 60 * 60 * 8,
  };
};
