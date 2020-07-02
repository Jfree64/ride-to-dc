// const getBlockContent = fieldName => `${fieldName}[]{
//   ...,
//   markDefs[]{
//     ...,
//     _type == "internalLink" => {
//       "slug": @.reference->slug
//     }
//   }
// }`

export const homeContentQuery = `*[_type=="homeContent"][0] | {
  title,
  description,
  why[],
  what[]{title, content, examples, "img": img.asset -> url, "url": link -> slug.current, "link": link -> client},
  partners[]{name, url, "img": img.asset -> url},
  testimonials[]{name, title, content, "img": img.asset -> url}
}`

export const aboutContentQuery = `*[_type=="aboutContent"][0] | { 
  description,
  members[]{name, title, "img": img.asset -> url, bio},
}`

export const caseStudyQuery = `*[_type=="caseStudy"] | {
  client,
  project,
  "slug": slug.current,
  "mainImage": mainImage.asset -> url,
  description,
  timeframe,
  challenge,
  approach,
  outcome,
  deepDive
  // technologies[]->{name, url, "image": image.asset -> url}
}`