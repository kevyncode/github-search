import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "@/assets/Frame 52.svg";
import InfoProfile from "@/components/InfoProfile";
import { marked } from "marked";
import DOMPurify from "dompurify";

// Função para montar os headers das requisições
const getHeaders = () => {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  // ATENÇÃO: Certifique-se de que o token seja tratado de forma segura.
  if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
  }
  return headers;
};

const Input: React.FC = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<{
    avatarUrl: string;
    username: string;
    bio: string;
    repos: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setProfile(null);
      setErrorMessage("");

      // Usa o valor trim para eliminar espaços em branco indesejados
      const user = username.trim();

      // Buscar dados do usuário
      const userRes = await fetch(`https://api.github.com/users/${user}`, {
        headers: getHeaders(),
      });
      if (!userRes.ok) {
        if (userRes.status === 403) {
          setErrorMessage(
            "Limite de requisições atingido. Tente novamente mais tarde."
          );
        } else {
          setErrorMessage(
            "Nenhum perfil foi encontrado com esse nome de usuário."
          );
        }
        return;
      }
      const userData = await userRes.json();

      // Buscar README utilizando o repositório com o mesmo nome do usuário
      let readme = "Este usuário não possui um README público.";
      try {
        // Tenta buscar o repositório com o mesmo nome do usuário para identificar a branch default
        const repoRes = await fetch(
          `https://api.github.com/repos/${user}/${user}`,
          {
            headers: getHeaders(),
          }
        );
        if (repoRes.ok) {
          const repoData = await repoRes.json();
          const defaultBranch = repoData.default_branch || "main";
          const readmeRes = await fetch(
            `https://raw.githubusercontent.com/${user}/${user}/${defaultBranch}/README.md`
          );
          if (readmeRes.ok) {
            const markdown = await readmeRes.text();
            const parsedMarkdown = await marked.parse(markdown);
            readme = DOMPurify.sanitize(parsedMarkdown);
          }
        } else {
          // Se não encontrar o repositório com o mesmo nome do usuário, tenta buscar pelo repositório mais atualizado
          const reposRes = await fetch(
            `https://api.github.com/users/${user}/repos?sort=updated&per_page=1`,
            { headers: getHeaders() }
          );
          if (reposRes.ok) {
            const repos = await reposRes.json();
            const repoName = repos[0]?.name;
            if (repoName) {
              // Buscar informações do repositório para identificar a branch default
              const repoInfoRes = await fetch(
                `https://api.github.com/repos/${user}/${repoName}`,
                { headers: getHeaders() }
              );
              let defaultBranch = "main";
              if (repoInfoRes.ok) {
                const repoInfo = await repoInfoRes.json();
                defaultBranch = repoInfo.default_branch || "main";
              }
              const readmeRes = await fetch(
                `https://raw.githubusercontent.com/${user}/${repoName}/${defaultBranch}/README.md`
              );
              if (readmeRes.ok) {
                const markdown = await readmeRes.text();
                const parsedMarkdown = await marked.parse(markdown);
                readme = DOMPurify.sanitize(parsedMarkdown);
              }
            }
          }
        }
      } catch (readmeError) {
        console.error("Erro ao buscar README:", readmeError);
      }

      setProfile({
        avatarUrl: userData.avatar_url,
        username: userData.login,
        bio: readme,
        repos: userData.public_repos,
      });
    } catch (error) {
      setErrorMessage("Ocorreu um erro ao buscar o perfil. Tente novamente.");
      console.error("Erro ao buscar o perfil:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (username.trim()) fetchProfile();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full px-4">
      <div className="flex border bg-white rounded-lg w-full max-w-3xl justify-center items-center p-0.5 h-16">
        <div className="ml-2 flex justify-center items-center w-7 h-full rounded-md ">
          <span className="text-blue-500 text-xl font-bold">@</span>
        </div>

        <input
          type="text"
          placeholder="Digite um usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-black placeholder-gray-500 px-4 text-xl"
        />

        <div
          className={`w-14 h-14 ${
            loading ? "bg-blue-300" : "bg-[#005CFF]"
          } flex items-center justify-center rounded-md cursor-pointer hover:bg-blue-600 transition-colors`}
          onClick={handleSearch}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            <Image src={SearchIcon} alt="Search Icon" width={24} height={24} />
          )}
        </div>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}

      {profile && <InfoProfile {...profile} />}
    </div>
  );
};

export default Input;
