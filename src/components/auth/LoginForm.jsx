import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field, PasswordField } from "../common/Field";
import loginSchema from "../../schema/loginSchema";
import { useAuth } from "../../hooks";
import api from "../../api/axios";

export default function LoginForm() {
  const { onAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "saadh392@mail.com",
      password: "bestPassw0rd",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formData) => {
    try {
      const { status, data } = await api.post("/auth/login", formData);

      if (status === 200 && data) {
        const { token, user } = data;
        const { token: authToken, refreshToken } = token;

        onAuth({
          user,
          authToken,
          refreshToken,
        });

        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const { email, password } = errors || {};

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        id="email"
        label="Email"
        name="email"
        type="email"
        register={register}
        error={email?.message}
      />

      <PasswordField
        id="password"
        label="Password"
        name="password"
        register={register}
        error={password?.message}
      />

      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
