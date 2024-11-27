import "./Home.css";
import Menu from "../../Menu/Menu";
import Header from "../../Header/Header";
import achivemnet from "../../../assets/achievement.png";
import BarChart from "./Chart";

const Home = () => {
  return (
    <div className="home-wrap">
      <Menu />
      <div className="container">
        <Header />
        <div className="home">
          <h1 className="h2">Dashboard</h1>
          <div className="home-content">
            <div className="home-header">
              <h2 className="h2">Last 30 Days</h2>
              <div className="overview-montd">
                <select name="selectedMontd">
                  <option value="current-montd">Current Month</option>
                  <option value="abc">ABC</option>
                  <option value="xyz">XYZ</option>
                </select>
              </div>
            </div>
            <div className="overview-box">
              <div className="overview-item">
                <div className="overview-name">Total Reward</div>
                <div className="overview-number">
                  <div className="overview-counter">116</div>
                  <div className="overview-total">20%</div>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-name">Total Recognition</div>
                <div className="overview-number">
                  <div className="overview-counter">24</div>
                  <div className="overview-total red">4%</div>
                </div>
              </div>

              <div className="overview-item">
                <div className="overview-category">
                  <div className="overview-name">Top Performer</div>
                </div>
                <div className="overview-number">
                  <ul>
                    <li class="first">Rohil Shah</li>
                    <li class="second">xyz</li>
                    <li class="third">abc</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="award-chart-wrap">
            <div className="chart-wrap">
              <div className="chart-top">
                <h3 className="h2">Rewards History</h3>
                <select name="selectedMontd">
                  <option value="current-monthly">Current Month</option>
                  <option value="3-month">Last 3 Months</option>
                  <option value="6-month">Last 6 Months</option>
                  <option value="year">Last 1 Year</option>
                </select>
              </div>

              <div className="chart-bottom">
                <BarChart />
              </div>
            </div>
            <div className="award-wrap">
              <h3 className="h2">Top Awards</h3>

              <div className="award-listing">
                <div className="award-item">
                  <div className="award-item-left">
                    <div className="award-icon blue">
                      <img src={achivemnet} alt="achivement" />
                    </div>
                    <div className="award-text">Top Performer of the Year</div>
                  </div>
                  <div className="award-item-right">
                    <div className="award-number">65</div>
                  </div>
                </div>

                <div className="award-item">
                  <div className="award-item-left">
                    <div className="award-icon green">
                      <img src={achivemnet} alt="person" />
                    </div>
                    <div className="award-text">Peer to Peer Recognition</div>
                  </div>
                  <div className="award-item-rifght">
                    <div className="award-number">52</div>
                  </div>
                </div>

                <div className="award-item">
                  <div className="award-item-left">
                    <div className="award-icon orange">
                      <img src={achivemnet} alt="achivement" />
                    </div>
                    <div className="award-text">Work Milestone Award</div>
                  </div>
                  <div className="award-item-right">
                    <div className="award-number">38</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="redemption-list">
            <h3 className="h2">Recongtion List</h3>
            <table>
              <tr>
                <td>Reward ID</td>
                <td>Recognition ID</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
              <tr>
                <td>aabcdef</td>
                <td>abbcdef</td>
                <td>2024</td>
                <td className="green">Approved</td>
              </tr>
              <tr>
                <td>aabcdef</td>
                <td>abbcdef</td>
                <td>2024</td>
                <td className="green">Approved</td>
              </tr>
              <tr>
                <td>aabcdef</td>
                <td>abbcdef</td>
                <td>2024</td>
                <td className="red">Pending</td>
              </tr>
              <tr>
                <td>aabcdef</td>
                <td>abbcdef</td>
                <td>2024</td>
                <td className="red">Pending</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
