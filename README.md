# Video Bundle Landing Page

A dark-themed, responsive landing page built with Next.js (App Router) and Tailwind CSS for selling a premium video bundle. Features a modern design with countdown timer, pricing plans, testimonials, and smooth animations.

## 🚀 Features

- **Modern Dark Theme**: Eye-catching dark design with purple/pink gradient accents
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Hero Section**: Compelling hero with statistics and call-to-action buttons
- **Pricing Plans**: Three-tier pricing structure (Starter, Professional, Enterprise)
- **Countdown Timer**: Live countdown timer for limited-time offers
- **Testimonials**: Social proof section with customer reviews
- **Shopify Integration**: Placeholder links for Shopify checkout
- **Fast Performance**: Built with Next.js 16 for optimal performance
- **Tailwind CSS**: Utility-first CSS for easy customization

## 📦 Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/afflictedvivek/video-bundle-landing.git
cd video-bundle-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📝 Customization

### Update Shopify Checkout Links

In `app/page.jsx`, update the placeholder Shopify URLs:

```jsx
// Line ~120, ~170, ~220
onClick={() => window.location.href = 'https://checkout.shopify.com/your-store/starter-plan'}
```

### Modify Countdown Timer

Adjust the countdown duration in `app/page.jsx`:

```jsx
// Line 10
countdownDate.setDate(countdownDate.getDate() + 7); // Change 7 to desired days
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

## 📂 Project Structure

```
video-bundle-landing/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.jsx           # Root layout component
│   └── page.jsx             # Main landing page
├── components/
│   ├── Button.jsx           # Reusable button component
│   ├── Card.jsx             # Card wrapper component
│   ├── CardContent.jsx      # Card content component
│   └── Countdown.jsx        # Countdown timer component
├── public/                  # Static assets
├── .eslintrc.json          # ESLint configuration
├── jsconfig.json           # JavaScript configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vercel.json             # Vercel deployment configuration
```

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Quick Deploy

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Click "Deploy"

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📸 Screenshots

### Desktop View
![Desktop View](https://github.com/user-attachments/assets/344b0b36-8d39-4ab5-a399-2a73a05a38ca)

### Mobile View
![Mobile View](https://github.com/user-attachments/assets/7be4327a-d25c-4548-8e65-e1addf991094)

## 🎨 Key Sections

- **Hero**: Engaging headline with clear value proposition
- **Pricing**: Three pricing tiers with feature comparison
- **Testimonials**: Customer reviews with ratings
- **Countdown**: Urgency-creating countdown timer
- **CTA**: Final call-to-action with trust badges
- **Footer**: Links and copyright information

## 💡 Tips

- Update testimonials with real customer feedback
- Replace placeholder Shopify links with actual checkout URLs
- Customize the copy to match your brand voice
- Add analytics tracking (Google Analytics, etc.)
- Set up proper SEO metadata
- Add your logo and brand assets

---

Built with ❤️ using Next.js and Tailwind CSS
