import classes from "./postCard.module.css";

const CardHeader = ({post, author }) => {
  console.log(author.name);

  return (
    <div className={classes.cardHeader}>
      <div>
        <div className={classes.avater}>
          <img src={author.avater} alt="avatar" />
        </div>
      </div>
      <div className={classes.userDetails}>
        <h2>Jhon doe</h2>
        <p>{post.createdAt.toTimeString()}</p>
      </div>
    </div>
  );
};

const PostCard = ({ post }) => {
  // console.log(post.author)
  return (
    <div className={classes.postCard}>
      <CardHeader author={post.author} post={post} />
      <div className="cardBody">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <div className="image">
          <img className={classes.postImage} src={post.postImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
