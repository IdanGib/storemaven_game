import { FunctionComponent } from "react"
export enum GameShapes {
  CIRCLE = 'circle',
  SQUARE = 'square',
  TRIANGLE = 'triangle'
}
const shapes = Object.values(GameShapes);
function getRandomShape() {
  return shapes[Math.floor(Math.random() * shapes.length)];
}
export {getRandomShape};
const Shape: FunctionComponent<{ shape?: GameShapes, hide?: boolean }> = ({ shape, hide }) => {
  const _shape = shape || getRandomShape();
  if (hide) {
    return <></>
  }
  return <img src={`/shapes/${_shape}.svg`} alt='' width={100} height={100}/>
}
export default Shape;