import React from "react";
import styled from "styled-components";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionLight,
} from "../../layout";
import { Heading, Paragraph, PurpleText } from "../../texts";
import { Avatar } from "./Avatar";
import { ChaosBirdFeedback } from "./ChaosBirdFeedback";

interface IUserQuote {
  quote: string;
  name: string;
  designation: string;
}

const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const UserQuote: React.FC<IUserQuote> = ({ quote, name, designation }) => {
  return (
    <BoundedContainer breakpoint="md" width="50%" margin="0 0 0 2rem">
      <Center>
        <div>
          <Heading>See what our users are saying about us</Heading>
          <br />
          <Paragraph>{quote}</Paragraph>
          <br />
          <AvatarDiv>
            <Avatar />
            <div style={{ height: "fit-content" }}>
              <PurpleText underline={false}>{name}</PurpleText>
              <Paragraph>{designation}</Paragraph>
            </div>
          </AvatarDiv>
        </div>
      </Center>
    </BoundedContainer>
  );
};

const FeedBack: React.FC = () => {
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <ChaosBirdFeedback />
        </BoundedContainer>
        <UserQuote
          quote="Litmus is one of the most promising open source chaos engineering frameworks that takes into account proper chaos engineering principles while providing autonomy and  extensibility to the users."
          name="Andreas Krivas"
          designation="Chief Architect at Telus Digital"
        />
      </ResponsiveRow>
    </SectionLight>
  );
};

export { FeedBack };
