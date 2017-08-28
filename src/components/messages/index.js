'use strict'

import { toastr } from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export function success (text) {
  toastr.success('Sucesso', text)
}

export function error (text) {
  toastr.error('Erro', text)
}

export function info (text) {
  toastr.info('Info', text)
}

export function warning (text) {
  toastr.info('Atenção', text)
}
