import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { Header, Lists, TopNavigation } from '../../components';

const Numbers = ({ data }: any) => {
  return (
    <div className="container">
      <Header />
      <TopNavigation />
      <Lists data={data} />
    </div>
  );
};

export default Numbers;

export async function getServerSideProps(req: NextApiRequest, res: NextApiResponse<any>) {
  const dataJSON = await fetch('https://60feed9f257411001707883e.mockapi.io/numbers');
  const data = await dataJSON.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}