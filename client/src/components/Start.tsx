import { FunctionComponent, useEffect, useRef, useState } from "react";
import Display, { DisplayState, Sides } from "./Display";
import { getRandomShape } from "./Shape";
async function updateUserScore(name: string, score: number) {
  const url = 'http://localhost:4000/score?name=' + name + '&score=' + score;
  const res = await fetch(url);
  return res.json();
}

const sides: Sides[] = ['r', 'l'];
const randSide = (): 'r' | 'l' => {
  return sides[Math.floor(Math.random() * 2)]
}

const Start: FunctionComponent<{ name: string }> = ({ name }) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const init = async () => {
      const result = await updateUserScore(name, 0);
      const score = scoreRef.current;
      if (score) {
        score.innerText = result?.score;
      }
    }
    init();
  }, [])
  const handelplay = async (success: boolean, state: DisplayState, msg: string) => {
    const msgDiv = messageRef.current;
    if (msgDiv) {
      msgDiv.innerText = msg;
    }
    if (success) {
      const result = await updateUserScore(name, 1);
      const score = scoreRef.current;
      if (score) {
        score.innerText = result?.score;
      }
    }
    if (state !== 'loading') {
      setProgress(progress + 1);
    }
 
  }
  return <div style={{ margin: 'auto', padding: '2rem' }}>    
    <div style={{ display: 'flex', padding: '1rem' }}>
      <div style={{ marginRight: '2rem',  fontWeight: 'bold' }}>{name}</div>
      <div><span ref={scoreRef}></span> Hits</div>
    </div>
    <Display progress={progress} 
      onPlay={handelplay} 
      shape={getRandomShape()} 
      side={randSide()}/>
    <div style={{ 
        margin: '1rem', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: '1.5rem', 
        height: '64px',
        fontWeight: 'bold'}} >
      <div ref={messageRef}></div>
    </div>
    <div>Progress: {progress}</div>
  </div>
}

export default Start;