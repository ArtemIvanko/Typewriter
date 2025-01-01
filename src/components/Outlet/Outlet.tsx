import { Outlet as RootOutlet } from "react-router-dom";
import { Navigation } from "@shared/Navigation";
import styled from "@/DefaultTheme";

export const Outlet = () => (
  <Root>
    <Navigation />
    <Content>
      <RootOutlet />
    </Content>
    <div>Footer</div>
  </Root>
);

const Root = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100vh",
});

const Content = styled("div")(({ theme }) => ({
  padding: "1rem 2rem",
  height: "100%",
  background: theme.palette.info.main,
}));
