'use client'

import { StateAbbreviations, USAStateAbbreviation } from '@mirawision/usa-map-react';
import dataLabeler from '../lib/data-labeler'
import { statesMapping } from '../lib/state-mapping';
import { StateRegistrationData } from '../lib/types';


export default function customStates(data: StateRegistrationData[]):{[x: string]: any;} {
    const labeledData = dataLabeler(data)

    let customStateData: {[x: string]: any;} = {}

    StateAbbreviations.forEach( abbr => {
        let fullStateName = statesMapping[abbr]
        let stateData = labeledData[fullStateName]

        let customState = {
            fill: 'green',
            tooltip: {
                render: (state: USAStateAbbreviation) => stateToolTip(stateData)
            }
        }

        customStateData[abbr] = customState
    })

    return customStateData
}

const stateToolTip = (stateRegistrationData: StateRegistrationData) => {
    return(
        <div>
            <h1>{stateRegistrationData.State}</h1>
            <dl>
                <dt>Registration Deadline In-Person:</dt>
                <dd>{stateRegistrationData.DeadlineInPerson}</dd>
                <dt>Registration Deadline By Mail:</dt>
                <dd>{stateRegistrationData.DeadlineByMail}</dd>
                <dt>Registration Deadline Online:</dt>
                <dd>{stateRegistrationData.DeadlineOnline}</dd>
                <dt>Election Day Registration:</dt>
                <dd>{stateRegistrationData.ElectionDayRegistration}</dd>
                <dt>Online Registration Link:</dt>
                <dd>{stateRegistrationData.OnlineRegistrationLink}</dd>
                <dt>Description:</dt>
                <dd>{stateRegistrationData.Description}</dd>
            </dl>
        </div>
    )
}
