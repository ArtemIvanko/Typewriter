import { BrowserRouter,  Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "@shared/Navigation";
import { Typewriter } from "./Typewriter";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Typewriter />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);