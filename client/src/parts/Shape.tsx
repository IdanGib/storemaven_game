import { Image } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { Shapes } from "../utils/constants";
export interface ShapeProps {
  shape: Shapes;
  hide?: boolean;
  size?: number;
}
const Shape: FunctionComponent<ShapeProps> = memo(({ shape, hide, size = 200 }) => {
  return <Image
   src={`/shapes/${shape}.svg`} 
   width={size}
   height={size}
   hidden={hide} />
});
export default Shape;