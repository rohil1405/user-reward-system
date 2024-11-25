import logo from "../../assets/main-logo.png";
import "./Menu.css";
import home from "../../assets/home.png";
import employee from "../../assets/employee.png";
import setting from "../../assets/setting.png";
import transcation from "../../assets/transcation.png";
import report from "../../assets/report.png";

const menu = () => {
  return (
    <div className="menu-wrap">
      <div className="menu">
        <div className="menu-top">
          <a href="#" target="_self">
            <img src={logo} alt="main-logo" />
          </a>

          <div className="menu-list">
            <div className="menu-item">
              <img src={home} alt="home-icon" width={22} height={22} />
              <div className="menu-item-name">Home</div>
            </div>
            <div className="menu-item">
              <img src={employee} alt="employee-icon" width={22} height={22} />
              <div className="menu-item-name">Employee</div>
            </div>
            <div className="menu-item">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
              >
                <path
                  d="M0 0 C2.32289633 2.77248917 3.05978958 4.12308612 2.8125 7.75 C2 10 2 10 0 11 C-0.46651207 13.12576782 -0.46651207 13.12576782 -0.625 15.5625 C-0.69976562 16.38878906 -0.77453125 17.21507813 -0.8515625 18.06640625 C-0.90054687 18.70449219 -0.94953125 19.34257812 -1 20 C-1.763125 19.814375 -2.52625 19.62875 -3.3125 19.4375 C-6.08967375 18.77180827 -6.08967375 18.77180827 -9 20 C-9.07347656 19.04287109 -9.07347656 19.04287109 -9.1484375 18.06640625 C-9.22320312 17.24011719 -9.29796875 16.41382812 -9.375 15.5625 C-9.44460938 14.73878906 -9.51421875 13.91507813 -9.5859375 13.06640625 C-9.79089844 12.04353516 -9.79089844 12.04353516 -10 11 C-10.66 10.67 -11.32 10.34 -12 10 C-12.94934202 7.07286212 -13.23176473 5.57168632 -12.0625 2.6875 C-11.711875 2.130625 -11.36125 1.57375 -11 1 C-10.34 1 -9.68 1 -9 1 C-9 0.34 -9 -0.32 -9 -1 C-5.14169295 -2.28610235 -3.65631112 -1.67580926 0 0 Z M-6 3 C-6.66 4.32 -7.32 5.64 -8 7 C-6.02 7.99 -6.02 7.99 -4 9 C-3.34 7.68 -2.68 6.36 -2 5 C-3.32 4.34 -4.64 3.68 -6 3 Z M-8 12 C-8 13.65 -8 15.3 -8 17 C-6.02 17 -4.04 17 -2 17 C-2 15.68 -2 14.36 -2 13 C-4.97 12.505 -4.97 12.505 -8 12 Z "
                  fill="#D4D4D4"
                  transform="translate(16,2)"
                />
              </svg>
              <div className="menu-item-name">Reward</div>
            </div>
            <div className="menu-item">
              <img src={report} alt="report-icon" width={22} height={22} />
              <div className="menu-item-name">Reports</div>
            </div>
            <div className="menu-item">
              <img
                src={transcation}
                alt="transcation-icon"
                width={22}
                height={22}
              />
              <div className="menu-item-name">Transactions</div>
            </div>
            <div className="menu-item">
              <img src={setting} alt="setting-icon" width={22} height={22} />
              <div className="menu-item-name">Setting</div>
            </div>
          </div>
        </div>

        <div className="menu-bottom">
          <div className="cta-btn">
            <a href="#" target="_self">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
