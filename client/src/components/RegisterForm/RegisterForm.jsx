import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import { updateProfile } from "firebase/auth";

const RegisterForm = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegisterform = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageurl = e.target.imageurl.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateProfile(user, {
          displayName: name,
          photoURL: imageurl,
        })
          .then(() => {
            const userInfo = {
              name: user.displayName,

              email: user.email,
            };
            axios
              .post("https://ecommerceserver-mocha.vercel.app/users", userInfo)
              .then((res) => {
                console.log(res, "User registration response");
                if (res.data.insertedId) {
                  console.log(
                    "User registered successfully:",
                    res.data.insertedId
                  );
                }
              });
          })
          .catch(() => {
            console.error("Profile update failed");
          });
      })
      .catch((error) => {
        console.error("Registration failed:", error.message);
      });
  };

  return (
    <div class="bg-[#525252] text-white flex items-center h-screen">
      <form
        onSubmit={handleRegisterform}
        className="space-y-6 max-w-md mx-auto rounded-xl shadow-lg "
      >
        {/* Name Input */}

        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-3 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </div>

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

        {/* Image URL Input */}
        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="url"
            name="imageurl"
            required
            placeholder="Enter Image URL"
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-950 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
