const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchComments() {
  await delay(4000);
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Comments() {
  const comments = await fetchComments();

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ color: "green" }}>Comments</h2>
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
