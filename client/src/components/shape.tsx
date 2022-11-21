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
const Shape: FunctionComponent<{ shape?: GameShapes, hide?: boolean, size?: number }> = ({ shape, hide, size = 100 }) => {
  const _shape = shape || getRandomShape();
  return <img style={{ opacity: hide ? 0 : 1 }} src={`/shapes/${_shape}.svg`} alt='' width={size} height={size}/>
}
export default Shape;