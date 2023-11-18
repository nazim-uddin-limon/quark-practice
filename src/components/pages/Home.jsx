import "./page.style.css";
import posts from "../../data/posts";
import PostCard from "../post";
const Home = () => {
  // const [users] = useState(data);
  return (
    <div className="home">
      <div className="left-menu"></div>
      <div className="details-section">
        {console.log(posts)}
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
      <div className="right-menu"></div>
    </div>
  );
};

export default Home;
