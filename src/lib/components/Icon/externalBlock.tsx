import { External } from '../../types/blockType'
import { Container } from './externalStyled'

interface IProps {
  external: External
}

export default function ExternalBlock({ external }: IProps) {
  return (
    <Container>
      <div>
        <img src={external.external.url} alt="icon" />
      </div>
    </Container>
  )
}
