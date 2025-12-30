import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const existingEmail = async (email) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/users/is-available`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );
  return response.json();
};
const schema = z
  .object({
    name: z
      .string()
      .min(1, {
        message: "Tên bắt buộc phải nhập",
      })
      .uppercase({
        message: "Tên phải viết hoa",
      }),
    email: z
      .string()
      .min(1, {
        message: "Email bắt buộc phải nhập",
      })
      .email({
        message: "Email không đúng định dạng",
      })
      .refine(
        async (value) => {
          if (!value) {
            return;
          }
          const response = await existingEmail(value);
          if (response.isAvailable) {
            return true;
          }
        },
        {
          error: "Email đã tồn tại",
        }
      ),
    password: z.string().min(8, {
      message: "Mật khẩu phải từ 8 ký tự",
    }),
    confirmPassword: z.string(),
  })
  .refine(
    ({ password, confirmPassword }) => {
      return password === confirmPassword;
    },
    {
      message: "Mật khẩu nhập lại không khớp",
      path: ["confirmPassword"],
    }
  );
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    // getValues,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    // console.log(getValues("password"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Tên</label>
          <input type="text" placeholder="Tên.." {...register("name")} />
          {errors?.name?.message && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Email.." {...register("email")} />
          {errors?.email?.message && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            placeholder="Mật khẩu.."
            {...register("password")}
          />
          {errors?.password?.message && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label>Nhập lại mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu.."
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword?.message && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>
        <button disabled={!isValid}>Đăng ký</button>
      </form>
    </div>
  );
}
