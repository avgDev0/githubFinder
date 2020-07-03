import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { searchUsers, users, clearUsers } = githubContext;
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something, mate!");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        {users.length > 0 && (
          <button className="btn btn-clear btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
