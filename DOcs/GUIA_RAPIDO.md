# 🚀 Guia Rápido - Começar a Desenvolver

## 1️⃣ Instalação (5 minutos)

```bash
# 1. Abra o terminal na pasta do projeto
cd "c:\Users\eliel\Documents\PJ SEMEANDO A PALAVRA\land page\semeando-a-palavra"

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

**Pronto!** Abra http://localhost:5173 no navegador.

---

## 2️⃣ Editar Conteúdo

| O que desejo | Onde editar | Como fazer |
|---|---|---|
| Mudar textos | [src/App.tsx](src/App.tsx) | Procure o texto que quer mudar e edite entre as aspas |
| Adicionar novo logo | `src/assets/` | Coloque a imagem na pasta e atualize o caminho em `src/App.tsx` |
| Link de transmissão YouTube | [Linha 11 de App.tsx](src/App.tsx#L11) | `const youtubeLiveUrl = "SEU_LINK_AQUI"` |
| Link de doações | [Linha 24 de App.tsx](src/App.tsx#L24) | `const donationLink = "SEU_LINK_AQUI"` |
| Mudar cores | [tailwind.config.ts](tailwind.config.ts) | Edite os valores HSL na seção `colors` |

---

## 3️⃣ Estrutura de Pastas

```
📁 src/
  ├── 📄 App.tsx              ← Componente principal (EDITE AQUI!)
  ├── 📄 main.tsx             ← Entrada da app (não mexa)
  ├── 📄 index.css            ← Estilos globais (não meça)
  ├── 📁 assets/
  │   └── 🖼️ logo.png         ← Seu logo
  └── 📁 components/          ← Componentes extras (não utilizados)
      ├── Header.tsx
      └── Hero.tsx

📄 tailwind.config.ts         ← Configuração de cores e fontes
📄 vite.config.ts            ← Configuração do build
📄 package.json              ← Dependências do projeto
```

---

## 4️⃣ Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Criar versão para produção
npm run build

# Visualizar versão de produção localmente
npm run preview

# Verificar erros de tipagem
npm run typecheck

# Reinstalar todas as dependências (quando der erro)
rm -r node_modules
npm install
```

---

## 5️⃣ Customizações Comuns

### ✏️ Exemplo 1: Mudar o Título Principal

**Arquivo:** [src/App.tsx](src/App.tsx#L81)

**Antes:**
```typescript
<h1 className="text-6xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
  Semeando a Palavra<br />
  <span className="text-gold">para todas as nações</span>
</h1>
```

**Depois:**
```typescript
<h1 className="text-6xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
  Meu Ministério<br />
  <span className="text-gold">Transformando Vidas</span>
</h1>
```

### ✏️ Exemplo 2: Mudar Cor Primária

**Arquivo:** [tailwind.config.ts](tailwind.config.ts#L9)

**Antes:**
```typescript
primary: "hsl(36 80% 50%)",     // Dourado
```

**Depois:**
```typescript
primary: "hsl(200 70% 50%)",    // Azul
```

Use [HSL Color Picker](https://hsl.hsluv.org/) para escolher cores.

### ✏️ Exemplo 3: Adicionar um Novo Botão

**Arquivo:** [src/App.tsx](src/App.tsx)

**Encontre onde está outro botão e copie:**
```typescript
<a 
  href="#contribuir" 
  className="inline-block bg-primary hover:bg-primary/90 text-white px-16 py-7 rounded-3xl text-2xl font-semibold shadow-glow transition-all"
>
  Seu Texto Aqui
</a>
```

---

## 6️⃣ Resposividade

O projeto funciona em:
- 📱 Celulares (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

**Teste no navegador:**
- Abra Developer Tools (F12)
- Clique no ícone de dispositivo mobile
- Toggle entre diferentes tamanhos

---

## 7️⃣ Dúvidas Frequentes

**P: Como faço para publicar a página na internet?**  
R: Veja a seção de [Deploy](DOCUMENTACAO.md#-deploy) na documentação completa.

**P: O site não está atualizando as mudanças?**  
R: Pressione Ctrl+Shift+R para limpar cache do navegador.

**P: Onde coloco meu logo?**  
R: Coloque em `src/assets/logo.png` (substitua o existente).

**P: Posso usar diferentes fontes?**  
R: Sim! Edite em [tailwind.config.ts](tailwind.config.ts) na seção `fontFamily`.

**P: Como adicionar mais seções?**  
R: Copie uma seção existente em [App.tsx](src/App.tsx) e customize.

---

## 8️⃣ Problemas Comuns e Soluções

| Problema | Solução |
|---|---|
| "npm command not found" | Instale Node.js de [nodejs.org](https://nodejs.org) |
| Estilos não aparecem | Reinicie o dev server com `npm run dev` |
| Video YouTube não carrega | Verifique se o link é válido |
| Botão de doação não funciona | Verifique se o link em `donationLink` está correto |
| Port 5173 já em uso | Use `npm run dev -- --port 3000` |

---

## 🎓 Próximos Aprendizados

Depois de dominar o básico:

1. **Refatore:** Mova seções para componentes separados
2. **Estilos:** Aprenda mais sobre Tailwind CSS
3. **Animações:** Explore mais possibilidades do Framer Motion
4. **Testes:** Adicione testes automatizados
5. **SEO:** Otimize para mecanismos de busca

---

## 📞 Precisa de Ajuda?

- 📖 Leia [DOCUMENTACAO.md](DOCUMENTACAO.md) completa
- 🔍 Procure no [React Docs](https://react.dev)
- 💬 Pergunte em fóruns como Stack Overflow
- 🐛 Abra uma issue no repositório

---

