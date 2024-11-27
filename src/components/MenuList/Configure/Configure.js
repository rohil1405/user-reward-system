import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";

const Configure = () => {
    return (
        <div className="configure-wrap">
            <Menu />
            <div className="container">
                <Header />
                <div className="configure"></div>
            </div>
        </div>
    )
}
export default Configure;