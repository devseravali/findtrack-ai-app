# FindTrack AI App
Aplicação web em desenvolvimento com **Next.js, React, TypeScript e Tailwind CSS**, criada para explorar uma solução de rastreamento com recursos de inteligência artificial.
O projeto faz parte da minha evolução no desenvolvimento de aplicações modernas utilizando o ecossistema Next.js, com foco em organização, experiência do usuário, integração com IA e construção de uma aplicação escalável.

---

## Status do Projeto
**Em desenvolvimento**
O projeto está em sua fase inicial de construção. A estrutura base da aplicação já foi configurada e novas funcionalidades serão implementadas gradualmente.

---

## Sobre o Projeto
O **FindTrack AI App** tem como proposta desenvolver uma aplicação de rastreamento utilizando recursos de inteligência artificial.
A ideia é evoluir o projeto de uma estrutura inicial em Next.js para uma aplicação completa, incorporando funcionalidades de IA, processamento de informações e uma interface intuitiva para o usuário.
O projeto também será utilizado para praticar conceitos modernos de desenvolvimento Full Stack dentro do ecossistema Next.js.

---

## Objetivos
O projeto tem como principais objetivos:
* Desenvolver uma aplicação utilizando Next.js
* Explorar recursos de inteligência artificial
* Criar uma interface moderna e responsiva
* Trabalhar com TypeScript
* Estruturar componentes reutilizáveis
* Desenvolver funcionalidades de rastreamento
* Integrar serviços externos quando necessário
* Praticar arquitetura de aplicações modernas
* Aplicar boas práticas de desenvolvimento
* Evoluir o projeto gradualmente até uma aplicação completa

---

## Tecnologias
### Front-End
* Next.js
* React
* TypeScript
* Tailwind CSS

### Qualidade e Desenvolvimento
* ESLint
* Prettier
* Git
* GitHub

As dependências atuais do projeto incluem Next.js 16, React 19, TypeScript, Tailwind CSS 4, ESLint e Prettier.

### Futuras tecnologias
Conforme o desenvolvimento avançar, outras tecnologias poderão ser incorporadas para atender às necessidades da aplicação, especialmente relacionadas a:
* Inteligência Artificial
* APIs
* Banco de dados
* Autenticação
* Persistência de dados

---

## Estrutura Atual
```text id="8n3xq4"
findtrack-ai-app/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── styles/
│       └── globals.css
│
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

A aplicação utiliza a estrutura `app` do Next.js e possui uma organização inicial para estilos globais.

---

## Arquitetura
O projeto utiliza o **App Router do Next.js**, permitindo estruturar a aplicação por meio do diretório `src/app`.
A estrutura atual servirá como base para a evolução do projeto, com a futura separação de responsabilidades em componentes, páginas, serviços, tipos e outras camadas conforme novas funcionalidades forem implementadas.
Uma possível evolução da estrutura será:

```text id="e5k1p2"
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── ...
│
├── components/
│   ├── ui/
│   └── ...
│
├── services/
├── types/
├── hooks/
├── lib/
└── styles/
```

---

## Inteligência Artificial
A inteligência artificial será um dos principais recursos explorados no projeto.
A integração com IA será desenvolvida posteriormente, conforme a definição e implementação das funcionalidades da aplicação.

Entre as possibilidades planejadas estão:

* Processamento inteligente de informações
* Análise de dados
* Recomendações
* Busca inteligente
* Automação de tarefas relacionadas ao rastreamento

Esses recursos serão adicionados somente conforme forem implementados e validados no projeto.

---

## Funcionalidades Planejadas
O projeto está sendo desenvolvido com a intenção de incorporar funcionalidades como:
* [ ] Interface principal
* [ ] Sistema de rastreamento
* [ ] Cadastro e gerenciamento de informações
* [ ] Busca
* [ ] Histórico de rastreamento
* [ ] Recursos de inteligência artificial
* [ ] Recomendações baseadas em IA
* [ ] Persistência de dados
* [ ] Autenticação
* [ ] Dashboard
* [ ] Responsividade completa
* [ ] Testes automatizados
* [ ] Deploy

---

## Como Executar o Projeto
### Pré-requisitos
* Node.js
* npm

### 1. Clone o repositório
```bash id="x4j9q7"
git clone https://github.com/devseravali/findtrack-ai-app.git
```

### 2. Acesse a pasta
```bash id="n7k2wd"
cd findtrack-ai-app
```

### 3. Instale as dependências
```bash id="c6m1ra"
npm install
```

### 4. Execute o servidor de desenvolvimento
```bash id="v3p8hs"
npm run dev
```

### 5. Acesse a aplicação
Abra no navegador:

```text id="t8r4mz"
http://localhost:3000
```

---

## Scripts Disponíveis
### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Next.js.
### Build

```bash
npm run build
```

Cria a versão de produção da aplicação.

### Produção
```bash
npm run start
```

Executa a aplicação após a geração da build.

### Lint
```bash
npm run lint
```

Analisa o código em busca de problemas relacionados às regras do ESLint.

### Formatação
```bash
npm run format
```

Formata os arquivos utilizando Prettier.

### Verificação de formatação
```bash
npm run format:check
```

Verifica se os arquivos estão seguindo o padrão definido pelo Prettier.
Os scripts estão configurados no `package.json` do projeto.

---

## Objetivos de Aprendizado
O desenvolvimento do FindTrack AI App permite aprofundar conhecimentos em:
* Next.js
* App Router
* React
* TypeScript
* Tailwind CSS
* Componentização
* Server Components
* Client Components
* Roteamento
* Gerenciamento de dados
* APIs
* Integração com inteligência artificial
* Arquitetura Full Stack
* Responsividade
* Boas práticas
* Qualidade de código

---

## Evolução do Projeto
O FindTrack AI App será desenvolvido de maneira incremental.
A evolução planejada é:
**Estrutura inicial → Interface → Funcionalidades principais → Integração com IA → Persistência → Autenticação → Testes → Deploy**

A ideia é utilizar o projeto para aplicar novos conhecimentos diretamente em uma aplicação real, permitindo que sua arquitetura cresça junto com sua evolução técnica.

---

## Próximas Etapas
* [ ] Definir identidade visual
* [ ] Construir a interface principal
* [ ] Criar componentes reutilizáveis
* [ ] Definir fluxo principal da aplicação
* [ ] Implementar o sistema de rastreamento
* [ ] Definir estratégia de integração com IA
* [ ] Criar APIs necessárias
* [ ] Implementar banco de dados
* [ ] Adicionar autenticação
* [ ] Criar testes
* [ ] Melhorar acessibilidade
* [ ] Realizar deploy

---

## Qualidade de Código
O projeto utiliza ferramentas para manter um padrão de desenvolvimento consistente:

**ESLint**
Utilizado para identificar problemas e manter padrões de qualidade no código.

**Prettier**
Utilizado para padronizar a formatação dos arquivos.

**TypeScript**
Utilizado para adicionar tipagem estática e maior segurança ao desenvolvimento.

---

## Deploy
O deploy será configurado após a implementação da primeira versão funcional da aplicação.
A intenção é disponibilizar uma versão pública do projeto para demonstração.

---

## Autora
**Aline Seravali — Dev Seravali**
Desenvolvedora Full Stack com foco em desenvolvimento Web, aplicações Front-End e APIs REST.

**GitHub:**
https://github.com/devseravali

**LinkedIn:**
https://www.linkedin.com/in/dev-seravali/

**Portfólio:**
https://devseravali.com

---

Se você gostou do projeto, deixe uma estrela no repositório.
