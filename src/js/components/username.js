import { createHTML, appendArray } from "../helpers/html-utilities.js";

/**
 * Create username component
 * @param {String} image
 * @param {String} username
 * @returns htmlElement
 */
export const username = (image, username, isPost = false) => {
  const elem = createHTML(
    "a",
    ["d-flex", "gap-2", "align-items-center", "text-decoration-none", "m-0", "link-body-emphasis", "px-0", "h6"],
    null,
    { href: `/profile/?u=${username}` }
  );

  const img = createHTML("img", ["user-image", "rounded-circle", "img-fluid", "object-fit-cover"], null, {
    src: image,
    alt: username,
  });
  const name = createHTML("span", null, username);

  if (isPost) {
    elem.classList.add(...["col-auto", "pe-2"]);
    name.classList.add("me-2");
  }
  appendArray([img, name], elem);

  return elem;
};
