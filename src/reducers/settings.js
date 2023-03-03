const initialState = {
  homeScreenAverageChart: "ft",
  homeScreenAveragePercentage: "ft",
  homeScreenDisplayLast: 5,
  sortShotsByLatest: false,
  sortThrees: true,
  sortFreeThrows: true,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_HOMEAVERAGECHART":
      state = { ...state, homeScreenAverageChart: action.data };
      return state;
    case "CHANGE_HOMEDISPLAYLAST":
      state = { ...state, homeScreenDisplayLast: action.data };
      return state;
    case "CHANGE_SORTDIRECTION":
      state = { ...state, sortShotsByLatest: !state.sortShotsByLatest };
      return state;
    case "CHANGE_SORT_THREES":
      return (state = { ...state, sortThrees: !state.sortThrees });
    case "CHANGE_SORT_FT":
      return (state = { ...state, sortFreeThrows: !state.sortFreeThrows });
    default:
      return state;
  }
};

export const changeHomeaverageChart = (data) => {
  return {
    type: "CHANGE_HOMEAVERAGECHART",
    data,
  };
};

export const changeSortThrees = () => {
  return {
    type: "CHANGE_SORT_THREES",
  };
};

export const changeSortFT = () => {
  return {
    type: "CHANGE_SORT_FT",
  };
};

export const changeSortDirection = () => {
  return {
    type: "CHANGE_SORTDIRECTION",
  };
};

export const changeHomedisplayLast = (data) => {
  return {
    type: "CHANGE_HOMEDISPLAYLAST",
    data,
  };
};

export default settingsReducer;
