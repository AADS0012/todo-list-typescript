# Modern To-Do List Application

A beautifully crafted, fully responsive to-do list web application built with pure HTML, CSS, and JavaScript (Created with TypeScript and compiled in JavaScript) in parsian lang(FA). This project demonstrates modern UI/UX principles with smooth animations, dark/light theme support, and a clean, intuitive interface — all without any external libraries or frameworks.

## ✨ Features

- **Dual Theme Support** – Toggle seamlessly between Light and Dark modes with persistent storage (saves your preference in localStorage)
- **Fully Responsive** – Optimized for all screen sizes from mobile phones to desktop monitors
- **Task Management** – Add, complete, and delete tasks with smooth animations
- **Task Counter** – Real-time count of total tasks and completed ones
- **Clean & Modern UI** – Glass-morphism inspired design with gradient accents and subtle shadows
- **Keyboard Friendly** – Press Enter to quickly add new tasks
- **No Dependencies** – Pure vanilla implementation with zero third-party libraries
- **Accessible** – Proper ARIA labels and keyboard navigation support

## 🚀 Live Demo

You can use the application directly by opening the `index.html` file in any modern browser. No build tools or server required.

## 🛠️ Technologies Used

- **HTML5** – Semantic markup for accessibility and structure
- **CSS3** – Custom properties (CSS variables), Flexbox, Grid, animations, transitions, and media queries
- **JavaScript (ES6)** – DOM manipulation, event delegation, state management, and theme persistence
- **TypeScript 7**

## 🎨 Design Highlights

- Custom CSS variables for easy theming and maintainability
- Smooth transitions and micro-interactions (hover effects, task pop animations, scale transforms)
- Gradient text for the main heading
- Custom scrollbar styling
- Glass-like card design with subtle borders and shadows
- Intuitive checkbox replacement with animated toggles

## 📱 Responsive Breakpoints

- **Desktop** – Full-width layout with comfortable padding
- **Tablet** – Adjusted spacing and font sizes
- **Mobile** – Stacked form layout, smaller touch targets, optimized typography

## 🧩 Core Functionality

| Feature | Description |
|---------|-------------|
| Add Task | Input field with "Add" button and Enter key support |
| Complete Task | Click on the circular checkbox to toggle completion status |
| Delete Task | Individual delete buttons with hover effects |
| Clear All | Single button to remove all tasks (with confirmation dialog) |
| Theme Toggle | Switch between Light and Dark modes instantly |
| Persistence | Theme preference saved in browser's localStorage |

## 💻 How to Use

1. **Clone or download** this repository
2. Open `index.html` in your preferred web browser
3. Start adding tasks immediately – no setup required!

## 🔧 Customization

You can easily customize the application by modifying CSS variables in the `:root` selector:

```css
:root {
  --bg: #f4f6fb;           /* Background color */
  --surface: #ffffff;      /* Card background */
  --accent: #6c5ce7;       /* Primary accent color */
  --radius: 24px;          /* Border radius */
  --transition: 0.3s;      /* Animation duration */
}
```

Dark theme variables are defined under [data-theme="dark"] selector.

## 📦 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🤝 Contributing
This is a personal project for learning purposes, but suggestions and improvements are always welcome. Feel free to fork and customize!

## 📝 License
MIT License – feel free to use, modify, and distribute this project.

## 🙌 Acknowledgments
- Inspired by modern UI trends and minimalist design principles
- Built as a showcase for pure front-end skills without frameworks
- Special attention to accessibility and user experience

Made with ❤️ using HTML, CSS & TypeScript (JavaScript)
