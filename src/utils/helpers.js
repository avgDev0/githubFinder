import axios from "axios";

const github = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: {
    Authorization:
      process.env.NODE_ENV === "production"
        ? process.env.GITHUB_TOKEN
        : process.env.REACT_APP_GITHUB_TOKEN,
  },
});

const buildFetchURL = (user = "", singleUserFetch, reposFetch) => {
  const urlParts = ["users"];

  const params = {};

  console.log({ p: process.env });

  if (singleUserFetch) {
    urlParts.push(user);
  } else if (reposFetch) {
    urlParts.push(user);
    urlParts.push("repos");
    params["per_page"] = "5";
    params["sort"] = "created:asc";
  } else {
    urlParts.push("search");
    urlParts.reverse();
    params["q"] = user;
  }

  const paramsString = Object.entries(params)
    .map((param) => param.join("="))
    .join("&");

  return `/${urlParts.join("/")}?${paramsString}`;
};

export const fetchUsers = async (user) => {
  let users = [];
  const { data } = await github.get(buildFetchURL(user));
  users = data.items ?? data;

  if (users.length) {
    users = users.map((user) => ({
      id: user.id,
      login: user.login,
      avatarSrc: user.avatar_url,
      goToLink: user.html_url,
    }));
  }

  return users;
};

export const fetchUserInformation = async (username) => {
  const { data } = await github.get(buildFetchURL(username, true));

  return data;
};

export const fetchUserRepos = async (username) => {
  const { data } = await github.get(buildFetchURL(username, false, true));

  return data;
};
