// import NavItem from "./NavItem";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

export default function Navigation() {
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
    },{
      itemName: "Blog",
      menuItems: [
        { name: "Blog 1", link: "/#" },
        { name: "Blog 2", link: "/#" },
        { name: "Blog 3", link: "/#" },
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
    // <nav className="flex justify-between items-center py-4">
    //   {/* <div className="flex flex-col md:flex-row"> */}

    //   <div className="hidden md:flex justify-between gap-4 mx-4">
    //     {navItems.map((item, index) => (
    //       <NavItem
    //         key={index}
    //         className="gap-4"
    //         itemName={item.itemName}
    //         menuItems={item.menuItems}
    //       />
    //     ))}
    //   </div>
    // </nav>
    <div className="w-4/5">
  <Navbar>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          alt="Flowbite Logo"
          className="h-6 mr-3 sm:h-9"
          src="https://flowbite.com/docs/images/logo.svg"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex gap-3 md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block text-sm font-medium truncate">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/navbars"
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Services
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
  </Navbar>
</div>
  );
}
