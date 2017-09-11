'use strict'

import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Icon from 'components/icon'
import { Link } from 'react-router-dom'
import style from './css/table-generator'

class TableGenerator extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const generateHeaders = indicators => indicators.map((item, index) => <th key={index}>{Object.values(item)}</th>)

    const Edit = ({ router, id }) => (
      <Link
        to={`/${router}/editar/${id}`}>
        <button type='button' title='Editar' className='btn btn-warning btn-sm'>
          <Icon className='fa fa-pencil' />
        </button>
      </Link>
    )

    const Delete = () => (
      <button type='button' title='Excluir' className='btn btn-danger btn-sm'>
        <Icon className='fa fa-trash' />
      </button>
    )

    const { indicators, data, router, ...props } = this.props

    return (
      <div>
        <Table hover className={style.dataTable}>
          <thead>
            <tr>
              {generateHeaders(indicators)}
              <th className={style.action}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {indicators.map((item, index) => {
                  if (row[Object.keys(item)].type) {
                    switch (row[Object.keys(item)].type) {
                      case 'picture':
                        return <td key={index}><img src={row[Object.keys(item)].value} className={style.imageField} /></td>
                      default:
                        return <td key={index}>{row[Object.keys(item)].value}</td>
                    }
                  }

                  return <td key={index}>{row[Object.keys(item)]}</td>
                })}
                <td className={style.action}>
                  {props.edit && <Edit router={router} id={row.id} />}
                  {props.del && <Delete />}
                  {row.actions && row.actions()}
                </td>
              </tr>
          ))}
          </tbody>
          <thead>
            <tr>
              {generateHeaders(indicators)}
              <th className={style.action}>Ações</th>
            </tr>
          </thead>
        </Table>
      </div>
    )
  }
}

export default TableGenerator
