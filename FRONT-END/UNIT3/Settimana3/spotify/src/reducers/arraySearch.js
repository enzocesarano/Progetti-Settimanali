import { GET_SONG_SEARCH } from "../actions";

const initialState = {
  arraySearch: [],
}

const arraySearch = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG_SEARCH:
        return {
          ...state,
          arraySearch: action.payload,
        };
    default:
      return state;
  }
};

export default arraySearch