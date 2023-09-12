import { createHTML, appendArray } from "../helpers/html-utilities.js";

/**
 * Creates the tag component
 * @param {String} tag
 * @returns html element
 */
export const tag = (tag) => {
  const elem = createHTML(
    "a",
    ["py-2", "m-0", "link-body-emphasis", "d-block", "link-underline-opacity-0", "h6"],
    null,
    { href: "#" }
  );
  const hash = createHTML("span", ["small", "text-body-secondary"], "#");
  const tagName = createHTML("span", ["tag-name", "fw-medium"], tag);

  appendArray([hash, tagName], elem);

  return elem;
};
