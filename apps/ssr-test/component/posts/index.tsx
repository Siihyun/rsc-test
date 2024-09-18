import type { Post } from "../../../../packages/entities/types";

interface Props {
  posts: Post[];
}

export default async function Posts({ posts }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ color: "blue" }}>Posts</h2>
      <pre
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        {JSON.stringify(posts.slice(0, 10), null, 2)}
      </pre>
    </div>
  );
}
