import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { CSSDebugger } from "../css-debugger";
// Components
import { Footer } from "../footer";
import Header from "./Header";

const Container = styled.div`
  margin: ${props => (props.theme.screens.md ? "0 1rem" : "0 5rem")};
  position: relative;
  z-index: ${props => props.theme.zIndex.content};
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <CSSDebugger />
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
