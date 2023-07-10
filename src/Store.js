import { createStore } from "redux";

const initialState = {
  selectedRegion: 0,
  regions: [],
  selectedPlan: 0,
  plans: [],
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
    case "SET_PLANS":
      return {
        ...state,
        plans: action.payload,
      };
    case "SELECT_PLAN":
      return {
        ...state,
        selectedPlan: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
