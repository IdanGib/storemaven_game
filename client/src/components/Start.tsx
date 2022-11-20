import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { Utils } from "../utils";
import Shape, { GameShapes, getRandomShape } from "./Shape";
enum Sides {
  LEFT, RIGHT
}
const sides = [ Sides.LEFT, Sides.RIGHT ];
const getRandomeSide = () => {
  const index = Math.floor(Math.random() * sides.length);
  return sides[index];
}

async function updateUserScore(name: string, score: number) {
  const url = 'http://localhost:4000/score?name=' + name + '&score=' + score;
  const res = await fetch(url);
  return res.json();
}

const Start: FunctionComponent<{ name: string }> = ({ name }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [indicationMessage, setIndicationMessage] = useState('');
  const [userSide, setUserSide] = useState<Sides | undefined>();
  const [indicator, setIndicator] = useState<0 | 1 | 2>(0);
  const initShape = getRandomShape();
  const initSide = getRandomeSide();
  const [state, setState] = useState<{ shape: GameShapes, side: Sides }>({ shape: initShape, side: initSide });

  const updateIndicator = useCallback(async () => {
    setIndicator(1);
    await Utils.wait(2000);
    setIndicator(2);
  }, []);

  useEffect(() => {
    const init = async () => {
      await Utils.wait(2000 + Math.floor(Math.random() * 3000));
      setLoading(false);
      updateIndicator();
    }
    init();
  }, [updateIndicator]);

  useEffect(() => {
    if (!name) {
      return;
    }
    updateUserScore(name, score);
  }, [score, name]);

  const next = () => {
    setIndicationMessage(() => '');
    setMessage(() => '');
    setUserSide(() => undefined);
    setIndicator(() => 0);
    setState(() => ({ side: getRandomeSide(), shape: getRandomShape() }));
    updateIndicator();
  }

  const handleUserInput = (side: Sides) => {
    if (!state) {
      return;
    }
    setUserSide(side);
    if (state?.side === side) {
      setScore(score + 1);
      setMessage('Greate!');
    } else {
      setMessage('Ho no...');
    }
  }

  const handleKeyDown = (key: string) => {
    if (key !== 'a' && key !== 'l' && key !== ' ') {
      return setMessage('Wrong Key');
    }
    if (indicator === 0) {
      return setMessage('Too Soon');
    }
    if(indicator === 2) {
      if (key === ' ') {
        next();
      }
      return setMessage('Too Late');
    }
    if (userSide !== undefined) {
      return;
    }
    if (key === 'a') { handleUserInput(Sides.LEFT) }
    if (key === 'l') { handleUserInput(Sides.RIGHT) }
  }
  if (loading) {
    return <div>Loading...</div>
  }
  setTimeout(() => {
    ref.current?.focus();
  }, 0)
  return <div ref={ref} tabIndex={0} style={{ height: '100%' }}  
    onKeyDown={({ key }) => handleKeyDown(key)}>
    <div style={{ margin: '3rem' }}>User name: {name}</div>
    {
      state && <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '200px' }}>
        <Shape hide={state.side === Sides.RIGHT} shape={state.shape}/>
      </div>
      <div style={{ background: 'black', width: '1px', height: '100px', margin: '16px' }}></div>
      <div style={{ width: '200px' }}>
        <Shape hide={state.side === Sides.LEFT} shape={state.shape}/>
      </div>
      </div>
      
    </div>
    }
    <h2 style={{ opacity: indicator === 1 ? 1 : 0 }}>You can play</h2>
    <div style={{ padding: '1rem' }}>Score: {score}</div>
    <div >{message}</div>
    <div style={{ margin: '1rem', fontStyle: 'italic', fontWeight: 'bold' }}>{indicationMessage}</div>
  </div>
}

export default Start;