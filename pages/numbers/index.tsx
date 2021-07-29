import React from 'react';
import { GetServerSideProps } from 'next';
import { AppMain } from '../../components';
import { IListPattern } from '../../interfaces';

interface INumbers {
  data: IListPattern[];
}

const Numbers: React.FC<INumbers> = ({ data }) => {
  return <AppMain data={data} />;
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
