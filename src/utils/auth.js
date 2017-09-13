'use strict'

/**
 * Save token on localStorage
 * @param token
 */
export const setToken = token => {
  if (!window.localStorage) {
    throw new Error('No storage support!');
  }

  window.localStorage.setItem('token', token)
}

/**
 * Return token
 */
export const getToken = () => window.localStorage.getItem('token') || false

/**
 * Remove token
 */
export const removeToken = () => window.localStorage.removeItem('token')
