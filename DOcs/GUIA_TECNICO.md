# 👨‍💼 Guia Técnico para Desenvolvedores

## 📋 Índice

1. [Arquitetura](#arquitetura)
2. [Padrões de Código](#padrões-de-código)
3. [Convenções de Nome](#convenções-de-nome)
4. [Componentes](#componentes)
5. [Estilos](#estilos)
6. [Performance](#performance)
7. [Segurança](#segurança)
8. [Testing](#testing)
9. [Git Workflow](#git-workflow)

---

## 🏗️ Arquitetura

### Princípios Arquiteturais

1. **Modularidade:** Componentes independentes e reutilizáveis
2. **Responsabilidade Única:** Cada componente tem uma responsabilidade
3. **Componentização:** UI decompostos em componentes pequenos
4. **Separação de Concerns:** Lógica separada de apresentação

### Organização de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Footer.tsx
├── pages/              # Páginas da aplicação (futuro)
├── hooks/              # Custom React hooks (futuro)
├── utils/              # Funções utilitárias (futuro)
├── types/              # Tipos TypeScript compartilhados (futuro)
├── App.tsx             # Componente raiz
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

### Fluxo de Dados

```
User Interaction
      ↓
Event Handler
      ↓
State Change
      ↓
Re-render
      ↓
DOM Update
```

Exemplo:
```typescript
// Event → State → Render
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Handler
const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

// Condicional no JSX
{isMenuOpen && <MobileMenu />}
```

---

## 📝 Padrões de Código

### TypeScript

**Sempre use tipos:**

```typescript
// ✅ BOM
interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const menuItems: MenuItem[] = [...];

// ❌ RUIM
const menuItems = [...];
```

**Evite `any`:**

```typescript
// ✅ BOM
const getData = (id: string): Promise<Data> => {
  return fetch(`/api/data/${id}`).then(r => r.json());
}

// ❌ RUIM
const getData = (id: any): any => {
  return fetch(`/api/data/${id}`).then(r => r.json());
}
```

### Funções

**Use arrow functions:**

```typescript
// ✅ BOM
const handleClick = () => {
  console.log("Clicado");
}

// ⚠️ Evitar em componentes
const handleClick = function() {
  console.log("Clicado");
}
```

**Extraia lógica complexa:**

```typescript
// ✅ BOM
const getYoutubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Use em outro lugar
const videoId = getYoutubeId(youtubeUrl);
```

### Componentes React

**Use functional components:**

```typescript
// ✅ BOM - Functional Component
const Header: React.FC = () => {
  return <header>...</header>;
}

// ❌ RUIM - Class Component (legacy)
class Header extends React.Component {
  render() {
    return <header>...</header>;
  }
}
```

**Prop typing:**

```typescript
// ✅ BOM
interface HeaderProps {
  logo: string;
  title: string;
  menu?: string[];
}

const Header: React.FC<HeaderProps> = ({ logo, title, menu }) => {
  return <header>...</header>;
}

// ❌ RUIM
const Header = ({ logo, title, menu }: any) => {
  return <header>...</header>;
}
```

---

## 🏷️ Convenções de Nome

### Componentes

Use PascalCase para componentes:

```typescript
// ✅ BOM
const HeroSection: React.FC = () => {};
const VideoPlayer: React.FC = () => {};
const DonationButton: React.FC = () => {};

// ❌ RUIM
const heroSection: React.FC = () => {};
const video_player: React.FC = () => {};
const donationButton: React.FC = () => {};  // Está ok, mas use componentes em PascalCase nos imports
```

### Variáveis e Funções

Use camelCase:

```typescript
// ✅ BOM
const isLive = true;
const donationLink = "https://...";
const handleMenuToggle = () => {};
const getYoutubeVideoId = (url) => {};

// ❌ RUIM
const IsLive = true;
const donation_link = "https://...";
const handle_menu_toggle = () => {};
```

### Constantes

Use UPPER_SNAKE_CASE:

```typescript
// ✅ BOM
const MAX_FILE_SIZE = 5242880; // 5MB
const API_BASE_URL = "https://api.example.com";
const BREAKPOINTS = { mobile: 480, tablet: 768, desktop: 1024 };

// ❌ RUIM
const maxFileSize = 5242880;
const api_base_url = "https://api.example.com";
```

### Classes CSS

Use kebab-case com prefixos semânticos:

```typescript
// ✅ BOM
<div className="hero-section bg-gradient-to-br from-secondary to-earth">
  <h1 className="hero-title text-6xl font-bold">
<div className="donation-form space-y-4">
<button className="btn-primary bg-primary hover:bg-primary/90">

// ❌ RUIM
<div className="HeroSection bgGradient">
<div className="DonationForm">
<button className="btn_primary">
```

---

## 🧩 Componentes

### Estrutura Recomendada

```typescript
import React from 'react';
import { motion } from 'framer-motion';
import './ComponentName.css';  // Se tiver estilos específicos

interface ComponentNameProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

/**
 * ComponentName - Breve descrição do que faz
 * 
 * @example
 * <ComponentName title="Exemplo" />
 */
const ComponentName: React.FC<ComponentNameProps> = ({ 
  title, 
  description, 
  onAction 
}) => {
  // State
  const [state, setState] = React.useState(false);

  // Efeitos
  React.useEffect(() => {
    // Lógica
  }, []);

  // Handlers
  const handleClick = () => {
    setState(true);
    onAction?.();
  };

  // Render
  return (
    <div className="component-name">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <button onClick={handleClick}>Clique</button>
    </div>
  );
};

export default ComponentName;
```

### Props Drilling

Ao passar muitas props, considere usar Context:

```typescript
// ❌ RUIM - Muitos componentes intermediários
<Component1 user={user} />
  → <Component2 user={user} />
    → <Component3 user={user} />
      → <Component4 user={user} />

// ✅ BOM - Context API
const UserContext = React.createContext<User | null>(null);

<UserProvider>
  <Component1 />
    → <Component2 />
      → <Component3 />
        → <Component4 /> {/* Usa useContext(UserContext) */}
</UserProvider>
```

---

## 🎨 Estilos

### Nomenclatura Tailwind

Siga a estrutura do Tailwind:

```typescript
// ✅ BOM - Utilitários Tailwind
<div className="px-6 py-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
  <h2 className="text-2xl font-bold text-gray-900">Título</h2>
  <p className="text-gray-600 mt-2">Descrição</p>
</div>

// ❌ RUIM - CSS customizado quando Tailwind serve
<div style={{ padding: '24px 32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '...' }}>
```

### Cores do Projeto

Use as cores definidas em `tailwind.config.ts`:

```typescript
// ✅ BOM
<button className="bg-primary hover:bg-primary/90">
</button>

<div className="bg-warm text-foreground">
</div>

// ❌ RUIM - Cores customizadas
<button style={{ backgroundColor: '#FFD700' }}>
</button>
```

### Responsividade

Use prefixos Tailwind:

```typescript
// ✅ BOM
<div className="px-6 md:px-12 lg:px-24">
  <h1 className="text-2xl md:text-4xl lg:text-6xl">
</h1>
  <nav className="hidden md:flex">
  </nav>
</div>

// ❌ RUIM
<div style={{ padding: '24px' }}>
  <h1 style={{ fontSize: '24px' }}>
</h1>
</div>
```

### Evite Classes Customizadas

Use `@apply` com moderação:

```typescript
/* ✅ ACEITÁVEL */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors;
  }
}

/* ❌ EVITE - CSS puro quando Tailwind basta */
.card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
}
```

---

## ⚡ Performance

### Code Splitting

Importe componentes dinamicamente (futuro):

```typescript
// ✅ BOM - Lazy loading
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

export const App = () => (
  <React.Suspense fallback={<Spinner />}>
    <HeavyComponent />
  </React.Suspense>
);
```

### Memoização

Use `React.memo` para componentes puros:

```typescript
// ✅ BOM - Evita re-renders desnecessários
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = React.memo<ButtonProps>(({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
));

export default Button;
```

### Otimização de Effects

Especifique dependências:

```typescript
// ✅ BOM - Executa apenas uma vez
useEffect(() => {
  fetchData();
}, []); // array vazio = apenas na montagem

// ✅ BOM - Executa quando dependency muda
useEffect(() => {
  updateTitle();
}, [title]); // executa quando 'title' muda

// ❌ RUIM - Executa a cada render
useEffect(() => {
  fetchData();
}); // sem array = a cada render
```

### Evite Objetos Inline

```typescript
// ❌ RUIM - Novo objeto a cada render
<Component options={{ enabled: true, timeout: 1000 }} />

// ✅ BOM - Memoizado
const options = useMemo(() => ({ enabled: true, timeout: 1000 }), []);
<Component options={options} />

// Ou constante fora do componente
const DEFAULT_OPTIONS = { enabled: true, timeout: 1000 };
```

---

## 🔒 Segurança

### Sanitize URLs

Valide URLs antes de usar em iframes:

```typescript
// ✅ BOM
const isValidYoutubeUrl = (url: string): boolean => {
  try {
    const u = new URL(url);
    return u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be');
  } catch {
    return false;
  }
};

// Use em:
{isValidYoutubeUrl(videoUrl) && (
  <iframe src={`https://www.youtube.com/embed/${videoId}`} />
)}

// ❌ RUIM
<iframe src={userInput} /> // Vulnerable a XSS
```

### Evite eval()

```typescript
// ❌ NUNCA use eval()
const result = eval(userCode);

// ✅ Use alternativas seguras
const result = new Function(userCode)();  // Ainda perigoso
// Melhor: Use bibliotecas específicas ou sandboxes
```

### Valide Entrada do Usuário

```typescript
// ✅ BOM
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

if (validateEmail(userEmail)) {
  // Processe
}

// ❌ RUIM
if (userEmail.includes('@')) { // Validação muito simples
  // Processe
}
```

---

## 🧪 Testing (Futuro)

Quando adicionar testes, use Vitest:

```typescript
// Button.test.ts
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('deve renderizar com label', () => {
    render(<Button label="Clique" onClick={() => {}} />);
    expect(screen.getByText('Clique')).toBeInTheDocument();
  });

  it('deve chamar handler ao clicar', async () => {
    const handleClick = vi.fn();
    render(<Button label="Clique" onClick={handleClick} />);
    
    await userEvent.click(screen.getByText('Clique'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

### Cobertura de Testes

Alvo: 80%+ de cobertura

```bash
npm run test -- --coverage
```

---

## 📦 Git Workflow

### Branch Naming

```
feature/nome-descritivo    # Nova feature
fix/nome-do-bug           # Bug fix
refactor/nome-refactor    # Refatoração
docs/nome-documentacao    # Documentação
chore/nome-tarefa        # Tarefas de manutenção
```

### Commit Messages

```
Format: Type: Descrição

Types:
  feat:     Nova feature
  fix:      Correção de bug
  refactor: Refatoração
  docs:     Documentação
  style:    Formatação
  test:     Testes
  chore:    Manutenção

Exemplos:
✅ feat: Add YouTube live stream support
✅ fix: Fix responsive layout on mobile
✅ refactor: Extract Hero component
❌ Made some changes
❌ Updated stuff
```

### Pull Request Template

```markdown
## Descrição
Brief description of changes

## Tipo de Mudança
- [ ] Feature nova
- [ ] Bug fix
- [ ] Refatoração
- [ ] Documentação

## Checklist
- [ ] Testei em mobile
- [ ] Sem console.log
- [ ] TypeScript sem erros
- [ ] Documentação atualizada

## Screenshots (se aplicável)
[Cole screenshots aqui]
```

---

## 🚨 Checklist Antes de Deploy

- [ ] `npm run typecheck` - Sem erros de tipo
- [ ] `npm run build` - Build bem-sucedido
- [ ] Todos os links funcionam
- [ ] Video YouTube carrega corretamente
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Performance aceita (< 3s load time)
- [ ] Analytics/tracking funcionam se necessário
- [ ] SEO tags adequadas

---

## 📚 Recursos

- [React Best Practices](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/guide/)

---

**Versão:** 1.0  
**Última atualização:** Abril de 2026
