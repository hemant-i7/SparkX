"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && <div className='hidden md:block'></div>}
      <div className='flex gap-x-2 ml-auto'>
        {isTeacherPage || isPlayerPage ? (
          <Link href='/'>
            <Button size='sm' variant='ghost'>
              <LogOut className='h-4 w-4 mr-2' />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href='/teacher/courses'>
            <Button size='sm' variant='ghost'>
              Volunteer Mode
            </Button>
          </Link>
        )}
        <Link href='/offline'>
          <Button size='sm' variant='ghost'>
            Offline Mode
          </Button>
        </Link>
        <UserButton afterSignOutUrl='/' />
      </div>
    </>
  );
};
