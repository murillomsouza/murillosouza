# 🚀 Murillo Souza | Portfólio Pessoal

[![Deploy status](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](#)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](#)

Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades e formas de contato. O design foi construído com uma estética "Sci-Fi / Terminal", refletindo minha paixão por tecnologia, astronomia e o ecossistema de desenvolvimento (especialmente Backend e Arquitetura).

🌍 **Live Preview:** [murillosouza.vercel.app](https://murillosouza.vercel.app/)

---

## ✨ Funcionalidades e UI/UX

O projeto foi pensado para ter alta interatividade e performance, adaptando-se perfeitamente a diferentes tamanhos de tela:

* **Hero Interativo (Rede Neural):** Um `<canvas>` de fundo com partículas interativas que reagem à gravidade do mouse.
* **Sistema Planetário (Desktop):** Seção de habilidades onde as tecnologias orbitam ao redor de um "núcleo" Linux.
* **Warp Speed Parallax (Mobile):** Degradação graciosa no mobile, substituindo os planetas por uma chuva de estrelas otimizada e fluida.
* **Contato via Terminal:** Um formulário de contato com interface inspirada em linha de comando (`contact.sh`), integrado de forma serverless.

---

## 🛠️ Tecnologias Utilizadas

Este projeto é uma Single Page Application (SPA) 100% estática, utilizando as seguintes tecnologias:

* **[React.js](https://react.dev/)** - Biblioteca principal para construção de interfaces.
* **[Vite](https://vitejs.dev/)** - Bundler ultrarrápido para o ambiente de desenvolvimento.
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework utilitário para estilização e responsividade.
* **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones limpos e modernos.
* **[React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter)** - Efeito de digitação no título.
* **[Formspree](https://formspree.io/)** - Integração Serverless para o envio de e-mails diretamente do frontend, sem necessidade de backend próprio.

---

## 🚀 Como rodar o projeto localmente

Siga as instruções abaixo para rodar uma cópia do projeto na sua máquina local:

### 1. Clone o repositório
git clone https://github.com/murillomsouza/portfolio-murillosouza.git
cd portfolio-murillosouza/frontend

### 2. Instale as dependências
npm install

### 3. Configuração do Formulário de Contato
Para o formulário de contato funcionar localmente, você precisa ter uma conta no [Formspree](https://formspree.io/).
1. Crie um novo formulário no Formspree.
2. Copie a URL do endpoint fornecida.
3. No arquivo `src/components/Contact.jsx`, substitua a constante `FORMSPREE_URL` pela sua URL:
   
   const FORMSPREE_URL = 'https://formspree.io/f/sua_chave_aqui';

### 4. Inicie o servidor de desenvolvimento
npm run dev

O projeto estará rodando em `http://localhost:5173`.

---

## 👨‍💻 Autor

**Murillo Souza**
* Estudante na Fatec
* Desenvolvedor focado em Backend, Engenharia de Software e Arquitetura de Sistemas.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/murillo-de-souza)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/murillomsouza)

---
*Desenvolvido com ☕ e muita curiosidade.*