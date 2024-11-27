import Header from "../Header/Header";
import Menu from "../UserMenu/UserMenu";

const RecognizeYou = () => {
  return (
    <div className="recognize-you-wrap">
      <Menu />
      <div className="container">
        <Header />
        <div className="recognize-you"></div>
      </div>
    </div>
  );
};

export default RecognizeYou;
