# Portfolio - João Pedro

Personal portfolio website built with modern web technologies.

## Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **next-intl** - Internationalization (pt-BR and en-US)
- **next-themes** - Dark mode support
- **Nodemailer** - Email sending functionality

## Features

- 🌓 Dark mode toggle
- 🌍 Bilingual support (Portuguese and English)
- 🎨 Modern and responsive design
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first approach
- ⚡ Optimized performance with Next.js 16
- 📧 Contact form with email functionality

## Getting Started

First, install the dependencies:

```bash
npm install
```

### Configure Email (Required for Contact Form)

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. For Gmail:
   - Enable "2-Step Verification" on your Google Account
   - Generate an "App Password" at https://myaccount.google.com/apppasswords
   - Update `.env.local` with your email and app password:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password-here
   ```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── [locale]/         # Locale-specific pages
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/
│   ├── sections/         # Page sections (Hero, About, Skills, etc.)
│   └── ui/              # Reusable UI components
├── lib/
│   └── data.ts          # Static data (skills, projects, etc.)
├── messages/            # Translation files
│   ├── en.json         # English translations
│   └── pt.json         # Portuguese translations
└── public/             # Static assets
```

## Customization

To customize the portfolio with your own information:

1. Edit personal information in `messages/en.json` and `messages/pt.json`
2. Update skills and projects in `lib/data.ts`
3. Replace social links in `lib/data.ts`
4. Add your project images to `public/projects/`

## License

This project is open source and available under the MIT License.
