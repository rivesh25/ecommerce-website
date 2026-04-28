import { useState } from "react";
import useSEO from "../hooks/useSEO";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  useSEO(
    currentState === "Login" ? "Sign In to Your Account" : "Create an Account",
    currentState === "Login"
      ? "Sign in to your Forever account to access orders, saved items, and exclusive member offers."
      : "Create a free Forever account to track orders, save favourites, and unlock exclusive member offers.",
  );

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-6 text-gray-800"
        aria-label={currentState === "Login" ? "Login form" : "Sign up form"}
      >
        <div className="inline-flex items-center gap-2 mb-4 mt-10">
          <p className="prata-regular text-4xl">{currentState}</p>
          <hr className="border-none h-[2px] w-10 bg-gray-800" />
        </div>

        <div className="w-full flex flex-col gap-4">
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              type="text"
              name="name"
              autoComplete="name"
              className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-black transition-colors"
              placeholder="Name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-black transition-colors"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            autoComplete={
              currentState === "Login" ? "current-password" : "new-password"
            }
            className="w-full px-4 py-3 border border-gray-300 outline-none focus:border-black transition-colors"
            placeholder="Password"
            required
          />
        </div>

        <div className="w-full flex justify-between text-sm mt-[-4px] text-gray-500">
          <p className="cursor-pointer hover:text-black transition-colors">
            Forgot your password?
          </p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer hover:text-black transition-colors font-medium"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create account
            </p>
          ) : (
            <p
              className="cursor-pointer hover:text-black transition-colors font-medium"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </p>
          )}
        </div>

        <button className="bg-black text-white px-8 py-4 mt-4 w-full text-sm font-medium tracking-widest uppercase hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </main>
  );
};

export default Login;
