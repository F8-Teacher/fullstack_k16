import { NextRequest, NextResponse } from "next/server";
type Props = {
  params: Promise<{ id: number }>;
};
export const GET = async (request: NextRequest, { params }: Props) => {
  const { id } = await params;
  console.log(id);

  return NextResponse.json({});
};
