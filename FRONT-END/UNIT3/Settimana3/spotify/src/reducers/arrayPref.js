import { ADD_TO_PREF, REMOVE_FROM_PREF } from "../actions";


const initialState = {
  arrayPref: [],
};

const arrayPref = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PREF:
      return {
        ...state,
        arrayPref: [...state.arrayPref, action.payload],
      };

    case REMOVE_FROM_PREF:
      return {
        ...state,
        arrayPref: state.arrayPref.filter(
          (state) => state.id !== action.payload.id
        ),
      };

    default: {
      return state;
    }
  }
};

export default arrayPref;
