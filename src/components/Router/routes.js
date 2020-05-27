import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Movies from '../Pages/Movies/Movies';

const routes = [
{
    name: 'Home',
    path: '/',
    exact: true,
    component: Home
},
{
    name: 'About',
    path: '/About',
    exact: true,
    component: About
},
{
    name: 'Contact',
    path: '/Contact',
    exact: true,
    component: Contact
},
{
    name: 'Movies',
    path: '/Movies',
    exact: true,
    component: Movies
}
];

export default routes;