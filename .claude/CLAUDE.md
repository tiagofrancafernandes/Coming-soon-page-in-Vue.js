# Instruções do Projeto Coming Soon

## Stack Tecnológico
- **Vue 3** com Composition API
- **Tailwind CSS v4** (CSS-first configuration)
- **Vue Router** para navegação
- **Vite** como build tool

## Tailwind CSS v4 - Classes Atualizadas

### ⚠️ IMPORTANTE: Usar sintaxe Tailwind CSS v4

Tailwind CSS v4 introduziu novas classes. **SEMPRE** use as versões atualizadas:

#### Gradientes
❌ **Antigo (v3)**: `bg-gradient-to-r`, `bg-gradient-to-br`
✅ **Novo (v4)**: `bg-linear-to-r`, `bg-linear-to-br`

```html
<!-- CORRETO -->
<div class="bg-linear-to-r from-blue-500 to-purple-600">

<!-- INCORRETO - Não usar -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
```

#### Outras atualizações v4
- Use a sintaxe CSS-first quando possível
- Variantes customizadas definidas em `@custom-variant`
- Tema customizado em `@theme`

## Design System - Modo Dark/Light

### Regras de Legibilidade

**CRÍTICO**: Cards e containers devem ter contraste adequado em ambos os modos para garantir legibilidade.

#### Fundos de Cards
- **Modo Light**: `bg-white bg-opacity-70` - transparente com glassmorphism
- **Modo Dark**: `dark:bg-gray-800 dark:bg-opacity-90` - sólido para contraste
- **Shadows**: `shadow-lg dark:shadow-xl` - profundidade visual

❌ **EVITAR**: `dark:bg-white dark:bg-opacity-10`
→ Muito transparente, texto claro fica ilegível em fundos escuros

#### Padrão Recomendado de Cards
```html
<div class="
    bg-white dark:bg-gray-800
    bg-opacity-70 dark:bg-opacity-90
    backdrop-blur-md
    rounded-lg p-6
    shadow-lg dark:shadow-xl
    transition-all duration-300
">
```

### Hierarquia de Cores de Texto

#### Títulos Principais
```html
class="text-gray-900 dark:text-white"
```

#### Texto Secundário (descrições, subtítulos)
```html
class="text-gray-600 dark:text-gray-300"
```

#### Texto Terciário (labels, metadados)
```html
class="text-gray-500 dark:text-gray-400"
```

#### Links e Acentos
```html
class="text-blue-700 dark:text-blue-200"
```

### Inputs e Formulários

#### Input Fields
```html
<input class="
    bg-white dark:bg-gray-800
    text-gray-800 dark:text-gray-100
    border border-gray-300 dark:border-gray-600
    focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
    focus:border-transparent
    placeholder:text-gray-500 dark:placeholder:text-gray-400
    transition-all duration-300
">
```

### Botões

#### Botão Primário
```html
<button class="
    bg-linear-to-r from-blue-500 to-purple-600
    dark:from-blue-600 dark:to-purple-700
    text-white
    hover:from-blue-600 hover:to-purple-700
    dark:hover:from-blue-700 dark:hover:to-purple-800
    transition duration-300
    transform hover:scale-105
    shadow-md
">
```

## Componentes Countdown

### Validação de Datas

Sempre usar os helpers de validação em `src/utils/helpers.js`:

```javascript
import { isValidDate, ifValidDate, isFutureDate } from '@/utils/helpers.js';

// Verificar se é data válida
if (isValidDate(dateParam)) { ... }

// Obter Date object se válido
const dateObj = ifValidDate(dateParam);

// Verificar se é data futura
if (isFutureDate(dateParam)) { ... }
```

### Data Fallback Padrão

Quando uma data inválida ou passada é fornecida:
```javascript
const exampleDate = new Date();
exampleDate.setDate(exampleDate.getDate() + 30);
exampleDate.setHours(14, 0, 0, 0);
```

## Estrutura de Componentes

### Organização de Pastas
```
src/
├── components/
│   ├── Layout/          # Componentes de layout (Footer, Header, etc)
│   ├── Counter.vue      # Lógica de countdown
│   ├── CounterSquare.vue # Display individual de contador
│   ├── ComingSoon.vue   # Página principal
│   ├── CustomDate.vue   # Countdown customizado
│   └── Examples.vue     # Lista de exemplos
├── utils/
│   ├── helpers.js       # Funções utilitárias
│   ├── colorScheme.js   # Gerenciamento de tema
│   └── router-utils.js  # Utilitários de navegação
└── router.js            # Configuração de rotas
```

## Rotas Disponíveis

```javascript
/                          // Página principal (ComingSoon)
/coming-soon               // Alias para página principal
/countdown/:date           // Countdown customizado (aceita ISO string ou timestamp)
/examples                  // Lista de exemplos de countdown
```

### Formato de Datas em URLs

Aceita múltiplos formatos:
- ISO String: `/countdown/2025-12-31T23:59:59`
- Unix timestamp: `/countdown/1735689599000`
- Date string: `/countdown/2025-12-31`

## Formatação e Código

### Prettier
```bash
npx prettier -w --ignore-path ./.prettierignore --config ~/.prettierrc .
```

### Indentação
- **4 espaços** (nunca tabs)
- Configurado no `.prettierrc`

### Idioma
- Código: **Inglês** (variáveis, funções, comentários técnicos)
- UI/Mensagens: **Português BR** (texto exibido ao usuário)
- Datas: Formatação `pt-BR`

## Commits Git

### Estilo de Commit
- **Sem referências ao Claude** (commits devem parecer escritos pelo desenvolvedor)
- Mensagens claras e descritivas
- Formato: Título curto + descrição detalhada

### Exemplo
```
Fix dark mode readability in Examples component

- Changed card background from white with 10% opacity to gray-800 with 90% opacity
- Added shadow-xl in dark mode for better depth perception
- Improved contrast between text and background
```

## Animações

### Keyframes Padrão

Já definidos em `src/assets/style.css`:

```css
.animate-fade-in-down     /* Fade in descendo */
.animate-fade-in-up       /* Fade in subindo */
.animation-delay-300      /* Delay de 0.3s */
```

## Performance

### Transições
```html
<!-- Padrão para transições de cor/fundo -->
class="transition-colors duration-300"

<!-- Transições completas (cor, tamanho, sombra, etc) -->
class="transition-all duration-300"

<!-- Transforms -->
class="transform hover:scale-105"
```

## Acessibilidade

- Sempre adicionar atributos ARIA quando necessário
- Contraste mínimo WCAG AA: 4.5:1 para texto normal
- Contraste mínimo WCAG AA: 3:1 para texto grande
- Todos os elementos interativos devem ter estados hover/focus visíveis

## Checklist de PR/Commit

Antes de commitar, verificar:
- [ ] Prettier executado
- [ ] Classes Tailwind v4 corretas (`bg-linear-to-*` não `bg-gradient-to-*`)
- [ ] Contraste adequado em dark mode (opacidade ≥ 90% em fundos escuros)
- [ ] Transições suaves aplicadas (`transition-colors duration-300`)
- [ ] Texto legível em ambos os modos (light/dark)
- [ ] Sem referências ao Claude em mensagens de commit
- [ ] Datas validadas com helpers apropriados
