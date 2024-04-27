import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OfflinePage = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
      <Link href='/signup'>
        <Button size='sm' variant='ghost'>
          Registration
        </Button>
      </Link>
      <Link href='/login'>
        <Button size='sm' variant='ghost'>
          Login
        </Button>
      </Link>
    </div>
  );
};

export default OfflinePage;
