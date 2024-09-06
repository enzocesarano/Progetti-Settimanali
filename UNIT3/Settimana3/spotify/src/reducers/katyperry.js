import { GET_SONG } from '../actions'

const initialState = {
  katyperry: [],
}

const katyperry = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG:
      if (action.artist === "katyperry") {
        return {
          ...state,
          katyperry: action.payload,
        };
      }
      return state;
    default:
      return state;
  }
}

export default katyperry