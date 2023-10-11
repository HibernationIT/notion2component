import { External } from '../../types/blockType'
import styles from './externalBlock.module.scss'

interface IProps {
  external: External
}

export default function ExternalBlock({ external }: IProps) {
  return (
    <div className={styles.external}>
      <div>
        <img src={external.external.url} alt="icon" />
      </div>
    </div>
  )
}
