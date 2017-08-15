'use strict'

import React, { Component } from 'react'
import { Table } from 'reactstrap'

class TableGenerator extends Component {
  constructor () {
    super()
  }

  generateHeaders (indicators) {
    const header = []
    for (let i in indicators) {
      header.push(<th key={i}>{indicators[i]}</th>)
    }

    return header
  }

  generateRows (row) {
    const rows = []
    for (let i in row) {
      rows.push(<td>{row[i]}</td>)
    }

    return rows
  }

  render () {
    const { indicators, data, router } = this.props

    return (
      <div>
        <Table>
          <thead>
            <tr>
              {this.generateHeaders(indicators)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  {this.generateRows(row)}
                </tr>
              )
            })}
          </tbody>
          <thead>
            <tr>
              {this.generateHeaders(indicators)}
            </tr>
          </thead>
        </Table>
      </div>
    )
  }
}

export default TableGenerator
