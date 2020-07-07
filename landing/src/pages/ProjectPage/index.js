import React, { useEffect, useContext } from 'react'
import { useParams, useHistory, Redirect } from 'react-router-dom'

import { inDevelopment } from 'utils/env-utils'

import { IntroPicture } from 'components/Portfolio/IntroPicture'
import { Intro } from 'components/Portfolio/Intro'
import { BodyContent } from 'components/Sanity/index'
// import { Footer } from 'components/Portfolio/Footer'

// Contexts
import { ProjectsContext } from 'contexts/ProjectsContext'

// Style
import './index.scss'

export const ProjectPage = () => {
  const { projects, loaded, dataLoaded } = useContext(ProjectsContext)
  let { slug: urlSlug } = useParams()
  let history = useHistory();

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const projectSlugs = projects.map((project) =>{ return project.slug })

  const slugMatch = projectSlugs.includes(urlSlug)
  
  const project = projects.find(({ slug }) => {
    return slug === urlSlug })

useEffect(() => {
  console.log(slugMatch)
  if (loaded){
    if (slugMatch) {
      (document.title = `Jono is ${project.jonoIs}`)
    } else {
      history.push("/")
    }
  } 
}, [loaded, history, project])

  if (inDevelopment) {
    console.group("Data Status")
      console.log(loaded ? "I'm done loading" : "I'm still loading" )
      console.log(dataLoaded ? "and my data is done loading too!" : "but my data is still loading")
      console.log(project)
    console.groupEnd()
  }

//A change
  return (loaded && slugMatch &&
    <div className="project-page">
      <IntroPicture image={ project.bannerImage } backgroundColor={ project.bannerImageBackgroundColor } />
      <Intro 
        title={ project.tagline }
        clientName={ project.clientName }
        description={ project.description }
        headline={ project.headline }
        hats= { project.hats }
        link={ project.projectLink }
        gradientValues={ project.gradient } 
      />
      {/* Render below the fold on data fetch */}
      {dataLoaded && 
        <BodyContent 
          className={ project.slug.current }
          blocks={ project.data } 
        /> 
      }
      {/* {loaded &&  
        <Footer currentProject={ urlSlug } projects={ projects } />
      } */}
    </div>  
  )
}