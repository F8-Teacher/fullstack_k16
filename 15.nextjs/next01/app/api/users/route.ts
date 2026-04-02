//export các function trùng tên với các http method

import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  const status = request.nextUrl.searchParams.get("status");
  console.log(status);
  return NextResponse.json({
    success: true,
    message: "Get users success",
  });
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log(body);

  return NextResponse.json(
    {
      success: true,
      message: "Create user success",
    },
    {
      status: 201,
    },
  );
};
