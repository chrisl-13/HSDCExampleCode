import test from './test'

export function fetchUser(id) {
  return fetch(`https://swapi.dev/api/people/${id}/`)
    .then(response => response.json())
    .then(data => {
      const { name } = data;
      return name;
    })
}

export function fetchPosts(id) {
  return fetch(`https://swapi.dev/api/people/${id}/`)
    .then(response => response.json())
    .then(data => {
      const { starships } = data;
      return starships;
    })
}
