import "./User.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
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
              <Link to="recognize/recognize-now">
                <h2 className="h2">Recognize Now</h2>
              </Link>
            </div>
            <div className="recognize">
              <Link to="recognize/recognize-you">
                <h2 className="h2">Recieved Recognize</h2>
              </Link>
            </div>
          </div>

          <div className="reward-points">
            <div className="reward-img">
              <img src={ideas} />
            </div>
            <div className="reward-name">
              <Link to="/reward">
                <h2 className="h2">Reward Points && Redemption</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
