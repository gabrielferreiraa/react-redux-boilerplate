'use strict'

import { URL_API } from 'src/constants'
import axios from 'axios'

export const request = ({ method, url = URL_API, ...options }) => {
  return axios({
    method: method.toLowerCase(),
    url,
    ...options
  })
}
