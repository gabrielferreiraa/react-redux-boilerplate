'use strict'

import React from 'react'
import ReduxToastr from 'react-redux-toastr'

const Messages = props => (
  <ReduxToastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates
    position='top-right'
    transitionIn='fadeIn'
    transitionOut='fadeOut'
    progressBar />
)

export default Messages
