import { BrowserRouter,  Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "@shared/Navigation";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        Hello
        <Route index element={<Navigate to="home" />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);