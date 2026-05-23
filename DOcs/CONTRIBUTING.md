# 🤝 Contributing.md - Guia de Contribuição

Obrigado por considerar contribuir para **Semeando a Palavra**! As contribuições são o que torna este projeto um sucesso.

## 📋 Índice

1. [Código de Conduta](#código-de-conduta)
2. [Como Contribuir](#como-contribuir)
3. [Processo de Pull Request](#processo-de-pull-request)
4. [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
5. [Reportar Bugs](#reportar-bugs)
6. [Sugerir Melhorias](#sugerir-melhorias)
7. [Dúvidas?](#dúvidas)

---

## 🤝 Código de Conduta

### Our Pledge

Nos comprometemos a fornecer um ambiente acolhedor e inclusivo. Todos que contribuem devem:

- ✅ Ser respeitosos com diferentes opiniões
- ✅ Aceitar críticas construtivas
- ✅ Focar no que é melhor para a comunidade
- ✅ Ser paciente com explicações
- ✅ Ser inclusivo com pessoas de diferentes backgrounds

### Aplicação

Comportamento abusivo, insultos ou assédio NÃO será tolerado. Violações podem resultar em exclusão do projeto.

---

## 🚀 Como Contribuir

### Tipos de Contribuição

Existem muitas maneiras de contribuir:

#### 👨‍💻 Código

```bash
# Contribuições de features
# Correções de bugs
# Refatoração
# Performance improvements
```

#### 📚 Documentação

```bash
# Adicionar documentação
# Melhorar README
# Criar tutoriais
# Corrigir typos
```

#### 🐛 Bug Reports

```bash
# Reportar problemas encontrados
# Fornecer detalhes úteis
# Sugerir soluções
```

#### 💡 Ideias

```bash
# Sugerir novas features
# Melhorias de design
# User experience
```

#### 🎨 Design

```bash
# Melhorias visuais
# Novos assets
# Melhor responsividade
```

---

## 📝 Processo de Pull Request

### Antes de Começar

```bash
# 1. Fork do repositório
# Clique "Fork" no GitHub

# 2. Clone seu fork
git clone https://github.com/seu-usuario/semeando-a-palavra.git
cd semeando-a-palavra

# 3. Configure upstream (opcional)
git remote add upstream https://github.com/original/semeando-a-palavra.git
```

### Criando uma Feature

```bash
# 1. Busque última versão
git fetch upstream
git checkout main
git merge upstream/main

# 2. Crie sua branch
git checkout -b feature/minha-feature

# 3. Faça as mudanças
# Edite os arquivos necessários

# 4. Teste suas mudanças
npm run dev          # Desenvolver
npm run typecheck    # Verificar tipos
npm run build        # Testar build
npm run preview      # Ver em produção

# 5. Teste em múltiplos dispositivos
# Mobile, Tablet, Desktop

# 6. Commit com mensagem clara
git add .
git commit -m "feat: descrição clara do que foi feito"

# 7. Push para seu fork
git push origin feature/minha-feature

# 8. Abra Pull Request no GitHub
# Forneça descrição detalhada
```

### Mensagens de Commit

Use format: `type(scope): description`

```bash
# Exemplos ✅ BOM:
git commit -m "feat(hero): add animation on scroll"
git commit -m "fix(buttons): correct primary color hover"
git commit -m "refactor(components): extract header logic"
git commit -m "docs: update installation instructions"
git commit -m "style(components): fix indentation"

# Exemplos ❌ RUIM:
git commit -m "Made changes"
git commit -m "fixes"
git commit -m "updated stuff"
```

### Tipos de Commits

- `feat:` Novas features
- `fix:` Correção de bugs
- `refactor:` Refatoração de código
- `docs:` Documentação
- `style:` Formatação, linting
- `test:` Testes
- `chore:` Tarefas de manutenção
- `perf:` Melhorias de performance

### Pull Request Checklist

```markdown
## Descrição

[Descreva as mudanças que você fez]

## Tipo de Mudança

- [ ] Bug fix (corrigir bug sem quebrar features)
- [ ] Nova feature (adicionar funcionalidade)
- [ ] Breaking change (pode quebrar existente)
- [ ] Documentação

## Como Foi Testado

- [ ] Testei em navegador (qual?)
- [ ] Testei responsividade
- [ ] Testei em mobile
- [ ] A feature funciona como esperado

## Checklist

- [ ] Meu código segue padrões do projeto (GUIA_TECNICO.md)
- [ ] Fiz self-review do meu código
- [ ] Adicionei comentários necessários (principalmente partes complexas)
- [ ] Atualizei documentação correspondente
- [ ] Não adicionei console.log ou código de debug
- [ ] TypeScript recompila sem erros (`npm run typecheck`)
- [ ] Build é bem-sucedido (`npm run build`)

## Screenshots (se aplicável)

[Cole screenshots de mudanças visuais]

## Breaking Changes

[Descreva qualquer mudança que quebraria código existente]
```

---

## 🛠️ Padrões de Desenvolvimento

### TypeScript

```typescript
// ✅ BOM - Tipagem completa
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
};

// ❌ RUIM - Sem tipos
const Button = ({ label, onClick, disabled }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### Componentes React

```typescript
// ✅ BOM
import React from 'react';

interface ComponentProps {
  title: string;
}

/**
 * Component - Descrição do que faz
 * @example
 * <Component title="Hello" />
 */
const Component: React.FC<ComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Component;

// ❌ RUIM
const Component = ({ title }) => {
  return <div>{title}</div>;
};
```

### CSS / Tailwind

```typescript
// ✅ BOM - Use Tailwind utilities
<div className="px-6 py-8 bg-white rounded-lg shadow-lg">

// ❌ RUIM - CSS customizado quando Tailwind serve
<div style={{ padding: '24px 32px', backgroundColor: 'white' }}>
```

### Nomes

```typescript
// ✅ BOM
const getUserData = () => {}
const isUserAdmin = true
const MAX_FILE_SIZE = 5242880
const handleButtonClick = () => {}

// ❌ RUIM
const get_user_data = () => {}
const IsUserAdmin = true
const maxFileSize = 5242880
const handleClick = () => {}  // Muito genérico
```

---

## 🐛 Reportar Bugs

### Antes de Reportar

```bash
# 1. Procure existing issues
# GitHub Search: seu problema

# 2. Tente reproduzir em ambiente limpo
npm install
npm run dev

# 3. Verifique versão do Node
node --version

# 4. Verifique documentação
# GUIA_RAPIDO.md, DOCUMENTACAO.md
```

### Issue Report Template

```markdown
## Descrição do Bug

[Descrição clara do problema]

## Passos para Reproduzir

1. Clique em...
2. Navegue até...
3. Observe...

## Comportamento Esperado

[O que deveria acontecer]

## Comportamento Atual

[O que acontece]

## Environment

- OS: [Windows/Mac/Linux]
- Node: [Versão]
- npm: [Versão]
- Browser: [Chrome/Firefox/Safari]
- Browser Version: [Versão]

## Screenshots

[Cole screenshots se relevante]

## Logs

[Cole output de erro se tiver]

## Possível Solução

[Sua sugestão de fix, se tiver]
```

---

## 💡 Sugerir Melhorias

### Feature Request Template

```markdown
## Descrição da Feature

[Descrição clara da funcionalidade]

## Motivação

Por que isso seria útil?

## Benefícios

[Benefícios desta feature]

## Exemplos de Uso

[Como seria usada]

## Possível Implementação

[Sua sugestão técnica, se tiver]

## Alternativas

[Alternativas consideradas]
```

---

## 🧪 Testing Guidelines

### Quando Adicionar Testes

- [ ] Novas funcionalidades
- [ ] Bug fixes críticos
- [ ] Mudanças em lógica compartilhada

### Executar Testes

```bash
# (Quando testes forem adicionados)
npm run test
npm run test -- --coverage
```

### Exemplo de Teste

```typescript
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('deve renderizar com label', () => {
    render(<Button label="Clique" onClick={() => {}} />);
    expect(screen.getByText('Clique')).toBeInTheDocument();
  });

  it('deve chamar onClick ao clicar', async () => {
    const handleClick = vi.fn();
    render(<Button label="Clique" onClick={handleClick} />);
    
    await userEvent.click(screen.getByText('Clique'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

---

## 🔄 Processo de Review

### O que os Reviewers Verificam

- ✅ Código segue padrões (GUIA_TECNICO.md)
- ✅ Sem console.log ou código de debug
- ✅ TypeScript sem erros
- ✅ Testes incluídos
- ✅ Documentação atualizada
- ✅ Performance não degradada
- ✅ Responsividade mantida

### Respondendo a Reviews

```
✅ Aceite críticas positivamente
✅ Explique seu raciocínio se discordar
✅ Faça pedidos de mudanças como novos commits
✅ Re-request review quando terminar

❌ Não fique na defensiva
❌ Não ignore sugestões
❌ Não force merge sem aprovação
```

---

## 📖 Melhoras na Documentação

### Documentar o Quê

- [ ] Novas features
- [ ] APIs alteradas
- [ ] Passos de installation alterados
- [ ] Novos padrões de desenvolvimento
- [ ] Decisões arquiteturais

### Como Documentar

1. Atualize em [DOCUMENTACAO.md](DOCUMENTACAO.md)
2. Atualize [GUIA_TECNICO.md](GUIA_TECNICO.md) se necessário
3. Atualize README.md se muito importante
4. Adicione exemplos de código quando possível

---

## 🚀 Deploy Checklist

Antes de fazer deploy:

```bash
☐ npm run typecheck          # Sem erros TypeScript
☐ npm run build              # Build bem-sucedido
☐ npm run preview            # Preview OK
☐ Testei em mobile           # Responsividade OK
☐ Testei links               # Todos funcionam
☐ Testei video YouTube       # Carrega
☐ Sem console.log            # Código limpo
☐ Documentação atualizada    # Comitada
```

---

## 🙌 Reconhecimento

### Como Seus Contribuições São Reconhecidas

1. Seu nome no README.md
2. Seu nome no CONTRIBUTORS.md
3. GitHub mostra como contributor

### Contributors Hall of Fame

```
Contribuidores com 10+ PRs recebem menção especial! 🌟
```

---

## 📚 Referências Úteis

### Documentação Interna

- [GUIA_RAPIDO.md](GUIA_RAPIDO.md)
- [DOCUMENTACAO.md](DOCUMENTACAO.md)
- [GUIA_TECNICO.md](GUIA_TECNICO.md)
- [CONFIGURACAO.md](CONFIGURACAO.md)
- [REFERENCIA_RAPIDA.md](REFERENCIA_RAPIDA.md)

### Recursos Externos

- [Git Docs](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [React Best Practices](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🗣️ Dúvidas?

### Como Perguntar

1. 📖 Leia a documentação primeiro
2. 🔍 Procure issues relacionadas
3. 💬 Faça uma pergunta clara
4. 📝 Forneça contexto relevante

### Canais de Suporte

- **Issues GitHub:** Bugs e features
- **Discussions:** Perguntas gerais
- **Slack/Discord:** Chat informal (se existente)

---

## 🎉 Agradecimentos

Toda contribuição, por menor que seja, é valorizada!

Obrigado por ajudar a tornar **Semeando a Palavra** melhor! 💪

---

## 📋 Quick Checklist para PR

```
□ Fork + Clone
□ Nova branch (git checkout -b feature/nome)
□ Fiz mudanças
□ npm run dev (testei)
□ npm run typecheck (sem erros)
□ npm run build (passou)
□ git commit -m "type: description"
□ git push origin feature/nome
□ Abri Pull Request no GitHub
□ Incluí descrição clara
□ Adicionei screenshot se visual
□ Respondi reviews
□ Esperar aprovação ✨
```

---

## 🚀 Seu Primeiro PR

Se é sua primeira vez:

1. Comece pequeno (typo, doc fix)
2. Procure issues marcadas com `good first issue`
3. Faça muitas perguntas
4. Nosso time ajuda! 💪

---

**Bem-vindo à comunidade Semeando a Palavra! 🙏**

---

**Versão:** 1.0  
**Última atualização:** Abril 2026  
**Mantido por:** Equipe de Desenvolvimento
