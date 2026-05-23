# 🔧 Configuração do Projeto

## 📋 Índice

1. [Variáveis de Ambiente](#variáveis-de-ambiente)
2. [Configuração de Build](#configuração-de-build)
3. [Variáveis de Configuração por Ambiente](#variáveis-de-configuração-por-ambiente)
4. [Checklist de Setup](#checklist-de-setup)

---

## 🌍 Variáveis de Ambiente

### Arquivo: `.env` e `.env.local`

**Locais:** Create na raiz do projeto (onde fica `package.json`)

```bash
# Criar arquivo
touch .env
touch .env.local
```

### Variáveis Importantes

```env
# .env - Público (compartilhado)
VITE_APP_NAME=Semeando a Palavra
VITE_APP_URL=https://semeando-a-palavra.com
VITE_YOUTUBE_LIVE_URL=https://www.youtube.com/watch?v=dQw4w9WgXcQ

# .env.local - Privado (não versionar)
VITE_DONATION_LINK=https://seusite-de-pagamento.com/doar
```

### Como Usar em Código

```typescript
// Acessay variáveis em App.tsx
const youtubeUrl = import.meta.env.VITE_YOUTUBE_LIVE_URL;
const donationLink = import.meta.env.VITE_DONATION_LINK;
```

### .gitignore

```bash
# Arquivo: .gitignore
node_modules/
.env.local
.env.*.local
dist/
.DS_Store
*.log
.vscode/
```

---

## 🏗️ Configuração de Build

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,           // Porta local
    host: '0.0.0.0',      // Acessível de outros computadores
  },
  build: {
    target: 'esnext',     // Compatibilidade com browsers modernos
    minify: 'terser',     // Minificação
    sourcemap: false,     // Desabilitar sourcemap em produção
  },
  preview: {
    port: 4173,           // Porta para npm run preview
  }
})
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### tailwind.config.ts

Veja a documentação completa em [DOCUMENTACAO.md#-estilos-e-temas](DOCUMENTACAO.md#🎨-estilos-e-temas)

### postcss.config.cjs

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 🔄 Variáveis de Configuração por Ambiente

### Desenvolvimento

```typescript
// src/config/development.ts (CRIAR SE NECESSÁRIO)
export const config = {
  api: 'http://localhost:3000',
  enableLogging: true,
  enableAnalytics: false,
}
```

### Produção

```typescript
// src/config/production.ts (CRIAR SE NECESSÁRIO)
export const config = {
  api: 'https://api.semeando-a-palavra.com',
  enableLogging: false,
  enableAnalytics: true,
}
```

### Usar Configuração

```typescript
// src/config/index.ts (CRIAR SE NECESSÁRIO)
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;

export const config = isDev
  ? require('./development').config
  : require('./production').config;
```

---

## ✅ Checklist de Setup

### Primeira Vez Instalando

- [ ] Node.js instalado (verificar com `node --version`)
- [ ] npm instalado (verificar com `npm --version`)
- [ ] Clonou ou extraiu o projeto
- [ ] Executou `npm install`
- [ ] Criou arquivo `.env` (se necessário)
- [ ] Testou `npm run dev`
- [ ] Acessou http://localhost:5173
- [ ] Viu a página funcionando

### Antes de Fazer Commit

- [ ] Executou `npm run typecheck` (sem erros)
- [ ] Executou `npm run build` (build bem-sucedido)
- [ ] Testou links e funcionalidades
- [ ] Removeu console.log e código de debug
- [ ] Atualizou documentação se necessário

### Antes de Deploy

- [ ] Atualizar variáveis de ambiente em produção
- [ ] Tag de versão: `git tag -a v1.0.0 -m "Release 1.0.0"`
- [ ] Fazer push de tags: `git push --tags`
- [ ] Verificar pipeline de CI/CD
- [ ] Testar em produção

---

## 🌟 Dicas de Produtividade

### VS Code Extensions Recomendadas

```json
// Instalar manualmente ou via extensions
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "React-Syntax-Highlighter"
  ]
}
```

### VS Code Settings para Projeto (`.vscode/settings.json`)

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### Atalhos Úteis

| Atalho | Função |
|---|---|
| Ctrl+P | Abrir arquivo rápido |
| Ctrl+Shift+P | Paleta de comandos |
| F12 | Abrir DevTools |
| Ctrl+/ | Comentar linha |
| Alt+Arrow | Mover linha |
| Ctrl+Shift+B | Build |

---

## 📊 Estrutura de Arquivos Esperada Após Setup

```
semeando-a-palavra/
├── node_modules/              # Dependências (não versionar)
├── dist/                       # Build output (gerado)
├── .vscode/                    # Configuração VS Code
│   ├── settings.json
│   └── extensions.json
├── .env                        # Variáveis locais
├── .env.local                  # Variáveis privadas
├── .env.example                # Modelo de .env
├── .gitignore                  # Arquivo Git
├── src/
├── README.md
├── DOCUMENTACAO.md
├── GUIA_RAPIDO.md
├── GUIA_TECNICO.md
├── CONFIGURACAO.md             # Este arquivo
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── postcss.config.cjs
```

---

## 🆘 Erros Comuns de Configuração

### Erro: "Cannot find module 'lucide-react'"

**Causa:** Dependência não instalada
**Solução:**
```bash
npm install lucide-react
```

### Erro: "Tailwind CSS não está funcionando"

**Causa:** Tailwind não incluiu os arquivos
**Solução:** Verifique em `tailwind.config.ts`:
```typescript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se que este padrão está correto
],
```

### Erro: "Module not found" para importação

**Causa:** Caminho relativo incorreto
**Solução:**
```typescript
// ❌ ERRADO
import App from './App'  // Se não estiver na mesma pasta

// ✅ CORRETO
import App from '../App'
import App from './App'  // Se estiver na mesma pasta
```

### Erro: TypeScript stricts demais

**Causa:** `strict: true` está muito rigoroso
**Solução:** Em `tsconfig.json`, remova/desabilite temporariamente:
```json
{
  "compilerOptions": {
    "strict": false,  // Desabilitar temporariamente
    // ou configurar individualmente
    // "noImplicitAny": false,
  }
}
```

---

## 📈 Próximos Passos

Após configurar o projeto:

1. **Personalizar:** Edite [src/App.tsx](src/App.tsx) com seus dados
2. **Testar:** Rode `npm run dev` e teste em diferentes tamanhos
3. **Build:** Execute `npm run build` para produção
4. **Deploy:** Siga guia em [DOCUMENTACAO.md#-deploy](DOCUMENTACAO.md#🌐-deploy)
5. **Monitorar:** Configure analytics e error tracking

---

## 🔗 Links Úteis

- [Documentação Principal](DOCUMENTACAO.md)
- [Guia Rápido](GUIA_RAPIDO.md)
- [Guia Técnico](GUIA_TECNICO.md)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)

---

**Versão:** 1.0  
**Última atualização:** Abril de 2026
