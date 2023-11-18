import classes from './profile.module.css';
const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.imageSection}>
        <div className={classes.coverSection}>
          <img
            src="https://img.pikbest.com/backgrounds/20200513/creative-synthesis-education-background_2755178.jpg!sw800"
            alt=""
          />
        </div>
        <div className={classes.profileSection}>
          <img
            src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={classes.detailsSection}>
        <h2>Nazim Uddin</h2>
        <p>Department of Physics. Gurudoyal Govt College</p>
      </div>
      <hr />

      <div className={classes.academicDetails}>
        <h2>Academic Details</h2>
        <table className='table'>
            <tr>
                <td>Name</td>
                <td>Nazim Uddin</td>
            </tr>
            <tr>
                <td>Roll</td>
                <td>337</td>
            </tr>
            <tr>
                <td>Session</td>
                <td>2021-2022</td>
            </tr>
            <tr>
                <td>Year</td>
                <td>1st</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default Profile