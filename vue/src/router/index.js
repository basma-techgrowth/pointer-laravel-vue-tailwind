import { createRouter, createWebHistory, routerKey } from "vue-router";
import Directory from "../views/Directory.vue"
import Wizard from "../views/Wizard.vue"
import IntroMenu from "../views/IntroMenu.vue"
import AboutApp from "../views/AboutApp.vue"
import AboutOrg from "../views/AboutOrg.vue"
import ContactUs from "../views/ContactUs.vue"
const routes = [
  {
    path: "/",
    name:"IntroMenu",
    component: IntroMenu
  },
  {
    path: "/directory",
    name:"Directory",
    component: Directory
  },
  {
    path: "/wizard",
    name:"Wizard",
    component: Wizard
  },
  {
    path: "/about-pointer",
    name:"AboutApp",
    component: AboutApp
  },
  {
    path: "/about-org",
    name:"AboutOrg",
    component: AboutOrg
  },
  {
    path: "/contact-us",
    name:"ContactUs",
    component: ContactUs
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;