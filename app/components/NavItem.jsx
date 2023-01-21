import { Dropdown } from "flowbite-react";
import DownArrowIcon from "./icons/DownArrowIcon";
import Link from "next/link";

export default function NavItem({ itemName, menuItems }) {
  return (
    <Dropdown
    inline
    placement="bottom"
    arrowIcon={false}
    label={<div>
          <span>{itemName}</span>
          <DownArrowIcon/>
        </div>}>
        {menuItems.map((item, index) => (
          <Dropdown.Item key={index} >
              <Link
            href={item.link}
                className="hover:text-blue-500"
                // target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </Link>
          </Dropdown.Item>
        ))}
    </Dropdown>
  );
}
