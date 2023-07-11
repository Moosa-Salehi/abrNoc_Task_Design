import { createStore } from "redux";

const initialState = {
  selectedRegion: 0,
  regions: [],
  selectedPlan: 0,
  plans: [],
  selectedOperatingSystem: 0,
  selectedOperatingSystemVersion: null,
  operatingSystems: [],
  selectedSSHkey: null,
  instanceQuantity: 1,
  hostNames: [],
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
    case "SET_OPERATING_SYSTEMS":
      return {
        ...state,
        operatingSystems: action.payload,
      };
    case "SELECT_OPERATING_SYSTEM":
      return {
        ...state,
        selectedOperatingSystem: action.payload,
      };
    case "SELECT_OPERATING_SYSTEM_VERSION":
      const newOperatingSystems = state.operatingSystems.map(
        (operatingSystem, index) => {
          return index === action.payload.index
            ? {
                ...operatingSystem,
                selectedVersion: action.payload.version,
              }
            : operatingSystem;
        }
      );
      return {
        ...state,
        selectedOperatingSystemVersion: action.payload.version,
        operatingSystems: newOperatingSystems,
      };
    case "SELECT_SSHKEY":
      return {
        ...state,
        selectedSSHkey: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
