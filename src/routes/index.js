import Styleguide from '../views/Styleguide'
import Login from '../views/Login'

const routes = [
  {
    component: Styleguide,
    path: '/styleguide',
    exact: true,
  },
  {
    component: Login,
    path: '/login',
    exact: true,
  },
]

export default routes
