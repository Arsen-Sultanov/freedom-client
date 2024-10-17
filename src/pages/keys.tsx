import { Table, Button } from 'rsuite'
import AddOutlineIcon from '@rsuite/icons/AddOutline'

const data = [
  {
    name: 'Ключ #1',
    protocol: 'WireGuard',
    status: 'Статус',
    actions: 'Действия',
  },
  {
    name: 'Ключ #2',
    protocol: 'WireGuard',
    status: 'Статус',
    actions: 'Действия',
  },
  {
    name: 'Ключ #3',
    protocol: 'WireGuard',
    status: 'Статус',
    actions: 'Действия',
  },
  {
    name: 'Ключ #4',
    protocol: 'WireGuard',
    status: 'Статус',
    actions: 'Действия',
  },
]

export const Keys = () => {
  return (
    <>
      <Button appearance='primary' endIcon={<AddOutlineIcon />}>
        Добавить ключ
      </Button>
      <Table height={400} data={data}>
        <Table.Column flexGrow={1}>
          <Table.HeaderCell>Название</Table.HeaderCell>
          <Table.Cell dataKey='name' />
        </Table.Column>

        <Table.Column flexGrow={1}>
          <Table.HeaderCell>Протокол</Table.HeaderCell>
          <Table.Cell dataKey='protocol' />
        </Table.Column>

        <Table.Column flexGrow={1}>
          <Table.HeaderCell>Статус</Table.HeaderCell>
          <Table.Cell dataKey='status' />
        </Table.Column>

        <Table.Column flexGrow={0.5}>
          <Table.HeaderCell>Действия</Table.HeaderCell>
          <Table.Cell dataKey='actions' />
        </Table.Column>
      </Table>
    </>
  )
}
