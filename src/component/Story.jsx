import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
function Story({ users }) {
  return (
    <Link to={`${users.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className='storyContainer'>
        <img src={users.image} alt='' className='storyImg' />
        <div style={{ textAlign: "center" }}>{users.username}</div>
      </div>
    </Link>
  );
}

export default Story;
