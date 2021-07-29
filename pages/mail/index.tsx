import React from 'react';
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next';
import { AppMain } from '../../components';
import { IListPattern } from '../../interfaces';

interface IMail {
  data: IListPattern[];
}

const Mail: React.FC<IMail> = ({ data }) => {
  return <AppMain data={data} />;
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
