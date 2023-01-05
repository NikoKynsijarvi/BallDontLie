const initialState = {
  homeScreenAverageChart: "ft",
  homeScreenAveragePercentage: "ft",
  homeScreenDisplayLast: 5,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_HOMEAVERAGECHART":
      state = { ...state, homeScreenAverageChart: action.data };
      return state;
    case "CHANGE_HOMEDISPLAYLAST":
      state = { ...state, homeScreenDisplayLast: action.data };
      return state;
    default:
      return state;
  }
};

export const ChangeHomeaverageChart = (data) => {
  return {
    type: "CHANGE_HOMEAVERAGECHART",
    data,
  };
};

export const ChangeHomedisplayLast = (data) => {
  return {
    type: "CHANGE_HOMEDISPLAYLAST",
    data,
  };
};

export default settingsReducer;
