'use strict'

import { toastr } from 'react-redux-toastr'
// import 'modules/react-redux-toastr/lib/css/react-redux-toastr.min'

export function success (text) {
  toastr.success('Sucesso', text)
}

export function error (text) {
  toastr.error('Erro', text)
}
