// Paginas
import Home from 'containers/Site'
import About from 'containers/about'
import CardsView from 'containers/Cards'
import TablesView from 'containers/Tables'
import LabelsView from 'containers/Labels'
import StudioView from 'containers/Studio'
import LoginView from 'containers/Auth'

var routes = [
  {
    path: "/",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/about-us",
    name: "About",
    icon: "ni ni-tv-2 text-primary",
    component: About,
    layout: "/admin"
  },
  {
    path: "/components/cards",
    name: "Cards",
    icon: "ni ni-tv-2 text-primary",
    component: CardsView,
    layout: "/admin"
  },
  {
    path: "/components/tables",
    name: "Tables",
    icon: "ni ni-tv-2 text-primary",
    component: TablesView,
    layout: "/admin"
  },
  {
    path: "/components/labels",
    name: "Labels",
    icon: "ni ni-tv-2 text-primary",
    component: LabelsView,
    layout: "/admin"
  },
  {
    path: "/studio/:id",
    name: "Studio",
    icon: "ni ni-tv-2 text-primary",
    component: StudioView,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-tv-2 text-primary",
    component: LoginView,
    layout: "/admin"
  },
];

export default routes;