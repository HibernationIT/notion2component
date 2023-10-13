import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { Equation } from '../../types/blockType'
import { Container } from './styled'

export default function EquationBlock({ block }: { block: Equation }) {
  const config = {
    tex2jax: { displayMath: [['$$', '$$']] },
  }

  return (
    <Container>
      <MathJaxContext config={config} version={2}>
        <MathJax inline>{`$$${block.equation.expression}$$`}</MathJax>
      </MathJaxContext>
    </Container>
  )
}
