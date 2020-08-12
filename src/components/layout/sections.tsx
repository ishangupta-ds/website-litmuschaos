import styled from "styled-components";

const SectionLight = styled.section`
  background-color: ${props => props.theme.colors.backgroundLight};
  padding: ${props => (props.theme.screens.lg ? "3rem 2rem" : "5rem 10rem")};
`;

const SectionDark = styled.section`
  background-color: ${props => props.theme.colors.backgroundDark};
  padding: ${props => (props.theme.screens.lg ? "3rem 2rem" : "5rem 10rem")};
`;

export { SectionLight, SectionDark };
