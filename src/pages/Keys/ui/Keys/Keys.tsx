import { Button } from 'rsuite'
import AddOutlineIcon from '@rsuite/icons/AddOutline'

import { Table } from '../Table'

import styles from './keys.module.css'

export const Keys = () => {
  return (
    <div className={styles.keys}>
      <Button appearance='primary' endIcon={<AddOutlineIcon />}>
        Добавить ключ
      </Button>
      <Table />
    </div>
  )
}
