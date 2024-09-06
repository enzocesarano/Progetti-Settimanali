import { GET_SONG } from '../actions'

const initialState = {
  queen: [],
}

const queen = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG:
      if (action.artist === "queen") {
        return {
          ...state,
          queen: action.payload,
        };
      }
      return state;
    default:
      return state;
  }
}

export default queen
