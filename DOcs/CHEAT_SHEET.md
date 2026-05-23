# 🎨 Cheat Sheet Visual - Semeando a Palavra

> Imprima este arquivo e coloque na parede do seu escritório! 📌

---

## 🚀 START AQUI

```
1️⃣  npm install          ← Instale dependências
2️⃣  npm run dev          ← Inicie servidor
3️⃣  Abra localhost:5173  ← Veja a página
4️⃣  Edite src/App.tsx    ← Faça mudanças
5️⃣  Veja auto-reload     ← Mágica! ✨
```

---

## 🛠️ COMANDOS ESSENCIAIS

```
┌─────────────────────────────────────────────┐
│  npm run dev          → Dev server          │
│  npm run build        → Produção            │
│  npm run preview      → Testar produção     │
│  npm run typecheck    → Verificar erros TS  │
│  git push origin      → Enviar pra GitHub   │
└─────────────────────────────────────────────┘
```

---

## 📁 ESTRUTURA PASTA

```
📦 semeando-a-palavra
├── 📄 src/App.tsx           ← EDITE AQUI! 🎯
├── 🎨 src/assets/logo.png   ← Seu logo
├── 🎨 tailwind.config.ts    ← Cores
├── ⚙️ vite.config.ts         ← Build setup
├── 📖 GUIA_RAPIDO.md         ← Leia primeiro
└── 📖 DOCUMENTACAO.md        ← Referência
```

---

## 🎨 PALETA DE CORES

```
┌──────────────────────────────────────────┐
│ PRIMARY (Dourado)    │ hsl(36 80% 50%)  │
│ SECONDARY (Azul)     │ hsl(220 25% 20%) │
│ ACCENT (Terra)       │ hsl(16 65% 55%)  │
│ BACKGROUND (Creme)   │ hsl(40 33% 97%)  │
│ GOLD (Vibrante)      │ hsl(45 90% 55%)  │
│ EARTH (Marrom)       │ hsl(25 35% 35%)  │
└──────────────────────────────────────────┘

Mude em: tailwind.config.ts
```

---

## ✏️ EDIÇÕES RÁPIDAS

```
📝 Mudar Texto
   └─ Arquivo: src/App.tsx
   └─ Encontre e edite entre aspas

🎨 Mudar Cores  
   └─ Arquivo: tailwind.config.ts
   └─ Mude valores HSL

🖼️ Mudar Logo
   └─ Copie para: src/assets/logo.png
   └─ Substitua o arquivo existente

🔗 Links
   📺 YouTube: Linha 11 de App.tsx
   💰 Doação:  Linha 24 de App.tsx
```

---

## 🧪 ANTES DE ENVIAR

```
✅ npm run typecheck        Sem erros?
✅ npm run build            Build OK?
✅ npm run preview          Vê a página?
✅ git status               Tudo commitado?
✅ Teste em mobile          Responsivo?
✅ Teste links              Funcionam?
✅ Teste video              Carrega?
```

---

## 🚨 PROBLEMAS RÁPIDOS

```
❌ Estilos não aparecem
   → Reinicie: npm run dev

❌ Port já em uso
   → npm run dev -- --port 3000

❌ Cannot find module
   → npm install

❌ TypeScript error
   → npm run typecheck (veja linha)

❌ Video não carrega
   → Verifique URL YouTube em App.tsx L11
```

---

## 🌐 DEPLOY (Vercel)

```
1. Conecte GitHub em vercel.com
2. Selecione seu repositório  
3. Deploy automático! 🚀
4. git push → Auto-deploy
```

---

## 🗂️ ARQUIVOS CHAVE

```
src/App.tsx
  ├─ 📍 L11:  YouTube Live URL
  ├─ 📍 L24:  Donation Link
  ├─ 📍 L37:  Menu Items
  ├─ 📍 L81:  Main Title
  ├─ 📍 L83:  Description
  └─ 📍 L105: About Section

tailwind.config.ts
  └─ 📍 L6:   Cores do projeto
```

---

## 📱 RESPONSIVIDADE

```
Teste em 3 tamanhos:

📱 Mobile
   └─ iPhone SE (375px)

📱 Tablet  
   └─ iPad (768px)

💻 Desktop
   └─ Laptop (1440px)

Use: F12 → Device Toggle
```

---

## 💻 VS CODE ATALHOS

```
Ctrl+P           Abrir arquivo
Ctrl+F           Procurar
Ctrl+H           Substituir
Ctrl+/           Comentar
Alt+Up/Down      Mover linha
Ctrl+Shift+P     Palette
F12              DevTools
```

---

## 📚 DOCUMENTAÇÃO

