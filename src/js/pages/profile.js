import { appendArray, createHTML } from "../helpers/html-utilities.js";
import { user } from "../consts/user.js";
import { post } from "../components/post.js";

const feedList = document.querySelector("#feed");

const populateFeed = () => {
  const listItems = [];
  for (const postObj of user.posts) {
    const li = createHTML("li", ["list-inline-item", "m-0"]);
    li.append(post(postObj));
    listItems.push(li);
  }

  appendArray(listItems, feedList);
};

populateFeed();
