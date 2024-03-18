import React from "react";
import MobileSlidebar from "./MobileSlidebar";
import NavbarRoutes from "@/components/NavbarRoutes";

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
      <MobileSlidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
