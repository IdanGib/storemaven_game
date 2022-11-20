import './App.css';
import Shape, { GameShapes } from './components/shape';

function App() {
  return (
    <div className="App">
      <Shape shape={GameShapes.CIRCLE}/>
      <Shape shape={GameShapes.TRIANGLE}/>
      <Shape shape={GameShapes.SQUARE}/>
    </div>
  );
}

export default App;
