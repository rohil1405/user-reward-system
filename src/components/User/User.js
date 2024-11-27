import "./User.css";
import Header from "../Header/Header";
import UserMenu from "../UserMenu/UserMenu";
import ideas from "../../assets/ideas.png";

const User = () => {
  return (
    <div className="user-wrap">
      <UserMenu />
      <div className="container">
        <Header />
        <div className="user">
          <h1 className="h1">Recognize</h1>

          <div className="recognize-wrap">
            <div className="recognize">
              <h2 className="h2">Recognize Now</h2>
            </div>
            <div className="recognize">
              <h2 className="h2">Recieved Recognize</h2>
            </div>
          </div>

          <div className="reward-points">
            <div className="reward-img">
              <img src={ideas} />
            </div>
            <div className="reward-name">
                <h2 className="h2">Reward Points && Redemption</h2>
            </div>
          </div>

          <div className="recognize-someone">
            <h2 className="h2">Recognize Someone</h2>
            <p>Select a team member to recognize</p>
            <select name="member" id="member">
              <option value="">Select Member</option>
              <option value="xyz">xyz</option>
              <option value="abc">abc</option>
              <option value="pqr">pqr</option>
            </select>
          </div>

          <div className="recognize-form">
            <form>
              <input type="text" placeholder="Enter Title" required />
              <textarea
                type="text"
                rows="4"
                required
                placeholder="Enter Description"
              />
              <div className="field">
                <label for="tags">Recognition Tags</label>
                <select name="tag" id="tag">
                  <option value="">Select</option>
                  <option value="technical">technical</option>
                  <option value="team-lead">Team Lead</option>
                  <option value="pm">Manager</option>
                </select>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
