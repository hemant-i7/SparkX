import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { connect } from "@/lib/db";
import Course from "@/models/Course";

export async function POST(req: Request) {
  try {
    connect();

    const { userId } = auth();
    const { title } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await new Course({
      userId,
      title,
    });

    const newCourse = await course.save();

    return NextResponse.json(newCourse);
  } catch (error) {
    console.error("[COURSES]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
