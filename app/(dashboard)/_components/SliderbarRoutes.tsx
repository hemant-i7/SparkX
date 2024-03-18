"use client";

import { Compass, Layout } from "lucide-react";
import React from "react";
import SlidebarItem from "./SlidebarItem";

const guestRoutes = [
  { icon: Layout, label: "Dashboard", href: "/" },
  { icon: Compass, label: "Browser", href: "/search" },
];

const SliderbarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className='flex flex-col w-full'>
      {routes.map((route) => (
        <SlidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SliderbarRoutes;
