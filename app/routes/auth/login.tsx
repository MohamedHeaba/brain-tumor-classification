import React, { useState } from "react";
import { motion } from "framer-motion";
import InputText from "~/components/input-text";
import { createCookie } from "~/utils/cookies";
import { useNavigate } from "react-router";

interface LoginProps {
  onSwitch: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createCookie({ name: "accessToken", value: email });
    navigate("/");
  };

  return (
    <div className="flex flex-row-reverse items-center justify-between h-screen">
      <motion.img
        src="/brain.png"
        alt="Brain Tumor"
        className="md:w-1/2 mb-8 hidden md:block"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      />
      <motion.div
        style={{
          backgroundImage: "url('/brain.png')",
        }}
        className="h-full w-full absolute bg-contain scale-100 bg-no-repeat bg-center md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      />
      <motion.main
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
        className="relative md:w-1/2 w-full h-full flex justify-center flex-col gap-5 px-6"
      >
        <h2 className="text-4xl font-extrabold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          <InputText
            lable="Email"
            value={email}
            onChange={setEmail}
            placeholder="Enter your email"
            type="email"
          />
          <InputText
            lable="Password"
            value={password}
            onChange={setPassword}
            placeholder="Enter your password"
            type="password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-extrabold px-2 py-4 hover:bg-blue-600 text-2xl rounded-2xl"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-lg">
          Don't have an account?{" "}
          <button onClick={onSwitch} className="text-blue-500 cursor-pointer">
            Register
          </button>
        </p>
      </motion.main>
    </div>
  );
};

export default Login;
