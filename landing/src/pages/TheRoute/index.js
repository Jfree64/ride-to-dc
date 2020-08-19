import React, { useEffect, useContext } from 'react';

import './index.scss';

// Contexts
import { ContentContext } from 'contexts/ContentContext'
import { findAllByTitle } from '@testing-library/react';
import { BodyContent } from 'components/Sanity';

export const TheRoute = () => {
  const { loaded, content } = useContext(ContentContext)
  const { schedule } = content
  console.log(schedule)
  return( loaded &&

    <div className='route page' >
      <h1 className=''>
      The Route
      </h1>
      {schedule.map((day) => 
      <div className='day'>
        <h2>{day.title}</h2>
        {day.mileage && <h3>Distance: <span>~{day.mileage}mi</span> Elevation: <span>~{day.elevation}ft</span></h3>}
        <BodyContent blocks={day.content}/>
      </div>  
      )}
    </div>
  )
}