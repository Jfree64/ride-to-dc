const getBlockContent = fieldName => `${fieldName}[]{
  ...,
  markDefs[]{
    ...,
    _type == "internalLink" => {
      "slug": @.reference->slug
    }
  }
}`


export const contentQuery = `*[_type=="content"][0] | {
  title,
  faq,
  schedule
}`

export const pagesQuery = `*[_type=="page"] | {
  title,
  "slug": slug.current, 
  "bannerImage": bannerImage.asset -> url,
  "content": ${getBlockContent("content")}
}`