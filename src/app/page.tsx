import { sanityFetch } from "@/sanity/lib/live";

import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {

  const posts = await sanityFetch({ query: POSTS_QUERY });
  console.log(posts);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
