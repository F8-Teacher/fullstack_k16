"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import z, { ZodError } from "zod";
export const handleSave = async (
  prevState: {
    message: string;
    success: boolean;
  },
  formData: FormData,
) => {
  const schema = z.object({
    title: z.string().min(1, "Title is required"),
  });
  try {
    await schema.parseAsync(Object.fromEntries(formData.entries()));
  } catch (error) {
    const err = error as ZodError;
    return {
      success: false,
      message: "Validate failed",
      errors: Object.fromEntries(
        err.issues.map(({ path, message }) => [path[0], message]),
      ),
    };
  }
  //Thêm dữ liệu
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/todos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.get("title"),
          completed: false,
        }),
      },
    );
    if (response.ok) {
      revalidateTag("todos", {
        expire: 0,
      });
    }
  } catch {
    return {
      success: false,
      message: "Server error. Please try again",
    };
  }
  return {
    message: "Create success",
    success: true,
  };
};

export const something = async () => {
  console.log("Ok chưa?");
  (await cookies()).set("token", "hoangan", {
    httpOnly: true,
  });
};
