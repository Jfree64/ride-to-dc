import sanityClient from '@sanity/client'
import appConfig from 'app.config'

const sanityConfig = appConfig.sanity

export const sanity = sanityClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  useCdn: true
})

export const getData = (query) => {
  try {
      const data = sanity.fetch(query)
      return data;
    }
    catch (err) {
      console.log('fetch failed', err);
    }
}
