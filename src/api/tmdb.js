import apiKeys from './apiKeys'

const baseUrl = 'https://api.themoviedb.org/3'

export const search = (type, query) => new Promise((resolve, reject) => {
  let typeTvdb

  switch (type) {
    case 'anime':
    case 'serie':
      typeTvdb = 'tv'
      break
    case 'movie':
      typeTvdb = 'movie'
      break
    default:
      reject(new Error('Tried make a search at the API with an incorrect type: ' + type))
  }

  fetch(`${baseUrl}/search/${typeTvdb}?api_key=${apiKeys.tmdb}&query=${query}`)
    .then(data => data.json())
    .then(data => resolve(data))
    .catch(data => reject(data))
})
