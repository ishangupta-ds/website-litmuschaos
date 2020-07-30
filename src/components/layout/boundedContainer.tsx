import React from "react";
import styled from "styled-components";

interface IBoundedContainer {
  width: string;
  children: React.ReactNode;
}

interface IPanelContainer {
  width: string;
}

const PanelContainer = styled.div<IPanelContainer>`
  margin: 1rem;
  width: ${props => (props.theme.screens.sm ? "100%" : props.width)};
`;

const BoundedContainer: React.FC<IBoundedContainer> = ({ width, children }) => {
  return <PanelContainer width={width}>{children}</PanelContainer>;
};

export { BoundedContainer };