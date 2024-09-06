import { SONG_SEARCH } from '../actions'

const initialState = {
  search: null,
}

const songSearch = (state = initialState, action) => {
  switch (action.type) {
    case SONG_SEARCH:
        return {
          ...state,
          search: action.payload,
        };
    default:
      return state;
  }
}

export default songSearch
