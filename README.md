<h1 align="center">
  🚀 Rocketseat — Next.js Graduation
</h1>

<p align="center">
  Monorepo da formação <strong>Next.js</strong> da <a href="https://rocketseat.com.br">Rocketseat</a>, reunindo produtos prontos para acelerar negócios digitais — da atração de clientes ao dia a dia operacional.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Biome" src="https://img.shields.io/badge/Biome-2.3-60A5FA?style=for-the-badge&logo=biome&logoColor=white" />
</p>

<p align="center">
  <a href="#-projetos">Projetos</a> &bull;
  <a href="#-diferenciais">Diferenciais</a> &bull;
  <a href="#-tecnologias">Tecnologias</a> &bull;
  <a href="#-como-começar">Como Começar</a> &bull;
  <a href="#-contribuindo">Contribuindo</a>
</p>

---

## 📦 Projetos

| Projeto | Proposta | Destaques |
|---------|----------|-----------|
| [`site-blog`](./site-blog) | **Site.Set** — landing page + blog para atrair, educar e converter clientes, mostrando composição de páginas e conteúdo tipado com Contentlayer. | Hero e CTA estratégicos, blog em Markdown, padrões de layout com Tailwind e foco em performance. |
| [`petshop-planner`](./petshop-planner) | **Mundo Pet** — agenda inteligente para pet shops organizarem os atendimentos do dia, com filtros de data e fluxo de agendamentos. | Visão por períodos (manhã/tarde/noite), CRUD de agendamentos, cancelamentos e dark mode. |

---

## ✨ Diferenciais

- Produtos completos que mostram o fluxo de ponta a ponta (marketing + operação).
- Interfaces rápidas e intuitivas, focadas em clareza para o usuário final.
- Layout responsivo e acessível, pronto para desktop e mobile.
- Base moderna e fácil de evoluir para novos cenários de negócio.

---

## 🛠 Tecnologias

- **[Next.js 16](https://nextjs.org/)** — Framework React com foco em performance
- **[React 19](https://react.dev/)** — Biblioteca para interfaces modernas
- **[TypeScript 5](https://www.typescriptlang.org/)** — Tipagem estática para segurança e escala
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Estilização rápida e consistente
- **[Contentlayer2](https://github.com/timlrx/contentlayer2)** — Conteúdo Markdown tipado (site-blog)
- **[Radix UI](https://www.radix-ui.com/)** — Componentes acessíveis
- **[Biome](https://biomejs.dev/)** — Linter e formatador ultrarrápido

---

## 🚀 Como Começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) `>= 24.14.0` (verifique o `.nvmrc` de cada projeto)
- [npm](https://www.npmjs.com/) `>= 10`

> **Dica:** Use o [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões do Node.js.

### Requisitos de build

- Durante o build, o Next.js tenta otimizar as fontes do Google usadas nos projetos e precisa de acesso à internet.

### Instalação rápida

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/brunopetrolini/rocketseat-next-graduation.git
   cd rocketseat-next-graduation
   ```

2. **Escolha o projeto e instale as dependências:**

   ```bash
   cd site-blog # ou petshop-planner
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador:** [http://localhost:3000](http://localhost:3000)

> Para detalhes de cada produto, confira os READMEs de [`site-blog`](./site-blog) e [`petshop-planner`](./petshop-planner).

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Crie uma branch a partir de `main`:
   ```bash
   git checkout -b feat/minha-feature
   ```

2. Faça suas alterações seguindo o padrão de [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/):
   ```
   feat: adiciona nova funcionalidade
   fix: corrige bug na listagem de posts
   docs: atualiza README
   style: ajusta formatação do código
   refactor: refatora componente de header
   test: adiciona testes para utilitários
   chore: atualiza dependências
   ```

3. Envie suas alterações:
   ```bash
   git push origin feat/minha-feature
   ```

4. Abra um **Pull Request** descrevendo suas mudanças.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o texto completo da licença MIT em [choosealicense.com](https://choosealicense.com/licenses/mit/).

---

<p align="center">
  Feito com 💜 durante a formação <strong>Next.js</strong> da <a href="https://rocketseat.com.br">Rocketseat</a>
</p>
