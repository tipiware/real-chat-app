import React, { useState } from "react";
import Link from "next/link";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavButton,
  NavButtonLink,
  NavIcon,
  NavItem,
  NavItemButton,
  NavLinks,
  NavLogo,
  NavMenu,
  NavTitle,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <NavIcon />
          <Link href="/" passHref>
            <NavTitle>Chat App</NavTitle>
          </Link>
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
        <NavItem>
            <Link href="/" passHref>
              <NavLinks>Chat now</NavLinks>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/history">
              <NavLinks>Our history</NavLinks>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <NavLinks>About us</NavLinks>
            </Link>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;