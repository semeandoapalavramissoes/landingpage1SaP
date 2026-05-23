# ⚡ Referência Rápida de Comandos

## 🚀 Comandos Essenciais

### Setup Inicial

```bash
# Instalar dependências (primeira vez)
npm install

# Verificar instalação
npm list
```

### Desenvolvimento

```bash
# Iniciar servidor local (recomendado!)
npm run dev

# Server roda em: http://localhost:5173

# Verificar erros TypeScript
npm run typecheck

# Parar o servidor
Ctrl + C
```

### Build & Deploy

```bash
# Criar versão de produção
npm run build

# Visualizar versão de produção localmente
npm run preview

# Build roda em: http://localhost:4173
```

---

## 📁 Arquivos Principais

### Editar Conteúdo

| Coisa | Arquivo | Linha |
|---|---|---|
| Título principal | [src/App.tsx](src/App.tsx) | 81-82 |
| Descrição | [src/App.tsx](src/App.tsx) | 83-88 |
| Menu links | [src/App.tsx](src/App.tsx) | 37-40 |
| Link YouTube | [src/App.tsx](src/App.tsx) | 11 |
| Link Doações | [src/App.tsx](src/App.tsx) | 24 |
| Seção "Quem Somos" | [src/App.tsx](src/App.tsx) | 105-120 |
| Logo | `src/assets/logo.png` | Substituir arquivo |
| Cores | [tailwind.config.ts](tailwind.config.ts) | 6-20 |
| Fontes | [tailwind.config.ts](tailwind.config.ts) | 5 |

### Estrutura de Pastas

```
semeando-a-palavra/
├── src/
│   ├── App.tsx              ← EDITAR AQUI!
│   ├── main.tsx             ← Não mexa
│   ├── index.css            ← Estilos globais
│   ├── assets/
│   │   └── logo.png         ← Seu logo aqui
│   └── components/          ← Componentes extras
├── index.html               ← HTML principal
├── package.json             ← Dependências
├── tailwind.config.ts       ← Configuração cores
└── vite.config.ts           ← Build setup
```

---

## 🎨 Edições Comuns

### Mudar Texto

**Arquivo:** [src/App.tsx](src/App.tsx)

```typescript
// Encontre o texto e edite:
"Seu novo texto aqui"

// Exemplo:
<h1>Semeando a Palavra</h1>  // Mude para:
<h1>Meu Ministério</h1>
```

### Mudar Cores

**Arquivo:** [tailwind.config.ts](tailwind.config.ts)

```typescript
// Estrutura: hsl(matiz saturação luminosidade%)
primary: "hsl(36 80% 50%)",  // Mude esses números

// Encontre cores em: https://hsl.hsluv.org/
```

### Mudar Fontes

**Arquivo:** [tailwind.config.ts](tailwind.config.ts)

```typescript
fontFamily: {
  display: ['"Sua Fonte"', "serif"],      // Títulos
  body: ['"Sua Fonte"', "sans-serif"],    // Corpo
}
```

### Adicionar Botão

Copie e modifique:

```typescript
<a href="#secao" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-3xl">
  Seu Botão
</a>
```

---

## 🔧 Troubleshooting Rápido

### Problema: Estilos não aparecem

```bash
# Solução 1: Reiniciar server
npm run dev

# Solução 2: Limpar cache
Ctrl + Shift + Delete  # No navegador

# Solução 3: Reconstruir
rm -r node_modules dist
npm install
npm run dev
```

### Problema: Port já em uso

```bash
# Solução: Mudar porta
npm run dev -- --port 3000
```

### Problema: "Cannot find module"

```bash
# Solução: Reinstalar dependências
npm install

# Ou específica:
npm install [nome-do-package]
```

### Problema: TypeScript error

```bash
# Verificar erros
npm run typecheck

# Solução: Importação incorreta? Use caminho correto
// ❌ import App from './App'       (se não está na mesma pasta)
// ✅ import App from '../App'      (se está uma pasta acima)
```

### Problema: Video YouTube não carrega

```typescript
// Verifique em src/App.tsx linha 11:
const youtubeUrl = "https://www.youtube.com/watch?v=AQUI_SEU_VIDEO_ID";

// Formatos válidos:
✅ https://www.youtube.com/watch?v=VIDEO_ID
✅ https://youtu.be/VIDEO_ID
✅ https://www.youtube.com/embed/VIDEO_ID
```

---

## 💾 Git Básico

### Commits

```bash
# Ver o que mudou
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "feat: descrição do que fez"

# Enviar para online
git push origin main
```

### Branches

```bash
# Ver branches
git branch

# Criar nova branch
git checkout -b feature/nome

# Trocar de branch
git checkout main

# Deletar branch
git branch -d nome-branch
```

### Tipos de Commit

```bash
git commit -m "feat: nova feature"      # Nova funcionalidade
git commit -m "fix: corrigir bug"       # Bug fix
git commit -m "refactor: limpar código" # Refatoração
git commit -m "docs: atualizar docs"    # Documentação
git commit -m "style: formatar"         # Formatação
```

---

## 🌐 Deploy Rápido (Vercel)

### 1. Conectar GitHub (uma vez)

```bash
# Login em https://vercel.com
# Conectar seu GitHub
# Selecionar repositório
# Deploy automático!
```

### 2. Redeployar (sempre que precisa)

```bash
# Opção 1: Push para main
git push origin main
# Vercel faz deploy automaticamente

# Opção 2: Via Vercel dashboard
# Clique em "Redeploy"
```

### 3. Configurar Domínio

- Vá para Vercel Dashboard
- Projeto → Settings → Domains
- Adicione seu domínio
- Configure DNS do domínio

---

## 📊 Verificações Antes de Enviar

### Checklist Pré-Push

