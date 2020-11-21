import Styleguide from '../views/Styleguide'
import Login from '../views/Login'
import Avisos from '../views/Avisos'
import Cadastros from '../views/Cadastros'
import Perfil from '../views/Perfil'
import Registros from '../views/Registros'
import Relatorios from '../views/Relatorios'
import Oficiais from '../views/Oficiais'
import OficiaisNovo from '../views/OficiaisNovo'
import OficiaisEdicao from '../views/OficiaisEdicao'
import CaracteristicasLocal from '../views/CaracteristicasLocal'
import CaracteristicasLocalNovo from '../views/CaracteristicasLocalNovo'
import CaracteristicasLocalEdicao from '../views/CaracteristicasLocalEdicao'
import IluminacoesLocal from '../views/IluminacoesLocal'
import IluminacoesLocalNovo from '../views/IluminacoesLocalNovo'
import IluminacoesLocalEdicao from '../views/IluminacoesLocalEdicao'

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
  {
    component: OficiaisNovo,
    path: '/oficiais/novo',
    exact: true,
    admin: true,
    pageName: 'Oficial - Criação',
  },
  {
    component: OficiaisEdicao,
    path: '/oficiais/:id',
    exact: true,
    admin: true,
    pageName: 'Oficial - Edição',
  },
  {
    component: CaracteristicasLocal,
    path: '/caracteristicas-local',
    exact: true,
    admin: true,
    pageName: 'Características do local',
  },
  {
    component: CaracteristicasLocalNovo,
    path: '/caracteristicas-local/novo',
    exact: true,
    admin: true,
    pageName: 'Características do local - Criação',
  },
  {
    component: CaracteristicasLocalEdicao,
    path: '/caracteristicas-local/:id',
    exact: true,
    admin: true,
    pageName: 'Características do local - Edição',
  },
  {
    component: IluminacoesLocal,
    path: '/iluminacoes-local',
    exact: true,
    admin: true,
    pageName: 'Iluminação do local',
  },
  {
    component: IluminacoesLocalNovo,
    path: '/iluminacoes-local/novo',
    exact: true,
    admin: true,
    pageName: 'Iluminação do local - Criação',
  },
  {
    component: IluminacoesLocalEdicao,
    path: '/iluminacoes-local/:id',
    exact: true,
    admin: true,
    pageName: 'Iluminação do local - Edição',
  },
]

export default routes
