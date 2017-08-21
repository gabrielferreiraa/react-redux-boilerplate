'use strict'

import React from 'react'
import { Table } from 'reactstrap'
import Icon from 'components/icon'
import { Link } from 'react-router-dom'
import style from './css/table-generator'

const generateHeaders = indicators => indicators.map((item, index) => <th key={index}>{Object.values(item)}</th>)

const Edit = ({ router, id }) => (
  <Link
    to={`/${router}/editar/${id}`}>
    <button type='button' title='Editar' className='btn btn-warning btn-sm'>
      <Icon className='icon-pencil' />
    </button>
  </Link>
)

const Delete = () => (
  <button type='button' title='Excluir' className='btn btn-danger btn-sm'>
    <Icon className='icon-trash' />
  </button>
)

const TableGenerator = ({ indicators, data, router, ...props }) => (
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
            {indicators.map((item, index) => <td key={index}>{row[Object.keys(item)]}</td>)}
            <td className={style.action}>
              {props.edit && <Edit router={router} id={row.id} />}
              {props.del && <Delete />}
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

export default TableGenerator
