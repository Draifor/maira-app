"use client";
import logo from "../../public/logo.jpeg";
import Image from "next/image";
import NavItem from "./NavItem";
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";

export default function Header() {
  const navItems = [
    {
      itemName: "Home",
      menuItems: [
        { name: "Home 1", link: "/#" },
        { name: "Home 2", link: "/#" },
        { name: "Home 3", link: "/#" },
      ],
    },
    {
      itemName: "Services",
      menuItems: [
        { name: "Services 1", link: "/#" },
        { name: "Services 2", link: "/#" },
        { name: "Services 3", link: "/#" },
      ],
    },
    {
      itemName: "Portfolio",
      menuItems: [
        { name: "Portfolio 1", link: "/#" },
        { name: "Portfolio 2", link: "/#" },
        { name: "Portfolio 3", link: "/#" },
      ],
    },
    {
      itemName: "About",
      menuItems: [
        { name: "About 1", link: "/#" },
        { name: "About 2", link: "/#" },
        { name: "About 3", link: "/#" },
      ],
    },
    {
      itemName: "Contact",
      menuItems: [
        { name: "Contact 1", link: "/#" },
        { name: "Contact 2", link: "/#" },
        { name: "Contact 3", link: "/#" },
      ],
    },
  ];

  return (
    <header className="flex items-center flex-col overflow-hidden bg-dark">
      <div className="md:w-4/5 lg:max-w-5xl">
        <Navbar className="align-top">
          <Navbar.Brand href="#">
            <Image
              className="rounded"
              src={logo}
              alt="Aménagement extérieur & intérieur logo"
              width="auto"
              height="60"
            />
            <span className="max-w-[215px] text-center self-center text-xl text-gray-800  font-semibold dark:text-white">
              Aménagement extérieur & intérieur
            </span>
          </Navbar.Brand>
          <div className="flex gap-3 md:order-2">
            <Button gradientDuoTone="redToYellow">
              <ShoppingCartIcon className="mr-2 h-5 w-5" />
              Buy now
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                itemName={item.itemName}
                menuItems={item.menuItems}
              />
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