```
Perdido?

┌─────────────────────────────────────┐
│ GUIA_RAPIDO.md       → Comece aqui  │
│ REFERENCIA_RAPIDA.md → Comandos     │
│ GUIA_TECNICO.md      → Padrões      │
│ DOCUMENTACAO.md      → Tudo         │
│ DOCS_INDEX.md        → Índice       │
└─────────────────────────────────────┘

Ctrl+F no repo e procure!
```

---

## 🎯 FLUXO DIÁRIO

```
🌅 Morning
   npm run dev
   ↓ Edita arquivo
   ↓ Vê mudanças ao vivo (hot reload!)

🌞 Afternoon  
   npm run typecheck
   git commit -m "feat: ..."
   git push origin

🌙 Evening
   npm run build (se precisa)
   npm run preview
   Celebra! 🎉
```

---

## 🔒 SEGURANÇA

```
NUNCA versione:
  ❌ .env.local
  ❌ node_modules/
  ❌ Senhas/Keys
  
SEMPRE guarde em:
  ✅ .gitignore
  ✅ Variáveis de ambiente privadas
  ✅ Vercel/Host secrets
```

---

## 🎨 CLASSE TAILWIND COMUM

```
┌──────────────────────────────────────────────┐
│ className="                                  │
│   px-6 py-8           (padding)              │
│   bg-white            (fundo branco)         │
│   rounded-lg           (bordas arredondadas) │
│   shadow-lg            (sombra)              │
│   hover:bg-gray-100   (ao passar mouse)      │
│   md:px-12            (maior em desktop)     │
│   text-center         (alinhado centro)      │
│   transition-all      (animação suave)       │
│ "                                            │
└──────────────────────────────────────────────┘
```

---

## 📊 GIT BASICO

```
ver mudanças
   ↓
git status

selecionar mudanças
   ↓
git add .

fazer commit
   ↓
git commit -m "feat: novo"

enviar
   ↓
git push origin
```

---

## 🧩 ESTRUTURA COMPONENTE

```typescript
import React from 'react';

interface ComponentProps {
  title: string;      // Props
}

const Component: React.FC<ComponentProps> 
  = ({ title }) => {
  
  const [state, setState] = useState(false);  // State
  
  return (                               // JSX
    <div className="...">{title}</div>
  );
};

export default Component;
```

---

## ⚡ PERFORMANCE

```
Checklist:

□ Lazy load componentes pesados
□ Memoize componentes puros
□ Especifique dependências em useEffect
□ Evite objetos inline
□ Use chaves corretas em listas
□ Minify CSS/JS em produção
```

---

## 🔄 CICLO DE VIDA PR

```
1. Create Branch
   git checkout -b feature/nome

2. Make Changes
   npm run dev
   Edita e testa

3. Commit
   git commit -m "feat: descrição"

4. Push
   git push origin feature/nome

5. Pull Request
   No GitHub, cria PR

6. Review
   Lead Dev revisa

7. Merge
   Aprovador faz merge

8. Deploy
   Vercel faz auto-deploy 🚀
```

---

## 🎓 PRÓXIMOS PASSOS

```
✅ Dominou o básico?

Próximos:
  1. Refatore em componentes
  2. Adicione testes
  3. Otimize performance
  4. Configure SEO
  5. Adicione analytics
```

---

## 📞 AJUDA RÁPIDA

```
🆘 Estou preso?

1️⃣  Procure no GUIA_RAPIDO.md
2️⃣  Procure no REFERENCIA_RAPIDA.md  
3️⃣  Procure no Stack Overflow
4️⃣  Abra uma Issue no GitHub
5️⃣  Pergunte no Slack/Discord
```

---

## 💪 LEMBRETES

```
✨ Você consegue! 

✅ Comece pequeno
✅ Teste frequentemente
✅ Leia a documentação
✅ Peça ajuda se precisar
✅ Compartilhe conhecimento
✅ Celebre os wins! 🎉
```

---

## 📋 MINHA CHECKLIST

```
□ Instalei Node.js
□ Fiz npm install
□ npm run dev funciona
□ Abri localhost:5173
□ Editei algo em App.tsx
□ Vi a mudança ao vivo
□ Fiz um git commit
□ Fiz um git push
□ Entendo a estrutura
□ Pronto pra trabalhar! 🚀
```

---

<div align="center">

## 🎉 Bem-vindo ao Projeto!

**Versão:** 1.0  
**Data:** Abril 2026

---

### 👉 Próximo Passo: Abra o Terminal

```bash
npm run dev
```

### Então: Abra seu editor favorito

```
Edite: src/App.tsx
Linha: 81
```

### 🎊 Pronto! Você já está desenvolvendo!

---

**Divirta-se! Você vai fazer um site incrível! 💪**

</div>

---

> 📌 **Imprima isto e coloque na parede!**  
> Compartilhe com sua equipe!  
> Marque quando completou cada item!

