import genius from "../../images/Genius-game-image.png";
import keeper from "../../images/Keeper-app-image.png";
import tindog from "../../images/Tindog-image.png";
import blog from "../../images/Blog-image.png";
import todo from "../../images/Todo-image.png";

const projectInfo = [
  {
    id: 1,
    img: keeper,
    title: "Keeper",
    description: "Web application based on Google Keep. Developed with React.js and Material UI. This app was developed with the intention of learning the basic concepts of React.js, from creating functional components and controlled components to handling state with hooks. The animations and icons were added through Material UI to resemble Google Keep's design. This version of the app has the basic functionalities of creating new notes and deleting them, but it is in my plans to come back to it and add a few more features and a new design.",
    ghlink: "https://github.com/Andre-Gabos/keeper-app",
    wplink: "https://andre-gabos.github.io/keeper-app/index.html"
  },
  {
    id: 2,
    img: tindog,
    title: "Tindog",
    description: "This project is a responsive landing page model for a fictitious app, developed using only HTML, CSS and Bootstrap. Along with Bootstrap, Media queries were used to make the image elements and the position of the main title of the site responsive.",
    ghlink: "https://github.com/Andre-Gabos/Tindog",
    wplink: "https://vigilant-hypatia-60b5c2.netlify.app/"
  },
  {
    id: 3,
    img: blog,
    title: "Blog Website",
    description: "As a representation for a personal blog, this app has a Contact page and About page to hold the owner's information, along with the Home page where all the blog posts go. All the posts in the Home page are cut to a preview and have their own page that can be accessed through their respectives 'read more' links. New posts can be written in a hidden page, that can be accessed by adding '/compose' to the home URL.",
    ghlink: "https://github.com/Andre-Gabos/blog-website",
    wplink: "https://blog-website3.herokuapp.com/"
  },
  {
    id: 4,
    img: todo,
    title: "ToDo List",
    description: "First version of a task manager web application, written using JavaScript and Node.js (with EJS, Express and MongoDB). This app was developed with the intent to learn how to use Node.js, Express and MongoDB to create a back-end that can contain all of the functionality of the app.",
    ghlink: "https://github.com/Andre-Gabos/todo-list",
    wplink: "https://damp-savannah-34685.herokuapp.com/"
  },
  {
    id: 5,
    img: genius,
    title: "Genius Game",
    description: "Small project that reproduces the Genius game, of colors, sounds and memory. It was created to study the implementation of sound and animations through JavaScript, CSS and HTML, and learn the functionalities of JQuery. Press any key to start and use the mouse to select the colors in the right order, as the game dictates. If you get it right you pass to the next level, if not you have to start over. A color / sound is added at the end of the sequence per level.",
    ghlink: "https://github.com/Andre-Gabos/genius-game",
    wplink: "https://musing-lalande-b73961.netlify.app/"
  }
]

export default projectInfo;