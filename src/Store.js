import { createStore } from "redux";

const initialState = {
  selectedRegion: 0,
  regions: [],
  selectedPlan: 0,
  plans: [],
  selectedOperatingSystem: 0,
  operatingSystems: [],
  selectedSSHkey: null,
  SSHKeys: ["Key name 1", "Key name 2", "Key name 3"],
  instanceQuantity: 1,
  hostNames: ["Name 1"],
  ipv4Enabled: false,
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
        operatingSystems: newOperatingSystems,
      };
    case "SELECT_SSHKEY":
      return {
        ...state,
        selectedSSHkey: action.payload,
      };
    case "ADD_INSTANCE":
      return {
        ...state,
        hostNames: [...state.hostNames, `Name ${state.instanceQuantity + 1}`],
        instanceQuantity: state.instanceQuantity + 1,
      };
    case "DELETE_INSTANCE":
      return state.instanceQuantity === 1
        ? state
        : {
            ...state,
            hostNames: state.hostNames.slice(0, -1),
            instanceQuantity: state.instanceQuantity - 1,
          };
    case "SET_HOSTNAME":
      const newHostNames = state.hostNames.map((hostName, index) => {
        return index === action.payload.index
          ? action.payload.hostName
          : hostName;
      });
      return {
        ...state,
        hostNames: newHostNames,
      };
    case "TOGGLE_IPV4ENABLED":
      return {
        ...state,
        ipv4Enabled: !state.ipv4Enabled,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
