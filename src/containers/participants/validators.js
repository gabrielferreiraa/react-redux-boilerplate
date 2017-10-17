'use strict'

import { required, number, minValue } from 'utils/validators'

const validators = {
  age: {
    errors: [required, number, minValue(20)]
  }
}

export default validators
