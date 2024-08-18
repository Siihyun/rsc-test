const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Posts() {
  const posts = await fetchPosts();
  await delay(4000);

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
