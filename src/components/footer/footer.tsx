import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import { BoundedContainer } from "../layout";
import { Paragraph } from "../texts";
import { LinkGroup } from "./linkgroup";

const Logo: React.FC = () => (
  <img src="/svg/litmus-logo.svg" width="128" alt="litmus logo" />
);

const Row = styled.div`
  display: flex;
  justify-content: center;
  > * {
    margin: 0 1rem;
  }
`;

const Copyright: React.FC = () => (
  <>
    <Paragraph>
      Copyright © 2020 LitmusChaos Authors. All rights reserved.
    </Paragraph>
    <Paragraph>
      The Linux Foundation has registered trademarks and uses trademarks. For a
      list of trademarks of The Linux Foundation, please see our Trademark Usage
      page.
    </Paragraph>
  </>
);

const Footer: React.FC = () => {
  const { md } = useTheme().screens;

  return (
    <>
      {md ? (
        <>
          <Logo />
          <LinkGroup />
          <Copyright />
        </>
      ) : (
        <Row>
          <BoundedContainer width="20%" margin="1rem">
            <Logo />
            <Copyright />
          </BoundedContainer>
          <div>
            <LinkGroup />
          </div>
        </Row>
      )}
      <div>
        <hr style={{ width: "80%", margin: "1rem auto" }} />
        <Paragraph style={{ textAlign: "center" }}>
          Originally created by Mayadata
        </Paragraph>
      </div>
    </>
  );
};

export { Footer };
