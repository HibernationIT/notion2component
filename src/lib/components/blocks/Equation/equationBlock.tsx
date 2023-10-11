import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { Equation } from '../../../types/blockType'
import styles from './equationBlock.module.scss'

export default function EquationBlock({ block }: { block: Equation }) {
  const config = {
    tex2jax: { displayMath: [['$$', '$$']] },
  }

  return (
    <div className={styles.equation}>
      <MathJaxContext config={config} version={2}>
        <MathJax inline>{`$$${block.equation.expression}$$`}</MathJax>
      </MathJaxContext>
    </div>
  )
}
