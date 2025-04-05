import React from "react";
import Image from "next/image";
import Input from "@/components/Input";
import Logo from "@/assets/Group 1.svg"; // Substitua pelo caminho correto do logo

const BoxProfile: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center rounded-3xl shadow-lg p-6 w-full max-w-7xl"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Fundo preto semi-transparente
        backdropFilter: "blur(15px)", // Efeito de desfoque
        WebkitBackdropFilter: "blur(15px)", // Suporte para navegadores baseados no WebKit
        border: "1px solid rgba(255, 255, 255, 0.2)", // Borda sutil para destacar o fundo
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)", // Reflexo suave
      }}
    >
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
