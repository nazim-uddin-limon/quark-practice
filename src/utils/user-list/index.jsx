import { Link } from "react-router-dom";
import classes from "./userlist.module.css";

const UserList = ({ name, role, userLink }) => {
  return (
    <Link to={"/users/:" + userLink}>
      <div className={classes.list}>
        <div className={classes.profilePic}>
          <img src="./logo192.png" alt="avatar" />
        </div>
        <div className={classes.info}>
          <h4>{name}</h4>
          <p> {role} </p>
        </div>
      </div>
    </Link>
  );
};

export default UserList;
