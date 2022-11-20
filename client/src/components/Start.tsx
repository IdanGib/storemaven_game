import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Utils } from "../utils";
import Shape, { GameShapes, getRandomShape } from "./Shape";
const getRandomeSide = () => {
  return Math.floor(Math.random() * 2);
}
const Start: FunctionComponent<{ name: string }> = ({ name }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [indicator, setIndicator] = useState(0);
  const [side, setSide] = useState(getRandomeSide());
  const [shape, setShape] = useState<GameShapes>(getRandomShape());
  useEffect(() => {
    const updateLoader = async () => {
      await Utils.wait(2000);
      setLoading(false);
    }
    updateLoader();
  }, []);
  const handleKeyDown = (key: string) => {
    if (key === 'a') {
      leftPress();
    } else if (key === 'l') {
      rightPress();
    }else {
      setMessage('Wrong Key');
    }
  }
  const leftPress = () => {
    console.log('left');
    setMessage('');
  }
  const rightPress = () => {
    console.log('right');
    setMessage('');
  }
  const handelShape = (shape?: GameShapes) => {
    
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return <div 
    tabIndex={0} style={{ height: '100%' }}  
    onKeyDown={({ key }) => handleKeyDown(key)}>
    <div>User name: {name}</div>
    <div>{ indicator === 1 ? 'You can play' : ''}</div>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '200px' }}>
        <Shape hide={side === 0} shape={shape}/>
      </div>
      <div style={{ background: 'black', width: '1px', height: '100px', margin: '16px' }}></div>
      <div style={{ width: '200px' }}>
        <Shape hide={side === 1} shape={shape}/>
      </div>
      </div>

    </div>
    <div>{message}</div>
  </div>
}

export default Start;