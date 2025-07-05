import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";


export default async function Page() {

  const posts = await sanityFetch({ query: POSTS_QUERY });
  console.log(posts);
  return <div>{JSON.stringify(posts)}</div>;
}