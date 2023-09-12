import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { appendArray, createHTML } from "./helpers/html-utilities.js";
import { user } from "./consts/user.js";
import { popularTags } from "./consts/popular-tags.js";
import { username } from "./components/username.js";
import { tag } from "./components/tag.js";

const following = user.following;
const followingList = document.querySelector("#following-list");

const populateFollowing = () => {
  const listItems = [];
  for (const user of following) {
    const li = createHTML("li", ["list-inline-item", "py-2"]);
    li.append(username(user.image, user.username));
    listItems.push(li);
  }

  appendArray(listItems, followingList);
};

const tagsList = document.querySelector("#tag-list");

const populateTags = () => {
  const listItems = [];
  for (const tagName of popularTags) {
    const li = createHTML("li", ["list-inline-item"]);
    li.append(tag(tagName));
    listItems.push(li);
  }

  appendArray(listItems, tagsList);
};

populateFollowing();
populateTags();
