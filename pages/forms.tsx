import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less code (o)
// Better validation (o)
// Better Errors (set, clear, display) (o)
// Have control over inputs (o)
// Don't deal with events (o)
// Easier inputs (o)

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    resetField,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log(data);
    // if backend is offline
    setError("errors", { message: "Backend is offline" });
    // if backend says that username has taken
    setError("username", { message: "Username is already existing" });
    reset(); // reset all
    resetField("password"); // reset only password
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  useEffect(() => {
    setValue("username", "hello");
  }, []);
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
