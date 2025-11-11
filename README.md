# 📸 Fotos Intergalácticas

Uma galeria de fotos moderna e elegante construída com Next.js, React e Tailwind CSS. Explore imagens espaciais em uma interface minimalista com animações suaves e experiência de usuário aprimorada.

## ✨ Funcionalidades

- 🎨 **Design Moderno e Minimalista** - Interface elegante com paleta de cores suave e espaçamento generoso
- 🌓 **Suporte a Dark Mode** - Adaptação automática ao tema do sistema
- 🖼️ **Galeria em Grid Responsivo** - Layout adaptável para mobile, tablet e desktop
- 🔍 **Modal de Visualização** - Visualização ampliada das imagens com backdrop blur
- ⌨️ **Navegação por Teclado** - Use ESC para fechar o modal
- 🎯 **Navegação entre Imagens** - Setas para navegar entre as fotos no modal
- ✨ **Animações Suaves** - Transições elegantes em todas as interações
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em todos os dispositivos

## 🚀 Tecnologias

- **[Next.js 15.3.5](https://nextjs.org/)** - Framework React para produção
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Geist Font](https://vercel.com/font)** - Fonte otimizada da Vercel

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd photos
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🎮 Como Executar

### Modo de Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build de Produção

Para criar uma build otimizada para produção:

```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

### Linting

Execute o linter para verificar o código:

```bash
npm run lint
# ou
yarn lint
```

## 📁 Estrutura do Projeto

```
photos/
├── public/
│   └── assets/          # Imagens da galeria
├── src/
│   ├── app/
│   │   ├── globals.css   # Estilos globais e variáveis CSS
│   │   ├── layout.tsx    # Layout raiz da aplicação
│   │   └── page.tsx      # Página principal
│   ├── components/
│   │   ├── Modal.tsx     # Componente do modal de visualização
│   │   └── PhotoItem.tsx # Componente do card de foto
│   ├── data/
│   │   └── photolist.ts  # Lista de fotos
│   └── types/
│       └── photo.ts      # Tipos TypeScript
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Características de Design

### Sistema de Cores
- Paleta minimalista com cores suaves
- Variáveis CSS para fácil customização
- Suporte automático a dark mode baseado nas preferências do sistema

### Animações
- **fadeIn**: Animação de entrada suave para elementos
- **fadeInScale**: Animação de escala para o modal
- **slideIn**: Animação de deslizamento lateral
- Transições suaves em todos os hovers e interações

### Componentes

#### PhotoItem
- Cards com bordas arredondadas e sombras suaves
- Efeito hover com elevação e zoom na imagem
- Indicador visual de interação

#### Modal
- Backdrop com blur effect
- Botões de navegação estilizados
- Indicador de posição (ex: "1 / 9")
- Fechamento por clique no backdrop ou tecla ESC

## 🔧 Customização

### Adicionar Novas Fotos

1. Adicione as imagens na pasta `public/assets/`
2. Atualize o arquivo `src/data/photolist.ts`:

```typescript
export const photoList: Photo[] = [
  { id: 1, url: '1.jpg' },
  { id: 2, url: '2.jpg' },
  // Adicione mais fotos aqui
];
```

### Personalizar Cores

Edite as variáveis CSS em `src/app/globals.css`:

```css
:root {
  --background: #fafafa;
  --foreground: #1a1a1a;
  --accent: #6366f1;
  /* Personalize as cores aqui */
}
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📄 Licença

Este projeto é privado.

## 👨‍💻 Autor

Murilo Rodrigues Lima

---

**Nota**: Este projeto foi criado como uma demonstração de uma galeria de fotos moderna e responsiva. Sinta-se livre para usar como base para seus próprios projetos!
