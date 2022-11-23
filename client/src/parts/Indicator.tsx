import { Badge } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export interface IndicatorProps {
  active: boolean;
  activeText?: string;
  inactiveText?: string;
}
const Indicator: FunctionComponent<IndicatorProps> = ({ 
  active, 
  activeText = 'Active', 
  inactiveText = ''
}) => {
  if (!inactiveText && !active) {
    return <></>
  }
  return <Badge 
    px='4'
    py='1'
    textTransform='capitalize'
    borderRadius='full'
    colorScheme='green'
    >{active ? activeText : inactiveText}</Badge>
}

export default Indicator;