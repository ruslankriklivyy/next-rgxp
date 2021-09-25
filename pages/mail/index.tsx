import React from 'react';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { IListPattern } from '../../interfaces';
import { RootState } from '../../store/store';
import { setPatternsItems } from '../../store/slices/patternsSlice';
import { Layout } from '../../layouts/Layout';
import { Lists } from '../../components/Lists';

interface IMail {
  data: IListPattern[];
}

const Mail: React.FC<IMail> = ({ data }) => {
  const { items, searchQuery } = useSelector((state: RootState) => state.patterns);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setPatternsItems(data));
  }, [dispatch, data, searchQuery]);

  return (
    <Layout name={'Next RGXP | Mail'}>
      <Lists data={items} />
    </Layout>
  );
};

export default Mail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const dataJSON = await fetch('https://60feed9f257411001707883e.mockapi.io/mail');
  const data = await dataJSON.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};
