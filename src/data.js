'use strict'

const data = {
  menus: [
    {
      id: 1,
      text: 'Dashboard',
      icon: 'icon-speedometer',
      route: '/dashboard',
      parent: false
    }, {
      id: 2,
      text: 'Participantes',
      icon: 'icon-user',
      route: '/participantes',
      parent: false
    }, {
      id: 4,
      text: 'Informacoes',
      icon: 'icon-phone',
      route: '',
      parent: true,
      children: [
        {
          id: 1,
          text: 'Cadastrar Participante',
          icon: 'icon-user',
          route: '/participantes/novo',
          parent: false
        }, {
          id: 1,
          text: 'Editar Participante',
          icon: 'icon-user',
          route: '/participantes/editar/2',
          parent: false
        }
      ]
    }
  ]
}

export default data
