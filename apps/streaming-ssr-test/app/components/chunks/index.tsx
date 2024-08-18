// app/page.tsx
import _ from "lodash";

const Chunk = () => {
  const list = _.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

  return (
    <div>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};

export default Chunk;
