db = db.getSiblingDB('toysRUs')

db.games.insertMany([
  // BABIES Category
  {
    "name": "Soft Stacking Rings",
    "description": "Colorful fabric rings that can be stacked on a soft cone base. Perfect for developing motor skills.",
    "ProducedAt": new Date("2023-01-15"),
    "price": 14.99,
    "isRecycled": true,
    "category": "Babies"
  },
  {
    "name": "Baby's First Puzzle",
    "description": "Simple 3-piece wooden puzzles with large, easy-to-grasp pieces showing animals.",
    "ProducedAt": new Date("2023-03-22"),
    "price": 9.99,
    "isRecycled": true,
    "category": "Babies"
  },
  {
    "name": "Water Play Mat",
    "description": "Inflatable water mat with floating toys inside for tummy time entertainment.",
    "ProducedAt": new Date("2023-05-10"),
    "price": 19.99,
    "isRecycled": false,
    "category": "Babies"
  },
  {
    "name": "Musical Plush Toy",
    "description": "Soft plush animal that plays gentle lullabies when squeezed.",
    "ProducedAt": new Date("2023-02-28"),
    "price": 16.99,
    "isRecycled": false,
    "category": "Babies"
  },
  {
    "name": "Bath Book Set",
    "description": "Set of 3 waterproof fabric books with high-contrast images for bath time learning.",
    "ProducedAt": new Date("2023-04-05"),
    "price": 12.99,
    "isRecycled": true,
    "category": "Babies"
  },

  // KIDS Category
  {
    "name": "Junior Building Blocks",
    "description": "Set of 100 colorful interlocking blocks for creative construction play.",
    "ProducedAt": new Date("2023-01-10"),
    "price": 24.99,
    "isRecycled": true,
    "category": "Kids"
  },
  {
    "name": "Dinosaur Excavation Kit",
    "description": "Dig out and assemble a dinosaur skeleton from a plaster block.",
    "ProducedAt": new Date("2023-03-15"),
    "price": 18.99,
    "isRecycled": false,
    "category": "Kids"
  },
  {
    "name": "Magnetic Drawing Board",
    "description": "Reusable drawing surface with magnetic pen and shape stamps.",
    "ProducedAt": new Date("2023-02-20"),
    "price": 15.99,
    "isRecycled": true,
    "category": "Kids"
  },
  {
    "name": "Junior Science Kit",
    "description": "10 simple science experiments with safe materials for young scientists.",
    "ProducedAt": new Date("2023-04-12"),
    "price": 29.99,
    "isRecycled": false,
    "category": "Kids"
  },
  {
    "name": "Animal Dominoes",
    "description": "Wooden dominoes featuring colorful animal illustrations.",
    "ProducedAt": new Date("2023-05-25"),
    "price": 14.99,
    "isRecycled": true,
    "category": "Kids"
  },

  // TEENS Category
  {
    "name": "Strategic Board Game",
    "description": "Complex strategy game that develops critical thinking and planning skills.",
    "ProducedAt": new Date("2023-01-05"),
    "price": 34.99,
    "isRecycled": false,
    "category": "Teens"
  },
  {
    "name": "DIY Robot Kit",
    "description": "Build and program your own robot with modular components.",
    "ProducedAt": new Date("2023-03-08"),
    "price": 49.99,
    "isRecycled": true,
    "category": "Teens"
  },
  {
    "name": "Mystery Puzzle Box",
    "description": "Series of interconnected puzzles that must be solved to open the box.",
    "ProducedAt": new Date("2023-02-15"),
    "price": 27.99,
    "isRecycled": false,
    "category": "Teens"
  },
  {
    "name": "Advanced Art Set",
    "description": "Complete art supplies kit with watercolors, acrylics, pastels, and more.",
    "ProducedAt": new Date("2023-04-20"),
    "price": 39.99,
    "isRecycled": true,
    "category": "Teens"
  },
  {
    "name": "Virtual Reality Headset",
    "description": "Entry-level VR headset compatible with most smartphones.",
    "ProducedAt": new Date("2023-05-18"),
    "price": 59.99,
    "isRecycled": false,
    "category": "Teens"
  },

  // ADULTS Category
  {
    "name": "Expert Puzzle - Night Sky",
    "description": "1000-piece puzzle featuring a detailed night sky constellation map.",
    "ProducedAt": new Date("2023-01-25"),
    "price": 24.99,
    "isRecycled": true,
    "category": "Adults"
  },
  {
    "name": "Strategy Card Game",
    "description": "Competitive deck-building card game with multiple expansion sets.",
    "ProducedAt": new Date("2023-03-12"),
    "price": 32.99,
    "isRecycled": false,
    "category": "Adults"
  },
  {
    "name": "DIY Terrarium Kit",
    "description": "Complete kit to build and maintain a self-contained ecosystem.",
    "ProducedAt": new Date("2023-02-08"),
    "price": 44.99,
    "isRecycled": true,
    "category": "Adults"
  },
  {
    "name": "Escape Room Game Box",
    "description": "At-home escape room experience with multiple puzzles and challenges.",
    "ProducedAt": new Date("2023-04-02"),
    "price": 29.99,
    "isRecycled": false,
    "category": "Adults"
  },
  {
    "name": "Advanced 3D Wooden Puzzle",
    "description": "Intricate mechanical wooden model that assembles into a working contraption.",
    "ProducedAt": new Date("2023-05-15"),
    "price": 36.99,
    "isRecycled": true,
    "category": "Adults"
  },

  // ELDER Category
  {
    "name": "Memory Improvement Cards",
    "description": "Card game specifically designed to exercise memory and cognitive skills.",
    "ProducedAt": new Date("2023-01-18"),
    "price": 19.99,
    "isRecycled": true,
    "category": "Elder"
  },
  {
    "name": "Large Print Classic Games",
    "description": "Collection of classic board games with large print cards and pieces.",
    "ProducedAt": new Date("2023-03-25"),
    "price": 34.99,
    "isRecycled": false,
    "category": "Elder"
  },
  {
    "name": "Therapeutic Puzzle Set",
    "description": "Set of 5 wooden puzzles of varying difficulties to maintain dexterity.",
    "ProducedAt": new Date("2023-02-12"),
    "price": 29.99,
    "isRecycled": true,
    "category": "Elder"
  },
  {
    "name": "Digital Jigsaw Tablet",
    "description": "Specialized tablet loaded with digital jigsaw puzzles of adjustable difficulty.",
    "ProducedAt": new Date("2023-04-08"),
    "price": 89.99,
    "isRecycled": false,
    "category": "Elder"
  },
  {
    "name": "Reminiscence Card Game",
    "description": "Card game that promotes storytelling and reminiscing about past experiences.",
    "ProducedAt": new Date("2023-05-20"),
    "price": 22.99,
    "isRecycled": true,
    "category": "Elder"
  }
])