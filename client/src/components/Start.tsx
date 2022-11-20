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

async function updateUserScore(name: string) {
  const res = await fetch('http://localhost:4000/score/' + name);
  return res.json();
}

const Start: FunctionComponent<{ name: string }> = ({ name }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [indicator, setIndicator] = useState<0 | 1 | 2>(0);
  const [state, setState] = useState<{ shape: GameShapes, side: Sides }>({ side: getRandomeSide(), shape: getRandomShape() });

  const updateIndicator = useCallback(async () => {
    setIndicator(1);
    await Utils.wait(1000);
    setIndicator(2);
  }, []);

  useEffect(() => {
    const updateLoader = async () => {
      await Utils.wait(2000 + Math.floor(Math.random() * 3000));
      setLoading(false);
    }
    updateLoader();
  }, []);

  const next = () => {
    setState({ side: getRandomeSide(), shape: getRandomShape() });
    setMessage('');
  }

  const handleUserInput = (side: Sides) => {

  }

  const handleKeyDown = (key: string) => {
    if (key !== 'a' && key !== 'l') {
      return setMessage('Wrong Key');
    }
    if (indicator === 0) {
      return setMessage('Too Soon');
    }
    if(indicator === 2) {
      return setMessage('Too Late');
    }
    if (key === 'a') { handleUserInput(Sides.LEFT) }
    if (key === 'l') { handleUserInput(Sides.RIGHT) }
  }
  if (loading) {
    return <div>Loading...</div>
  }
  const { shape, side } = state;
  return <div 
    tabIndex={0} style={{ height: '100%' }}  
    onKeyDown={({ key }) => handleKeyDown(key)}>
    <div>User name: {name}</div>
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
    <div>{ indicator === 1  ? 'You can play' : '' }</div>
    <div>{message}</div>
  </div>
}

export default Start;