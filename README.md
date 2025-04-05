# 🚀 GitHub Profile Search

Este é um projeto desenvolvido como parte de um desafio técnico para criar uma aplicação que busca perfis do GitHub e exibe informações do usuário de forma estilizada, seguindo o layout fornecido no Figma.

## 📝 Descrição do Projeto

A aplicação permite que os usuários pesquisem perfis do GitHub digitando o nome de usuário no campo de busca. Após a busca, as informações do perfil são exibidas, incluindo:

- Nome do usuário
- Foto de perfil
- Bio
- Repositórios públicos

Além disso, a aplicação exibe mensagens de erro caso o perfil não seja encontrado e inclui um indicador de carregamento durante as requisições.

## 🔗 Layout no Figma

O design da aplicação foi baseado no layout fornecido no Figma:

[Layout no Figma](https://www.figma.com/proto/DqtFxC6312M32mLt8FpJjq/inovation-class?page-id=22%3A2864&node-id=22-4293&viewport=359%2C115%2C0.25&t=SHsEqEgaMrXGMKwv-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=22%3A4293&show-proto-sidebar=1)

## ✅ Funcionalidades

1. **Campo de Busca**:
   - Permite que o usuário digite o nome de um perfil do GitHub.

2. **Exibição de Informações**:
   - Nome do usuário.
   - Foto de perfil.
   - Bio.
   - Número de repositórios públicos.

3. **Mensagens de Erro**:
   - Exibe mensagens amigáveis caso o perfil não seja encontrado.

4. **Carregamento**:
   - Indicador de carregamento enquanto a API do GitHub é consultada.

5. **Estilização**:
   - Layout estilizado com Tailwind CSS, seguindo o design do Figma.

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento web.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **Tailwind CSS**: Framework CSS para estilização.
- **API do GitHub**: Para buscar informações dos perfis.
- **DOMPurify**: Para sanitizar o conteúdo do README.
- **Marked**: Para renderizar o conteúdo Markdown do README.

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina.
- Gerenciador de pacotes como `npm`, `yarn` ou `pnpm`.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/kevyncode/github-search.git
   cd github-profile-search
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure a variável de ambiente:
   - Crie um arquivo `.env.local` na raiz do projeto.
   - Adicione o token da API do GitHub:
     ```
     NEXT_PUBLIC_GITHUB_TOKEN=seu_token_aqui
     ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Abra o navegador e acesse:
   [http://localhost:3000](http://localhost:3000)

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   ├── test/page.tsx     # Página de teste
├── components/
│   ├── Background.tsx    # Componente de fundo
│   ├── BoxProfile.tsx    # Componente principal do perfil
│   ├── InfoProfile.tsx   # Exibição de informações do perfil
│   ├── Input.tsx         # Campo de busca
├── assets/               # Imagens e vetores
├── styles/               # Estilos globais
```

## 📦 Deploy

O projeto pode ser facilmente implantado na [Vercel](https://vercel.com/), a plataforma oficial para Next.js.

### Passos para Deploy

1. Faça login na Vercel.
2. Clique em "New Project" e importe o repositório.
3. Configure as variáveis de ambiente na aba "Environment Variables".
4. Clique em "Deploy".

## 🖼️ Capturas de Tela

### Tela Inicial
![Tela Inicial](/public/inicial.png)

### Resultado da Busca
![Resultado da Busca](/public/encontrou.png)

### Resultado da Busca
![Perfil não encontrado](/public/notfound.png)

## 🛡️ Requisitos Atendidos

- [x] Campo de busca para o nome de usuário.
- [x] Consumo da API do GitHub.
- [x] Exibição de informações do perfil.
- [x] Mensagens de erro amigáveis.
- [x] Estilização seguindo o layout do Figma.
- [x] Indicador de carregamento.

## ✨ Melhorias Futuras

- Adicionar paginação para listar todos os repositórios do usuário.
- Melhorar a responsividade para dispositivos móveis.
- Implementar testes automatizados com Jest e React Testing Library.

## 🧑‍💻 Autor

Desenvolvido por **[Kevyncode]** como parte de um desafio técnico.

---

Feito com ❤️ e Next.js.