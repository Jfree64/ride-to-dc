import React, { useContext } from 'react';

import { ContentContext } from 'contexts/ContentContext'

import './index.scss';

export const FAQ = () => {
  const {content, loaded } = useContext(ContentContext)
  loaded && console.log(content)
  return(
    <div className='faq page' >
        <h1 className=''>FAQ</h1>
        <h2 className=''>a RIDE to recognize the EXISTENCE <br/> and SIGNIFICANCE of BLACK LIVES.</h2>
    </div>
    )
}