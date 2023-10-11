import { Table, TableRow } from '../../../types/blockType'
import RichTexts from '../RichText/richTexts'
import styles from './tableBlock.module.scss'

export default function TableBlock({ block }: { block: Table }) {
  return (
    <table className={styles.table}>
      <tbody>
        {block.children &&
          block.children.map((child, idx) => {
            const row = child as TableRow
            return (
              <tr key={idx}>
                {row.table_row.cells.map((r, i) => (
                  <td key={`${idx}${i}`}>
                    <RichTexts richTexts={r} />
                  </td>
                ))}
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
