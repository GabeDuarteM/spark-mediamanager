const SET_VISIBILITY_FILTER = { type: 'SET_VISIBILITY_FILTER' }

export const setVisibilityFilter = (filter) => {
  return { ...SET_VISIBILITY_FILTER, payload: filter }
}
