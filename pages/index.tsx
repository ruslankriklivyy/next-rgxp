import React from 'react';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { Lists } from '../components';
import { IListPattern } from '../interfaces';
import { setPatternsItems } from '../store/slices/patternsSlice';
import { RootState } from '../store/store';
import { Layout } from '../layouts/Layout';

interface IHome {
  data: IListPattern[];
}

const Home: React.FC<IHome> = ({ data }) => {
  const { items, searchQuery } = useSelector((state: RootState) => state.patterns);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setPatternsItems(data));
  }, [dispatch, data, searchQuery]);

  return (
    <Layout name="Next RGXP">
      <Lists data={items} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const dataJSON = await fetch('https://60feed9f257411001707883e.mockapi.io/all');
  const data: IListPattern[] = await dataJSON.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};
