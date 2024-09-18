import { GetServerSideProps } from "next";
import type { Post, Comment, User } from "../../../packages/entities/types";
import { MarkdownContent } from "@/component/markdown";
import Posts from "@/component/posts";
import Comments from "@/component/comments";
import Users from "@/component/users";

// Define the shape of the props
interface Props {
  data: {
    posts: Post[];
    comments: Comment[];
    users: User[];
  };
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Home = ({ data }: Props) => {
  const { posts, comments, users } = data;
  console.log(posts.slice(0, 10));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fetched Data</h1>

      <Posts posts={posts} />

      <Comments comments={comments} />

      <Users users={users} />

      <MarkdownContent />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const endpoints = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/users",
  ];

  try {
    const promises = endpoints.map((url) =>
      fetch(url).then((res) => res.json())
    );
    promises.push(delay(2000));
    const results = await Promise.all(promises);

    const combinedData = {
      posts: results[0] as Post[],
      comments: results[1] as Comment[],
      users: results[2] as User[],
    };

    return {
      props: {
        data: combinedData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: {
          posts: [],
          comments: [],
          users: [],
        },
      },
    };
  }
};

export default Home;
