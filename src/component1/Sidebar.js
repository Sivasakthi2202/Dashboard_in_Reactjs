import React, { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", sales: 0 },
  { time: "03:00", sales: 1000 },
  { time: "06:00", sales: 2000 },
  { time: "09:00", sales: 1500 },
  { time: "12:00", sales: 3000 },
  { time: "15:00", sales: 2500 },
  { time: "18:00", sales: 1800 },
  { time: "21:00", sales: 2200 },
];

import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <p>Dashboard</p>
        </div>
        <div className="header-toggle2" current-count="4">
          <i class="fa-solid fa-bell"></i>
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <div className="less">
              <i class="fa-solid fa-less-than"></i>
            </div>

            <div className="nav-list">
              <hr></hr>
              <Link to="/dashboard" className="nav-link active">
                <i class="fa-solid fa-table-columns"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/hotel" className="nav-link">
                <i class="fa-solid fa-cart-shopping"></i>
                <span className="nav-link-name">Orders</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i class="fa-solid fa-users"></i>
                <span className="nav-link-name">Customers</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i class="fa-solid fa-chart-simple"></i>
                <span className="nav-link-name1">Reports</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i class="fa-solid fa-layer-group"></i>
                <span className="nav-link-name2">Integrations</span>
              </Link>
              <hr></hr>
              <h6>Saved reports</h6>
              <Link to="/gallery" className="nav-link">
                <i class="fa-solid fa-clipboard"></i>
                <span className="nav-link-name">Current month</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i class="fa-solid fa-clipboard"></i>
                <span className="nav-link-name">Last quarter</span>
              </Link>
              <Link to="/gallery" className="nav-link">
                <i class="fa-solid fa-clipboard"></i>
                <span className="nav-link-name">Year-end sale</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>
      <div className="chartssub">
        <div
          className="line"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "blue" }}>Today</h3>
          <ResponsiveContainer width="90%" height={150}>
            <LineChart margin={{ left: 10 }} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[0, 2]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="blue" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ marginTop: "20px" }} className="chartssub2">
          <div className="csub2">
            <h3 style={{ color: "blue" }}>Recent Deposit</h3>
            <h1 style={{ color: "black" }}>$3,024.00</h1>
            <h4 style={{ color: "grey" }}>On 15 March, 2019</h4>
            <a href="#">
              <p>view balance</p>
            </a>
          </div>
        </div>
      </div>

      <div className="table">
        <p style={{ color: "blue" }}>Recent Orders</p>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            height: "170px",
            margin: "10px",
          }}
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Ship to</th>
              <th>Payment Method</th>
              <th>Sale Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16 Mar, 2019</td>
              <td>Elvis presley</td>
              <td>Tupelo, MS</td>
              <td>VISA ....3719</td>
              <td>$312.40</td>
            </tr>
            <tr>
              <td>16 Mar, 2019</td>
              <td>Paul McCartney</td>
              <td>London, Uk</td>
              <td>VISA ....2574</td>
              <td>$866.99</td>
            </tr>
            <tr>
              <td>16 Mar, 2019</td>
              <td>Tom Scholz</td>
              <td>Boston, MA</td>
              <td>MC ....1253</td>
              <td>$100.81</td>
            </tr>
            <tr>
              <td>16 Mar, 2019</td>
              <td>Micheal Jeckson</td>
              <td>Gary, IN</td>
              <td>AMEX ....2000</td>
              <td>$700.00</td>
            </tr>
            <tr>
              <td>15 Mar, 2019</td>
              <td>Bruce springsten</td>
              <td>LONG branch</td>
              <td>VISA ....5919</td>
              <td>$900.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <center>
        <div className="copy">
          <p>Copyright @ your Website 2024.</p>
        </div>
      </center>
    </main>
  );
};

export default Sidebar;
