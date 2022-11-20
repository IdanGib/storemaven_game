import { FunctionComponent } from "react"
export enum GameShapes {
  CIRCLE = 'circle',
  SQUARE = 'square',
  TRIANGLE = 'triangle'
}
const Shape: FunctionComponent<{ shape: GameShapes }> = ({ shape }) => {
  return <div>
      <img src={`/shapes/${shape}.svg`} alt='' width={100} height={100}/>
  </div>
}
export default Shape;