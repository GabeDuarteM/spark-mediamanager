const filter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload
    default:
      return state
  }
}

export const filters = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibility: filter(state, action)
      }
    default:
      return state
  }
}
