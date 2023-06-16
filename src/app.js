import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import {
  Cryptocurrencies,
  Cryptodetails,
  Exchanges,
  Homepage,
  Navbar,
  News,
} from "./components";

function App() {
  return (
    <div className="app">
      {/* <div className="navbar"> */}
      <Navbar />
      {/* </div> */}
      <div className="main">
        <Layout className="layout">
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/crypto/:coinId" element={<Cryptodetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}>
            CRYPTOAPP <br />
            All Rights Reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
