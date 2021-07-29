import React from 'react';
import { GetServerSideProps } from 'next';
import { AppMain } from '../../components';
import { IListPattern } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setPatternsItems } from '../../store/slices/patternsSlice';

interface INumbers {
  data: IListPattern[];
}

const Numbers: React.FC<INumbers> = ({ data }) => {
  const { items, searchQuery } = useSelector((state: RootState) => state.patterns);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setPatternsItems(data));
  }, [dispatch, data, searchQuery]);

  return <AppMain data={items} name={'Next RGXP | Numbers'} />;
};

export default Numbers;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const dataJSON = await fetch('https://60feed9f257411001707883e.mockapi.io/numbers');
  const data = await dataJSON.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};
