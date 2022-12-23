const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return (state = action.data);
    case "LOGOUT":
      return (state = {});
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

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

export default userReducer;
