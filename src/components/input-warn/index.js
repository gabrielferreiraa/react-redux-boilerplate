'use strict'

import React from 'react'
import Icon from 'components/icon'
import style from './css/input-warn'

const InputWarn = ({ warn }) => {
  return (
    <div className={style.info}>
      <Icon className={`${style.icon} fa fa-info-circle`} />
      <ul className={style.list}>
        {warn.map((v, index) => <li key={index}>{v}</li>)}
      </ul>
    </div>
  )
}

export default InputWarn
