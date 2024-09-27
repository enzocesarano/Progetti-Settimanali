import { GET_SONG } from "../actions";

const initialState = {
  eminem: [],
}

const eminem = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG:
      if (action.artist === "eminem") {
        return {
          ...state,
          eminem: action.payload,
        };
      }
      return state;
    default:
      return state;
  }
};

export default eminem;
