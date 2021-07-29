import React from 'react';
import { Lists } from '.';
import { Header } from './Header';
import { TopNavigation } from './TopNavigation';

export const AppMain = ({ data }: any) => {
  return (
    <div className="container">
      <Header />
      <TopNavigation />
      <Lists data={data} />
    </div>
  );
};
