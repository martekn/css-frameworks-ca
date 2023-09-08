import { createHTML, appendArray } from "../helpers/html-utilities.js";
import { getTimeSince } from "../helpers/get-time-since.js";
import { username } from "./username.js";

/**
 * create the post component
 * @param {Object} post
 * @returns Html element
 */
export const post = (post) => {
  const elem = createHTML("div", ["card", "container-fluid", "my-3", "p-5"]);
  const cardHeader = createHTML("div", ["card-header", "px-4", "row", "align-items-center"]);
  const name = username(post.user.image, post.user.username, true);
  name.classList.add("col-auto");
  const timeSince = getTimeSince(post.timestamp);
  const time = createHTML("span", ["col-auto", "text-body-secondary", "ps-2"], timeSince);

  appendArray([name, time], cardHeader);
  elem.append(cardHeader);

  const regex = /(#\S+)/g;
  let bodyText = post.body;

  const tags = post.body.match(regex);
  if (tags) {
    for (const tag of tags) {
      bodyText = bodyText.replace(tag, `<a href="#" class="link-primary">${tag}</a>`);
      console.log(bodyText);
    }
  }

  if (post.imageUrl) {
    const imageWrapper = createHTML("div", ["ratio", "ratio-16x9"]);
    const img = createHTML("img", ["card-img-top", "img-fluid", "object-fit-cover", "pt-4"], null, {
      src: post.imageUrl,
      alt: "",
    });
    imageWrapper.append(img);
    elem.append(imageWrapper);
  }

  const cardBody = createHTML("div", ["card-body"]);
  const title = createHTML("h5", ["card-title"], post.title);
  const text = createHTML("p", ["card-text"]);
  text.innerHTML = bodyText;
  appendArray([title, text], cardBody);

  const cardFooter = createHTML("div", ["card-footer"]);

  const likeButton = createHTML("button", ["btn", "link-body-emphasis", "text-decoration-none", "px-0", "me-4"]);
  const likeIcon = createHTML("i", ["bi", "bi-suit-heart", "me-2"]);
  const likeCount = createHTML("span", null, post.likes ? post.likes : "0");
  appendArray([likeIcon, likeCount], likeButton);

  const commentButton = createHTML("button", ["btn", "link-body-emphasis", "text-decoration-none", "px-0", "me-4"]);
  const commentIcon = createHTML("i", ["bi", "bi-chat-square", "me-2"]);
  const commentCount = createHTML("span", null, post.comments ? post.comments : "0");
  appendArray([commentIcon, commentCount], commentButton);

  appendArray([likeButton, commentButton], cardFooter);

  appendArray([cardBody, cardFooter], elem);
  return elem;
};
