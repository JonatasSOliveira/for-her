import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

import DataContainer from "../components/DataContainer/index";

import routes from "./routes";

const pages = routes.map((route, index) => {
  return (
    <Route
      key={index}
      path={route.path}
      element={<DataContainer text={route.text} imageName={route.imageName} />}
    />
  );
});

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {pages}
      </Routes>
    </HashRouter>
  );
}
