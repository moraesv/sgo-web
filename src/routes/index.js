import Styleguide from '../views/Styleguide'
import Login from '../views/Login'
import Avisos from '../views/Avisos'
import Cadastros from '../views/Cadastros'
import Perfil from '../views/Perfil'
import Registros from '../views/Registros'
import Relatorios from '../views/Relatorios'
import Oficiais from '../views/Oficiais'

const routes = [
  {
    component: Styleguide,
    path: '/styleguide',
    exact: true,
    admin: false,
    pageName: 'Styleguide',
  },
  {
    component: Login,
    path: '/login',
    exact: true,
    admin: false,
    pageName: 'Login',
  },
  {
    component: Avisos,
    path: '/avisos',
    exact: true,
    admin: true,
    pageName: 'Avisos',
  },
  {
    component: Cadastros,
    path: '/cadastros',
    exact: true,
    admin: true,
    pageName: 'Cadastros',
  },
  {
    component: Registros,
    path: '/registros',
    exact: true,
    admin: true,
    pageName: 'Registros',
  },
  {
    component: Relatorios,
    path: '/relatorios',
    exact: true,
    admin: true,
    pageName: 'Relatórios',
  },
  {
    component: Perfil,
    path: '/perfil',
    exact: true,
    admin: true,
    pageName: 'Perfil',
  },
  {
    component: Oficiais,
    path: '/oficiais',
    exact: true,
    admin: true,
    pageName: 'Oficial',
  },
]

export default routes
