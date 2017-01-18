import apiKeys from './apiKeys.js'

export const search = (type, query, callback) => {
  let treatedType
  switch (type) {
    case 'serie':
    case 'anime':
      treatedType = 'show'
      break
    case 'movie':
      treatedType = 'movie'
      break
    default:
      break
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': apiKeys.trakt.clientId
  })

  const request = new Request(`https://api.trakt.tv/search/${treatedType}?query=${query}`, {
    headers,
    method: 'GET'
  })

  fetch(request).then((resp) => {
    return resp.json()
  }).then((json) => {
    const jsonWhithoutDupes = []
    json.forEach((e) => {
      if (!jsonWhithoutDupes.find(x => x.show.ids.slug === e.show.ids.slug)) {
        jsonWhithoutDupes.push(e)
      }
    })

    if (callback && typeof callback === 'function') {
      callback(jsonWhithoutDupes)
    }
  })
}
