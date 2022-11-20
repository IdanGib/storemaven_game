import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Utils } from "../utils";
import Shape, { GameShapes, getRandomShape } from "./Shape";
enum Sides {
  LEFT, RIGHT
}
const sides: Sides[] = Object.values(Sides) as Sides[];
const getRandomeSide = () => {
  return [Sides.LEFT, Sides.RIGHT][Math.floor(Math.random() * sides.length)];
}

const Start: FunctionComponent<{ name: string }> = ({ name }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [indicator, setIndicator] = useState<0 | 1 | 2>(0);
  const [state, setState] = useState<{ shape: GameShapes, side: Sides }>({ side: getRandomeSide(), shape: getRandomShape() });

  
  useEffect(() => {
    const updateLoader = async () => {
      await Utils.wait(2000 + Math.floor(Math.random() * 3000));
      setLoading(false);
    }
    updateLoader();
  }, []);

  const next = () => {
    setState({ side: getRandomeSide(), shape: getRandomShape() });
  }

  const handleKeyDown = (key: string) => {

  }
  if (loading) {
    return <div>Loading...</div>
  }
  const { shape, side } = state;
  return <div 
    tabIndex={0} style={{ height: '100%' }}  
    onKeyDown={({ key }) => handleKeyDown(key)}>
    <div>User name: {name}</div>
    <div>{ indicator === 1 ? 'You can play' : ''}</div>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '200px' }}>
        <Shape hide={side === Sides.LEFT} shape={shape}/>
      </div>
      <div style={{ background: 'black', width: '1px', height: '100px', margin: '16px' }}></div>
      <div style={{ width: '200px' }}>
        <Shape hide={side === Sides.RIGHT} shape={shape}/>
      </div>
      </div>
      
    </div>
    <div>{message}</div>
  </div>
}

export default Start;