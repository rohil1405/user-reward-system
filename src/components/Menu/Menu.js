import logo from "../../assets/main-logo.png";
import "./Menu.css";
import home from "../../assets/home.png";
import employee from "../../assets/employee.png";
import setting from "../../assets/setting.png";
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
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
              >
                <path
                  d="M0 0 C1.77483667 2.95806112 2.00700002 5.45300046 2.125 8.875 C0.85220091 11.88952417 -0.1427522 13.39446238 -2.875 15.1875 C-4.875 15.875 -4.875 15.875 -7.875 15.875 C-7.875 14.885 -7.875 13.895 -7.875 12.875 C-7.070625 12.565625 -6.26625 12.25625 -5.4375 11.9375 C-2.98419595 11.11164655 -2.98419595 11.11164655 -1.875 9.875 C-1.62494614 6.91682893 -1.62494614 6.91682893 -1.875 3.875 C-3.77255144 1.52526182 -3.77255144 1.52526182 -7 1.75 C-7.94875 1.79125 -8.8975 1.8325 -9.875 1.875 C-9.875 2.535 -9.875 3.195 -9.875 3.875 C-11.525 4.205 -13.175 4.535 -14.875 4.875 C-14.875 2.895 -14.875 0.915 -14.875 -1.125 C-9.7677294 -2.24610818 -4.66193194 -2.79715917 0 0 Z "
                  fill="#D4D4D4"
                  transform="translate(17.875,4.125)"
                />
                <path
                  d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.625 3.8125 3.625 3.8125 4 7 C3.01 8.485 3.01 8.485 2 10 C1.01 9.67 0.02 9.34 -1 9 C-1.625 6.1875 -1.625 6.1875 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z "
                  fill="#D4D4D4"
                  transform="translate(10,6)"
                />
                <path
                  d="M0 0 C0.66 0 1.32 0 2 0 C1.67 0.99 1.34 1.98 1 3 C0.34 2.34 -0.32 1.68 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z "
                  fill="#D4D4D4"
                  transform="translate(5,15)"
                />
                <path
                  d="M0 0 C0.99 0 1.98 0 3 0 C3 0.66 3 1.32 3 2 C2.01 2 1.02 2 0 2 C0 1.34 0 0.68 0 0 Z "
                  fill="#D4D4D4"
                  transform="translate(2,10)"
                />
                <path
                  d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z "
                  fill="#D4D4D4"
                  transform="translate(7,17)"
                />
                <path
                  d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z "
                  fill="#D4D4D4"
                  transform="translate(3,13)"
                />
              </svg>
              <div className="menu-item-name">Transactions</div>
            </div>
            <div className="menu-item">
              <img src={setting} alt="setting-icon" width={22} height={22} />
              <div className="menu-item-name">Setting</div>
            </div>
          </div>
        </div>

        <div className="men u-bottom">
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
