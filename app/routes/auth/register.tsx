import React, { useState } from "react";
import { motion } from "framer-motion";
import InputText from "~/components/input-text";

interface RegisterProps {
  onSwitch: () => void;
}

const Register: React.FC<RegisterProps> = ({ onSwitch }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="flex items-center justify-center md:justify-between h-screen relative gap-5">
      <motion.img
        src="/brain.png"
        alt="Brain Tumor"
        className="md:w-1/2 mb-8 hidden md:block"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      />
      <motion.div
        style={{
          backgroundImage: "url('/brain.png')",
        }}
        className="h-full w-full absolute bg-contain scale-150 bg-no-repeat bg-center md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      />
      <motion.main
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
        className="relative md:w-1/2 w-full h-full flex justify-center flex-col gap-4 px-6"
      >
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
          Create Account
        </h2>
        <form className="md:space-y-10 space-y-4">
          <div className="flex md:flex-row flex-col gap-1 md:gap-5 w-full">
            <InputText
              lable="First Name"
              value={firstName}
              onChange={setFirstName}
              placeholder="Enter your first name"
              className="md:w-1/2 w-full"
            />
            <InputText
              lable="Last Name"
              value={lastName}
              onChange={setLastName}
              placeholder="Enter your last name"
              className="md:w-1/2  w-full"
            />
          </div>
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
          <InputText
            lable="Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Confirm your password"
            type="password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-extrabold px-2 py-4 hover:bg-blue-600 text-2xl rounded-2xl mt-4"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-lg">
          Already have an account?{" "}
          <button onClick={onSwitch} className="text-blue-500 cursor-pointer">
            Login
          </button>
        </p>
      </motion.main>
    </div>
  );
};

export default Register;
