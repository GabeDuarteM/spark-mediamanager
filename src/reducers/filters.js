const filter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export const filters = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filters: { visibility: filter(undefined, action) }
      }
    default:
      return state
  }
}
