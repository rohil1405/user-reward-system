import React from "react";
import { Link } from "react-router-dom";
import "../Menu/Menu.css";
import logo from "../../assets/main-logo.png";
import employee from "../../assets/employee.png";
import verify from "../../assets/verify.png";

const UserMenu = () => {
  return (
    <div className="menu-wrap">
      <div className="menu">
        <div className="menu-top">
          <Link to="/">
            <img src={logo} alt="main-logo" />
          </Link>

          <div className="menu-list">
            <div className="menu-item">
              <img src={verify} alt="recognize-icon" width={22} height={22} />
              <Link to="/recognize" className="menu-item-name">
                Recognize
              </Link>
            </div>
            <div className="menu-item">
              <img src={employee} alt="profile-icon" width={22} height={22} />
              <Link to="/profile" className="menu-item-name">
                Profile
              </Link>
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
              <Link to="/reward" className="menu-item-name">
                Reward
              </Link>
            </div>
            <div className="menu-item">
            <?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
<path d="M0 0 C1.98 0 3.96 0 6 0 C6 0.99 6 1.98 6 3 C7.65 3 9.3 3 11 3 C12.93103448 13.13793103 12.93103448 13.13793103 11 17 C9.35 17 7.7 17 6 17 C6 17.99 6 18.98 6 20 C4.02 20 2.04 20 0 20 C0 19.01 0 18.02 0 17 C-1.65 17 -3.3 17 -5 17 C-6.93103448 6.86206897 -6.93103448 6.86206897 -5 3 C-3.35 3 -1.7 3 0 3 C0 2.01 0 1.02 0 0 Z M-2 7 C-2.5 10 -2.5 10 -2 13 C0.76148156 15.31140296 0.76148156 15.31140296 3.5625 14.6875 C5.98114611 14.08760162 5.98114611 14.08760162 8 13 C8.2502157 10.08365871 8.2502157 10.08365871 8 7 C3.90086392 4.26724261 2.09913608 4.26724261 -2 7 Z " fill="#D1D1D1" transform="translate(8,1)"/>
<path d="M0 0 C2.625 0.375 2.625 0.375 5 1 C5.625 3.375 5.625 3.375 6 6 C5.34 6.66 4.68 7.32 4 8 C1.375 7.625 1.375 7.625 -1 7 C-1.625 4.625 -1.625 4.625 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z M1 3 C1 3.66 1 4.32 1 5 C1.66 5 2.32 5 3 5 C3 4.34 3 3.68 3 3 C2.34 3 1.68 3 1 3 Z " fill="#D2D2D2" transform="translate(9,7)"/>
</svg>

              <Link to="/setting" className="menu-item-name">
                Setting
              </Link>
            </div>
          </div>
        </div>

        <div className="menu-bottom">
          <div className="cta-btn">
            <Link to="/">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
