const shotgroupReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return (state = action.data);
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

export default shotgroupReducer;
