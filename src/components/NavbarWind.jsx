import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import logoWind from "../assets/logo.svg";

function NavbarWind() {
  const menuItems = [
    "Company",
    "Market Place",
    "Feature",
    "Team",
    "Contacts",
    "Log Out",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="justify-start lg:container  px-6 md:px-0  mx-auto"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="start" className="hidden md:flex">
        <NavbarBrand>
          <img src={logoWind} alt="" />
          <p className="font-bold text-inherit ml-5">LandWind</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="ml-10" color="foreground" href="#">
            Company
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Marketplace
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarContent justify="end" className="hidden md:flex">
          <NavbarItem className="hidden lg:flex"></NavbarItem>
          <NavbarItem></NavbarItem>
        </NavbarContent>
        <div className=" hidden lg:flex  gap-x-4 ml-44 -mr-[25%]">
          <Link className="text-black" href="#">
            Log in
          </Link>
          <Button
            className="bg-[#7e3af2] text-white"
            as={Link}
            href="#"
            variant="flat"
          >
            Get started
          </Button>
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarWind;
