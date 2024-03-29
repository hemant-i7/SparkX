import React from "react";
import { auth } from "@clerk/nextjs";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { connect } from "@/lib/db";
import Course from "@/models/Course";
import { TitleForm } from "./_components/title-form";
import { Description } from "@radix-ui/react-dialog";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { Button } from "@/components/ui/button";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  connect();

  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await Course.findOne({ _id: params.courseId });

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;

  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields} / ${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Registration</h1>
          {/* <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">Enter your details</h2>
          </div>

          <TitleForm initialData={course} courseId={course.id} />

          <DescriptionForm initialData={course} courseId={course.id} />

          <ImageForm initialData={course} courseId={course.id} />

          <Button className="p-4 m-4">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
