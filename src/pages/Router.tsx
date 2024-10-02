import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "@shared/Navigation";

export const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        Hello
      </Route>
    </Routes>
  </HashRouter>
);