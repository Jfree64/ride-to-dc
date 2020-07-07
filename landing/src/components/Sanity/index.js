import React from 'react'
import appConfig from 'app.config'
import BlockToReact from '@sanity/block-content-to-react'
 

// Style
import './index.scss'

const serializers = {
  marks: {
    internalLink: ({mark, children}) => {
      const {slug = {}} = mark
      console.log(mark)
      const href = `../treatments/${slug.current}`
      return <a href={href}>{children}</a>
    }
  }
}

    
export const BodyContent = ({ className, blocks, ...props }) => {
  return(
    <div className={className}>
      <BlockToReact
        blocks={blocks}
        projectId={appConfig.sanity.id}
        dataset={appConfig.sanity.dataset}
        serializers={serializers}
        {...props}
      />
    </div>
  )
}