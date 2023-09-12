import { appendArray, createHTML } from "../helpers/html-utilities.js";
import { posts } from "../consts/posts.js";

import { post } from "../components/post.js";

const feedList = document.querySelector("#feed");

const populateFeed = () => {
  const listItems = [];
  for (const postObj of posts) {
    const li = createHTML("li", ["list-inline-item", "m-0"]);
    li.append(post(postObj));
    listItems.push(li);
  }

  appendArray(listItems, feedList);
};

populateFeed();
