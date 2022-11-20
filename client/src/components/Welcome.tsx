import { FunctionComponent, useState } from "react";

const Welcome: FunctionComponent<{ onDone: (name: string) => void, doneText?: string }> = ({ onDone, doneText }) => {
  const [value, setValue] = useState('');
  const handleDone = () => {
    value && onDone(value);
  }
  return <div>
    <h1>Welcome</h1>
    <input 
      onKeyDown={({ key }) => {
        if (key === 'Enter') {
          handleDone();
        }
      } }
      value={value} onChange={({ target: { value } }) => setValue(value)} placeholder="Enter name"/>
    <button 
      disabled={!value} 
     
      onClick={handleDone}>{doneText || 'Ok'}</button>
  </div>
}

export default Welcome;