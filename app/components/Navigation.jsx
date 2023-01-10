"use client"
import { Dropdown } from "@nextui-org/react";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center py-4">
      <Dropdown>
        <Dropdown.Button light>Pergola</Dropdown.Button>
        <Dropdown.Menu variant="light">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="hidden md:block">
        <a
          className="p-4 hover:text-blue-500"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="p-4 hover:text-blue-500"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          className="p-4 hover:text-blue-500"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
