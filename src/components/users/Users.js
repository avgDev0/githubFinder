import React, { useContext } from "react";
import UserItem from "./UserItem";
import styles from "./styles";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

export const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  return loading ? (
    <Spinner />
  ) : (
    <div style={styles.users.grid}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
