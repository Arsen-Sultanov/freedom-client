import { Table as RSTable } from 'rsuite'

import { mockData, headers } from '../../constants'

export const Table = () => {
  return (
    <>
      <RSTable height={400} data={mockData}>
        {headers.map(({ id, label, dataKey, size }) => (
          <RSTable.Column key={id} flexGrow={size}>
            <RSTable.HeaderCell>{label}</RSTable.HeaderCell>
            <RSTable.Cell dataKey={dataKey} />
          </RSTable.Column>
        ))}
      </RSTable>
    </>
  )
}
