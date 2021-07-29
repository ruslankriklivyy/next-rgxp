import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { AppMain } from '../../components';
import { IListPattern } from '../../interfaces';

interface IOther {
  data: IListPattern[];
}

const Other: React.FC<IOther> = ({ data }) => {
  return <AppMain data={data} />;
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
