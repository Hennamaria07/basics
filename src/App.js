import './App.css';
import DarkMode from './components/DarkMode';
import Header from './components/Header';
import Text from './components/Text';

function App() {
  return ( //jsX starting
  <>
  <Header title='Text Utils' about='About'/>
  <Text />
  <DarkMode />
  {/* <Text heading='Enter Your Text Here' /> */}
  {/* <Header /> */}
  </>
    //jsX ended
  );
}

export default App;
