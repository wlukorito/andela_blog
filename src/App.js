import "./App.css";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { getData } from "./api";
import { POSTS_URL } from "./api/constants";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const remotePosts = await getData(POSTS_URL);
    if (posts) setPosts(remotePosts);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h4>Andela Blog</h4>
        <div className="posts">
          <h5>Posts</h5>
           {/* TODO: paginate posts */}
          {posts.length &&
            posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
