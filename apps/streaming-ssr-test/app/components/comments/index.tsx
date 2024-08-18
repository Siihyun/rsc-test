const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchComments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json();
}

export default async function Comments() {
  const comments = await fetchComments();
  await delay(10000);

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
