import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...10] {
  _id,
  title,
  slug,
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0] { 
  _id,
  title,
  slug,
  mainImage,
  body
}`);
