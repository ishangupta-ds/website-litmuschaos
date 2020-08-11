import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { CSSDebugger } from "../css-debugger";
// Components
import { Footer } from "../footer";
import { Nav } from "../nav";

const Container = styled.div`
  position: relative;
  z-index: ${(props) => props.theme.zIndex.content};
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <CSSDebugger />
        <Nav />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
