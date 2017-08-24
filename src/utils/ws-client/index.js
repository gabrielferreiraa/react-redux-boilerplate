'use strict'

import { URL_API } from 'src/constants'
import axios from 'axios'

export const request = ({ method, ...options }) => axios[method.toLowerCase()](URL_API)
