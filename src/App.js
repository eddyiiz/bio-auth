import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Banner from "./components/Banner";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div>
      <Banner />
      <div className={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
