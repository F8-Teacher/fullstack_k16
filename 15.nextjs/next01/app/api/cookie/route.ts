import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export const GET = async (request: NextRequest) => {
  const name = request.nextUrl.searchParams.get("name");
  if (!name) {
    return NextResponse.json(
      {
        success: false,
        message: "Name is required",
      },
      {
        status: 400,
      },
    );
  }
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(name);
  return NextResponse.json({
    success: true,
    message: "Get cookie success",
    data: cookieValue?.value,
  });
};
