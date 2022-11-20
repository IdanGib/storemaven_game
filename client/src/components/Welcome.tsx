import { FunctionComponent, useState } from "react";

const Welcome: FunctionComponent<{ onDone: (name: string) => void, doneText?: string }> = ({ onDone, doneText }) => {
  const [value, setValue] = useState('');
  const handleDone = () => {
    value && onDone(value);
  }
  return <div>
    <h1>Welcome</h1>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <input 
      style={{ padding: '0.5rem 1rem', borderRadius: '2rem',fontSize: '1.5rem',  border: '1px solid', outline: 'none', width: '300px' }}
      onKeyDown={({ key }) => {
        if (key === 'Enter') {
          handleDone();
        }
      } }
      value={value} onChange={({ target: { value } }) => setValue(value)} placeholder="Enter name"/>
    <button 
      disabled={!value} 
      style={{ fontSize: '1.5rem', margin: '1rem', width: '100px', border: 'none',  borderRadius: '2rem' }}
      onClick={handleDone}>{doneText || 'Ok'}</button>
    </div>

  </div>
}

export default Welcome;