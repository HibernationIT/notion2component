import { Column, ColumnList } from '../../types/blockType'
import ColumnBlock from '../Column/columnBlock'
import styles from './columnListBlock.module.scss'

export default function ColumnListBlock({ block }: { block: ColumnList }) {
  return (
    <div className={styles.columnList}>
      {block.children &&
        block.children.map((child, idx) => {
          const column = child as Column
          return <ColumnBlock key={idx} block={column} />
        })}
    </div>
  )
}
