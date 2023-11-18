import Profile from "../profile";

const ProfilePage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2  bg-white">
            <Profile />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
