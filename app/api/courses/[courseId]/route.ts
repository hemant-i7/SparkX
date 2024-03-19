import Course from "@/models/Course";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,

  {
    params,
  }: {
    params: { courseId: string };
  }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await Course.findByIdAndUpdate(courseId, {
      ...values,
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("[COURSES]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
