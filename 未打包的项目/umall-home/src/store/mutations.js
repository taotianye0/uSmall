export const state = {
  user: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null
};
export const mutations = {
  changeUser(state, user) {
    state.user = user;
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
  }
};
export const getters = {
  resUser(state) {
    return state.user;
  }
};
