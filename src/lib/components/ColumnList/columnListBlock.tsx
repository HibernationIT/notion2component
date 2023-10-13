import { Column, ColumnList } from '../../types/blockType'
import ColumnBlock from '../Column/columnBlock'
import { Container } from './styled'

export default function ColumnListBlock({ block }: { block: ColumnList }) {
  return (
    <Container>
      {block.children &&
        block.children.map((child, idx) => {
          const column = child as Column
          return <ColumnBlock key={idx} block={column} />
        })}
    </Container>
  )
}
