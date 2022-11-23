import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Shapes } from "../utils/constants";

export interface DisplaySide {
  size: number;
  hideContent: boolean;
  shape: Shapes;
}
const DisplaySide: FunctionComponent<DisplaySide> = ({ size }) => {
  return  <Flex height='100%' width={`${size}px`}>
    
  </Flex>
}
export default DisplaySide;