import { useState } from "react";
import { instanceTwo } from "../../App";

const CreatePost = () => {
  const [value, setValue] = useState([]);
  const create = async () => {
    const res = await instanceTwo.post("/", {
      title: value,
    });
    console.log(res);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        className="navbarInput"
        onChange={(e) => setValue(e.target.value)}
        style={{ border: "1px solid black" }}
        placeholder="create a post"
      ></input>
      <button onClick={create}>create</button>
    </div>
  );
};
export default CreatePost;
