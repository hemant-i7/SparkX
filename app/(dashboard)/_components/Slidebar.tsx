import React from "react";
import Logo from "./Logo";
import SliderbarRouters from "./SliderbarRoutes";

const Slidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
      <div className='p-6'>
        <Logo />
      </div>
      <div className='flex flex-col w-full'>
        <SliderbarRouters />
      </div>
    </div>
  );
};

export default Slidebar;
