import type { User } from "../../../../packages/entities/types";

interface Props {
  users: User[];
}

export default function Users({ users }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ color: "blue" }}>Users</h2>
      <pre
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        {JSON.stringify(users.slice(0, 10), null, 2)}
      </pre>
    </div>
  );
}
