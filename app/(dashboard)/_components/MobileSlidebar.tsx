import { Menu } from "lucide-react";
import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Slidebar from "./Slidebar";

const MobileSlidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-0 bg-white'>
        <Slidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSlidebar;
