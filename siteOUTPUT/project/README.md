# OutputFTC - Site Institucional

Site institucional da equipe OutputFTC (#21069) do FIRST Tech Challenge.

## 🚀 Tecnologias

- **React** com Vite
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ícones)

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## 🛠️ Desenvolvimento

```bash
# Rodar localmente
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
# Build para deploy
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 📝 Personalização

### 🖼️ Substituir Imagens (IMPORTANTE!)

**TODAS as imagens são configuradas em um único arquivo central:**

📁 **`src/config/images.ts`**

Este arquivo contém todos os caminhos das imagens do site. Para adicionar suas imagens:

1. **Crie a pasta `public/images/` na raiz do projeto**
2. **Organize suas imagens nas subpastas:**
   ```
   public/
   └── images/
       ├── home-team-photo.jpg          # Foto da equipe para o fundo da Home
       ├── team/                         # Fotos dos membros
       │   ├── adam-f.jpg
       │   ├── alef-s.jpg
       │   ├── eduardo-c.jpg
       │   ├── isabella-g.jpg
       │   ├── karolina-r.jpg
       │   ├── maximos-p.jpg
       │   ├── natan-s.jpg
       │   ├── pietro-d.jpg
       │   └── sebastiao-p.jpg
       ├── robot/                        # Imagens do robô
       │   ├── pascal-main.jpg
       │   ├── robot-reveal.jpg
       │   └── cad-model.jpg
       ├── sponsors/                     # Logos dos patrocinadores
       │   ├── sponsor-1.jpg
       │   ├── sponsor-2.jpg
       │   ├── sponsor-3.jpg
       │   ├── sponsor-4.jpg
       │   ├── sponsor-5.jpg
       │   └── sponsor-6.jpg
       └── achievements/                 # Fotos das conquistas
           ├── achievement-1.jpg
           ├── achievement-2.jpg
           ├── achievement-3.jpg
           └── achievement-4.jpg
   ```

3. **As imagens serão carregadas automaticamente!**
   - Se uma imagem não for encontrada, um placeholder cinza aparecerá no lugar
   - Não é necessário modificar nenhum outro arquivo além de adicionar as imagens na pasta correta

**Dica**: Use imagens em formato JPG ou PNG. Recomenda-se:
- Fotos da equipe/conquistas: pelo menos 800x800px
- Logos de patrocinadores: fundo transparente (PNG) de 500x500px
- Foto de fundo da Home: alta resolução (1920x1080px ou maior)

### Atualizar Textos

- **Nome da equipe**: `src/components/Navbar.tsx` e `src/components/Footer.tsx`
- **Seção Home**: `src/sections/Home.tsx`
- **Nossa Equipe**: `src/sections/NossaEquipe.tsx` - atualize o array `members`
- **Nosso Robô**: `src/sections/NossoRobo.tsx`
- **Conquistas**: `src/sections/Conquistas.tsx` - atualize o array `achievements`

### Atualizar Links

- **Instagram**: Atualize `https://www.instagram.com/outputftc` em:
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`

- **FTC Mentor**: Atualize o link em `src/components/Navbar.tsx`

- **Email**: Atualize `outputftc@gmail.com` em `src/components/Footer.tsx`

### Cores

As cores principais estão configuradas em `tailwind.config.js`:
```js
colors: {
  primaryRed: '#930200',
  primaryOrange: '#ff8e00',
}
```

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SectionTitle.tsx
│   ├── MemberCard.tsx
│   ├── SponsorCard.tsx
│   └── AchievementCard.tsx
├── sections/            # Seções do site (cada uma ocupa uma tela inteira)
│   ├── Home.tsx
│   ├── NossaEquipe.tsx
│   ├── NossoRobo.tsx
│   ├── Patrocinadores.tsx
│   └── Conquistas.tsx
├── config/              # Configurações centralizadas
│   └── images.ts        # ⭐ ARQUIVO PRINCIPAL DE IMAGENS
├── App.tsx
├── main.tsx
└── index.css
```

## 🌐 Deploy no Netlify

1. Faça push do código para um repositório Git (GitHub, GitLab, etc.)
2. Acesse [Netlify](https://www.netlify.com/)
3. Clique em "Add new site" → "Import an existing project"
4. Conecte seu repositório
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clique em "Deploy site"

O Netlify fará o deploy automático sempre que você fizer push para o repositório.

## 📱 Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Cada seção ocupa uma tela inteira (página separada)
- ✅ Menu hambúrguer no mobile
- ✅ Scroll suave entre seções
- ✅ Animações e transições
- ✅ Gradientes vermelho → laranja
- ✅ Placeholders de imagem automáticos
- ✅ Sistema centralizado de gerenciamento de imagens
- ✅ Ícones com Lucide React
- ✅ Seções: Home, Nossa Equipe, Robô, Patrocinadores, Conquistas

## 🎨 Fontes

- **Títulos**: Poppins (bold)
- **Textos**: Poppins (regular)

As fontes são carregadas automaticamente do Google Fonts via `src/index.css`.

## 📄 Licença

© OutputFTC - FIRST Tech Challenge #21069
