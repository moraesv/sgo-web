import Styleguide from '../views/Styleguide'
import Login from '../views/Login'
import Avisos from '../views/Avisos'

const routes = [
  {
    component: Styleguide,
    path: '/styleguide',
    exact: true,
    hideLayout: true,
    pageName: 'Styleguide',
  },
  {
    component: Login,
    path: '/login',
    exact: true,
    hideLayout: true,
    pageName: 'Login',
  },
  {
    component: Avisos,
    path: '/avisos',
    exact: true,
    pageName: 'Avisos',
  },
]

export default routes
