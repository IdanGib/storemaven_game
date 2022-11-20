import { FunctionComponent, useState } from "react";
import Start from "./Start";
import Welcome from "./Welcome";

const Game: FunctionComponent = () => {
  const [phase, setPhase] = useState(0);
  const [name, setName] = useState('');
  const handelWelcomeDone = (name: string) => {
    setName(name);
    setPhase(1);
  }
  if (phase === 0) {
    return <Welcome doneText="Start" onDone={handelWelcomeDone}/>
  }
  if (phase === 1) {
    return <Start name={name}/>
  }
  return <>Error</>
}

export default Game;