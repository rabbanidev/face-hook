import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field, PasswordField } from "../common/Field";
import loginSchema from "../../schema/loginSchema";
import { useAuth } from "../../hooks";
import { useMutation } from "react-query";
import { login } from "../../api/auth";
import Error from "../common/Error";

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

  // Update auth state and redirect to home page when user is logged in successfully
  const handleSuccessLogin = (loginData) => {
    const { token, user } = loginData;
    const { token: authToken, refreshToken } = token;
    onAuth({
      user,
      authToken,
      refreshToken,
    });
    navigate("/");
  };

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: login,
    onSuccess: handleSuccessLogin,
  });

  // Form Submit handler
  const onSubmit = (formData) => {
    mutate(formData);
  };

  // Destructure form errors
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
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : " Login"}
      </button>

      {isError && <Error error={error?.data?.error || error?.message} />}
    </form>
  );
}
