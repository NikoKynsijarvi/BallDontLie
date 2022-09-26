const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return (state = action.data);
    default:
      return state;
  }
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    data: user,
  };
};

export default userReducer;
