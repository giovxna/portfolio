# Giovana | Portfólio

Portfólio pessoal de Giovana Siqueira, desenvolvedora backend.

## Stack

- **React 18** + **Vite** — build rápido, sem config desnecessária
- **Tailwind CSS v3** — utility-first, mobile-first
- **Framer Motion** — animações de scroll e transições suaves
- Fonte: **Poppins** (Google Fonts)

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura

```
src/
  components/    # Um arquivo por seção
  data/          # Todo o conteúdo em portfolio.js — edite aqui
  App.jsx
  index.css
```

Para atualizar conteúdo (projetos, experiências, habilidades), edite apenas `src/data/portfolio.js`.

## Próximos passos

- Integrar com uma API (ex: GitHub API para listar repos reais)
- Adicionar página de detalhes por projeto com roteamento (`react-router-dom`)
- Formulário de contato com backend próprio (Node.js + Nodemailer)
- Deploy na Vercel com CI via GitHub Actions
