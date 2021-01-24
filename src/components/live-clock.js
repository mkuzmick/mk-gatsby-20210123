import React  from 'react';
import Clock from 'react-live-clock';

export default function MyLiveClock () {
    return(
        <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        </div>
    ) 
}