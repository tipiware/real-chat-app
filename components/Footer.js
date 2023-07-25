import React from "react";
import Link from "next/link";
import {
  FooterButton,
  FooterButtonWrapper,
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  Logo,
  UnderFooter,
  WebsiteRights,
} from "./Footer.elements";

const Footer = () => {

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>Join our exclusive mailing list to receive valuable information about our chat apps</FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput />
          <FooterButtonWrapper>
            <FooterButton>Join</FooterButton>
          </FooterButtonWrapper>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink>contact</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink>Policy</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink>About us</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;