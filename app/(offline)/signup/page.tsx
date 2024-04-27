"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
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
      <div className='w-[100%] h-auto flex items-start justify-center '>
        <Tabs
          defaultValue='login'
          className='w-[400px] transition-all duration-150 ease-in-out'>
          <TabsList>
            <TabsTrigger value='login' className='w-[200px]'>
              Student
            </TabsTrigger>
            <TabsTrigger value='signup' className='w-[200px]'>
              Volunteer
            </TabsTrigger>
          </TabsList>
          <TabsContent value='login'>
            <Card>
              <CardHeader>
                <CardTitle>Student </CardTitle>
                <CardDescription>Signup as a student</CardDescription>
              </CardHeader>

              <CardContent></CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='signup'>
            <Card>
              <CardHeader>
                <CardTitle>Volunteer</CardTitle>
                <CardDescription>Signup as a volunteer</CardDescription>
              </CardHeader>

              <CardContent></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default page;
