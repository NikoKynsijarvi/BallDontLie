const shotgroupReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return (state = action.data);
    case "ADD_SHOTGROUP":
      const addedOne = state.concat(action.data);
      return (state = addedOne);
    default:
      return state;
  }
};

export const initShoutgroup = (data) => {
  return {
    type: "INIT",
    data,
  };
};

export const addShotGroup = (data) => {
  return {
    type: "ADD_SHOTGROUP",
    data,
  };
};

export default shotgroupReducer;
