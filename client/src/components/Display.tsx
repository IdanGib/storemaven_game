import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import Shape, { GameShapes } from "./Shape";
export type DisplayState = 'loading' | 'active' | 'finish';
export type Sides = 'r' | 'l';
const getIndicatorStyleFor = (state: DisplayState): React.CSSProperties => {
  if (state === 'active') {
    return {
      boxShadow: `0 0 24px green`
    }
  }
  if (state ===  'finish') {
    return {
      boxShadow: `0 0 0 2px red`
    };
  }
  return {}
}
const Display: FunctionComponent<{ progress: number, 
  onPlay: (success: boolean, state: DisplayState,message: string) => void, 
  shape: GameShapes, side: 'l' | 'r' }> = ({
  onPlay, shape, side, progress
}) => {
  const [state, setState] = useState<DisplayState>('loading');
  const ref = useRef<HTMLDivElement>(null);
  const handelInput = useCallback((key: string) => {
    if (state === 'loading') {
      onPlay(false, state, 'Too soon');
    }
    if (state === 'active') {
      if (!['a', 'l'].includes(key)) {
        onPlay(false, state, 'Wrong Key');
      } else if ((side === 'l' && key === 'a') ||
      (side === 'r' && key === 'l')) {
        onPlay(true, state, 'success');
      } else {
        onPlay(false, state, '');
      }
    }
    if (state === 'finish') {
      onPlay(false, state, 'Too Late');
    }
  }, [onPlay, side, state]);

  useEffect(() => {
    let t1: any;
    let t2: any;
    t2 && clearTimeout(t2);
    t1 && clearTimeout(t1);
    const time = 2000 + Math.floor(Math.random() * 3000);
    setState('loading');
    t1 = setTimeout(() => {
      onPlay(false, 'loading', '');
      setState('active');
      t2 = setTimeout(() => {
        setState('finish');
      }, 1000);
    }, time);
    ref.current?.focus();
    return () => {
      t2 && clearTimeout(t2);
      t1 && clearTimeout(t1);
    }
  }, [progress, onPlay]);
  return <div  style={{ 
      outline: 'none', height: '400px', 
      display: 'flex',
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      alignItems: 'center' }} 
      tabIndex={-1} ref={ref} 
      onKeyDown={({key}) => handelInput(key)}>
   { state === 'loading' ? <h1>Loading...</h1> : <div>
      <div style={{ 
        display: 'flex', justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2rem',
        borderRadius: '16px', 
        transition: 'box-shadow 0.2s',
        ...getIndicatorStyleFor(state)
         }}>
        <div style={{ width: '300px' }}>
          <Shape size={200} hide={side === 'r'} shape={shape}/>
        </div>
        <div style={{ background: 'black', width: '1px', height: '100px', margin: '16px' }}></div>
        <div style={{ width: '300px' }}>
          <Shape size={200} hide={side === 'l'} shape={shape}/>
        </div>
      </div>
      <div style={{ 
        padding: '1rem', 
        marginTop: '16px', 
        fontWeight: 'bold', 
        height: '36px', 
        color: 'green' }}>{ state === 'active' ? 'Choose Side!' : '' }</div>
    </div>}
  </div>
};

export default Display;