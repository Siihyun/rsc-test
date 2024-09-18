import { GetServerSideProps } from "next";
import type { Post, Comment, User } from "../../../packages/entities/types";
import _ from "lodash";
import { MarkdownContent } from "@/component/markdown";

// Define the shape of the props
interface Props {
  data: {
    data1: Post[];
    data2: Comment[];
    data3: User[];
  } | null;
}

const ITEMS_TO_SHOW = 10;
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Home = ({ data }: Props) => {
  const postsToShow = data?.data1.slice(0, ITEMS_TO_SHOW) || [];
  const commentsToShow = data?.data2.slice(0, ITEMS_TO_SHOW) || [];
  const usersToShow = data?.data3.slice(0, ITEMS_TO_SHOW) || [];
  const list = _.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fetched Data</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "blue" }}>Posts</h2>
        <pre
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          {JSON.stringify(postsToShow, null, 2)}
        </pre>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ color: "green" }}>Comments</h2>
        <pre
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          {JSON.stringify(commentsToShow, null, 2)}
        </pre>
      </div>

      <div>
        <h2 style={{ color: "purple" }}>Users</h2>
        <pre
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          {JSON.stringify(usersToShow, null, 2)}
        </pre>
      </div>

      <div>
        <pre>{JSON.stringify(list, null, 2)}</pre>
      </div>

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
      data1: results[0] as Post[],
      data2: results[1] as Comment[],
      data3: results[2] as User[],
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
        data: null,
      },
    };
  }
};

export default Home;
