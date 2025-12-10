import { NavBar } from "./components/NavBar.js";
import { Hero } from "./components/Hero.js";
import { Stats } from "./components/Stats.js";
import { Flow } from "./components/Flow.js";
import { Faq } from "./components/Faq.js";
import { CtaStrip } from "./components/CtaStrip.js";
import { Footer } from "./components/Footer.js";

const app = document.getElementById("app");

const render = () => {
  app.innerHTML = [
    NavBar(),
    Hero(),
    Stats(),
    Flow(),
    Faq(),
    CtaStrip(),
    Footer()
  ].join("");
};

render();