```bash
# 1. TypeScript sem erros?
npm run typecheck

# 2. Build passa?
npm run build

# 3. Verificar visualmente
npm run preview

# 4. Git status limpo?
git status
```

### Checklist Pré-Deploy

- [ ] Build bem-sucedido
- [ ] Preview OK
- [ ] Links funcionam
- [ ] Video carrega
- [ ] Responsividade OK
- [ ] Sem console.log

---

## ⌨️ Atalhos Úteis

### VS Code

| Atalho | Função |
|---|---|
| Ctrl+P | Abrir arquivo |
| Ctrl+F | Procurar na página |
| Ctrl+H | Substituir |
| Ctrl+/ | Comentar linha |
| Alt+Up/Down | Mover linha |
| Alt+Shift+Down | Duplicar linha |
| F12 | DevTools |
| Ctrl+Shift+M | Abrir problemas |

### Terminal

| Atalho | Função |
|---|---|
| Ctrl+C | Parar servidor |
| Ctrl+L | Limpar terminal |
| ↑ | Comando anterior |
| Tab | Auto-complete |
| Ctrl+A | Ir início da linha |
| Ctrl+E | Ir fim da linha |

---

## 📱 Testar Responsividade

### F12 DevTools

```
1. Abra F12
2. Clique em 🖥️ (Device Toggle)
3. Escolha dispositivo:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1440px)
```

### Breakpoints do Projeto

```
sm:  640px   - Tablets
md:  768px   - Tablets gr.
lg:  1024px  - Desktop
xl:  1280px  - Desktop gr.
2xl: 1536px  - Ultrawide
```

Classes Tailwind:
```typescript
className="text-sm md:text-lg lg:text-2xl"
// Pequeno → Médio → Grande conforme cresce
```

---

## 🔗 Links Úteis

### Documentação Oficial

- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- Tailwind: https://tailwindcss.com/docs
- Vite: https://vitejs.dev
- Framer: https://www.framer.com/motion

### Ferramentas Online

- HTML/CSS Validator: https://validator.w3.org
- Color Picker: https://hsl.hsluv.org
- Favicon Generator: https://favicon-generator.org
- Compressor: https://tinypng.com

### GitHub

- Documentação Git: https://git-scm.com/doc
- GitHub Docs: https://docs.github.com
- Markdown Guide: https://www.markdownguide.org

---

## 📞 Obter Ajuda

### Procure Aqui

| Problema | Documento |
|---|---|
| Como instalar? | [GUIA_RAPIDO.md](GUIA_RAPIDO.md) |
| Erro técnico? | [DOCUMENTACAO.md#troubleshooting](DOCUMENTACAO.md#🔧-troubleshooting) |
| Padrão código? | [GUIA_TECNICO.md](GUIA_TECNICO.md) |
| Setup ambiente? | [CONFIGURACAO.md](CONFIGURACAO.md) |
| Tudo rápido? | Este arquivo |

### Online

- Stack Overflow: https://stackoverflow.com
- GitHub Issues: Seu repositório
- Discord Communities: React, Tailwind, etc

---

## 🎯 Fluxo Rápido Diário

```
🌅 Manha:
  npm run dev          # Inicia servidor
  Edita arquivo        # Faz mudanças
  Vê live preview      # Tudo atualiza sozinho

🌞 Meio do Dia:
  npm run typecheck    # Verifica erros
  git add .            # Prepara envio
  git commit -m "..."  # Faz commit
  git push origin      # Envia pra GitHub/Vercel

🌙 Noite:
  npm run build        # Se vai fazer deploy
  Verifica em Preview  # npm run preview
  Celebra! 🎉
```

---

## 🚨 Erros Comuns e Soluções Rápidas

```bash
# "npm command not found" → Instale Node.js
# "Port 5173 already in use" → npm run dev -- --port 3000
# "Cannot find module X" → npm install
# "Tailwind not working" → Reinicie o dev server
# "Git error" → npm install (instale dependências)
# "Build failing" → npm run typecheck (veja erros)
```

---

## 📝 Templates de Prompt

### Novo Componente

```typescript
import React from 'react';

interface [NomeProps] {
  // Props aqui
}

const [Nome]: React.FC<[NomeProps]> = ({ }) => {
  return (
    <div>
      {/* Conteúdo */}
    </div>
  );
};

export default [Nome];
```

### Novo Commit

```bash
git add .
git commit -m "[tipo]: [descrição]"
# Tipos: feat, fix, refactor, docs, style
```

### Nova Função

```typescript
const meuFunction = (param: string): string => {
  // Implementação
  return resultado;
};
```

---

## ✅ Checklist de Deploy

```bash
☐ npm run typecheck
☐ npm run build
☐ npm run preview (verificar visualmente)
☐ git status (sem mudanças não commitadas)
☐ git push origin
☐ Vercel deploy automático
☐ LIVE!
```

---

## 📑 Índice de Documentos

- [GUIA_RAPIDO.md](GUIA_RAPIDO.md) - Começar rápido
- [DOCUMENTACAO.md](DOCUMENTACAO.md) - Documentação completa
- [GUIA_TECNICO.md](GUIA_TECNICO.md) - Padrões
- [CONFIGURACAO.md](CONFIGURACAO.md) - Setup
- [TEAM.md](TEAM.md) - Info da equipe
- [DOCS_INDEX.md](DOCS_INDEX.md) - Índice central
- **REFERENCIA_RAPIDA.md** - Este arquivo!

---

## 💡 Dica

Salve este arquivo e consulte quando tiver dúvida rápida!

```
Ctrl+K → Digite "REFERENCIA" → Enter
```

---

**Boa sorte! Você tem tudo que precisa! 🚀**

Versão: 1.0 | Última atualização: Abril 2026
