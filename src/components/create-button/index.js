'use strict'

import React from 'react'
import Icon from 'components/icon'
import style from './css/create-button'
import { Link } from 'react-router-dom'

const CreateButton = ({ route }) => (
  <div>
    <Link to={`/${route}/novo`}>
      <button type='button' className={`btn btn-success ${style.addBtn}`}>
        <Icon className='fa fa-plus-circle' /> Criar
      </button>
    </Link>
  </div>
)

export default CreateButton
