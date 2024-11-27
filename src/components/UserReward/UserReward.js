import Header from "../Header/Header";
import UserMenu from "../UserMenu/UserMenu";
import "./UserReward.css";

const UserReward = () => {
  return (
    <div className="award-reward-wrap">
      <UserMenu />
      <div className="container">
        <Header />
        <div className="award-reward"></div>
      </div>
    </div>
  );
};

export default UserReward;
