import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const setting = () => {
  return (
    <div className="setting-wrap">
      <Menu />
      <div className="container">
        <Header />
        <div className="setting"></div>
      </div>
    </div>
  );
};

export default setting;
