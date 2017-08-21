'use strict'

import React from 'react'
import ParticlesContainer from 'react-particles-js'
import ParticlesConfig from 'utils/particles-config'

const Particles = () => <ParticlesContainer params={ParticlesConfig} style={{ position: 'absolute' }} />

export default Particles
