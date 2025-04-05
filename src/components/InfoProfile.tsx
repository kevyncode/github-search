import React from "react";
import Image from "next/image";

interface InfoProfileProps {
  avatarUrl: string;
  username: string;
  bio: string;
  repos: number;
}

const InfoProfile: React.FC<InfoProfileProps> = ({
  avatarUrl,
  username,
  bio,
  repos,
}) => {
  return (
    <div
      className="flex items-start rounded-3xl p-6 w-full"
      style={{
        backgroundColor: "rgba(40, 44, 52, 0.85)", // Fundo Darcula semi-transparente
        backdropFilter: "blur(10px)", // Efeito de desfoque
        WebkitBackdropFilter: "blur(10px)", // Suporte para navegadores baseados no WebKit
        border: "1px solid rgba(255, 255, 255, 0.1)", // Borda sutil para destacar o fundo
      }}
    >
      {/* Avatar */}
      <div className="w-34 h-34 relative mr-6 flex-shrink-0 border rounded-full border-white">
        <Image
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Informações */}
      <div className="flex flex-col flex-1 min-w-0">
        <h2 className="text-2xl font-bold text-gray-200 truncate">
          {username}
        </h2>

        {/* Renderizar o README apenas se ele existir */}
        {bio && bio !== "Este usuário não possui um README público." && (
          <div
            className="mt-2 overflow-y-auto custom-scrollbar"
            style={{ maxHeight: "500px", minHeight: "300px" }}
          >
            <div
              className="prose text-gray-300"
              dangerouslySetInnerHTML={{ __html: bio }}
            />
          </div>
        )}

        <div className="mt-4">
          <span className="text-gray-400 font-semibold">Repositórios: </span>
          <span className="text-gray-300">{repos}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoProfile;
