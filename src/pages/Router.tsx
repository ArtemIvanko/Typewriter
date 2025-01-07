import { BrowserRouter,  Navigate, Route, Routes } from "react-router-dom";
import { Outlet } from "src/components/Outlet";
import { Typewriter } from "./Typewriter";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Typewriter />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);