import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const isTrue = (environmentVariable) => {
  return environmentVariable === 'true'
}

export function inDevelopment () {
  return isTrue(process.env.REACT_APP_DEVELOPMENT)
}

export const createUserId = () => {
  return (
    `${Math.random()
      .toString(36)
      .slice(2)}_` +
    `${Math.random()
      .toString(36)
      .slice(2)}`
  )
}

export const getUserId = () => {
  return cookies.get('user_id')
}

export const setUserId = (userId) => {
  const twoYears = 63072000
  cookies.set('user_id', userId, { maxAge: twoYears })
}

export const getAppContainerID = () => {
  return process.env.REACT_APP_CONTAINER_ID || "root"
}