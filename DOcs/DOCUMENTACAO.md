# Documentação Completa - Semeando a Palavra

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Tecnologias](#tecnologias)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Pré-requisitos](#pré-requisitos)
5. [Instalação](#instalação)
6. [Execução](#execução)
7. [Configuração](#configuração)
8. [Arquitetura](#arquitetura)
9. [Componentes](#componentes)
10. [Estilos e Temas](#estilos-e-temas)
11. [Deploy](#deploy)
12. [Troubleshooting](#troubleshooting)
13. [Contribuições](#contribuições)

---

## 🎯 Visão Geral

**Semeando a Palavra** é uma landing page moderna e responsiva desenvolvida para um ministério missionário cristão internacional. O projeto apresenta a organização, promove transmissões ao vivo e facilita contribuições financeiras.

### Objetivos Principais
- ✅ Apresentar o ministério e sua missão
- ✅ Oferecer transmissão ao vivo de cultos e mensagens
- ✅ Facilitar contribuições e doações
- ✅ Design responsivo e profissional
- ✅ Experiência de usuário otimizada em dispositivos móveis

---

## 🛠 Tecnologias

| Tecnologia | Versão | Propósito |
|---|---|---|
| **React** | 18.2.0 | Framework de UI |
| **TypeScript** | 5.2.2 | Tipagem estática do JavaScript |
| **Vite** | 5.0.0 | Build tool e dev server |
| **Tailwind CSS** | 3.4.17 | Framework CSS utilitário |
| **Framer Motion** | 12.38.0 | Animações fluidas |
| **React Router DOM** | 6.30.1 | Roteamento de páginas |
| **Lucide React** | 0.278.0 | Ícones SVG |
| **PostCSS** | 8.5.10 | Processador CSS |
| **AutoPrefixer** | 10.5.0 | Compatibilidade de browsers |

---

## 📁 Estrutura do Projeto

```
semeando-a-palavra/
├── src/
│   ├── App.tsx                    # Componente principal da aplicação
│   ├── main.tsx                   # Ponto de entrada da aplicação
│   ├── index.css                  # Estilos globais e Tailwind
│   ├── vite-env.d.ts             # Tipos do Vite
│   ├── assets/
│   │   ├── logo.png              # Logo do ministério
│   │   └── README.md
│   └── components/
│       ├── Header.tsx            # Componente de cabeçalho (não utilizado atualmente)
│       └── Hero.tsx              # Componente hero (não utilizado atualmente)
├── index.html                     # HTML de entrada
├── package.json                   # Dependências e scripts npm
├── tsconfig.json                  # Configuração TypeScript
├── tsconfig.node.json            # Configuração TypeScript para Vite/Node
├── vite.config.ts                # Configuração do Vite
├── tailwind.config.ts            # Configuração Tailwind CSS
├── postcss.config.cjs            # Configuração PostCSS
├── README.md                      # Instruções rápidas de setup
└── DOCUMENTACAO.md               # Este arquivo
```

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter:

1. **Node.js** (versão 16 ou superior)
   - Download: [nodejs.org](https://nodejs.org)
   - Verificar instalação: `node --version`

2. **npm** (gerenciador de pacotes)
   - Vem com Node.js
   - Verificar instalação: `npm --version`

3. **Git** (opcional, para versionamento)
   - Download: [git-scm.com](https://git-scm.com)

4. **Editor de código**
   - Recomendado: [Visual Studio Code](https://code.visualstudio.com)

---

## 🚀 Instalação

### Passo 1: Clonar ou Acessar o Projeto

```bash
# Se tiver o projeto como .zip, extraía primeiro
# Caso contrário, clone o repositório:
git clone https://seu-repositorio.git
cd semeando-a-palavra
```

### Passo 2: Instalar Dependências

```bash
# Recomendado usar npm
npm install

# Ou, se preferir yarn:
yarn install
```

Este comando instalará todas as dependências listadas em `package.json` na pasta `node_modules/`.

### Passo 3: Verificar Instalação

```bash
# Verificar se as dependências foram instaladas
npm list

# Executar type check (opcional)
npm run typecheck
```

---

## ⚙️ Executando o Projeto

### Ambiente de Desenvolvimento

Para executar o servidor de desenvolvimento com hot reload:

```bash
npm run dev
```

**Saída esperada:**
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

Acesse `http://localhost:5173` no seu navegador. As mudanças no código serão refletidas automaticamente.

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Isto irá:
- Compilar TypeScript
- Otimizar o Tailwind CSS
- Gerar arquivos estáticos em `dist/`
- Minificar e otimizar para performance

### Preview de Produção

Para visualizar como ficará em produção:

```bash
npm run preview
```

Isto serve os arquivos da pasta `dist/` como em um servidor real.

### Type Checking

Para verificar erros de tipagem sem executar:

```bash
npm run typecheck
```

---

## ⚙️ Configuração

### 1. Configurar Link da Transmissão ao Vivo

**Arquivo:** [src/App.tsx](src/App.tsx#L11)

```typescript
// Localize esta linha (por volta da linha 11):
const youtubeLiveUrl = "https://www.youtube.com/watch?v=SEU_LINK_AQUI";

// Substitua com o link real da sua transmissão YouTube:
const youtubeLiveUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
```

**Formatos aceitos:**
- ✅ `https://www.youtube.com/watch?v=VIDEO_ID`
- ✅ `https://youtu.be/VIDEO_ID`
- ✅ `https://www.youtube.com/embed/VIDEO_ID`

### 2. Configurar Link de Doações

**Arquivo:** [src/App.tsx](src/App.tsx#L24)

```typescript
// Localize esta linha (por volta da linha 24):
const donationLink = "https://seusite-de-pagamento.com/doar";

// Substitua com o link da sua plataforma de pagamento:
const donationLink = "https://www.mercadopago.com.br/checkout/...";
// Ou PagSeguro, Stripe, etc.
```

### 3. Customizar Logo

1. Substitua o arquivo `src/assets/logo.png` com seu logo
2. Mantenha o mesmo nome ou atualize as referências em [src/App.tsx](src/App.tsx)

### 4. Personalizar Textos

Todos os textos principais estão em [src/App.tsx](src/App.tsx):

- **Linha 37-40:** Títulos da navegação
- **Linha 81-82:** Título e subtítulo do hero
- **Linha 83-88:** Descrição principal
- **Linha 105-120:** Seção "Quem Somos"
- **Linha 163-167:** Seção "Contribua com a Obra"

### 5. Customizar Cores

**Arquivo:** [tailwind.config.ts](tailwind.config.ts)

```typescript
colors: {
  primary: "hsl(36 80% 50%)",      // Dourado principal (CTAs)
  secondary: "hsl(220 25% 20%)",   // Azul-escuro
  accent: "hsl(16 65% 55%)",       // Laranja/terra
  background: "hsl(40 33% 97%)",   // Creme acolhedor
  foreground: "hsl(220 30% 15%)",  // Texto escuro
  muted: "hsl(40 20% 90%)",        // Cinza claro
  card: "hsl(40 30% 95%)",         // Fundo de cards
  warm: "hsl(30 40% 92%)",         // Bege quente
  gold: "hsl(45 90% 55%)",         // Dourado vibrante
  earth: "hsl(25 35% 35%)",        // Terra/marrom
  sky: "hsl(200 60% 45%)",         // Azul céleste
}
```

**Como alterar cores:**
- Use ferramentas online como [HSL Color Picker](https://hsl.hsluv.org/)
- Padrão HSL: `hsl(matiz grau saturação% luminosidade%)`

---

## 🏗️ Arquitetura

### Estrutura de Componentes

```
App.tsx (Componente Principal)
├── Header (Navegação)
│   ├── Logo
│   ├── Navigation Menu
│   │   ├── Sobre Nós
│   │   ├── Ao Vivo
│   │   └── Contribuir
│   ├── Mobile Menu (Hamburger)
│   └── CTA Button (Contribuir)
│
├── Hero Section
│   ├── Background com grid
│   ├── Logo grande
│   ├── Títulos
│   └── CTA Buttons
│
├── Sobre Nós Section
│   ├── Heading
│   └── Descrição com prosa
│
├── TV Online Section
│   ├── Status badge (Ao vivo / Offline)
│   └── YouTube Embed
│
├── Contribuir Section
│   ├── Heading
│   ├── Descrição
│   └── CTA Button
│
└── Footer
    └── Copyright
```

### Fluxo de Dados

1. **App.tsx** gerencia o estado da aplicação
2. **React Router** (BrowserRouter) envolve a aplicação
3. **Framer Motion** cuida das animações
4. **Tailwind CSS** estiliza todos os componentes
5. **Lucide React** fornece ícones SVG

### Responsividade

O projeto usa breakpoints Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Classes responsivas utilizadas:**
- `hidden md:flex` - Visível apenas em desktop
- `md:hidden` - Visível apenas em mobile
- `md:text-7xl` - Tamanho maior em desktop

---

## 🧩 Componentes

### App.tsx (Componente Principal)

**Responsabilidades:**
- Gerenciar estado da aplicação (`isMenuOpen`)
- Validar e processar URL do YouTube
- Renderizar todas as seções da página
- Definir rotas com React Router

**Props importantes:**
- Nenhum (componente raiz)

**Estado:**
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

### Header.tsx

**Status:** Componente criado mas não utilizado atualmente

**Propostas:**
- Alternativa reutilizável do header em App.tsx
- Pode ser utilizada no futuro para refatoração

### Hero.tsx

**Status:** Componente criado mas não utilizado atualmente

**Propostas:**
- Encapsular a seção Hero em componente separado
- Pode ser utilizada no futuro para refatoração

---

## 🎨 Estilos e Temas

### Sistema de Cores

O projeto utiliza um sistema de cores harmônico baseado em paleta quente e acolhedora:

| Cor | Código HSL | Uso |
|---|---|---|
| **Primary** | hsl(36 80% 50%) | Botões CTAs, destaques |
| **Secondary** | hsl(220 25% 20%) | Gradiente hero, texto forte |
| **Gold** | hsl(45 90% 55%) | Logo, efeitos glow |
| **Earth** | hsl(25 35% 35%) | Gradiente hero |
| **Warm** | hsl(30 40% 92%) | Fundos de seções |
| **Sky** | hsl(200 60% 45%) | Cores alternativas |

### Tipografia

**Fontes utilizadas:**
- **Display:** Playfair Display (serif) - títulos e headers
- **Body:** Source Sans 3 (sans-serif) - texto corpo

```typescript
fontFamily: {
  display: ['"Playfair Display"', "serif"],
  body: ['"Source Sans 3"', "sans-serif"],
}
```

### Utilitários de Sombra

```typescript
boxShadow: {
  soft: "0 4px 20px -4px ...",    // Sombras sutis
  card: "0 8px 30px -8px ...",    // Cards com elevação
  glow: "0 0 40px -10px ...",     // Efeito de brilho dourado
}
```

### Animações

**Framer Motion** é usado para:
- Menu mobile (`AnimatePresence` + `motion.div`)
- Transições suaves de opacity e height
- Efeitos de fade-in/out

```typescript
<motion.div 
  initial={{ opacity: 0, height: 0 }} 
  animate={{ opacity: 1, height: "auto" }} 
  exit={{ opacity: 0, height: 0 }}
>
  {/* Conteúdo */}
</motion.div>
```

---

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Defina as variáveis de ambiente se necessário
4. Clique em "Deploy"

Vantagens:
- Deployment automático em cada push
- HTTPS gratuito
- Performance otimizada
- Preview automático de PRs

### Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

### Opção 3: GitHub Pages

1. No arquivo `vite.config.ts`, adicione:
```typescript
export default defineConfig({
  base: '/', // ou '/seu-repositorio/' se não for user/org page
  // ... resto da config
})
```

2. Crie workflow GitHub Actions:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Opção 4: Docker + Servidor Próprio

Crie um `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Execute:
```bash
docker build -t semeando-a-palavra .
docker run -p 80:80 semeando-a-palavra
```

---

## 🔧 Troubleshooting

### Problema: "Port 5173 já em uso"

**Solução:**
```bash
# Encontre o processo usando a porta
netstat -ano | findstr :5173

# Finalize o processo (substitua PID)
taskkill /PID <PID> /F

# Ou use uma porta diferente
npm run dev -- --port 3000
```

### Problema: "Cannot find module 'src/assets/logo.png'"

**Solução:**
1. Verifique se o arquivo existe em `src/assets/logo.png`
2. Se usar extensão diferente, atualize em [App.tsx](src/App.tsx)
3. Certifique-se de que o caminho é relativo correto

### Problema: "Style não está aplicando"

**Solução:**
1. Execute `npm run build` para verificar erros de compilação
2. Limpe cache do navegador (Ctrl+Shift+Delete)
3. Verifique se o Tailwind está configurado em `tailwind.config.ts`
4. Reinicie o dev server: `npm run dev`

### Problema: "Video do YouTube não carrega"

**Solução:**
1. Verifique se a URL está no formato correto
2. Teste em `https://www.youtube.com/embed/VIDEO_ID`
3. Certifique-se de que o vídeo não é privado
4. Permita embedded iframes nas configurações do YouTube

### Problema: Animações não funcionam

**Solução:**
1. Verifique se `framer-motion` está instalado: `npm list framer-motion`
2. Reinstale se necessário: `npm install framer-motion@latest`
3. Reinicie o servidor de desenvolvimento

### Problema: "Build falhando com erros TypeScript"

**Solução:**
```bash
# Verifique erros de tipagem
npm run typecheck

# Se necessário, corrija os tipos
# Você pode desabilitar temporariamente TypeScript strict mode em tsconfig.json
# Redefinir node_modules
rm -rf node_modules
npm install

# Fazer build novamente
npm run build
```

### Problema: Estilos CSS faltando em produção

**Solução:**
1. Verifique que todos os arquivos estão em `src/`
2. No `tailwind.config.ts`, confirme que a rota é: `"./src/**/*.{js,ts,jsx,tsx}"`
3. Rode `npm run build` novamente
4. Verifique a pasta `dist/` gerada

---

## 📝 Contribuições

### Como Contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature: `git checkout -b feature/MinhaFeature`
3. Faça commits descritivos: `git commit -m "Add: descrição da feature"`
4. Push para a branch: `git push origin feature/MinhaFeature`
5. Abra um Pull Request

### Convenção de Commits

- `Add:` - Novas features
- `Fix:` - Correção de bugs
- `Refactor:` - Refatoração de código
- `Docs:` - Documentação
- `Style:` - Formatação de código
- `Test:` - Testes

### Checklist Antes de Fazer PR

- [ ] Código segue padrões do projeto
- [ ] TypeScript não tem erros (`npm run typecheck`)
- [ ] Testou em mobile (responsividade)
- [ ] Testou em navegadores modernos
- [ ] Documentação atualizada se necessário
- [ ] Sem console.log ou código de debug

---

## 📞 Suporte e Contato

Para dúvidas, sugestões ou reportar bugs:

1. **Issues no GitHub** - Reportar bugs ou sugestões
2. **Discussions** - Perguntas e discussões gerais
3. **Email** - [Contato do ministério]

---

## 📄 Licença

Este projeto é desenvolvido para o ministério **Semeando a Palavra**.

---

## 🙏 Agradecimentos

- Equipe de desenvolvimento
- Comunidade React
- Tailwind CSS e Vite

---

## 📚 Recursos Úteis

### Documentação Oficial
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Ferramentas Recomendadas
- [Visual Studio Code](https://code.visualstudio.com)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Thunder Client](https://www.thunderclient.com/) - Para testar APIs

### Comunidades
- [React Discord](https://discord.gg/react)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react)
- [Dev.to](https://dev.to/t/react)

---

## 🎯 Próximos Passos Recomendados

1. **Refatoração de Componentes:** Mover seções para componentes separados
2. **SEO:** Adicionar meta tags e estruturação de dados
3. **Analytics:** Integrar Google Analytics ou similar
4. **Newsletter:** Sistema de captação de emails
5. **Blog:** Página de notícias e testemunhos
6. **Formulário de Contato:** Permitir contato direto
7. **PWA:** Tornar progressivo web app (offline support)
8. **Testes:** Adicionar testes unitários com Vitest

---

**Versão da Documentação:** 1.0  
**Última atualização:** Abril de 2026  
**Mantido por:** Equipe de Desenvolvimento Semeando a Palavra
