# 🚀 GitHub Profile Explorer

![Preview do Projeto](./src/assets/Pasted%20image.png)


**🔗 Acesse o projeto online:** [GitHub Profile Explorer](https://alanhsiqueira.github.io/github-profile/)

## 💻 Sobre o Projeto

O **GitHub Profile Explorer** é uma aplicação Single Page Application (SPA) desenvolvida para buscar e exibir dados de usuários do GitHub de forma rápida. O projeto consome a API pública do GitHub para renderizar estatísticas detalhadas de perfil e listar repositórios com suas respectivas informações.


## ✨ Principais Funcionalidades

- **Busca em Tempo Real:** Pesquise por qualquer usuário do GitHub.
- **Visualização de Perfil:** Exibe avatar, bio, seguidores, seguindo e localização.
- **Listagem de Repositórios:** Traz os repositórios mais recentes do usuário na página principal.
- **Rota Dedicada:** Uma página exclusiva para listar até 100 repositórios públicos do usuário.
- **Design Responsivo:** Layout fluido que se adapta perfeitamente a dispositivos móveis (Mobile First) e desktops.
- **Estados de Carregamento e Erro:** Feedback visual interativo (Spinners e Skeleton/Pulse) enquanto a API processa os dados ou caso o usuário não seja encontrado.

## 🛠 Tecnologias Utilizadas

- **[React](https://reactjs.org/)** (Vite)
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para garantir previsibilidade e redução de bugs.
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária avançada.
- **[React Router DOM](https://reactrouter.com/)** - Roteamento no lado do cliente.
- **Context API** - Gerenciamento de estado global.

## 🧠 Desafios Técnicos e Aprendizados

Durante o desenvolvimento deste projeto, implementei soluções avançadas para problemas comuns no ecossistema React:

1. **Prevenção de Race Conditions:** Utilização do `AbortController` nas requisições da API para cancelar chamadas antigas caso o usuário faça múltiplas buscas rapidamente.
2. **Gerenciamento de Estado com Context API:** Implementação do contexto para evitar *Prop Drilling* e garantir que os dados do usuário não sejam perdidos (unmounted) ao navegar entre a página principal e a página completa de repositórios.
3. **Deploy em Páginas Estáticas:** Uso estratégico do `HashRouter` no lugar do `BrowserRouter` para garantir que o roteamento funcione perfeitamente no GitHub Pages, evitando erros 404 ao recarregar a página.
4. **Tipagem Utilitária no TS:** Uso de `ReturnType` para inferir automaticamente os tipos do Contexto baseado no retorno do Custom Hook, mantendo uma *Single Source of Truth* (Única Fonte de Verdade) para facilitar a manutenção.

## 🚀 Como rodar o projeto localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

```bash
# 1. Clone o repositório
git clone https://github.com/alanhsiqueira/github-profile.git

# 2. Acesse a pasta do projeto
cd github-profile

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev