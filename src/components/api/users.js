const { NODE_ENV } = process.env
const BASE_URL = NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'tbd' // Once we deploy, we need to change this

export const users = async () => {
  const response = await fetch(`${BASE_URL}/api/users`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('journal-app')}`
    },
    method: 'GET'
  })
  const json = await response.json()
  return json.response
}