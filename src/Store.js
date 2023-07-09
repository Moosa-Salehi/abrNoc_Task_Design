import { createStore } from "redux";

const initialState = {
  selectedRegion: 0,
  regions: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_REGIONS":
      return {
        ...state,
        regions: action.payload,
      };
    case "SELECT_REGION":
      return {
        ...state,
        selectedRegion: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
