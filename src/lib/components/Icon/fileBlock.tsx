import { File } from '../../BlockType'
import { Container } from './fileStyled'

interface IProps {
  file: File
}

export default function FileBlock({ file }: IProps) {
  return (
    <Container>
      <div>
        <img src={file.file.url} alt="icon" />
      </div>
    </Container>
  )
}
