import { FunctionComponent, useState } from "react";

const Welcome: FunctionComponent<{ onDone: (name: string) => void, doneText?: string }> = ({ onDone, doneText }) => {
  const [value, setValue] = useState('');
  return <div>
    <h1>Welcome</h1>
    <input value={value} onChange={({ target: { value } }) => setValue(value)} placeholder="Enter name"/>
    <button disabled={!value} onClick={() => onDone(value)}>{doneText || 'Ok'}</button>
  </div>
}

export default Welcome;