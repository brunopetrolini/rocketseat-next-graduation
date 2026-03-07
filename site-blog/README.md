<div align="center">

# 🚀 Site Blog

**Plataforma de blog e landing page para o Site.Set — crie sua loja online em minutos.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-2-60A5FA?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev/)

</div>

---

## 📖 Sobre o Projeto

O **Site Blog** é uma aplicação web moderna que combina uma **landing page profissional** com um **sistema de blog completo**, desenvolvida com as tecnologias mais recentes do ecossistema JavaScript.

O projeto foi construído para o **Site.Set**, uma plataforma que ajuda empreendedores a criarem lojas virtuais e negócios de afiliados de forma simples e rápida. O blog publica artigos sobre e-commerce, dicas de negócios e estratégias de vendas online.

---

## ✨ Funcionalidades

- 🏠 **Landing Page** com seções de marketing otimizadas para conversão
  - Hero com chamada para ação principal
  - Seção de recursos e benefícios
  - Seção de suporte ao cliente
  - Histórias de sucesso de clientes
  - Call-to-Action final
- 📝 **Blog com busca em tempo real** via parâmetros de URL
- 🎨 **Design responsivo** (mobile-first) com Tailwind CSS
- ⚡ **Conteúdo gerenciado por Markdown** — sem banco de dados necessário
- 🔍 **SEO-friendly** com metadados otimizados
- 🖼️ **Otimização de imagens** com Next.js Image
- 🔤 **Fontes otimizadas** (Inter + PT Sans Caption via Google Fonts)

---

## 🛠️ Stack Tecnológica

| Categoria | Tecnologia |
|-----------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) com Pages Router |
| **UI Library** | [React 19](https://react.dev/) |
| **Linguagem** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Estilização** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Componentes** | [Radix UI](https://www.radix-ui.com/) + [class-variance-authority](https://cva.style/) |
| **Ícones** | [Lucide React](https://lucide.dev/) |
| **CMS** | [Contentlayer2](https://contentlayer.dev/) (Markdown → TypeScript) |
| **Datas** | [date-fns 4](https://date-fns.org/) |
| **Linter/Formatter** | [Biome 2](https://biomejs.dev/) |

---

## 📁 Estrutura do Projeto

```
site-blog/
├── posts/                      # 📝 Artigos do blog (Markdown)
├── public/                     # 🖼️ Arquivos estáticos (SVGs, favicon)
├── src/
│   ├── components/             # 🧩 Componentes reutilizáveis
│   │   ├── active-link/        #    Link de navegação ativo
│   │   ├── brand-logo/         #    Logo da marca
│   │   ├── layout/             #    Header, Footer e Layout principal
│   │   └── ui/                 #    Button, SearchInput
│   ├── lib/                    # 🔧 Utilitários (formatação de datas, CSS)
│   ├── pages/                  # 📄 Páginas Next.js (Pages Router)
│   │   ├── index.tsx           #    Home / Landing Page
│   │   ├── blog/               #    Listagem do blog
│   │   └── api/                #    Rotas de API
│   ├── styles/                 # 🎨 Estilos globais (Tailwind CSS)
│   └── templates/              # 📐 Templates de página
│       ├── blog/               #    Template do blog com busca
│       └── landing-page/       #    Template da landing page
│           └── sections/       #    Hero, Feature, Support, CTA...
├── contentlayer.config.ts      # ⚙️ Configuração do Contentlayer
├── next.config.ts              # ⚙️ Configuração do Next.js
└── biome.json                  # ⚙️ Configuração do Biome
```

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) **v24.14.0** (recomendado via [nvm](https://github.com/nvm-sh/nvm))
- [npm](https://www.npmjs.com/)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/brunopetrolini/rocketseat-next-graduation.git

# 2. Acesse a pasta do projeto
cd rocketseat-next-graduation/site-blog

# 3. Use a versão correta do Node.js (se usar nvm)
nvm use

# 4. Instale as dependências
npm install
```

### Execução

```bash
# Modo de desenvolvimento (com hot-reload)
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção (após o build)
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

---

## 🧹 Qualidade de Código

O projeto utiliza o [Biome](https://biomejs.dev/) como linter e formatter unificado:

```bash
# Verificar problemas de lint e formatação
npm run lint

# Formatar o código automaticamente
npm run format
```

---

## 📝 Gerenciamento de Conteúdo

Os posts do blog são arquivos **Markdown** localizados na pasta `posts/`. O [Contentlayer2](https://contentlayer.dev/) transforma esses arquivos em dados TypeScript type-safe durante o build.

### Estrutura de um Post

```markdown
---
title: Título do artigo
date: 2024-12-20 10:20:00
description: Breve descrição do artigo
image: https://url-da-imagem-de-capa.com
author: Nome do Autor
avatar: https://url-do-avatar.com
---

Conteúdo do artigo em Markdown...
```

Para criar um novo post, basta adicionar um arquivo `.md` na pasta `posts/` seguindo a estrutura acima.

---

## 🌐 Deploy

A forma mais simples de fazer o deploy é pela [Vercel](https://vercel.com/), plataforma criada pelos desenvolvedores do Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/brunopetrolini/rocketseat-next-graduation/tree/main/site-blog)

Para outros provedores, consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/pages/building-your-application/deploying).

---

## 📄 Licença

Este projeto está sob a licença **MIT**. O texto completo da licença será adicionado a este repositório.

---

<div align="center">

Feito com ❤️ durante a graduação na [Rocketseat](https://rocketseat.com.br) 🚀

</div>
