import React from 'react';
import stateDataClient from '../lib/state-data-client';
import USAMapWrapper from './usa-map-wrapper';
import { StateRegistrationData } from '../lib/types';

export default async function Page() {

    const stateData: StateRegistrationData[] = await stateDataClient()

    return (
    <div>
      <h1>Voter Registration By State</h1>
      <USAMapWrapper data={stateData}/>
    </div>
    )
  };
  