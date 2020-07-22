import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import { BodyContent } from 'components/Sanity/index'

import "./index.scss"

import { ContentContext } from 'contexts/ContentContext'

import './index.scss'

export function Blank() {
  const { pages, contentLoaded } = useContext(ContentContext)
  let { slug: urlSlug } = useParams()
  let history = useHistory();

  console.log(pages)
  
  const pageSlugs = pages.map((page) => { return page.slug })

  const slugMatch = pageSlugs.includes(urlSlug)
  
    const page = pages.find(({ slug }) => {
      return slug === urlSlug })

  //check to see if the slug exists in our project, otherwise send us home
  useEffect(() => {
    console.log(page)
    if (contentLoaded){
      if (slugMatch) {
        (document.title = page.title)
      } else {
        history.push("/")
      }
    }
  }, [contentLoaded, history, slugMatch, page])
  
  return (
    contentLoaded && 
    <div className="blank section-offset">
      {page.bannerImage && <img className="treatment-bannerImage" src={page.bannerImage} alt="banner"/>}
      <div className="page-content">
        <h2 className="page-title">{page.title}</h2>
        <BodyContent blocks={page.content}/>      
      </div>
    </div>
  );
}

