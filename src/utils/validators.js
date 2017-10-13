'use strict'

export const required = value => (value ? undefined : 'O campo :name: é obrigatório')
export const number = value => value && isNaN(Number(value)) ? 'O campo :name: precisa ser numérico' : undefined
export const minValue = min => value => value && value < min ? `:name: deve ser maior que ${min}` : undefined
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'O campo :name: é inválido' : undefined
