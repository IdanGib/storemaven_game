import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Shapes } from "../utils/constants";
import Shape from "./Shape";

export interface DisplaySideProps {
  size: number;
  hideContent: boolean;
  shape: Shapes;
}
const DisplaySide: FunctionComponent<DisplaySideProps> = ({ size, hideContent, shape }) => {
  return  <Flex 
    height='100%' 
    justifyContent='center'
    alignItems='center'
    width={`${size}px`}>
    <Shape 
      shape={shape} 
      size={size}
      hide={hideContent}/>
  </Flex>
}
export default DisplaySide;