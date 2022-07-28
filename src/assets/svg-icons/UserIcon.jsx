import * as React from 'react';

export default function UserIcon(props) {
  return (
    <svg
      id='person'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='27'
      height='27'
      viewBox='0 0 27 27'
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1='0.5'
          x2='0.595'
          y2='1.185'
          gradientUnits='objectBoundingBox'
        >
          <stop offset='0' stopColor='#d3b651' />
          <stop offset='0.455' stopColor='#f0d87b' />
          <stop offset='1' stopColor='#c77131' />
        </linearGradient>
      </defs>
      <path
        id='Path_1'
        dataname='Path 1'
        d='M29.25,31.5a2.2,2.2,0,0,0,2.25-2.25c0-2.25-2.25-9-13.5-9S4.5,27,4.5,29.25A2.2,2.2,0,0,0,6.75,31.5ZM6.761,29.376v0ZM6.8,29.25H29.2l.032-.005.018,0A6.007,6.007,0,0,0,27.378,25.5c-1.467-1.466-4.228-3-9.378-3s-7.911,1.53-9.378,3A6.025,6.025,0,0,0,6.75,29.241Zm22.442.126v0ZM18,15.75a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,18,15.75Zm6.75-4.5A6.75,6.75,0,1,1,18,4.5,6.75,6.75,0,0,1,24.75,11.25Z'
        transform='translate(-4.5 -4.5)'
        fillRule='evenodd'
        fill='url(#linear-gradient)'
      />
    </svg>
  );
}
