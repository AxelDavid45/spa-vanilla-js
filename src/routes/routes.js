//Import all the files
import Header from "../templates/Header";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import resolveRoute from "../utils/resolveRoute";
import getHash from "../utils/getHash";

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

//Define
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let routeRequested = await resolveRoute(hash);
    let routeToBeRendered = routes[routeRequested] ? routes[routeRequested] : Error404;
    content.innerHTML = await routeToBeRendered();
};

export default router;
