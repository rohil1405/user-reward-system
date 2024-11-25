import Menu from "../../Menu/Menu.js";
import add from "../../../assets/addition.png";
import "./Reward.css";
import calender from "../../../assets/calendar.png";
import cake from "../../../assets/cake.png";
import menuList from "../../../assets/menulist.png";
import achivement from "../../../assets/achievement.png";
import rightArrow from "../../../assets/right-arrow.png";
import Header from "../../Header/Header.js";

const Reward = () => {
  return (
    <div className="reward-wrap">
      <Menu />
      <div className="container">
        <Header />
        <div className="reward">
          <div className="reward-top">
            <h1 className="h2">Rewards</h1>
            <div className="cta-btn">
              <a href="#" target="_self">
                <img src={add} alt="add-reward" />
                Add Reward
              </a>
            </div>
          </div>
          <div className="reward-bottom">
            <ul className="reward-listing">
              <li>
                <div className="reward-top-header">
                  <div className="reward-icon">
                    <img
                      src={calender}
                      alt="calender"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="right-arrow">
                    <img src={rightArrow} alt="right-arrow" />
                  </div>
                </div>

                <div className="reward-content">
                  <h2 className="h1">Anniversaries</h2>
                  <div className="reward-box">
                    <div className="reward-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18px"
                        height="18px"
                      >
                        <path
                          d="M19.8,10.4c0.1,0.5,0.2,1.1,0.2,1.6c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8c1.6,0,3.2,0.5,4.4,1.3l1.4-1.4 C16.2,2.7,14.2,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10c0-1.1-0.2-2.2-0.5-3.2L19.8,10.4z"
                          fill="#6200EA"
                        />
                        <path
                          d="M11 16.4L6.3 11.7 7.7 10.3 11 13.6 21.3 3.3 22.7 4.7z"
                          fill="#6200EA"
                        />
                        <path
                          d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
                          opacity=".3"
                          fill="#6200EA"
                        />
                      </svg>
                      <div className="reward-comming">6 Upcoming</div>
                    </div>
                    <div className="reward-item">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                      >
                        <path
                          d="M0 0 C2.89479637 1.73687782 3.01335881 3.05152682 3.875 6.375 C4.01533978 10.44485353 3.56972167 11.89861178 1 15 C-1.71437679 17.13272462 -3.04826833 16.99745956 -6.5625 16.8125 C-10 16 -10 16 -11.875 14.875 C-13.64983667 11.91693888 -13.88200002 9.42199954 -14 6 C-12.78392788 3.11982918 -11.69696456 1.54761501 -9.25 -0.375 C-5.90127203 -1.30520221 -3.35093496 -0.79203917 0 0 Z M-9.8125 3.125 C-12.30339948 5.81259963 -12.30339948 5.81259963 -12.0625 9.125 C-11.18706667 12.01645649 -11.18706667 12.01645649 -9.3125 13.9375 C-6.10056066 15.41325591 -4.33525198 15.06444212 -1 14 C1.0785608 12.42304368 1.0785608 12.42304368 2 10 C1.92777005 6.46073241 1.67194991 4.6951206 -0.8125 2.125 C-4.60255582 0.17582844 -6.48904611 0.61394595 -9.8125 3.125 Z "
                          fill="#6200EA"
                          opacity=".6"
                          transform="translate(14,1)"
                        />
                        <path
                          d="M0 0 C0.66 0 1.32 0 2 0 C2 2.64 2 5.28 2 8 C1.34 8 0.68 8 0 8 C0 5.36 0 2.72 0 0 Z "
                          fill="#6200EA"
                          opacity=".6"
                          transform="translate(8,5)"
                        />
                      </svg>
                      <div className="reward-comming">20 Created</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="reward-top-header">
                  <div className="reward-icon green-color">
                    <img src={cake} alt="cake" width={100} height={100} />
                  </div>
                  <div className="right-arrow">
                    <img src={rightArrow} alt="right-arrow" />
                  </div>
                </div>

                <div className="reward-content">
                  <h2 className="h1">Birthdays</h2>
                  <div className="reward-box">
                    <div className="reward-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18px"
                        height="18px"
                      >
                        <path
                          d="M19.8,10.4c0.1,0.5,0.2,1.1,0.2,1.6c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8c1.6,0,3.2,0.5,4.4,1.3l1.4-1.4 C16.2,2.7,14.2,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10c0-1.1-0.2-2.2-0.5-3.2L19.8,10.4z"
                          fill="#008000"
                        />
                        <path
                          d="M11 16.4L6.3 11.7 7.7 10.3 11 13.6 21.3 3.3 22.7 4.7z"
                          fill="#008000"
                        />
                        <path
                          d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
                          opacity=".3"
                          fill="#008000"
                        />
                      </svg>
                      <div className="reward-comming">6 Upcoming</div>
                    </div>
                    <div className="reward-item">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                      >
                        <path
                          d="M0 0 C2.89479637 1.73687782 3.01335881 3.05152682 3.875 6.375 C4.01533978 10.44485353 3.56972167 11.89861178 1 15 C-1.71437679 17.13272462 -3.04826833 16.99745956 -6.5625 16.8125 C-10 16 -10 16 -11.875 14.875 C-13.64983667 11.91693888 -13.88200002 9.42199954 -14 6 C-12.78392788 3.11982918 -11.69696456 1.54761501 -9.25 -0.375 C-5.90127203 -1.30520221 -3.35093496 -0.79203917 0 0 Z M-9.8125 3.125 C-12.30339948 5.81259963 -12.30339948 5.81259963 -12.0625 9.125 C-11.18706667 12.01645649 -11.18706667 12.01645649 -9.3125 13.9375 C-6.10056066 15.41325591 -4.33525198 15.06444212 -1 14 C1.0785608 12.42304368 1.0785608 12.42304368 2 10 C1.92777005 6.46073241 1.67194991 4.6951206 -0.8125 2.125 C-4.60255582 0.17582844 -6.48904611 0.61394595 -9.8125 3.125 Z "
                          fill="#008000"
                          opacity=".6"
                          transform="translate(14,1)"
                        />
                        <path
                          d="M0 0 C0.66 0 1.32 0 2 0 C2 2.64 2 5.28 2 8 C1.34 8 0.68 8 0 8 C0 5.36 0 2.72 0 0 Z "
                          fill="#008000"
                          opacity=".6"
                          transform="translate(8,5)"
                        />
                      </svg>
                      <div className="reward-comming">20 Created</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="reward-top-header">
                  <div className="reward-icon blue-color">
                    <img
                      src={achivement}
                      alt="achivements"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="right-arrow">
                    <img src={rightArrow} alt="right-arrow" />
                  </div>
                </div>

                <div className="reward-content">
                  <h2 className="h1">Achivements</h2>
                  <div className="reward-box">
                    <div className="reward-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18px"
                        height="18px"
                      >
                        <path
                          d="M19.8,10.4c0.1,0.5,0.2,1.1,0.2,1.6c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8c1.6,0,3.2,0.5,4.4,1.3l1.4-1.4 C16.2,2.7,14.2,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10c0-1.1-0.2-2.2-0.5-3.2L19.8,10.4z"
                          fill="#87CEFA"
                        />
                        <path
                          d="M11 16.4L6.3 11.7 7.7 10.3 11 13.6 21.3 3.3 22.7 4.7z"
                          fill="#87CEFA"
                        />
                        <path
                          d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
                          opacity=".3"
                          fill="#87CEFA"
                        />
                      </svg>
                      <div className="reward-comming">6 Upcoming</div>
                    </div>
                    <div className="reward-item">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                      >
                        <path
                          d="M0 0 C2.89479637 1.73687782 3.01335881 3.05152682 3.875 6.375 C4.01533978 10.44485353 3.56972167 11.89861178 1 15 C-1.71437679 17.13272462 -3.04826833 16.99745956 -6.5625 16.8125 C-10 16 -10 16 -11.875 14.875 C-13.64983667 11.91693888 -13.88200002 9.42199954 -14 6 C-12.78392788 3.11982918 -11.69696456 1.54761501 -9.25 -0.375 C-5.90127203 -1.30520221 -3.35093496 -0.79203917 0 0 Z M-9.8125 3.125 C-12.30339948 5.81259963 -12.30339948 5.81259963 -12.0625 9.125 C-11.18706667 12.01645649 -11.18706667 12.01645649 -9.3125 13.9375 C-6.10056066 15.41325591 -4.33525198 15.06444212 -1 14 C1.0785608 12.42304368 1.0785608 12.42304368 2 10 C1.92777005 6.46073241 1.67194991 4.6951206 -0.8125 2.125 C-4.60255582 0.17582844 -6.48904611 0.61394595 -9.8125 3.125 Z "
                          fill="#87CEFA"
                          opacity=".6"
                          transform="translate(14,1)"
                        />
                        <path
                          d="M0 0 C0.66 0 1.32 0 2 0 C2 2.64 2 5.28 2 8 C1.34 8 0.68 8 0 8 C0 5.36 0 2.72 0 0 Z "
                          fill="#87CEFA"
                          opacity=".6"
                          transform="translate(8,5)"
                        />
                      </svg>
                      <div className="reward-comming">20 Created</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="reward-top-header">
                  <div className="reward-icon orange-color">
                    <img
                      src={menuList}
                      alt="menuList"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="right-arrow">
                    <img src={rightArrow} alt="right-arrow" />
                  </div>
                </div>

                <div className="reward-content">
                  <h2 className="h1">All Rewards</h2>
                  <div className="reward-box">
                    <div className="reward-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18px"
                        height="18px"
                      >
                        <path
                          d="M19.8,10.4c0.1,0.5,0.2,1.1,0.2,1.6c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8c1.6,0,3.2,0.5,4.4,1.3l1.4-1.4 C16.2,2.7,14.2,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10c0-1.1-0.2-2.2-0.5-3.2L19.8,10.4z"
                          fill="#FFA500"
                        />
                        <path
                          d="M11 16.4L6.3 11.7 7.7 10.3 11 13.6 21.3 3.3 22.7 4.7z"
                          fill="#FFA500"
                        />
                        <path
                          d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
                          opacity=".3"
                          fill="#FFA500"
                        />
                      </svg>
                      <div className="reward-comming">6 Upcoming</div>
                    </div>
                    <div className="reward-item">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                      >
                        <path
                          d="M0 0 C2.89479637 1.73687782 3.01335881 3.05152682 3.875 6.375 C4.01533978 10.44485353 3.56972167 11.89861178 1 15 C-1.71437679 17.13272462 -3.04826833 16.99745956 -6.5625 16.8125 C-10 16 -10 16 -11.875 14.875 C-13.64983667 11.91693888 -13.88200002 9.42199954 -14 6 C-12.78392788 3.11982918 -11.69696456 1.54761501 -9.25 -0.375 C-5.90127203 -1.30520221 -3.35093496 -0.79203917 0 0 Z M-9.8125 3.125 C-12.30339948 5.81259963 -12.30339948 5.81259963 -12.0625 9.125 C-11.18706667 12.01645649 -11.18706667 12.01645649 -9.3125 13.9375 C-6.10056066 15.41325591 -4.33525198 15.06444212 -1 14 C1.0785608 12.42304368 1.0785608 12.42304368 2 10 C1.92777005 6.46073241 1.67194991 4.6951206 -0.8125 2.125 C-4.60255582 0.17582844 -6.48904611 0.61394595 -9.8125 3.125 Z "
                          fill="#FFA500"
                          opacity=".6"
                          transform="translate(14,1)"
                        />
                        <path
                          d="M0 0 C0.66 0 1.32 0 2 0 C2 2.64 2 5.28 2 8 C1.34 8 0.68 8 0 8 C0 5.36 0 2.72 0 0 Z "
                          fill="#FFA500"
                          opacity=".6"
                          transform="translate(8,5)"
                        />
                      </svg>
                      <div className="reward-comming">20 Created</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
