import { Image, Text } from "@chakra-ui/react";
import { FunctionComponent, memo } from "react";
import { Shapes } from "../utils/constants";
export interface ShapeProps {
  shape: Shapes;
  hide?: boolean;
}
const Shape: FunctionComponent<ShapeProps> = memo(({ shape, hide}) => {
  return <Text hidden={hide}>{shape}</Text>
});
export default Shape;