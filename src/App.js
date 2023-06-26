import './App.css';
import {Video, Thumb} from './components/Video'

//component in react is a function that returns UI
function App() {
  let name = 'react-app'
  let classKaNaam = 'App-header'
  return (
    <div>
        Hello World {name}!
        <Video></Video>
        <Thumb></Thumb>
    </div>
  );
}

export default App;
