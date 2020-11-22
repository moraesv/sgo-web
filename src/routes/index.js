import Styleguide from '../views/Styleguide'
import Login from '../views/Login'
import AvisosDash from '../views/AvisosDash'
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
import FormasSinalizacao from '../views/FormasSinalizacao'
import FormasSinalizacaoNovo from '../views/FormasSinalizacaoNovo'
import FormasSinalizacaoEdicao from '../views/FormasSinalizacaoEdicao'
import TiposAcidente from '../views/TiposAcidente'
import TiposAcidenteNovo from '../views/TiposAcidenteNovo'
import TiposAcidenteEdicao from '../views/TiposAcidenteEdicao'
import TiposPista from '../views/TiposPista'
import TiposPistaNovo from '../views/TiposPistaNovo'
import TiposPistaEdicao from '../views/TiposPistaEdicao'
import Avisos from '../views/Avisos'
import AvisosNovo from '../views/AvisosNovo'
import AvisosEdicao from '../views/AvisosEdicao'
import Atendimentos from '../views/Atendimentos'
import AtendimentosNovo from '../views/AtendimentosNovo'
import AtendimentosEdicao from '../views/AtendimentosEdicao'

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
    component: AvisosDash,
    path: '/avisos-home',
    exact: true,
    admin: true,
    pageName: 'AvisosDash',
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
  {
    component: FormasSinalizacao,
    path: '/formas-sinalizacao',
    exact: true,
    admin: true,
    pageName: 'Formas de sinalização',
  },
  {
    component: FormasSinalizacaoNovo,
    path: '/formas-sinalizacao/novo',
    exact: true,
    admin: true,
    pageName: 'Formas de sinalização - Criação',
  },
  {
    component: FormasSinalizacaoEdicao,
    path: '/formas-sinalizacao/:id',
    exact: true,
    admin: true,
    pageName: 'Formas de sinalização - Edição',
  },
  {
    component: TiposAcidente,
    path: '/tipos-acidente',
    exact: true,
    admin: true,
    pageName: 'Tipos de acidente',
  },
  {
    component: TiposAcidenteNovo,
    path: '/tipos-acidente/novo',
    exact: true,
    admin: true,
    pageName: 'Tipos de acidente - Criação',
  },
  {
    component: TiposAcidenteEdicao,
    path: '/tipos-acidente/:id',
    exact: true,
    admin: true,
    pageName: 'Tipos de acidente - Edição',
  },
  {
    component: TiposPista,
    path: '/tipos-pista',
    exact: true,
    admin: true,
    pageName: 'Tipos de pista',
  },
  {
    component: TiposPistaNovo,
    path: '/tipos-pista/novo',
    exact: true,
    admin: true,
    pageName: 'Tipos de pista - Criação',
  },
  {
    component: TiposPistaEdicao,
    path: '/tipos-pista/:id',
    exact: true,
    admin: true,
    pageName: 'Tipos de pista - Edição',
  },
  {
    component: Avisos,
    path: '/avisos',
    exact: true,
    admin: true,
    pageName: 'Avisos',
  },
  {
    component: AvisosNovo,
    path: '/avisos/novo',
    exact: true,
    admin: true,
    pageName: 'Avisos - Criação',
  },
  {
    component: AvisosEdicao,
    path: '/avisos/:id',
    exact: true,
    admin: true,
    pageName: 'Avisos - Edição',
  },
  {
    component: Atendimentos,
    path: '/atendimentos',
    exact: true,
    admin: true,
    pageName: 'Atendimentos',
  },
  {
    component: AtendimentosNovo,
    path: '/atendimentos/novo',
    exact: true,
    admin: true,
    pageName: 'Atendimentos - Criação',
  },
  {
    component: AtendimentosEdicao,
    path: '/atendimentos/:id',
    exact: true,
    admin: true,
    pageName: 'Atendimentos - Edição',
  },
]

export default routes
