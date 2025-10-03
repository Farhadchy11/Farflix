import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider.jsx";

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const form = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        navigate(form, { replace: true });
      })
      .catch((error) => {});
  };

  return (
    <div class="bg-[#525252] text-white flex items-center h-screen">
      <form
        onSubmit={handleLogin}
        className=" space-y-6 max-w-md mx-auto p-6 rounded-xl shadow-lg  "
      >
        {/* Email Input */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter password"
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </div>

        <div>
          <p>
            You have not any account?{" "}
            <Link
              className="text-green-400 underline"
              to={"/Layout/RegisterForm"}
            >
              Please register
            </Link>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-950 transition duration-200"
        >
          Login Now
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
