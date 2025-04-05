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
    <div className="flex items-start bg-[#D9D9D9] rounded-lg p-6 w-full">
      {/* Avatar */}
      <div className="w-24 h-24 relative mr-6 flex-shrink-0">
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
        <h2 className="text-2xl font-bold text-gray-800 truncate">
          {username}
        </h2>

        {/* Renderizar o README apenas se ele existir */}
        {bio && bio !== "Este usuário não possui um README público." && (
          <div
            className="mt-2 overflow-y-auto custom-scrollbar"
            style={{ maxHeight: "500px", minHeight: "300px" }}
          >
            <div className="prose" dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
        )}

        <div className="mt-4">
          <span className="text-gray-700 font-semibold">Repositórios: </span>
          <span className="text-gray-800">{repos}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoProfile;
