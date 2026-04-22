# Monstarlab - Mobile App Development Agency

A modern, dark-mode marketing website for Monstarlab, a mobile app development agency serving startups and SMBs in Singapore and Malaysia.

## 🚀 Features

- **Hero Section** - Eye-catching gradient hero with compelling value proposition
- **Services/Features** - 6 feature cards showcasing iOS, Android, Web Apps, PWA capabilities
- **How It Works** - 4-step numbered process diagram with gradient connectors
- **Tech Stack** - Interactive logo grid of 12+ technologies
- **Pricing** - 3-tier pricing table with feature comparison (Starter, Professional, Enterprise)
- **Contact Form** - Working mailto: form with email integration
- **Dark Mode** - Beautiful dark theme with gradient accents
- **Fully Responsive** - Mobile-first design with Tailwind breakpoints

## 🛠 Tech Stack

- **Framework**: Next.js 13.5 (App Router)
- **UI Components**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS with custom dark theme
- **Typography**: Inter (sans-serif) + JetBrains Mono (monospace)
- **Icons**: Emoji-based for better performance
- **Images**: Next.js Image component with Unsplash

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles with dark theme variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main landing page
├── components/
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── siteContent.ts        # All website content (typed)
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## 🎨 Design Features

- **Dark Mode**: Sophisticated dark theme with HSL color system
- **Gradient Accents**: Purple/primary gradient overlays
- **Monospace Accents**: JetBrains Mono for numbers and tech names
- **Smooth Animations**: Hover effects, transitions, and scroll behavior
- **Shadow Effects**: Layered shadows for depth

## 📝 Content Management

All content is centralized in `lib/siteContent.ts` with TypeScript type safety:

```typescript
import { siteContent } from '@/lib/siteContent';
```

Content sections:
- `metadata` - SEO metadata
- `hero` - Hero section content
- `features` - Service features
- `howItWorks` - Process steps
- `techStack` - Technology logos
- `pricing` - Pricing tiers
- `demo` - CTA section
- `contact` - Contact form
- `footer` - Footer content

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## 📧 Contact Configuration

The contact form uses `mailto:` protocol:
- **Email**: hello@monstarlab.com
- **Locations**: Singapore, Malaysia

## 🎯 Target Audience

- **Primary**: Startups in Singapore & Malaysia
- **Secondary**: SMBs looking for mobile app development
- **Services**: iOS, Android, Web Apps, PWA development

## 📄 License

© 2024 Monstarlab. All rights reserved.
