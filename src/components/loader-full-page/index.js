'use strict'

import React from 'react'
import Loading from 'react-loading'
import { string } from 'prop-types'
import style from './css/loader-full-page'

const LoaderFullPage = props => (
  <div className={style.loaderSection}>
    {`Carregando ${props.messageLoading}`}
    <Loading type='spinningBubbles' color='#37474f' delay={0} />
  </div>
)

LoaderFullPage.defaultProps = {
  messageLoading: ''
}

LoaderFullPage.propTypes = {
  messageLoading: string
}

export default LoaderFullPage