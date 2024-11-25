import notification from "../../assets/notification.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrap">
      <header>
        <div className="header-right">
          <select name="selectedPerson">
            <option value="apple">Rohil</option>
            <option value="banana">ABC</option>
            <option value="orange">XYZ</option>
          </select>

          <div className="header-notification">
            <img src={notification} alt="notification" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
