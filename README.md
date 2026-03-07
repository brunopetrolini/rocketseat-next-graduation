<h1 align="center">
  🚀 Rocketseat — Next.js Graduation
</h1>

<p align="center">
  Monorepo do projeto de formação <strong>Next.js</strong> da <a href="https://rocketseat.com.br">Rocketseat</a>, reunindo aplicações modernas construídas com as melhores práticas do ecossistema React.
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
  <a href="#-tecnologias">Tecnologias</a> &bull;
  <a href="#-como-começar">Como Começar</a> &bull;
  <a href="#-estrutura">Estrutura</a> &bull;
  <a href="#-contribuindo">Contribuindo</a>
</p>

---

## 📦 Projetos

Este monorepo contém os seguintes projetos:

| Projeto | Descrição | Stack |
|---------|-----------|-------|
| [`site-blog`](./site-blog) | Landing page de marketing + blog com CMS baseado em Markdown para a plataforma **Site.Set** | Next.js · Tailwind CSS · Contentlayer2 |

---

## 🛠 Tecnologias

As principais tecnologias utilizadas ao longo dos projetos deste monorepo:

- **[Next.js 16](https://nextjs.org/)** — Framework React com Pages Router, Turbopack e otimizações de imagem
- **[React 19](https://react.dev/)** — Biblioteca para construção de interfaces de usuário
- **[TypeScript 5](https://www.typescriptlang.org/)** — Superset tipado de JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Framework CSS utilitário de última geração
- **[Contentlayer2](https://github.com/timlrx/contentlayer2)** — Transformação de conteúdo Markdown em dados tipados
- **[Radix UI](https://www.radix-ui.com/)** — Componentes acessíveis e sem estilo
- **[Biome](https://biomejs.dev/)** — Linter e formatador de código ultrarrápido
- **[date-fns](https://date-fns.org/)** — Biblioteca moderna de utilitários para datas
- **[Lucide React](https://lucide.dev/)** — Conjunto de ícones consistentes e customizáveis

---

## 🚀 Como Começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) `>= 24.14.0` (verifique o arquivo `.nvmrc` de cada projeto)
- [npm](https://www.npmjs.com/) `>= 10`

> **Dica:** Use o [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões do Node.js.

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/brunopetrolini/rocketseat-next-graduation.git
   cd rocketseat-next-graduation
   ```

2. **Escolha um projeto e instale as dependências:**

   ```bash
   cd site-blog
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador:** [http://localhost:3000](http://localhost:3000)

---

## 🗂 Estrutura

```
rocketseat-next-graduation/
│
└── site-blog/                  # Landing page + blog (Site.Set)
    ├── posts/                  # Conteúdo dos posts em Markdown
    ├── public/                 # Assets estáticos (SVGs, ícones)
    ├── src/
    │   ├── components/         # Componentes reutilizáveis
    │   │   ├── active-link/
    │   │   ├── brand-logo/
    │   │   ├── layout/
    │   │   │   ├── header/
    │   │   │   └── footer/
    │   │   └── ui/             # Primitivos de UI (Button, SearchInput)
    │   ├── lib/                # Utilitários (cn, formatação de datas)
    │   ├── pages/              # Roteamento Next.js (Pages Router)
    │   │   ├── index.tsx       # Página inicial (landing page)
    │   │   └── blog/           # Listagem do blog
    │   ├── styles/             # Estilos globais e tema Tailwind
    │   └── templates/          # Templates de página compostos
    │       ├── landing-page/   # Seções: Hero, Feature, CTA…
    │       └── blog/           # Template de listagem de posts
    ├── biome.json
    ├── contentlayer.config.ts
    ├── next.config.ts
    └── tsconfig.json
```

---

## 🖥 site-blog

> Uma plataforma de marketing e blog para o **Site.Set** — a solução que transforma qualquer negócio em uma loja virtual.

### Funcionalidades

- 🏠 **Landing Page** — Seções de Hero, Features, Depoimentos e Call to Action
- 📝 **Blog** — Listagem e pesquisa de artigos, processados a partir de arquivos Markdown
- 🎨 **Design System** — Sistema de cores e tipografia customizado com Tailwind CSS v4
- ♿ **Acessibilidade** — Componentes baseados em Radix UI
- 📱 **Responsivo** — Layout adaptado para mobile, tablet e desktop

### Scripts disponíveis

Execute dentro de `./site-blog`:

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com Turbopack |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa a verificação de qualidade de código com Biome |
| `npm run format` | Formata o código com Biome |

### Deploy

O jeito mais fácil de fazer deploy é usar a [Plataforma Vercel](https://vercel.com/new). Basta conectar seu repositório e a Vercel cuidará de todo o processo automaticamente.

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
