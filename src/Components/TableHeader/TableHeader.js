import React from 'react'
import './TableHeader.scss'


const TableHeader = () => {
    return (
        <thead className="table__thead">
            <tr>
              <th></th>
              <th></th>
              <th className="table__header-description">Product Name</th>
              <th className="table__header-description">Unit Price</th>
              <th className="table__header-description">Qty</th>
            </tr>
          </thead>
    )
}

export default TableHeader;
