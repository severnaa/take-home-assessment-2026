'use client'

import { USAMap, USAStateAbbreviation } from '@mirawision/usa-map-react';

import customStates from './states'
import { StateRegistrationData } from '../lib/types';

export default function USAMapWrapper({data}: {data: StateRegistrationData[]}) {
    return <USAMap customStates={customStates(data)} />
}
