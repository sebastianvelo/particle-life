# Particle Life

**Particle Life** is an interactive game built with React, TypeScript, and Tailwind CSS using the HTML canvas. Configure the interactions between particles—whether they attract or repel—and enjoy the beautiful patterns that emerge!

---

## Features

- **Customizable Particle Interactions**: Choose if particles should attract or repel each other.
- **Mesmerizing Visuals**: Watch as dynamic, ever-changing patterns form on the canvas.
- **Modern UI**: Built with React and styled with Tailwind CSS for a sleek, responsive design.
- **High-Performance Rendering**: Utilizes HTML canvas for smooth animations and efficient rendering.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sebastianvelo/particle-life.git
   cd particle-life
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Application

Start the development server:

Using npm:

```bash
npm start
```

Or using yarn:

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create an optimized production build, run:

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

---

## Project Structure

```
particle-life/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── (React components)
│   ├── common/
│   │   └── (Canvas logic for particle animations)
│   ├── App.tsx
│   ├── index.tsx
│   └── styles/
│       └── (Tailwind CSS configurations and custom styles)
├── package.json
└── README.md
```

- **components/**: Contains all the React components.
- **canvas/**: Holds the logic to render and animate particles using HTML canvas.
- **styles/**: Includes Tailwind configuration and any custom CSS.

---

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and improved developer experience.
- **Tailwind CSS**: For rapid styling with utility-first CSS classes.
- **HTML Canvas**: For rendering the particle animations.

---

## Contributing

Contributions are welcome! If you have ideas for improvements or new features:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with a detailed explanation of your changes.

Please follow the existing coding style and include tests for any new features.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- Thanks to the open-source community for providing incredible tools and libraries.
- Inspired by interactive particle simulations and generative art.

Enjoy exploring **Particle Life** and have fun creating mesmerizing particle patterns!
