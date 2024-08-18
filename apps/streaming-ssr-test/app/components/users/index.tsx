async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Users() {
  const users = await fetchUsers();

  return (
    <div>
      <h2 style={{ color: "purple" }}>Users</h2>
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
