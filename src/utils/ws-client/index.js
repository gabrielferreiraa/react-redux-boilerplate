'use strict'

import axios from 'axios'

export const request = ({ method, url, ...options }) => axios[method.toLowerCase()](url)
