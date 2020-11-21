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
import TemposLocal from '../views/TemposLocal'
import TemposLocalNovo from '../views/TemposLocalNovo'
import TemposLocalEdicao from '../views/TemposLocalEdicao'
import StatusSemaforo from '../views/StatusSemaforo'
import StatusSemaforoNovo from '../views/StatusSemaforoNovo'
import StatusSemaforoEdicao from '../views/StatusSemaforoEdicao'

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
  {
    component: TemposLocal,
    path: '/tempos-local',
    exact: true,
    admin: true,
    pageName: 'Tempo do local',
  },
  {
    component: TemposLocalNovo,
    path: '/tempos-local/novo',
    exact: true,
    admin: true,
    pageName: 'Tempo do local - Criação',
  },
  {
    component: TemposLocalEdicao,
    path: '/tempos-local/:id',
    exact: true,
    admin: true,
    pageName: 'Tempo do local - Edição',
  },
  {
    component: StatusSemaforo,
    path: '/status-semaforo',
    exact: true,
    admin: true,
    pageName: 'Status do semáforo',
  },
  {
    component: StatusSemaforoNovo,
    path: '/status-semaforo/novo',
    exact: true,
    admin: true,
    pageName: 'Status do semáforo - Criação',
  },
  {
    component: StatusSemaforoEdicao,
    path: '/status-semaforo/:id',
    exact: true,
    admin: true,
    pageName: 'Status do semáforo - Edição',
  },
]

export default routes
