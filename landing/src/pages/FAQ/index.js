import React, { useContext } from 'react';

import { ContentContext } from 'contexts/ContentContext'

import './index.scss';
import { BodyContent } from 'components/Sanity';

export const FAQ = () => {
  const {content, loaded } = useContext(ContentContext)
  loaded && console.log(content)
  return(
    <div className='faq page' >
        <h1 className=''>FAQ</h1>
        <div className='page-content'>
          {loaded &&
            content.faq.map(({name, content}, i)  => 
              <section key={i}>
                <h2>{name}</h2>
                  <BodyContent blocks={content} />
              </section>
            )
          }
        </div>
    </div>
    )
}