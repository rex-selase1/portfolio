import css from "./css.png";
import html from "./html.jpg";
import javascript from "./JavaScript-Logo.png";
import react from "./react.jpg";
import nodejs from "./nodejs.png";
import mongo from "./mongo.jpg";
import devogel from "./devogel.png";
import tomato from "./tomato.png";
import expenseTracker from "./expense-tracker.png";
import loanCalculator from "./loan-calculator.png";
import quoteGenerator from "./Quote-generator.png";
import leanfolio from "./leanfolio.png";

export const assets = [
  css,
  html,
  javascript,
  react,
  nodejs,
  mongo,
  devogel,
  tomato,
  expenseTracker,
  loanCalculator,
  quoteGenerator,
  leanfolio,
];

export const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    image: expenseTracker,
    description:
      "An Expense Tracker that helps you keep track of your daily expenses and delete completed expenses. It takes in all expenses and give you the total amount you spent",
    languages: ["HTML /", " CSS /", "JavaScript"],
  },
  {
    id: 2,
    title: "Loan Calculator",
    image: loanCalculator,
    description:
      "This is an amazing App to help you calculate the amount you have to pay for a loan by taking in the value of loan taken,interest rate and duration of payment.",
    languages: ["HTML /", " CSS /", "JavaScript"],
  },
  {
    id: 3,
    title: "Tomato",
    image: tomato,
    description:
      "A beautiful place where you an order your favorite food and get it delivered to your home. It has the best food delivery service in the city and all your favorite desserts. contact us for more details",
    languages: ["React /", " JavaScript /", "NPM"],
  },
  {
    id: 4,
    title: "Devogel",
    image: devogel,
    description:
      "Devogel is an app that educates you on the birds. It has a variety of birds that you can learn about and see how beautiful they are and their way of life and how they migrate in different seasons.",
    languages: ["HTML/", " CSS/", "JavaScript"],
  },
  {
    id: 5,
    title: "Quote Generator",
    image: quoteGenerator,
    description:
      "This Quote Generator helps you to generate a random quote buy clicking a button. It fetches the quotes from an API endpoint using the fetch api. It also gives you the author of the quote.",
    languages: ["HTML /", " CSS /", "JavaScript"],
  },
  {
    id: 6,
    title: "Leanfolio",
    image: leanfolio,
    description:
      "This site contains everything you need to know about me and my skills. this is the current page you are on. You can contact me through the contact page in the footer section. love you",
    languages: ["HTML /", " CSS /", "JavaScript /"],
  },
];
