import styled from "@/DefaultTheme";

export const Navigation = () => (
  <Root>
    <h1>Hello, React 18!</h1>
  </Root>
);

const Root = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "100vh",
})