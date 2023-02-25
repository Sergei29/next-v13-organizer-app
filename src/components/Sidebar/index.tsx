import React from "react";
import Image from "next/image";

import logo from "@/assets/images/logo.png";
import SignOutButton from "@/components/SignOutButton";
import Card from "@/components/Card";
import SidebarLink from "./SidebarLink";

const links = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

interface IProps {}

const Sidebar = ({}: IProps): JSX.Element => (
  <Card className="h-full w-40 flex items-center justify-between flex-wrap">
    <div className="w-full flex justify-center items-center">
      <Image src={logo} alt="Able logo" priority className="w-14" />
    </div>
    {links.map((link) => (
      <SidebarLink key={link.link} link={link} />
    ))}
    <SignOutButton />
  </Card>
);

export default Sidebar;
