import { SONG_CLICK } from "../actions";

const initialState = {
  clicked: [],
};

const clicked = (state = initialState, action) => {
  switch (action.type) {
    case SONG_CLICK:
        return {
          clicked: action.payload,
        };
    default:
      return state;
  }
};

export default clicked;