# Murillo Souza | Portfólio Pessoal

[![Deploy status](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](#)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](#)

Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades e formas de contato. O design foi construído com uma estética "Sci-Fi / Terminal", refletindo minha paixão por tecnologia, astronomia e o ecossistema de desenvolvimento (especialmente Backend, Arquitetura de Sistemas e Embarcados).

🌍 **Live Preview:** [murillosouza.vercel.app](https://murillosouza.vercel.app/)

---

## Funcionalidades e UI/UX

O projeto foi pensado para ter alta interatividade e performance, adaptando-se perfeitamente a diferentes tamanhos de tela e surpreendendo os usuários com microinterações:

* **Hero Interativo (Rede Neural):** Um `<canvas>` de fundo com partículas interativas que reagem à gravidade do mouse.
* **Sistema Planetário (Desktop):** Seção de habilidades onde as tecnologias orbitam ao redor de um "núcleo" Linux.
* **Warp Speed Parallax (Mobile):** Degradação graciosa no mobile, substituindo os planetas por uma chuva de estrelas otimizada e fluida.
* **Arquivos de Missão (Timeline):** Linha do tempo interativa imitando arquivos criptografados de uma nave, contendo minha trajetória e opção de download de currículo integrada.
* **Contato via Terminal & Segurança:** Formulário de contato inspirado em linha de comando (`contact.sh`), integrado de forma serverless. Inclui **proteção anti-scraper** (ofuscação em Base64) para o endereço de e-mail.
* **Easter Eggs Secretos:** O terminal de mensagens reage a comandos ocultos de sistema. (Experimente digitar `cat`, `order 66` ou `sudo logs`).

---

## Tecnologias Utilizadas

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
```bash
git clone [https://github.com/murillomsouza/portfolio-murillosouza.git](https://github.com/murillomsouza/portfolio-murillosouza.git)
cd portfolio-murillosouza
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configuração de Variáveis de Ambiente (Formulário)
Para que o formulário de contato funcione localmente enviando as requisições, você precisa configurar a chave do [Formspree](https://formspree.io/).
1. Crie uma conta e um novo formulário no Formspree.
2. Na raiz do projeto, crie um arquivo chamado `.env` (este arquivo é ignorado pelo Git por questões de segurança).
3. Adicione a URL do seu endpoint dentro do arquivo `.env` da seguinte maneira:
```env
VITE_FORMS_URL=[https://formspree.io/f/sua_chave_aqui](https://formspree.io/f/sua_chave_aqui)
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

O projeto estará rodando em `http://localhost:5173`.

---

## Autor

**Murillo Souza**
* Estudante de Desenvolvimento de Software Multiplataforma na Fatec - Indaiatuba.
* Desenvolvedor focado em Backend (Java, Python, C++), Engenharia de Software, Arquitetura de Sistemas e IoT.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/murillo-de-souza)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/murillomsouza)

---
*Desenvolvido com ☕, código e muita curiosidade.*