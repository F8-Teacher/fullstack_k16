import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
  const { value, type } = await request.json();
  if (!value || !type) {
    return NextResponse.json({
      success: false,
      message: "Value and type is required",
    });
  }
  if (type === "path") {
    revalidatePath(value);
  } else {
    revalidateTag(value, {
      expire: 0,
    });
  }

  return NextResponse.json({
    success: true,
    message: `Clear cache success`,
  });
};
