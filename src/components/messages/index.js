'use strict'

import { toastr } from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export function success (text, title = 'Sucesso') {
  toastr.success(title, text)
}

export function error (text, title = 'Erro') {
  toastr.error(title, text)
}

export function info (text, title = 'Aviso') {
  toastr.info(title, text)
}

export function warning (text, title = 'Atenção') {
  toastr.info(title, text)
}
