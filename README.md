# Ali AbdElbagi - Personal Portfolio & Blog

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-purple)
![Contentful](https://img.shields.io/badge/Contentful-CMS-green)

A modern, responsive personal portfolio and blog website built with React, TypeScript, and Tailwind CSS, featuring content management through Contentful.

## 🚀 Live Demo

[Visit Website](https://ali007-depug/Ali-AbdElbagi) • [Portfolio](https://ali007-depug/Ali-AbdElbagi) • [Blog](https://ali007-depug/Ali-AbdElbagi/blog)

## ✨ Features

### 🎯 Portfolio Section
- **About Me**: Personal introduction and background
- **Skills & Expertise**: Technical skills and competencies display
- **Projects Showcase**: Featured projects with descriptions and links
- **Contact Information**: Multiple ways to get in touch

### 📝 Blog System
- **Article Listing**: Clean, paginated blog post display
- **Tag Filtering**: Browse articles by categories and tags
- **Individual Post Pages**: Full article reading experience
- **Responsive Design**: Optimized for all device sizes
- **Arabic Language Support**: RTL layout compatibility

### 🛠 Technical Features
- **TypeScript**: Full type safety and better development experience
- **React Query**: Efficient data fetching and caching
- **Contentful CMS**: Headless content management
- **Tailwind CSS**: Utility-first styling framework
- **React Router**: Client-side routing
- **Responsive Design**: Mobile-first approach

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Loading.tsx     # Loading spinner component
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useBlogs.ts     # Hook for fetching all blogs
│   ├── useBlogPost.ts  # Hook for single blog post
│   └── useTags.ts      # Hook for tag-filtered posts
├── lib/                # Utility libraries
│   └── contentful.ts   # Contentful client configuration
├── pages/              # Main page components
│   ├── BlogPost.tsx    # Individual blog post page
│   ├── MyBlog.tsx      # Main blog listing page
│   └── PostsTags.tsx   # Tag-filtered posts page
└── App.tsx             # Main application component
```

## 📄 Pages Overview

### `/` - Home/Portfolio
- Personal introduction
- Skills and experience
- Project portfolio
- Contact information

### `/blog` - Blog Listing
- Grid of all blog posts
- Search and filter functionality
- Tag cloud sidebar
- Responsive card layout

### `/blog/:uniqueUrl` - Blog Post
- Individual article view
- Related posts suggestions
- Social sharing options
- Comments section

### `/blog/tags/:tag` - Tag Filter
- Posts filtered by specific tag
- Tag count display
- Breadcrumb navigation

## 🛠 Custom Hooks

### `useBlogs()`
Fetches all blog posts with automatic caching and error handling.

### `useBlogPost(uniqueUrl: string)`
Fetches a single blog post by its unique URL slug.

### `usePostsWithTags(tag: string)`
Fetches posts filtered by a specific tag with React Query caching.

## 🎯 Key Components

### `Loading`
- Reusable loading spinner
- Consistent loading states across the app

### `MyBlog`
- Main blog listing page
- Implements tag filtering and search
- Responsive grid layout

### `BlogPost`
- Individual post display
- Handles media and content rendering
- Navigation controls

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be modified in `tailwind.config.js`.

### Contentful
Contentful client is configured in `src/lib/contentful.ts` with TypeScript types for content models.

## 📊 Performance Features

- **React Query**: Intelligent caching and background updates
- **Code Splitting**: Lazy-loaded components for better performance
- **Image Optimization**: Responsive images with lazy loading
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Ali AbdElbagi - [GitHub](https://github.com/ali007-depug) - [Email](mailto:aliroma849@gmail.com)

Project Link: [https://github.com/ali007-depug/Ali-AbdElbagi](https://github.com/ali007-depug/Ali-AbdElbagi)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentful](https://www.contentful.com/)
- [React Query](https://tanstack.com/query)
- [React Router](https://reactrouter.com/)

---
