import React from 'react';
import { GetServerSideProps } from 'next';
import { AppMain } from '../../components';
import { IListPattern } from '../../interfaces';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setPatternsItems } from '../../store/slices/patternsSlice';

interface IMail {
  data: IListPattern[];
}

const Mail: React.FC<IMail> = ({ data }) => {
  const { items, searchQuery } = useSelector((state: RootState) => state.patterns);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setPatternsItems(data));
  }, [dispatch, data, searchQuery]);

  return <AppMain data={items} name={'Next RGXP | Mail'} />;
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
