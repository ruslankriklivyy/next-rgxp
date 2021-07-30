import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { Lists } from '../../components';
import { IListPattern } from '../../interfaces';
import { RootState } from '../../store/store';
import { setPatternsItems } from '../../store/slices/patternsSlice';
import { Layout } from '../../layouts/layout';

interface IOther {
  data: IListPattern[];
}

const Other: React.FC<IOther> = ({ data }) => {
  const { items, searchQuery } = useSelector((state: RootState) => state.patterns);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setPatternsItems(data));
  }, [dispatch, data, searchQuery]);

  return (
    <Layout name={'Next RGXP | Others'}>
      <Lists data={items} />
    </Layout>
  );
};

export default Other;

export async function getServerSideProps(req: NextApiRequest, res: NextApiResponse<any>) {
  const dataJSON = await fetch('https://60feed9f257411001707883e.mockapi.io/symbols');
  const data = await dataJSON.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
