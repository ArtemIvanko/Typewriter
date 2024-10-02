import styled from "@/DefaultTheme";
import { Outlet } from "react-router-dom";

export const Navigation = () => (
  <Root>
    <div>Navigation</div>
    <div>
      <Outlet />
    </div>
    <div>Footer</div>
  </Root>
);

const Root = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100vh",
})