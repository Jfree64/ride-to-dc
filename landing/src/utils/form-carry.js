import qs from 'qs'
import axios from 'axios'
import { inDevelopment } from 'utils/env-utils'

//Used to subscribe
export const subscribeEmail = formData => {
  return axios.post(
    '',
    qs.stringify(formData)
  )
    .catch(e => {
      if (inDevelopment()) {
        console.error(e)
      }
      throw new Error(e)
    })
}

export const camelToSnake = text => {
  return text.replace(/([A-Z])/g, $1 => '_' + $1.toLowerCase())
}
