import './App.css';
import IMAGE from './react.png';
import { Counter } from './components/Counter';

export default function App(){
  return ( 
    <>
      <h1>Test React enviroment setup</h1>
      <img src={IMAGE} alt='React logo' width={300} height={300} />
      <Counter />
    </>
  )
}