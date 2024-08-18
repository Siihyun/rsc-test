import Chunk from "@/app/components/chunks";
import Comments from "@/app/components/comments";
import Posts from "@/app/components/posts";
import Users from "@/app/components/users";
import { Suspense } from "react";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Fetched Data</h1>

      <Suspense fallback={<div>fetching Post..</div>}>
        <Posts />
      </Suspense>

      <Suspense fallback={<div>fetching Comments..</div>}>
        <Comments />
      </Suspense>

      <Suspense fallback={<div>fetching Users..</div>}>
        <Users />
      </Suspense>

      <Chunk />
    </div>
  );
}
