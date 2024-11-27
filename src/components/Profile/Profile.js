import Header from "../Header/Header";
import UserMenu from "../UserMenu/UserMenu";
import dummy from "../../assets/dummy-img.jpg";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-wrap">
      <UserMenu />
      <div className="container">
        <Header />
        <div className="profile">
          <h1 className="h2">Profile</h1>
          <div className="profile-content">
            <div className="profile-left">
              <div className="profile-img">
                <img src={dummy} />
              </div>
              <form>
                <label for="change">Change Employee Image</label>
                <input type="file" />
              </form>
            </div>
            <div className="profile-right">
              <div className="data">Master Data</div>
              <p>
                Edit Profile <br></br> Form to edit employee in system
              </p>
              <form>
                <div className="form-field">
                  <div className="fieldset">
                    <label for="id">ID</label>
                    <input type="number" id="id" disabled />
                  </div>
                  <div className="fieldset">
                    <label for="name">Name</label>
                    <input type="text" id="name" />
                  </div>
                </div>

                <div className="form-field">
                  <div className="fieldset">
                    <label for="gender">Gender</label>
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female" /> Female
                  </div>
                  <div className="fieldset col">
                    <div className="fieldset">
                      <label for="dob">D.O.B</label>
                      <input type="date" id="dob" disabled />
                    </div>
                    <div className="fieldset">
                      <label for="hire">Hire Date</label>
                      <input type="date" id="hire" disabled />
                    </div>
                  </div>
                </div>

                <div className="form-field">
                  <div className="fieldset">
                    <label for="depart">Department</label>
                    <select name="depart" id="depart" disabled>
                      <option value="">Select</option>
                      <option value="techincal">Technical</option>
                      <option value="team-lead">Lead</option>
                      <option value="pm">Manager</option>
                    </select>
                  </div>
                  <div className="fieldset">
                    <label for="designation">Designation</label>
                    <select name="depart" id="depart" disabled>
                      <option value="">Select</option>
                      <option value="web-developer"></option>
                      <option value="senior-developer">
                        Sr. Web-Developer
                      </option>
                      <option value="enginner">Engineer</option>
                    </select>
                  </div>
                </div>

                <button type="button">Save Changes</button>
              </form>
            </div>
          </div>

          <div className="cta-btn">
            <Link to='/'>Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
