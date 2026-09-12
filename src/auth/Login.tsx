import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/Axios";

type User = {
  username: string;
  password: string;
  name?: string;
  email?: string;
};

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await API.get<User[] | { users?: User[] }>("/users");
      const users = Array.isArray(response.data)
        ? response.data
        : Array.isArray(response.data?.users)
          ? response.data.users
          : [];

      const user = users.find(
        (item) =>
          item.username === formData.username.trim() &&
          item.password === formData.password,
      );

      if (!user) {
        setError("Invalid username or password");
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
      setSuccess("Login Successful!");
      setTimeout(() => {
        setSuccess("");
        navigate("/visitor", { replace: true });
      }, 3000);
    } catch (err) {
      console.log(err);
      setError("Login Failed");

      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="auth_wrapper h-dvh flex justify-center items-center bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
        {error && (
          <p className="text-red-500 absolute top-4 left-auto right-auto bg-white py-2 px-4 rounded-md ease-in-out duration-300 shadow-sm">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 absolute top-4 left-auto right-auto bg-white py-2 px-4 rounded-md ease-in-out duration-300 shadow-sm">
            {success}
          </p>
        )}
        <div className="auth_parent bg-white max-w-[400px] w-full m-auto py-10 px-8 rounded-xl">
          <div className="auth_header text-center pb-5">
            <h1 className="md:text-xl font-bold text-heading">Welcome to My First App!</h1>
            <p className="text-para pt-1">To stay connected with us, kindly log in using your personal information.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input_fields">
              <label className="label" htmlFor="username" id="username">
                Username
              </label>
              <div className="input">
                <input
                  className="input_field"
                  type="text"
                  placeholder="Enter email"
                  name="username"
                  autoCapitalize="off"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input_fields">
              <label className="label" htmlFor="password" id="password">
                Password
              </label>
              <div className="input">
                <input
                  className="input_field"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  autoCapitalize="off"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="auth">
              <button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
