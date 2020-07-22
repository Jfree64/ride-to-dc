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
            content.faq.map((category, i)  => 
              <section key={i}>
                <h2>{category.name}</h2>
                {category.questions.map(({question, answer}, i) =>
                <div className='question' key={i}>
                  <h3>{question}</h3>
                  <BodyContent blocks={answer} />
                </div>
                )}
              </section>
            )
          }
        </div>
    </div>
    )
}