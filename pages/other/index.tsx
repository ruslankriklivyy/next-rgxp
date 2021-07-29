import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { AppMain } from '../../components';
import { IListPattern } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setPatternsItems } from '../../store/slices/patternsSlice';

interface IOther {
  data: IListPattern[];
}

const Other: React.FC<IOther> = ({ data }) => {
  const { items, searchQuery } = useSelector((state: RootState) => state.patterns);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setPatternsItems(data));
  }, [dispatch, data, searchQuery]);

  return <AppMain data={items} name={'Next RGXP | Others'} />;
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
