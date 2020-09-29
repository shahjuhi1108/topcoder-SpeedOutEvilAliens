import React from 'react';
import Layout from '../../components/Layout';
import SpeedCounter from './SpeedCounter';

function action() {
  return {
    component: (
      <Layout>
        <SpeedCounter />
      </Layout>
    ),
  };
}

export default action;
