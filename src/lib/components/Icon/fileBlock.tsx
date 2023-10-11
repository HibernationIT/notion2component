import { File } from '../../types/blockType'
import styles from './fileBlock.module.scss'

interface IProps {
  file: File
}

export default function FileBlock({ file }: IProps) {
  return (
    <div className={styles.file}>
      <div>
        <img src={file.file.url} alt="icon" />
      </div>
    </div>
  )
}
