'use strict'

import React from 'react'
import { Table } from 'reactstrap'
import Icon from 'components/Icon'
import { Link } from 'react-router-dom'
import style from './css/TableGenerator'

const generateHeaders = indicators => indicators.map((item, index) => <th key={index}>{Object.values(item)}</th>)
const generateRows = (row, indicators) => indicators.map((item, index) => <td key={index}>{row[Object.keys(item)]}</td>)

const TableGenerator = ({ indicators, data, router }) => (
  <div>
    <Table hover className={style.dataTable}>
      <thead>
        <tr>
          {generateHeaders(indicators)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {generateRows(row, indicators)}
            <td className={style.action}>
              <Link
                to={`/${router}/editar/2`}>
                <button
                  type='button'
                  className='btn btn-warning btn-sm'>
                  <Icon className='icon-pencil' />
                </button>
              </Link>
              <button
                type='button'
                className='btn btn-danger btn-sm'>
                <Icon className='icon-trash' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <thead>
        <tr>
          {generateHeaders(indicators)}
        </tr>
      </thead>
    </Table>
  </div>
)

export default TableGenerator
