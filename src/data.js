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
      route: '',
      parent: true,
      children: [
        {
          id: 3,
          text: 'Listar',
          icon: '',
          route: '/participantes',
          parent: false
        }, {
          id: 4,
          text: 'Cadastrar',
          icon: '',
          route: '/participantes/novo',
          parent: false
        }, {
          id: 5,
          text: 'Editar',
          icon: '',
          route: '/participantes/editar/2',
          parent: false
        }
      ]
    }
  ]
}

export default data
