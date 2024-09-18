import type { Comment } from "../../../../packages/entities/types";

interface Props {
  comments: Comment[];
}

export default function Comments({ comments }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ color: "blue" }}>Comments</h2>
      <pre
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        {JSON.stringify(comments.slice(0, 10), null, 2)}
      </pre>
    </div>
  );
}
