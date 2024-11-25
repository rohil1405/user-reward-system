import "./Transcations.css";

const Overview = () => {
  return (
    <div className="tab-content-overview">
      <h2 className="h1">Overview</h2>

      <div className="overview-wrap">
        <div className="overview">
          <div className="overview-last">
            <div className="overview-days">Last 30 Days</div>
            <div className="overview-montd">
              <select name="selectedMontd">
                <option value="current-montd">Current Montd</option>
                <option value="banana">ABC</option>
                <option value="orange">XYZ</option>
              </select>
            </div>
          </div>

          <div className="overview-box">
            <div className="overview-item">
              <div className="overview-name">Transactions</div>
              <div className="overview-number">
                <div className="overview-counter">116</div>
                <div className="overview-total">20%</div>
              </div>
            </div>

            <div className="overview-item">
              <div className="overview-name">Refunds</div>
              <div className="overview-number">
                <div className="overview-counter">24</div>
                <div className="overview-total red">4%</div>
              </div>
            </div>

            <div className="overview-item">
              <div className="overview-name">Rate</div>
              <div className="overview-number">
                <div className="overview-counter">32%</div>
                <div className="overview-total">8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-overview">
        <h2 className="h1">Latest Transactions</h2>

        <div className="overview-field">
          <input type="text" placeholder="Search by Transactions"></input>
          <select name="selectedDays">
            <option value="current-montd">Last 10 Days</option>
            <option value="30-days">Last 30 days</option>
            <option value="montd">Lat 3 montds</option>
          </select>
        </div>

        <table>
          <tr>
            <td>Transaction ID</td>
            <td>Reward ID</td>
            <td>Amount</td>
            <td>Payment mode</td>
            <td>Status</td>
            <td>Tranaction Date</td>
          </tr>
          <tr>
            <td>aabcdef</td>
            <td>abbcdef</td>
            <td className="red">-2000</td>
            <td>Cash</td>
            <td className="green">Success</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>aabcdef</td>
            <td>abbcdef</td>
            <td className="red">-2000</td>
            <td>Cash</td>
            <td className="green">Success</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>aabcdef</td>
            <td>abbcdef</td>
            <td className="green">+2000</td>
            <td>Cash</td>
            <td className="red">Failure</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>aabcdef</td>
            <td>abbcdef</td>
            <td className="green">+2000</td>
            <td>Cash</td>
            <td className="red">Failure</td>
            <td>2024</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Overview;
