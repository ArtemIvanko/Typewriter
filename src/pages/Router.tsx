import { BrowserRouter,  Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "@shared/Navigation";
import { Home } from "./Home";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);