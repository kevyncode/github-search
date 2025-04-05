import React from "react";
import Image from "next/image";
import Input from "@/components/Input";
import Logo from "@/assets/Group 1.svg"; // Substitua pelo caminho correto do logo

const BoxProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-black rounded-lg shadow-lg p-6 w-full max-w-7xl">
      {/* Logo */}
      <div className="mb-4">
        <Image src={Logo} alt="Logo" width={384} height={82} />
      </div>

      {/* Input */}
      <Input />
    </div>
  );
};

export default BoxProfile;
