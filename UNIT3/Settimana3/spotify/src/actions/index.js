

export const ADD_TO_PREF = "ADD_TO_PREF";
export const REMOVE_FROM_PREF = "REMOVE_FROM_PREF";
export const GET_SONG = "GET_SONG";
export const SONG_CLICK = "SONG_CLICK";
export const SONG_SEARCH = "SONG_SEARCH";
export const GET_SONG_SEARCH = "GET_SONG_SEARCH"

export const addToPref = (pref) => {
  return {
    type: ADD_TO_PREF,
    payload: pref,
  };
};

export const removeFromPref = (pref) => {
  return {
    type: REMOVE_FROM_PREF,
    payload: pref,
  };
};

export const clicked = (clicked) => {
  return {
    type: SONG_CLICK,
    payload: clicked
  }
}

export const songSearch = (search) => {
  return {
    type: SONG_SEARCH,
    payload: search
  }
}

export const arraySearch = (query) => {
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  return (dispatch) => {
    fetch(baseEndpoint + query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero");
        }
      })
      .then((arraySearch) => {
        dispatch({
          type: GET_SONG_SEARCH,
          payload: arraySearch.data, 
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSong = (query, artist) => {
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  return (dispatch) => {
    fetch(baseEndpoint + query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero");
        }
      })
      .then((arraySong) => {
        dispatch({
          type: GET_SONG,
          payload: arraySong.data, 
          artist,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

