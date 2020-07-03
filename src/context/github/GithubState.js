import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";
import {
  fetchUsers,
  fetchUserInformation,
  fetchUserRepos,
} from "../../utils/helpers";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users
  const searchUsers = async (user) => {
    setLoading();

    const users = await fetchUsers(user);

    dispatch({ type: SEARCH_USERS, payload: users });
  };
  // Get User
  const getUser = async (username) => {
    setLoading();

    const user = await fetchUserInformation(username);

    dispatch({ type: GET_USER, payload: user });
  };
  // Get repos
  const getUserRepos = async (username) => {
    setLoading();

    const repos = await fetchUserRepos(username);

    dispatch({ type: GET_REPOS, payload: repos });
  };
  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      // whatever we want available in our app
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
